import React from 'react'
import { Link } from 'react-router'
import style from './PracticalShootingPage.module.scss'
import { practicalShootingCards } from './practicalShootingData'

// ─── Icon components ──────────────────────────────────────────
const IconTarget = () => (
	<svg width='22' height='22' viewBox='0 0 22 22' fill='none'>
		<circle
			cx='11'
			cy='11'
			r='10'
			stroke='#FE3B15'
			strokeWidth='1.5'
			strokeOpacity='.7'
		/>
		<circle
			cx='11'
			cy='11'
			r='5.5'
			stroke='#FE3B15'
			strokeWidth='1.5'
			strokeOpacity='.5'
		/>
		<circle cx='11' cy='11' r='2' fill='#FE3B15' />
	</svg>
)

const IconPerson = () => (
	<svg width='22' height='22' viewBox='0 0 22 22' fill='none'>
		<circle cx='11' cy='7' r='3.5' stroke='#4a8fff' strokeWidth='1.5' />
		<path
			d='M4 19c0-3.866 3.134-7 7-7h0c3.866 0 7 3.134 7 7'
			stroke='#4a8fff'
			strokeWidth='1.5'
			strokeLinecap='round'
		/>
	</svg>
)

const IconGroup = () => (
	<svg width='22' height='22' viewBox='0 0 22 22' fill='none'>
		<circle cx='8' cy='7' r='3' stroke='#2dc653' strokeWidth='1.5' />
		<circle
			cx='15'
			cy='8'
			r='2.5'
			stroke='#2dc653'
			strokeWidth='1.5'
			strokeOpacity='.6'
		/>
		<path
			d='M2 19c0-3.314 2.686-6 6-6s6 2.686 6 6'
			stroke='#2dc653'
			strokeWidth='1.5'
			strokeLinecap='round'
		/>
		<path
			d='M15 13c2.209 0 4 1.791 4 4v1'
			stroke='#2dc653'
			strokeWidth='1.5'
			strokeLinecap='round'
			strokeOpacity='.6'
		/>
	</svg>
)

const IconTrophy = () => (
	<svg width='22' height='22' viewBox='0 0 22 22' fill='none'>
		<path d='M7 3h8v7a4 4 0 01-8 0V3z' stroke='#d4a017' strokeWidth='1.5' />
		<path d='M7 6H4a2 2 0 000 4h3' stroke='#d4a017' strokeWidth='1.5' />
		<path d='M15 6h3a2 2 0 010 4h-3' stroke='#d4a017' strokeWidth='1.5' />
		<path
			d='M11 14v3M8 19h6'
			stroke='#d4a017'
			strokeWidth='1.5'
			strokeLinecap='round'
		/>
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
	<svg width='8' height='6' viewBox='0 0 8 6' fill='none'>
		<path
			d='M1 3l2 2 4-4'
			stroke='#fff'
			strokeWidth='1.3'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
)

// ─── Page ─────────────────────────────────────────────────────
export const PracticalShootingPage: React.FC = () => {
	return (
		<main className={style.page}>
			{/* ── Section ── */}
			<section className={style.section}>
				{/* bg effects */}
				<div className={style.bg}>
					<div className={style.bgGrid} />
					<div className={style.blob1} />
					<div className={style.blob2} />
				</div>

				{/* head */}
				<div className={style.head}>
					<div className={style.headLeft}>
						<div className={style.eyebrow}>Практическая стрельба · IPSC</div>
						<h1 className={style.h1}>
							Программы и <em>тренировки</em>
						</h1>
					</div>
					<div className={style.headRight}>
						Все программы сертифицированы
						<br />
						ОСОО «ФПСР» · IPSC
					</div>
				</div>

				{/* grid */}
				<div className={style.grid}>
					{practicalShootingCards.map(card => (
						<div
							key={card.id}
							className={`${style.card} ${card.featured ? style.cardFeatured : ''}`}
							style={{ '--accent': card.accent } as React.CSSProperties}
						>
							{/* corner brackets */}
							<div className={style.cTL} />
							<div className={style.cBR} />

							{/* top */}
							<div className={style.cardTop}>
								<span className={style.cardNum}>{card.num}</span>
								<span className={style.cardTag}>{card.tag}</span>
							</div>

							{/* icon */}
							<div className={style.iconWrap}>{icons[card.id]}</div>

							{/* title */}
							<div className={style.cardTitle}>{card.title}</div>

							{/* desc */}
							<p className={style.cardDesc}>{card.description}</p>

							{/* features */}
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

							{/* divider */}
							<div className={style.divider} />

							{/* bottom */}
							<div className={style.cardBottom}>
								<div className={style.priceBlock}>
									<span className={style.priceLabel}>Стоимость</span>
									<span className={style.priceVal}>{card.price}</span>
								</div>
								<Link to={card.route} className={style.cardBtn}>
									<span>Подробнее</span>
									<span className={style.btnArr}>→</span>
								</Link>
							</div>
						</div>
					))}
				</div>
			</section>
		</main>
	)
}
