import type React from 'react'
import styles from './ShootingProgramsPage.module.scss'
import clsx from 'clsx'
import { CrosshairDecor, IconArrow, IconClock, IconTarget } from './assets/svg'
import type { IProgramm } from './types'
import { programs } from './model/data'
import { InfoPagesTitle } from '../../shared/ui/InfoPagesTitle'
import { ReachUs } from '../../shared/ui/ReachUs'


interface ProgramCardProps {
	program: IProgramm
}

const ProgramCard: React.FC<ProgramCardProps> = ({ program }) => {
	const badgeClass =
		program.badgeVariant === 'red'
			? styles.cardBadgeRed
			: program.badgeVariant === 'youth'
				? styles.cardBadgeYouth
				: ''

	return (
		<article
			className={`${styles.card} ${program.featured ? styles.cardFeatured : ''}`}
		>
			<div className={styles.cardAccent} />

			<div className={styles.cardHeader}>
				<span className={`${styles.cardBadge} ${badgeClass}`}>
					{program.badge}
				</span>
				<div className={styles.cardIcon}>
					<IconTarget size={18} />
				</div>
			</div>

			<h3 className={styles.cardTitle}>{program.title}</h3>
			<p className={styles.cardDescription}>{program.description}</p>

			<div className={styles.cardMeta}>
				<IconClock size={13} />
				{program.duration}
			</div>

			<div className={styles.cardDivider} />

			<div className={styles.cardFooter}>
				<div className={styles.cardPrice}>
					<span className={styles.cardPriceLabel}>Стоимость</span>
					<span className={styles.cardPriceValue}>{program.price}</span>
				</div>
				<button className={styles.cardBtn}>
					Записаться <IconArrow size={13} />
				</button>
			</div>
		</article>
	)
}

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
						<InfoPagesTitle title={"Стрелковые программы"} description={"	Профессиональная подготовка для всех уровней — от новичка до опытного стрелка. Инструкторы с практическим опытом, сертифицированное оборудование. "} />
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

			{/* PROGRAMS GRID */}
			<section className={styles.section}>
				<div className={styles.sectionLabel}>
					<span />
					Доступные программы
				</div>
				<div className={styles.grid}>
					{programs.map(p => (
						<ProgramCard key={p.id} program={p} />
					))}
				</div>
			</section>

			{/* CTA BLOCK */}
			<ReachUs />
		</div>
	)
}
