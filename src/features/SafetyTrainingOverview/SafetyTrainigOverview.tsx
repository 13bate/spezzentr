import React from 'react'
import { Link } from 'react-router'
import style from './SafetyTrainigOverview.module.scss'
import { safetyTrainingContent } from './model'

const CheckIcon = () => (
	<svg width='8' height='6' viewBox='0 0 8 6' fill='none'>
		<path
			d='M1 3l2 2 4-4'
			stroke='#fff'
			strokeWidth='1.2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
)

const SceneVisual = () => (
	<div className={style.visual}>
		<div className={style.lane} />

		{/* Safety badge */}
		<div className={style.badge}>
			<div className={style.shield}>
				<div className={style.shieldCheck} />
			</div>
			<div className={style.badgeLabel}>Сертификат</div>
		</div>

		{/* Paper target on stand */}
		<div className={style.targetWrap}>
			<div className={style.paper}>
				<div className={style.zoneD} />
				<div className={style.zoneC} />
				<div className={style.silHead} />
				<div className={style.silBody}>
					<div className={style.zoneA} />
				</div>
				<div className={`${style.hole} ${style.hA1}`} />
				<div className={`${style.hole} ${style.hA2}`} />
				<div className={`${style.hole} ${style.hA3}`} />
				<div className={`${style.hole} ${style.hB1}`} />
				<div className={`${style.hole} ${style.hB2}`} />
				<div className={style.score}>A·ZONE</div>
			</div>
			<div className={style.crossbar} />
			<div className={style.pole} />
		</div>

		{/* Scope reticle */}
		<div className={style.scope}>
			<div className={style.scopeInner} />
			<div className={style.scopeDot} />
		</div>

		{/* Brass shells */}
		<div className={style.shells}>
			<div className={`${style.shell} ${style.sh1}`} />
			<div className={`${style.shell} ${style.sh2}`} />
			<div className={`${style.shell} ${style.sh3}`} />
			<div className={`${style.shell} ${style.sh4}`} />
		</div>

		<div className={style.distLine} />
		<div className={style.distLabel}>25 м</div>

		<div className={style.markers}>
			<span className={style.marker}>0</span>
			<span className={style.marker}>10м</span>
			<span className={style.marker}>25м</span>
		</div>
	</div>
)

interface Props {
	className?: string
}

export const SafetyTrainingOverview: React.FC<Props> = ({ className }) => {
	return (
		<section className={`${className ?? ''} ${style.section}`}>
			{/* Background */}
			<div className={style.bg}>
				<div className={style.bgGrid} />
				<div className={style.b1} />
				<div className={style.b2} />
			</div>

			<div className={style.inner}>
				{/* Left: content */}
				<div className={style.content}>
					<div className={style.eyebrow}>Учебный центр</div>
					<h2 className={style.title}>Обучение на гражданское оружие</h2>

					<ul className={style.list}>
						{safetyTrainingContent.highlights.map((item, i) => (
							<li key={i}>
								<span className={style.tick}>
									<CheckIcon />
								</span>
								{item}
							</li>
						))}
					</ul>

					<div className={style.meta}>
						<div className={style.mi}>
							<span className={style.ml}>Стоимость</span>
							<span className={`${style.mv} ${style.mvRed}`}>
								{safetyTrainingContent.price}
							</span>
						</div>
						<div className={style.mi}>
							<span className={style.ml}>Длительность</span>
							<span className={style.mv}>{safetyTrainingContent.duration}</span>
						</div>
						<div className={style.mi}>
							<span className={style.ml}>Формат</span>
							<span className={style.mv}>{safetyTrainingContent.format}</span>
						</div>
					</div>

					<Link to={safetyTrainingContent.buttonLink} className={style.btn}>
						{safetyTrainingContent.buttonText}
						<span className={style.arr}>→</span>
					</Link>
				</div>

				{/* Right: visual scene */}
				<SceneVisual />
			</div>
		</section>
	)
}
