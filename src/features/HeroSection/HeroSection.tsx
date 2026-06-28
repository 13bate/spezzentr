import styles from './HeroSection.module.scss';
import weaponHeroImg from "../../assets/weapon_hero.png"
import { Button } from '../../shared/ui/Button';
import { ArrowIcon, BigTrophyIcon, PersonIcon, ShieldIcon, StarIcon, TrophyIcon } from './assets/icons';
import { Link } from 'react-router';
import { SectionTitle } from '../../shared/ui/SectionTitle';



export const HeroSection = () => {
	return (
		<section className={styles.hero}>
			<div className={styles.content}>
				{/* Eyebrow badge */}
				<div className={styles.eyebrow}>
					<span className={styles.eyebrowDot} />
					<span className={styles.eyebrowText}>Современный стрелковый комплекс</span>
					<span className={styles.eyebrowDivider} />
					<span className={styles.eyebrowYear}>С 2013 года</span>
				</div>



				<SectionTitle title='ЦЕНТР СТРЕЛЬБЫ И ПОДГОТОВКИ.' />

				{/* Subtext */}
				<p className={styles.subtext}>
					Стрелковый центр нового поколения для спортсменов,<br />
					профессионалов и всех, кто ценит точность и дисциплину.
				</p>

				{/* CTAs */}
				<div className={styles.ctas}>
					<Button variant='primary'>
						Записаться
						<ArrowIcon />
					</Button>
				</div>

				{/* Stats */}
				<div className={styles.stats}>
					<div className={styles.statItem}>
						<span className={styles.statIcon}><ShieldIcon /></span>
						<div>
							<div className={styles.statTitle}>Безопасность</div>
							<div className={styles.statLabel}>на первом месте</div>
						</div>
					</div>
					<div className={styles.statItem}>
						<span className={styles.statIcon}><PersonIcon /></span>
						<div>
							<div className={styles.statTitle}>Опытные</div>
							<div className={styles.statLabel}>инструкторы</div>
						</div>
					</div>
					<div className={styles.statItem}>
						<span className={styles.statIcon}><TrophyIcon /></span>
						<div>
							<div className={styles.statTitle}>Соревнования</div>
							<div className={styles.statLabel}>и турниры</div>
						</div>
					</div>

					<div>
						<iframe
							src="https://yandex.ru/sprav/widget/rating-badge/67934832673?type=rating&theme=white"
							width="150"
							height="80"
							frameBorder="0"
							className={styles.ratingBadge}
							title="Yandex Rating Badge"
						></iframe>

					</div>

				</div>
			</div>


			{/* Right visual area */}
			<div className={styles.visual}>
				{/* Floating card — top right: club card */}
				<Link to="shooting/gift-cards">
					<div className={styles.cardClub}>
						<div className={styles.cardClubInner}>
							<div className={styles.cardClubText}>

								<span className={styles.cardClubTitle}>Подарочные сертификаты</span>
								<span className={styles.cardClubSub}>Подарите незабываемые эмоции</span>
							</div>
							<button className={styles.cardClubBtn}>
								<StarIcon />
							</button>
						</div>
						<div className={styles.cardClubArrow}>
							<ArrowIcon />
						</div>
					</div>
				</Link>

				{/* Decorative dot grid */}
				<div className={styles.dotGrid} aria-hidden="true">
					{Array.from({ length: 25 }).map((_, i) => (
						<span key={i} className={styles.dot} />
					))}
				</div>

				{/* Hero weapon image */}
				<div className={styles.weaponWrap}>
					<img
						src={weaponHeroImg}
						alt="Пистолет на мишени"
						className={styles.weaponImg}
					/>
				</div>

				{/* Floating card — bottom right: competition */}
				<Link to="shooting/competitions">
					<div className={styles.cardComp}>
						<div className={styles.cardCompInner}>
							<div>
								<div className={styles.cardCompLabel}>Ближайшее соревнование</div>
								<div className={styles.cardCompTitle}>Кубок ...</div>
								<div className={styles.cardCompDate}>24 мая 2025</div>
							</div>
							<div className={styles.cardCompTrophy}>
								<BigTrophyIcon />
							</div>
						</div>
					</div>
				</Link>
			</div>
		</section>
	);
};
