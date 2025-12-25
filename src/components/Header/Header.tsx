import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
import toast, { Toaster } from 'react-hot-toast'
import backgroundImage from '../../assets/spezzenter/freepik__the-style-is-candid-image-photography-with-natural__44605.jpg'
import { NavBar } from '../NavBar'
import styles from './Header.module.scss'
interface Props {
	className?: string
}

export const Header: React.FC<Props> = ({ className }) => {
	const phoneNumber = '(4832)320201'

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(phoneNumber)
			toast.success('Номер скопирован')
		} catch (err) {
			toast.error('Ошибка копирования')
			console.log(err)
		}
	}
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
				<div className={styles.phoneBlock} onClick={handleCopy}>
					<FontAwesomeIcon icon={faPhone} />
					<span>(4832) 32-02-01</span>
				</div>
				<div>
					<h1 className={styles.textLogo}>СПЕЦЦЕНТР</h1>
					<div className={styles.logoUnderLine}></div>
				</div>
				<div>
					<span className={styles.headerInfo}>
						г. Брянск, ул. Институтская, д. 15 корп. 3
					</span>
				</div>
			</div>
			<NavBar />
		</header>
	)
}
