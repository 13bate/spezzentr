import React from 'react';
import styles from './HeroSection.module.scss';
import heroImage from '../../assets/heroShapes.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong, faArrowRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';

export const HeroSection: React.FC = () => {
	return (
		<section className={styles.hero}>
			<div className={styles.container}>
				{/* Левая колонка — текст */}
				<div className={styles.content}>
					<div className={styles.labelcontainer}> {/* ← исправлено */}
						<FontAwesomeIcon className={styles['arrow-icon']} icon={faArrowLeftLong} />
						<h1 className={styles.label}>
							СТРЕЛКОВЫЙ КОМПЛЕКС И УЧЕБНЫЙ ЦЕНТР
						</h1>
					</div>

					<h2 className={styles.title}>

						<span className={styles.titleAccent}>ЧОУ ДПО</span> <br /> "СПЕЦЦЕНТР"
					</h2>

					<p className={styles.description}>
						Профессиональные тренировки, обучение безопасному обращению с оружием
						и спортивная подготовка на современном стрелковом комплексе.
					</p>

					<div className={styles.buttons}>
						<a href="/club" className={styles.btnaccent}>СТРЕЛКОВЫЙ КЛУБ <FontAwesomeIcon icon={faArrowRight} style={{ transform: 'rotate(320deg)' }} /></a>  {/* ← исправлено */}
						<a href="/training" className={styles.btnprimary}>УЧЕБНЫЙ ЦЕНТР <FontAwesomeIcon icon={faArrowRight} style={{ color: "rgb(200, 21, 36)", transform: "rotate(320deg)" }} /></a>  {/* ← исправлено */}
						<a href="/signup" className={styles.btnprimary}>КОНТАКТЫ <FontAwesomeIcon icon={faArrowRight} style={{ color: "rgb(200, 21, 36)", transform: "rotate(320deg)" }} /></a>  {/* ← исправлено */}
					</div>

					<div className={styles.stats}>
						<div className={styles.statitem}>  {/* ← исправлено */}
							<span className={styles.statnumber}>X+</span>  {/* ← исправлено */}
							<span className={styles.statlabel}>программ обучения</span>  {/* ← исправлено */}
						</div>
						<div className={styles.statitem}>  {/* ← исправлено */}
							<span className={styles.statnumber}>15+</span>  {/* ← исправлено */}
							<span className={styles.statlabel}>...</span>  {/* ← исправлено */}
						</div>
						<div className={styles.statitem}>  {/* ← исправлено */}
							<span className={styles.statnumber}>40+</span>  {/* ← исправлено */}
							<span className={styles.statlabel}>соревнований в год</span>  {/* ← исправлено */}
						</div>
						<div className={styles.statitem}>  {/* ← исправлено */}
							<span className={styles.statnumber}>10+</span>  {/* ← исправлено */}
							<span className={styles.statlabel}>лет опыта и безупречной репутации</span>  {/* ← исправлено */}
						</div>
					</div>

					<div className={styles.btmoreContainer}>
						<FontAwesomeIcon className={styles['arrow-icon-muted']} icon={faChevronDown} />
						<a href="#ShootingClubSection" className={styles.btnmore}>  {/* ← исправлено */}
							ПОДРОБНЕЕ
						</a>

					</div>
				</div>

				{/* Правая колонка — изображение */}
				<div className={styles.imagewrapper}>  {/* ← исправлено */}
					<img src={heroImage} alt="Стрелковый комплекс" className={styles.heroimage} />
				</div>

			</div>

			<div className={styles.textureGraphy} />
			<div className={styles.textureGrid} />
			<div className={styles.textureDrops} />
		</section >
	);
};
