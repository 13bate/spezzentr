import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
import { useState } from 'react'
import { Link, useLocation } from 'react-router'
import style from './NavBar.module.scss'
import { shootingRange, trainingCenter } from '../../shared/utils/model'

interface Props {
	className?: string
	onItemClick?: () => void
}

export const NavBar: React.FC<Props> = ({ className, onItemClick }) => {
	const [cardHoveredTc, setCardHoveredTc] = useState(false)
	const [cardHoveredSr, setCardHoveredSr] = useState(false)
	const location = useLocation()

	const isTcActive = () => trainingCenter.some(item => location.pathname === item.href)
	const isSrActive = () => shootingRange.some(item => location.pathname === item.href)
	const isActive = (path: string) => location.pathname.startsWith(path)

	const handleLinkClick = () => onItemClick?.()

	return (
		<div className={clsx(className, style.NavBar)}>
			<nav className={style.navContainer}>
				<ul className={style.navList}>

					{/* Dropdown: Учебный центр */}
					<li
						className={clsx(style.listItem, isTcActive() && style.active)}
						onMouseEnter={() => setCardHoveredTc(true)}
						onMouseLeave={() => setCardHoveredTc(false)}
					>
						<span className={style.itemInner}>
							Учебный центр
							<FontAwesomeIcon
								icon={faAngleDown}
								className={clsx(style.arrowIcon, cardHoveredTc && style.arrowOpen)}
							/>
						</span>
						{cardHoveredTc && (
							<div className={style.DropDownListContainer}>
								<div className={style.dropdownAccent} />
								{trainingCenter.map(tcItem => (
									<div key={tcItem.label} className={style.DropDownListItem}>
										<Link
											className={clsx(
												style.DropDownListItemLink,
												location.pathname === tcItem.href && style.activeLink
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
						className={clsx(style.listItem, isSrActive() && style.active)}
						onMouseEnter={() => setCardHoveredSr(true)}
						onMouseLeave={() => setCardHoveredSr(false)}
					>
						<span className={style.itemInner}>
							Стрелковый клуб
							<FontAwesomeIcon
								icon={faAngleDown}
								className={clsx(style.arrowIcon, cardHoveredSr && style.arrowOpen)}
							/>
						</span>
						{cardHoveredSr && (
							<div className={style.DropDownListContainer}>
								<div className={style.dropdownAccent} />
								{shootingRange.map(srItem => (
									<div key={srItem.label} className={style.DropDownListItem}>
										<Link
											className={clsx(
												style.DropDownListItemLink,
												location.pathname === srItem.href && style.activeLink
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

					<li className={style.divider} aria-hidden="true" />

					{/* Direct links */}
					<li className={clsx(style.listItem, isActive('/trainning/drones') && style.active)}>
						<Link to="/training/drones" className={style.plainLink} onClick={handleLinkClick}>
							<span className={style.itemInner}>Центр БПЛА</span>
						</Link>
					</li>

					<li className={clsx(style.listItem, isActive('/trainning/tacmed') && style.active)}>
						<Link to="/training/tacmed/" className={style.plainLink} onClick={handleLinkClick}>
							<span className={style.itemInner}>Тактическая медицина</span>
						</Link>
					</li>

					<li className={clsx(style.listItem, style.listItemWide, isActive('/education') && style.active)}>
						<Link to="/education/" className={style.plainLink} onClick={handleLinkClick}>
							<span className={style.itemInner}>Сведения об организации</span>
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	)
}
