import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router'
import styles from './ProgrammsSection.module.scss'

type MiniIconType =
	| 'target'
	| 'shield'
	| 'book'
	| 'user'
	| 'users'
	| 'calendar'
	| 'trophy'
	| 'flag'

type Card = {
	id: number
	title: string
	route?: string
	description: string
	details?: string
	features: string[]
	price: string
	color: string
	gradient: string
	mediaIcons: MiniIconType[]
}

const cards: Card[] = [
	{
		id: 1,
		title: 'БИКОСО',
		route: '/training/safety',
		description:
			'Курс безопасного и квалифицированного обращения с оружием (БИКОСО) – является одним из условий для вступления в Общероссийскую общественную организацию «Федерация практической стрельбы России» (ОСОО «ФПСР»). Направлен на изучение правил обращения с короткоствольным и длинноствольным оружием.',
		details:
			'Курс состоит из практических занятий в тире по изучению и отработке правил безопасности при обращении с оружием, манипуляций, двигательных навыков и принципов практической стрельбы, а также из теоретических занятий по изучению правил этого вида спорта. Также курс будет актуален для тех, кто хочет улучшить свои навыки владения оружием.',
		features: [
			'Практические занятия в тире',
			'Работа с разными видами оружия',
			'Теоретическая подготовка',
		],
		price: '18 000 ₽',
		color: '#FE3B15',
		gradient: 'linear-gradient(135deg, #FE3B15, #FF6B4A)',
		mediaIcons: ['target', 'shield', 'book'],
	},
	{
		id: 2,
		title: 'Индивидуальные тренировки',
		description:
			'Персональные тренировки по практической стрельбе под руководством инструкторов клуба. Персональный тренировочный процесс формируется исходя из уровня подготовки спортсмена и результатов которых он хочет достичь.',
		features: [
			'Индивидуальный план тренировок',
			'Отработка технических элементов',
			'Анализ и разбор ошибок',
			'Гибкий график занятий',
		],
		price: '5 600 ₽',
		color: '#4A8FFF',
		gradient: 'linear-gradient(135deg, #4A8FFF, #7AABFF)',
		mediaIcons: ['user', 'calendar', 'target'],
	},
	{
		id: 3,
		title: 'Групповые тренировки',
		description:
			'Командный формат тренировок, где вы сможете развивать навыки взаимодействия, соревновательный дух и получать обратную связь от инструктора в группе единомышленников.',
		features: [
			'Командные упражнения и разбор',
			'Обратная связь тренера по технике',
			'Соревновательная практика в группе',
			'Дружеская и мотивирующая атмосфера',
		],
		price: '3 500 ₽',
		color: '#2DC653',
		gradient: 'linear-gradient(135deg, #2DC653, #5FEA87)',
		mediaIcons: ['users', 'target', 'shield'],
	},
	{
		id: 4,
		title: 'Мини-матчи',
		description:
			'Регулярные мини-соревнования, проходящие в клубе и позволяющие почувствовать спортивный азарт практической стрельбы, а также получить опыт участия в матчах без необходимости выезжать за пределы региона.',
		details:
			'Подходит для стрелков, прошедших курс БИКОСО, имеющих членство в Федерации и обладающих необходимыми навыками обращения с оружием',
		features: [
			'Соревновательный опыт',
			'Различные сценарии упражнений',
			'Оценка результатов',
			'Призы и награды',
		],
		price: '2 500 ₽',
		color: '#D4A017',
		gradient: 'linear-gradient(135deg, #D4A017, #F5C542)',
		mediaIcons: ['trophy', 'target', 'flag'],
	},
]

export const ProgrammsSection = () => {
	const [visible, setVisible] = useState<Record<number, boolean>>({})
	const cardElsRef = useRef<Array<HTMLDivElement | null>>([])

	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				for (const entry of entries) {
					if (!entry.isIntersecting) continue
					const id = Number((entry.target as HTMLElement).dataset.cardId)
					if (!Number.isFinite(id)) continue
					setVisible(prev => ({ ...prev, [id]: true }))
					observer.unobserve(entry.target)
				}
			},
			{
				threshold: 0.18,
				rootMargin: '60px 0px -10px 0px',
			},
		)

		for (const el of cardElsRef.current) {
			if (el) observer.observe(el)
		}

		return () => observer.disconnect()
	}, [])

	return (
		<section className={styles.section}>
			<div className={styles.bgArt} aria-hidden='true'>
				<div className={styles.bgGrid} />
				<div className={styles.bgBlob1} />
				<div className={styles.bgBlob2} />
				<div className={styles.bgNoise} />
			</div>

			<div className={styles.content}>
				{/* Header */}
				<div className={styles.header}>
					<div className={styles.headerBadge}>
						<BoltIcon />
						<span>ПРОГРАММЫ ОБУЧЕНИЯ</span>
					</div>

					<h2 className={styles.title}>
						<span className={styles.titleGradient}>
							Выберите свою программу
						</span>
					</h2>
					<div className={styles.headerUnderline} />
				</div>

				{/* Cards Grid */}
				<div className={styles.grid}>
					{cards.map((card, idx) => (
						<div
							key={card.id}
							ref={el => {
								cardElsRef.current[idx] = el
							}}
							data-card-id={card.id}
							className={`${styles.cardWrapper} ${visible[card.id] ? styles.visible : ''}`}
							style={
								{
									'--accent': card.color,
									'--card-gradient': card.gradient,
								} as React.CSSProperties
							}
						>
							<article className={styles.card}>
								<div
									className={styles.cardMedia}
									style={{ color: card.color }}
									aria-hidden='true'
								>
									<div className={styles.programArtWrap}></div>
									<div className={styles.mediaIconBadges}>
										{card.mediaIcons.slice(0, 3).map((iconType, i) => (
											<div
												className={styles.mediaIconBadge}
												key={`${iconType}-${i}`}
											>
												<MiniIcon type={iconType} />
											</div>
										))}
									</div>
								</div>

								<div className={styles.cardContent}>
									<div className={styles.cardHeaderRow}>
										<h3 className={styles.titleCard}>{card.title}</h3>
									</div>

									<p className={styles.description}>{card.description}</p>
									{card.details ? (
										<p className={styles.details}>{card.details}</p>
									) : null}

									<div className={styles.features}>
										{card.features.map(feature => (
											<div key={feature} className={styles.feature}>
												<div
													className={styles.featureIcon}
													style={{ backgroundImage: card.gradient }}
												>
													<CheckIcon />
												</div>
												<span>{feature}</span>
											</div>
										))}
									</div>

									<div className={styles.priceSection}>
										<div className={styles.priceWrapper}>
											<span className={styles.priceLabel}>Стоимость</span>
											<div className={styles.priceValue}>
												<span className={styles.priceNumber}>{card.price}</span>
											</div>
										</div>

										<button type='button' className={styles.ctaButton}>
											<Link
												to='/shooting/practice'
												className={styles.ctaButton__link}
											>
												<span>Записаться</span>
												<ArrowRightIcon />
												<div
													className={styles.buttonSheen}
													aria-hidden='true'
												/>
											</Link>
										</button>
									</div>
								</div>
							</article>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

function BoltIcon() {
	return (
		<svg
			width='14'
			height='14'
			viewBox='0 0 24 24'
			aria-hidden='true'
			focusable='false'
		>
			<path d='M13 2L3 14h8l-1 8 10-12h-8l1-8z' fill='currentColor' />
		</svg>
	)
}

function CheckIcon() {
	return (
		<svg
			width='14'
			height='14'
			viewBox='0 0 24 24'
			aria-hidden='true'
			focusable='false'
		>
			<path
				d='M20 6L9 17l-5-5'
				fill='none'
				stroke='currentColor'
				strokeWidth='2.4'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}

function ArrowRightIcon() {
	return (
		<svg
			width='16'
			height='16'
			viewBox='0 0 24 24'
			aria-hidden='true'
			focusable='false'
		>
			<path
				d='M5 12h12'
				fill='none'
				stroke='currentColor'
				strokeWidth='2.4'
				strokeLinecap='round'
			/>
			<path
				d='M13 6l6 6-6 6'
				fill='none'
				stroke='currentColor'
				strokeWidth='2.4'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}

function MiniIcon({ type }: { type: MiniIconType }) {
	const common = {
		fill: 'none',
		stroke: 'currentColor',
		strokeWidth: 2.1,
		strokeLinecap: 'round' as const,
		strokeLinejoin: 'round' as const,
	}

	switch (type) {
		case 'target':
			return (
				<svg
					width='16'
					height='16'
					viewBox='0 0 24 24'
					aria-hidden='true'
					focusable='false'
				>
					<circle cx='12' cy='12' r='8' {...common} />
					<circle cx='12' cy='12' r='3.6' {...common} />
					<path d='M12 2v4' {...common} />
					<path d='M22 12h-4' {...common} />
					<path d='M12 22v-4' {...common} />
					<path d='M2 12h4' {...common} />
				</svg>
			)
		case 'shield':
			return (
				<svg
					width='16'
					height='16'
					viewBox='0 0 24 24'
					aria-hidden='true'
					focusable='false'
				>
					<path
						d='M12 2l8 4v6c0 5-3.4 9.4-8 10-4.6-.6-8-5-8-10V6l8-4z'
						{...common}
					/>
				</svg>
			)
		case 'book':
			return (
				<svg
					width='16'
					height='16'
					viewBox='0 0 24 24'
					aria-hidden='true'
					focusable='false'
				>
					<path d='M4 19a2 2 0 0 0 2 2h14' {...common} />
					<path d='M4 5a2 2 0 0 1 2-2h14v18H6a2 2 0 0 0-2 2V5z' {...common} />
					<path d='M8 7h8' {...common} />
				</svg>
			)
		case 'user':
			return (
				<svg
					width='16'
					height='16'
					viewBox='0 0 24 24'
					aria-hidden='true'
					focusable='false'
				>
					<circle cx='12' cy='8' r='4' {...common} />
					<path d='M4 22c1.5-4.5 5-7 8-7s6.5 2.5 8 7' {...common} />
				</svg>
			)
		case 'users':
			return (
				<svg
					width='16'
					height='16'
					viewBox='0 0 24 24'
					aria-hidden='true'
					focusable='false'
				>
					<circle cx='9' cy='8' r='3.6' {...common} />
					<circle cx='16.5' cy='9' r='3.2' {...common} />
					<path
						d='M2.6 22c1.2-3.9 4.2-6.4 7.4-6.4s6.2 2.5 7.4 6.4'
						{...common}
					/>
					<path
						d='M14.7 16.2c.9-.7 2.1-1.1 3.3-1.1 2 0 4 1.4 5.2 4.1'
						{...common}
					/>
				</svg>
			)
		case 'calendar':
			return (
				<svg
					width='16'
					height='16'
					viewBox='0 0 24 24'
					aria-hidden='true'
					focusable='false'
				>
					<path d='M8 2v4' {...common} />
					<path d='M16 2v4' {...common} />
					<path d='M3 8h18' {...common} />
					<path
						d='M5 5h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z'
						{...common}
					/>
					<path d='M8 12h4' {...common} />
				</svg>
			)
		case 'trophy':
			return (
				<svg
					width='16'
					height='16'
					viewBox='0 0 24 24'
					aria-hidden='true'
					focusable='false'
				>
					<path d='M8 21h8' {...common} />
					<path d='M12 17v4' {...common} />
					<path d='M7 4h10v5a5 5 0 0 1-10 0V4z' {...common} />
					<path d='M5 6H3v2a4 4 0 0 0 4 4' {...common} />
					<path d='M19 6h2v2a4 4 0 0 1-4 4' {...common} />
				</svg>
			)
		case 'flag':
			return (
				<svg
					width='16'
					height='16'
					viewBox='0 0 24 24'
					aria-hidden='true'
					focusable='false'
				>
					<path d='M4 22V3' {...common} />
					<path d='M4 4h14l-2 4 2 4H4' {...common} />
				</svg>
			)
		default:
			return null
	}
}
