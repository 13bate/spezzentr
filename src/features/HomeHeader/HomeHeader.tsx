import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
import toast, { Toaster } from 'react-hot-toast'
import { Link } from 'react-router'
import backgroundImage from '../../assets/spezzenter/freepik__the-style-is-candid-image-photography-with-natural__44605.jpg'
import { NavBar } from '../NavBar'
import styles from './HomeHeader.module.scss'
interface Props {
	className?: string
}

export const HomeHeader: React.FC<Props> = ({ className }) => {

	return (
		<header className={clsx(`${styles.header}`, className)}>
			<img src={backgroundImage} alt='' className={styles.backgroundImage} />
			<div className={styles.backgroundElement}></div>
			<Toaster
				toastOptions={{
					className: '',
					style: {
						background: '#545245',
						padding: '16px',
						color: '#E8E9DD',
					},
				}}
			/>
			<div className={styles.headerContainer}>
				<div className={styles.phoneBlock}>
					<FontAwesomeIcon icon={faPhone} />
					<span>(4832) 32-02-01</span>
				</div>
				<div>
					<h1 className={styles.textLogo}>
						<Link to={'/'}>СПЕЦЦЕНТР</Link>
					</h1>
					<div className={styles.logoUnderLine}></div>
				</div>
				<div className={styles.headerInfo}>
					г. Брянск, ул. Институтская, д. 15 корп. 3
				</div>
			</div>
			<NavBar />
		</header>
	)
}
