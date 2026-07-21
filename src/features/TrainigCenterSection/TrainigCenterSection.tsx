import clsx from 'clsx'
import React from 'react'
import { InfoCard } from '../../shared/ui/InfoCard/InfoCard'
import style from './TrainingCenterSection.module.scss'
import { courses } from './model.ts'

interface Props {
	className?: string
}

export const TrainigCenterSection: React.FC<Props> = ({ className }) => {
	return (
		<section className={clsx(className, style.section)}>
			<div className={style.sectionHeader}>
				<div className={style.headerLeft}>
					<span className={style.eyebrow}>Наши программы</span>
					<h2 className={style.sectionTitle}>
						Обучение &<br />
						<em>аттестация</em>
					</h2>
				</div>
				<p className={style.headerDesc}>
					Профессиональные курсы с государственной аккредитацией. Практика с
					первого дня. Документы, признанные по всей России.
				</p>
			</div>

			<div className={style.grid}>
				{courses.map((course) => (
					<div key={course.id} className={style.cardWrapper}>
						<InfoCard
							title={course.title}
							description={course.description}
							features={course.highlights}
							price={course.price}
							duration={course.duration}
							buttonText="Подробнее"
							buttonLink={course.buttonLink}
						/>
					</div>
				))}
			</div>
		</section>
	)
}
