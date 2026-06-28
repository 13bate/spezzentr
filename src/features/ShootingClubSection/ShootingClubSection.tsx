import React from 'react'
import { Link } from 'react-router'
import style from './ShootingClubSection.module.scss'
import { shootingRangeCardsData } from './model'

export const ShootingClubSection: React.FC = () => {
	return (
		<section className={style.section}>
			{/* Background effects */}
			<div className={style.bg}>
				<div className={style.bgGrid} />
				<div className={style.blob1} />
				<div className={style.blob2} />
				<div className={style.blob3} />
			</div>

			{/* Cards */}
			<div className={style.grid}>
				{shootingRangeCardsData.map((card, i) => (
					<Link
						key={card.id}
						to={card.href}
						className={`${style.card} ${style[card.id]}`}
						style={{ '--index': i } as React.CSSProperties}
					>
						<div className={style.cardInner}>
							<div className={style.shimmer} />
							<div className={style.cardTop}>
								<span className={style.cardNum}>
									{String(i + 1).padStart(2, '0')}
								</span>
								<div className={style.cardAccent} />
							</div>
							<div className={style.cardBody}>
								<div className={style.cardLabel}>{card.label}</div>
								<p className={style.cardDesc}>{card.description}</p>
							</div>
							<div className={style.cardFooter}>
								<span className={style.cardLink}>Подробнее</span>
								<span className={style.cardArrow}>→</span>
							</div>
						</div>
					</Link>
				))}
			</div>

			{/* Arsenal */}

		</section>
	)
}
