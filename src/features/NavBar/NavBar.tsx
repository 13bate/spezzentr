import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router'
import { shootingRange, trainingCenter } from '../../shared/utils/model'
import style from './NavBar.module.scss'
import type { TListId } from './types'

interface Props {
	className?: string
	onItemClick?: () => void
}

export const NavBar: React.FC<Props> = ({ className, onItemClick }) => {

	const [isTcOpen, setIsTcOpen] = useState(false);
	const [isSrOpen, setIsSrOpen] = useState(false);



	const location = useLocation()

	const isTcActive = () =>
		trainingCenter.some(item => location.pathname === item.href)
	const isSrActive = () =>
		shootingRange.some(item => location.pathname === item.href)
	const isActive = (path: string) => location.pathname.startsWith(path)

	const handleLinkClick = () => onItemClick?.()


	const listStateToggle = (listId: TListId) => {
		if (listId == "tc") {
			setIsTcOpen(!isTcOpen)
		}
		else setIsSrOpen(!isSrOpen)
	}

	const tcRef = useRef<HTMLLIElement>(null);
	const srRef = useRef<HTMLLIElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (tcRef.current && !tcRef.current.contains(event.target as Node)) {
				setIsTcOpen(false)
			}

			if (srRef.current && !srRef.current.contains(event.target as Node)) {
				setIsSrOpen(false);
			}

		}


		document.addEventListener("pointerdown", handleClickOutside);

		return () => {
			window.removeEventListener("click", handleClickOutside)
		}
	}, [])


	return (
		<div className={clsx(className, style.NavBar)}>
			<nav className={style.navContainer}>
				<ul className={style.navList}>
					{/* Dropdown: Учебный центр */}
					<li
						ref={tcRef}
						className={clsx(style.listItem, isTcActive() && style.active)}
						onClick={() => listStateToggle("tc")}
					>
						<span className={style.itemInner}>
							Учебный центр
							<FontAwesomeIcon
								icon={faAngleDown}
								className={clsx(
									style.arrowIcon,
									isTcOpen && style.arrowOpen,
								)}
							/>
						</span>
						{isTcOpen && (
							<div className={style.DropDownListContainer}>
								<div className={style.dropdownAccent} />
								{trainingCenter.map(tcItem => (
									<div key={tcItem.label} className={style.DropDownListItem}>
										<Link
											className={clsx(
												style.DropDownListItemLink,
												location.pathname === tcItem.href && style.activeLink,
											)}
											to={tcItem.href}
											onClick={handleLinkClick}
										>
											<span className={style.dropdownDot} />
											{tcItem.label}
										</Link>
									</div>
								))}
							</div>
						)}
					</li>

					{/* Dropdown: Стрелковый клуб */}
					<li
						ref={srRef}
						className={clsx(style.listItem, isSrActive() && style.active)}
						onClick={() => listStateToggle("sr")}
					>
						<span className={style.itemInner}>
							Стрелковый клуб
							<FontAwesomeIcon
								icon={faAngleDown}
								className={clsx(
									style.arrowIcon,
									isSrOpen && style.arrowOpen,
								)}
							/>
						</span>
						{isSrOpen && (
							<div className={style.DropDownListContainer}>
								<div className={style.dropdownAccent} />
								{shootingRange.map(srItem => (
									<div key={srItem.label} className={style.DropDownListItem}>
										<Link
											className={clsx(
												style.DropDownListItemLink,
												location.pathname === srItem.href && style.activeLink,
											)}
											to={srItem.href}
											onClick={handleLinkClick}
										>
											<span className={style.dropdownDot} />
											{srItem.label}
										</Link>
									</div>
								))}
							</div>
						)}
					</li>

					<li className={style.divider} aria-hidden='true' />

					{/* Direct links */}
					<li
						className={clsx(
							style.listItem,
							isActive('/trainning/drones') && style.active,
						)}
					>
						<Link
							to='/training/drones'
							className={style.plainLink}
							onClick={handleLinkClick}
						>
							<span className={style.itemInner}>Центр беспилотной авиации</span>
						</Link>
					</li>

					<li
						className={clsx(
							style.listItem,
							isActive('/trainning/tac-med') && style.active,
						)}
					>
						<Link
							to='/training/tac-med/'
							className={style.plainLink}
							onClick={handleLinkClick}
						>
							<span className={style.itemInner}>Тактическая медицина</span>
						</Link>
					</li>

					<li
						className={clsx(
							style.listItem,
							style.listItemWide,
							isActive('/education') && style.active,
						)}
					>
						<Link
							to='/education/'
							className={style.plainLink}
							onClick={handleLinkClick}
						>
							<span className={style.itemInner}>Сведения об организации</span>
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	)
}
