import clsx from 'clsx'
import React, { useEffect } from 'react'
import style from './HeroSection.module.scss'

interface Props {
	className?: string
}

export const HeroSection: React.FC<Props> = ({ className }) => {
	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			const x = (e.clientX / window.innerWidth) * 100
			const y = (e.clientY / window.innerHeight) * 100

			document.documentElement.style.setProperty('--mouse-x', `${x}%`)
			document.documentElement.style.setProperty('--mouse-y', `${y}%`)
		}

		window.addEventListener('mousemove', handleMouseMove)

		return () => {
			window.removeEventListener('mousemove', handleMouseMove)
		}
	}, [])

	return (
		<section className={clsx(style.hero, className)}>
			<div className={style.background} />
			<div className={style.grid} />
			<div className={style.bulletTrail} />

			<div className={style.crosshair}>
				<span />
				<span />
				<span />
				<span />
			</div>

			<div className={style.content}>
				<div className={style.tag}>LIVE FIRE EXPERIENCE</div>

				<h1 className={style.title}>
					TRAIN LIKE
					<span>A PROFESSIONAL</span>
				</h1>

				<p className={style.description}>
					Elite shooting range designed for serious shooters. Military-grade
					equipment, certified instructors, precision training, and an
					unforgettable experience.
				</p>

				<div className={style.actions}>
					<button className={style.primaryBtn}>BOOK SESSION</button>

					<button className={style.secondaryBtn}>WATCH VIDEO</button>
				</div>

				<div className={style.stats}>
					<div className={style.statCard}>
						<strong>12</strong>
						<span>LANES</span>
					</div>

					<div className={style.statCard}>
						<strong>1500+</strong>
						<span>CLIENTS</span>
					</div>

					<div className={style.statCard}>
						<strong>24/7</strong>
						<span>ACCESS</span>
					</div>
				</div>
			</div>
		</section>
	)
}
