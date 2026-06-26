import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useScrollToContacts } from '../../shared/utils/ScrollToContacts'
import { NavBar } from '../NavBar'
import style from './Header.module.scss'

interface Props {
	className?: string
}

export const Header: React.FC<Props> = ({ className }) => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

	useEffect(() => {
		if (mobileMenuOpen) {
			document.body.classList.add('menuOpen')
		} else {
			document.body.classList.remove('menuOpen')
		}

		return () => {
			document.body.classList.remove('menuOpen')
		}
	}, [mobileMenuOpen])

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!mobileMenuOpen)
	}

	const closeMobileMenu = () => {
		setMobileMenuOpen(false)
	}

	return (
		<>
			<header
				className={clsx(
					style.header,
					className,
					mobileMenuOpen && style.menuOpen,
				)}
			>
				<div className={style.headerContainer}>
					<Link to='/' className={style.logo} onClick={closeMobileMenu}>
						СПЕЦ<span>ЦЕНТР</span>
					</Link>

					<div className={style.desktopNav}>
						<NavBar />
					</div>

					<div className={style.headerInfoSection}>
						<div className={style.headerInfoSectionPhone}>
							<a href='tel:+74832320201'>(4832) 32-02-01</a>
						</div>

						<div className={style.desktopContacts}>
							<a
								href='/#contacts'
								className={style.contactButton}
								onClick={() => useScrollToContacts}
							>
								<span>Контакты</span>
								<FontAwesomeIcon icon={faChevronRight} />
							</a>
						</div>
					</div>

					<button
						className={clsx(style.burgerButton, mobileMenuOpen && style.open)}
						onClick={toggleMobileMenu}
						aria-label='Меню'
					>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
			</header>

			<div className={clsx(style.mobileMenu, mobileMenuOpen && style.open)}>
				<div className={style.mobileMenuHeader}>
					<Link to='/' className={style.mobileLogo} onClick={closeMobileMenu}>
						СПЕЦЦЕНТР
					</Link>

					<button className={style.closeButton} onClick={closeMobileMenu}>
						✕
					</button>
				</div>

				<div className={style.mobileNav}>
					<NavBar onItemClick={closeMobileMenu} />
				</div>

				<div className={style.mobileContacts}>
					<a
						href='tel:+74832320201'
						className={style.mobilePhone}
						onClick={closeMobileMenu}
					>
						<span className={style.mobilePhoneIcon}>📞</span>

						<div className={style.mobilePhoneText}>
							<span className={style.mobilePhoneLabel}>Позвоните нам</span>
							<span className={style.mobilePhoneNumber}>
								+7 (4832) 32-02-01
							</span>
						</div>
					</a>

					<a
						href='/#contacts'
						className={style.mobileContactButton}
						onClick={useScrollToContacts}
					>
						<span>Контакты</span>
						<FontAwesomeIcon icon={faChevronRight} />
					</a>
				</div>
			</div>

			{mobileMenuOpen && (
				<div className={style.overlay} onClick={closeMobileMenu} />
			)}
		</>
	)
}
