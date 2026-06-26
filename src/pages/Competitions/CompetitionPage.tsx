import clsx from 'clsx'
import { InfoPagesTitle } from '../../shared/ui/InfoPagesTitle'
import styles from './CompetitionPage.module.scss'

interface Props {
	className?: string
}

const competitions = [
	{
		id: 1,
		title: 'IPSC Практическая стрельба — клубный матч',
		date: '12 июля 2026',
		level: 'Открытый',
		status: 'Регистрация открыта',
	},
	{
		id: 2,
		title: 'Дуэльная стрельба — Challenge Stage',
		date: '19 июля 2026',
		level: 'Продвинутый',
		status: 'Скоро старт',
	},
	{
		id: 3,
		title: 'Тренировочный матч новичков',
		date: '26 июля 2026',
		level: 'Новички',
		status: 'Набор открыт',
	},
]

const news = [
	{
		id: 1,
		title: 'Обновлён регламент безопасного обращения с оружием',
		text: 'Добавлены новые требования к прохождению мандатной комиссии и проверке экипировки.',
	},
	{
		id: 2,
		title: 'Открыта регистрация на летний чемпионат клуба',
		text: 'Ожидается участие более 80 стрелков из разных категорий.',
	},
]

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

				<div className={styles.grid}>
					{competitions.map(c => (
						<div key={c.id} className={styles.card}>
							<div className={styles.cardTop}>
								<span className={styles.level}>{c.level}</span>
								<span className={styles.status}>{c.status}</span>
							</div>

							<h3 className={styles.cardTitle}>{c.title}</h3>
							<p className={styles.date}>{c.date}</p>

							<button className={styles.button}>Подробнее</button>
						</div>
					))}
				</div>
			</section>

			{/* NEWS */}
			<section className={styles.section}>
				<h2 className={styles.sectionTitle}>Новости клуба</h2>

				<div className={styles.newsList}>
					{news.map(n => (
						<article key={n.id} className={styles.newsItem}>
							<h3 className={styles.newsTitle}>{n.title}</h3>
							<p className={styles.newsText}>{n.text}</p>
						</article>
					))}
				</div>
			</section>
		</div>
	)
}
