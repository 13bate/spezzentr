import React from 'react'
import { Link } from 'react-router'
import style from './PracticalShootingPage.module.scss'
import { practicalShootingCards } from './practicalShootingData'
import { ReachUs } from '../../shared/ui/ReachUs'

// ─── Icon components ──────────────────────────────────────────
const IconTarget = () => (
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
		<circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8" strokeOpacity="0.8" />
		<circle cx="12" cy="12" r="5.5" stroke="currentColor" strokeWidth="1.8" strokeOpacity="0.5" />
		<circle cx="12" cy="12" r="2" fill="currentColor" />
	</svg>
)

const IconPerson = () => (
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
		<circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.8" />
		<path d="M4 20c0-4 3.5-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
	</svg>
)

const IconGroup = () => (
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
		<circle cx="9" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.8" />
		<circle cx="17" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.8" strokeOpacity="0.6" />
		<path d="M3 20c0-3.5 2.5-6 6-6s6 2.5 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
		<path d="M16.5 14.5c2.5 0 4.5 2 4.5 4.5v1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeOpacity="0.6" />
	</svg>
)

const IconTrophy = () => (
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
		<path d="M8 4h8v8a4 4 0 01-8 0V4z" stroke="currentColor" strokeWidth="1.8" />
		<path d="M8 7H5a2.5 2.5 0 000 5h3" stroke="currentColor" strokeWidth="1.8" />
		<path d="M16 7h3a2.5 2.5 0 010 5h-3" stroke="currentColor" strokeWidth="1.8" />
		<path d="M12 15v4M9 21h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
	</svg>
)

const icons: Record<string, React.ReactNode> = {
	bikoso: <IconTarget />,
	individual: <IconPerson />,
	group: <IconGroup />,
	matches: <IconTrophy />,
}

// ─── Check icon ───────────────────────────────────────────────
const Check = () => (
	<svg width="10" height="8" viewBox="0 0 10 8" fill="none">
		<path d="M1 4l3 3 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
	</svg>
)

const ArrowIcon = () => (
	<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
		<path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
	</svg>
)

// ─── Page ─────────────────────────────────────────────────────
export const PracticalShootingPage: React.FC = () => {
	return (
		<main className={style.page}>
			<section className={style.section}>
				{/* Background effects */}
				<div className={style.bg}>
					<div className={style.bgGrid} />
					<div className={style.blob1} />
					<div className={style.blob2} />
					<div className={style.blob3} />
				</div>

				<div className={style.container}>
					{/* Header */}
					<div className={style.head}>
						<div className={style.headLeft}>
							<div className={style.eyebrow}>
								<span className={style.eyebrowLine} />
								Практическая стрельба · IPSC
							</div>
							<h1 className={style.h1}>
								Программы и <br />
								<em>тренировки</em>
							</h1>
						</div>
						<div className={style.headRight}>
							<p>
								Все программы сертифицированы
								<br />
								<span>ОСОО «ФПСР» · IPSC</span>
							</p>
							<div className={style.headBadge}>
								<span>С 2015 года</span>
							</div>
						</div>
					</div>

					{/* Grid */}
					<div className={style.grid}>
						{practicalShootingCards.map((card, index) => (
							<div
								key={card.id}
								className={`${style.card} ${card.featured ? style.cardFeatured : ''}`}
								style={{ '--accent': card.accent, '--index': index } as React.CSSProperties}
							>
								{/* Gloss overlay */}
								<div className={style.cardGloss} />

								{/* Card media header */}
								<div className={style.cardMedia} style={{ background: card.gradient || `var(--accent)` }}>
									<div className={style.cardMediaIcon}>
										{icons[card.id]}
									</div>
									<div className={style.cardMediaInfo}>
										<span className={style.cardMediaTag}>{card.tag}</span>
										<span className={style.cardMediaNum}>{card.num}</span>
									</div>
								</div>

								{/* Card content */}
								<div className={style.cardBody}>
									<h3 className={style.cardTitle}>{card.title}</h3>
									<p className={style.cardDesc}>{card.description}</p>

									<ul className={style.features}>
										{card.features.map((f, i) => (
											<li key={i} className={style.feat}>
												<span className={style.featTick}>
													<Check />
												</span>
												{f}
											</li>
										))}
									</ul>

									<div className={style.cardDivider} />

									<div className={style.cardBottom}>
										<div className={style.priceBlock}>
											<span className={style.priceLabel}>Стоимость</span>
											<span className={style.priceVal}>{card.price}</span>
										</div>
										<Link to={card.route} className={style.cardBtn}>
											<span>Подробнее</span>
											<ArrowIcon />
											<span className={style.btnShine} />
										</Link>
									</div>
								</div>

								{/* Featured badge */}
								{card.featured && (
									<div className={style.featuredBadge}>
										<span>★</span>
										Популярный
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			</section>
			<ReachUs />
		</main>
	)
}
