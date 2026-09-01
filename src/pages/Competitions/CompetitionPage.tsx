import clsx from 'clsx'
import { InfoPagesTitle } from '../../shared/ui/InfoPagesTitle'
import styles from './CompetitionPage.module.scss'
import { ScheduleViewer } from '../../features/ScheduleViewer'
import { Carousel } from '../../shared/ui/Carousel/ui/Carousel'

interface Props {
	className?: string
}



export const CompetitionPage: React.FC<Props> = ({ className }) => {
	return (
		<div className={clsx(className, styles.page)}>
			{/* HERO */}
			<section className={styles.hero}>
				<div className={styles.heroContent}>
					<InfoPagesTitle
						title='Анонсы клубных матчей и соревнований'
						description='						Официальная информация о матчах, тренировках и клубных соревнованиях'
					/>

					<div className={styles.badges}>
						<span>IPSC / Практическая стрельба</span>
						<span>Клубные матчи</span>
					</div>
				</div>
			</section>

			{/* ABOUT */}
			<section className={styles.section}>
				<h2 className={styles.sectionTitle}>О стрельбище</h2>
				<p className={styles.text}>
					Наш стрелковый клуб проводит регулярные соревнования по практической
					стрельбе. Мы организуем матчи разных уровней — от новичков до
					продвинутых стрелков. Основной приоритет — безопасность, дисциплина и
					спортивный прогресс.
				</p>
			</section>

			{/* COMPETITIONS */}
			<section className={styles.section}>
				<h2 className={styles.sectionTitle}>Ближайшие соревнования</h2>

				<ScheduleViewer scheduleId="competitions-schedule" />


				{/* NEWS */}
				<h2 className={styles.sectionTitle}>Новости</h2>

				<Carousel />
			</section>
		</div>
	)
}
