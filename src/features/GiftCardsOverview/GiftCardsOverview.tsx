import clsx from 'clsx'
import style from './GiftCardsOverview.module.scss'
import { Link } from 'react-router'
import { giftCardsContent } from './model'

interface Props {
	className?: string
}

export const GiftCardsOverview: React.FC<Props> = ({ className }) => {
	return (
		<section className={clsx(className, style.giftCards)}>
			<div className={style.content}>
				<span className={style.badge}>Подарочный сертификат</span>

				<h2 className={style.title}>{giftCardsContent.title}</h2>

				<p className={style.description}>{giftCardsContent.description}</p>

				<div className={style.buttonWrapper}>
					<Link to={giftCardsContent.buttonLink}>
						<button className={style.button}>
							{giftCardsContent.buttonText}
						</button>
					</Link>
				</div>
			</div>

			<div className={style.mediaContainer}>
				{/* Gift Card - Premium Design */}
				<div className={style.card}>
					{/* Card background with subtle texture */}
					<div className={style.cardBg}></div>

					{/* Brand stripe */}
					<div className={style.cardStripe}></div>

					{/* Card content */}
					<div className={style.cardContent}>
						<div className={style.cardHeader}>
							<span className={style.cardBrand}>СПЕЦЦЕНТР</span>
							<span className={style.cardType}>GIFT CARD</span>
						</div>

						<div className={style.cardValue}>
							<span className={style.amount}>5 000</span>
							<span className={style.currency}>₽</span>
						</div>

						<div className={style.cardFooter}>
							<span className={style.cardNumber}>**** **** **** 1234</span>
							<span className={style.cardExpiry}>12/26</span>
						</div>
					</div>

					{/* Card gloss overlay */}
					<div className={style.gloss}></div>

					{/* Minimal decorative elements */}
					<svg className={style.cornerDecor} viewBox="0 0 24 24" fill="none">
						<path d="M2 2L6 2M2 2V6M22 22L18 22M22 22V18M2 22L6 22M2 22V18M22 2L18 2M22 2V6"
							stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" strokeLinecap="round" />
					</svg>
				</div>
			</div>
		</section>
	)
}
