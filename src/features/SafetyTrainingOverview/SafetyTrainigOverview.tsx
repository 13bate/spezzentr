import React from 'react'
import { Link } from 'react-router'
import style from './SafetyTrainigOverview.module.scss'
import { safetyTrainingContent } from './model'
import contentImg from '../../assets/spezzenter/man_with_pistol.avif'

const CheckIcon = () => (
	<svg width="12" height="9" viewBox="0 0 12 9" fill="none">
		<path d="M1 4.5l3.5 3.5 6.5-7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
	</svg>
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
					<div className={style.eyebrow}>
						<span className={style.eyebrowLine} />
						Учебный центр
					</div>

					<h2 className={style.title}>
						Обучение на <br /><span>гражданское оружие</span>
					</h2>

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
						<div className={style.metaItem}>
							<span className={style.metaLabel}>Стоимость</span>
							<span className={`${style.metaValue} ${style.metaValueAccent}`}>
								{safetyTrainingContent.price}
							</span>
						</div>
						<div className={style.metaDivider} />
						<div className={style.metaItem}>
							<span className={style.metaLabel}>Длительность</span>
							<span className={style.metaValue}>{safetyTrainingContent.duration}</span>
						</div>
						<div className={style.metaDivider} />
						<div className={style.metaItem}>
							<span className={style.metaLabel}>Формат</span>
							<span className={style.metaValue}>{safetyTrainingContent.format}</span>
						</div>
					</div>

					<Link to={safetyTrainingContent.buttonLink} className={style.btn}>
						{safetyTrainingContent.buttonText}
						<span className={style.btnArrow}>→</span>
					</Link>
				</div>

				{/* Right: image with effects */}
				<div className={style.imageWrapper}>
					<img src={contentImg} alt="Обучение на гражданское оружие" className={style.image} />
					<div className={style.overlay} />
					<div className={style.glow} />
					<div className={style.grid} />


				</div>
			</div>
		</section>
	)
}
