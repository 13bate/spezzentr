import type React from 'react'
import styles from './ShootingProgramsPage.module.scss'
import clsx from 'clsx'
import { CrosshairDecor } from './assets/svg'
import { InfoPagesTitle } from '../../shared/ui/InfoPagesTitle'
import { ReachUs } from '../../shared/ui/ReachUs'
import { InfoCard } from '../../shared/ui/InfoCard'
import { programs } from './model/data'
import type { IProgramm } from './types'

interface Props {
	className?: string
}

// ─── Page ─────────────────────────────────────────────────────

export const ShootingProgramsPage: React.FC<Props> = ({ className }) => {
	return (
		<div className={clsx(className, styles.page)}>
			{/* HERO */}
			<section className={styles.hero}>
				<div className={styles.heroInner}>
					<div className={styles.heroContent}>
						<span className={styles.heroEyebrow}>Учебный центр</span>
						<InfoPagesTitle
							title="Стрелковые программы"
							description="Профессиональная подготовка для всех уровней — от новичка до опытного стрелка. Инструкторы с практическим опытом, сертифицированное оборудование."
						/>
					</div>
					<CrosshairDecor />
				</div>
			</section>

			{/* STATS BAR */}
			<div className={styles.statsBar}>
				<div className={styles.statsBarInner}>
					<div className={styles.statItem}>
						<span className={styles.statValue}>3</span>
						<span className={styles.statLabel}>Программы обучения</span>
					</div>
					<div className={styles.statItem}>
						<span className={styles.statValue}>4–6 ч</span>
						<span className={styles.statLabel}>Продолжительность</span>
					</div>
					<div className={styles.statItem}>
						<span className={styles.statValue}>от 5 000 ₽</span>
						<span className={styles.statLabel}>Стоимость участия</span>
					</div>
					<div className={styles.statItem}>
						<span className={styles.statValue}>12+</span>
						<span className={styles.statLabel}>Подростковая секция</span>
					</div>
				</div>
			</div>

			{/* PROGRAMS GRID — используем InfoCard */}
			<section className={styles.section}>
				<div className={styles.sectionLabel}>
					<span />
					Доступные программы
				</div>
				<div className={styles.grid}>
					{programs.map((program: IProgramm) => (
						<InfoCard
							key={program.id}
							title={program.title}
							description={program.description}
							price={program.price}
							duration={program.duration}
							buttonText="Записаться"
							buttonLink="/contacts"
							variant="light"
						/>
					))}
				</div>
			</section>

			{/* CTA BLOCK */}
			<ReachUs />
		</div>
	)
}
