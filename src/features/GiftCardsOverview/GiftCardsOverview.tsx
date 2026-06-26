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
				<span className={style.badge}>🎁 Идеальный подарок</span>

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
				{/* SVG Ribbon — full cross with bow */}
				<svg
					className={style.ribbonSvg}
					viewBox='0 0 420 260'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					preserveAspectRatio='none'
				>
					<defs>
						<linearGradient id='hRib' x1='0' y1='0' x2='0' y2='1'>
							<stop offset='0%' stopColor='#7D0015' />
							<stop offset='50%' stopColor='#D61D38' />
							<stop offset='100%' stopColor='#760013' />
						</linearGradient>

						<linearGradient id='vRib' x1='0' y1='0' x2='1' y2='0'>
							<stop offset='0%' stopColor='#7D0015' />
							<stop offset='50%' stopColor='#D61D38' />
							<stop offset='100%' stopColor='#760013' />
						</linearGradient>

						<linearGradient id='lobeLG' x1='0' y1='0' x2='1' y2='1'>
							<stop offset='0%' stopColor='#FF7A88' />
							<stop offset='55%' stopColor='#D61D38' />
							<stop offset='100%' stopColor='#730012' />
						</linearGradient>

						<linearGradient id='lobeRG' x1='1' y1='0' x2='0' y2='1'>
							<stop offset='0%' stopColor='#FF7A88' />
							<stop offset='55%' stopColor='#D61D38' />
							<stop offset='100%' stopColor='#730012' />
						</linearGradient>

						<linearGradient id='knotG' x1='0' y1='0' x2='1' y2='1'>
							<stop offset='0%' stopColor='#FF5568' />
							<stop offset='100%' stopColor='#5A000E' />
						</linearGradient>

						<filter id='bowShadow' x='-40%' y='-40%' width='180%' height='180%'>
							<feDropShadow
								dx='0'
								dy='2'
								stdDeviation='3'
								floodColor='#000'
								floodOpacity='0.22'
							/>
						</filter>
					</defs>

					{/* Horizontal ribbon */}
					<rect x='0' y='108' width='420' height='24' fill='url(#hRib)' />
					<rect
						x='0'
						y='108'
						width='420'
						height='5'
						fill='rgba(255,255,255,.18)'
					/>

					{/* Vertical ribbon */}
					<rect x='120' y='0' width='24' height='260' fill='url(#vRib)' />
					<rect
						x='120'
						y='0'
						width='5'
						height='260'
						fill='rgba(255,255,255,.18)'
					/>

					<g filter='url(#bowShadow)'>
						{/* Left bow loop */}
						<path
							d='
        M132 120
        C118 108 95 98 73 98
        C53 98 45 113 54 128
        C66 145 95 145 118 133
        C124 130 129 125 132 120
        Z
      '
							fill='url(#lobeLG)'
						/>

						<path
							d='
        M72 105
        C84 103 98 109 112 118
        C98 115 84 116 72 120
        Z
      '
							fill='rgba(255,255,255,.30)'
						/>

						{/* Right bow loop */}
						<path
							d='
        M132 120
        C146 108 169 98 191 98
        C211 98 219 113 210 128
        C198 145 169 145 146 133
        C140 130 135 125 132 120
        Z
      '
							fill='url(#lobeRG)'
						/>

						<path
							d='
        M192 105
        C180 103 166 109 152 118
        C166 115 180 116 192 120
        Z
      '
							fill='rgba(255,255,255,.28)'
						/>

						{/* Left ribbon tail */}
						<path
							d='
        M126 128
        C118 147 106 166 95 186
        L108 190
        C118 170 126 151 133 135
        Z
      '
							fill='url(#vRib)'
						/>

						<path
							d='
        M95 186
        L108 190
        L101 208
        L86 198
        Z
      '
							fill='#8B0018'
						/>

						{/* Right ribbon tail */}
						<path
							d='
        M138 128
        C146 147 158 166 169 186
        L156 190
        C146 170 138 151 131 135
        Z
      '
							fill='url(#vRib)'
						/>

						<path
							d='
        M169 186
        L156 190
        L163 208
        L178 198
        Z
      '
							fill='#8B0018'
						/>

						{/* Center knot */}
						<ellipse cx='132' cy='120' rx='20' ry='15' fill='url(#knotG)' />

						<ellipse
							cx='127'
							cy='116'
							rx='7'
							ry='4'
							fill='rgba(255,255,255,.35)'
							transform='rotate(-18 127 116)'
						/>
					</g>
				</svg>

				{/* Card value - bottom right quadrant */}
				<div className={style.giftValue}>СПЕЦЦЕНТР</div>

				{/* GIFT CARD label */}
				<div className={style.cardBrand}>GIFT CARD</div>

				{/* Card number */}
				<div className={style.decorNumber}>
					**** <span>****</span> **** <span>1234</span>
				</div>

				<div className={style.gloss}></div>
				<div className={style.scanlineEffect}></div>
			</div>
		</section>
	)
}
