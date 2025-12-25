import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
import style from './NavBar.module.scss'
interface Props {
	className?: string
}

export const NavBar: React.FC<Props> = ({ className }) => {
	return (
		<div className={clsx(className, `${style.NavBar}`)}>
			<nav className={style.navContainer}>
				<ul className={style.navList}>
					<li className={style.listItem}>
						Учебный центр
						<FontAwesomeIcon icon={faArrowDown} size='xs' />
					</li>
					<li className={style.listItem}>
						Стрелковый клуб
						<FontAwesomeIcon icon={faArrowDown} size='xs' />
					</li>
					<li className={style.listItem}>
						Сведения об образовательной организации
						<FontAwesomeIcon icon={faArrowDown} size='xs' />
					</li>
				</ul>
			</nav>
		</div>
	)
}
