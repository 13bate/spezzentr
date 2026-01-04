import { faAngleDown, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
import { useState } from 'react'
import { Link } from 'react-router'
import style from './NavBar.module.scss'
import { shootingRange, trainingCenter } from '../../utils/model/'
interface Props {
	className?: string
}

export const NavBar: React.FC<Props> = ({ className }) => {
	const [cardHoveredTc, setCardHoveredTc] = useState(false)
	const [cardHoveredSr, setCardHoveredSr] = useState(false)
	return (
		<div className={clsx(className, `${style.NavBar}`)}>
			<nav className={style.navContainer}>
				<ul className={style.navList}>
					<div className={style.navLeftSide}>
						<li
							className={style.listItem}
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
												className={style.DropDownListItemLink}
												to={tcItem.href}
											>
												{tcItem.label}
											</Link>
										</div>
									))}
								</div>
							)}
						</li>
						<li
							className={style.listItem}
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
												className={style.DropDownListItemLink}
												to={srItem.href}
											>
												{srItem.label}
											</Link>
										</div>
									))}
								</div>
							)}
						</li>
					</div>
					<li className={style.listItem}>
						Сведения об образовательной организации
						<FontAwesomeIcon
							icon={faChevronRight}
							className={style.arrowIcon}
						/>
					</li>
				</ul>
			</nav>
		</div>
	)
}
