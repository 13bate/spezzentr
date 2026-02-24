import { faAngleDown, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
import { useState } from 'react'
import { Link, useLocation } from 'react-router'
import style from './NavBar.module.scss'
import { shootingRange, trainingCenter } from '../../shared/utils/model'

interface Props {
	className?: string
	onItemClick?: () => void // Добавляем проп для закрытия меню
}

export const NavBar: React.FC<Props> = ({ className, onItemClick }) => {
	const [cardHoveredTc, setCardHoveredTc] = useState(false)
	const [cardHoveredSr, setCardHoveredSr] = useState(false)
	const location = useLocation()

	const isTcActive = () => {
		return trainingCenter.some(item => location.pathname === item.href)
	}

	const isSrActive = () => {
		return shootingRange.some(item => location.pathname === item.href)
	}

	const isEducationActive = () => {
		return location.pathname.startsWith('/education')
	}

	// Функция для обработки клика по ссылке
	const handleLinkClick = () => {
		if (onItemClick) {
			onItemClick()
		}
	}

	return (
		<div className={clsx(className, style.NavBar)}>
			<nav className={style.navContainer}>
				<ul className={style.navList}>
					<div className={style.navLeftSide}>
						<li
							className={clsx(
								style.listItem,
								isTcActive() && style.active
							)}
							onMouseEnter={() => setCardHoveredTc(true)}
							onMouseLeave={() => setCardHoveredTc(false)}
						>
							Учебный центр
							<FontAwesomeIcon icon={faAngleDown} className={style.arrowIcon} />
							{cardHoveredTc && (
								<div className={style.DropDownListContainer}>
									{trainingCenter.map(tcItem => (
										<div key={tcItem.label} className={style.DropDownListItem}>
											<Link
												className={clsx(
													style.DropDownListItemLink,
													location.pathname === tcItem.href && style.activeLink
												)}
												to={tcItem.href}
												onClick={handleLinkClick} // Добавляем обработчик
											>
												{tcItem.label}
											</Link>
										</div>
									))}
								</div>
							)}
						</li>

						<li
							className={clsx(
								style.listItem,
								isSrActive() && style.active
							)}
							onMouseEnter={() => setCardHoveredSr(true)}
							onMouseLeave={() => setCardHoveredSr(false)}
						>
							Стрелковый клуб
							<FontAwesomeIcon icon={faAngleDown} className={style.arrowIcon} />
							{cardHoveredSr && (
								<div className={style.DropDownListContainer}>
									{shootingRange.map(srItem => (
										<div key={srItem.label} className={style.DropDownListItem}>
											<Link
												className={clsx(
													style.DropDownListItemLink,
													location.pathname === srItem.href && style.activeLink
												)}
												to={srItem.href}
												onClick={handleLinkClick} // Добавляем обработчик
											>
												{srItem.label}
											</Link>
										</div>
									))}
								</div>
							)}
						</li>
					</div>

					<Link to="/education/" className={style.link} onClick={handleLinkClick}> {/* Добавляем обработчик */}
						<li className={clsx(
							style.listItem,
							isEducationActive() && style.active
						)}>
							Сведения об образовательной организации
							<FontAwesomeIcon
								icon={faChevronRight}
								className={style.arrowIcon}
							/>
						</li>
					</Link>
				</ul>
			</nav>
		</div>
	)
}
