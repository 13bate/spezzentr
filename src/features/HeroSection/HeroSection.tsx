import React from 'react';
import styles from './HeroSection.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router';

export const HeroSection: React.FC = () => {
	// Функция для плавного скролла к секции
	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			const headerOffset = 80;
			const elementPosition = element.getBoundingClientRect().top;
			const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

			window.scrollTo({
				top: offsetPosition,
				behavior: 'smooth'
			});
		}
	};

	return (
		<section className={styles.hero}>
			{/* Background textures */}
			<div className={styles.textureGraphy} />
			<div className={styles.textureGrid} />
			<div className={styles.textureDrops} />

			<div className={styles.container}>
				<div className={styles.content}>
					<div className={styles.labelcontainer}>
						<FontAwesomeIcon className={styles['arrow-icon']} icon={faArrowLeftLong} />
						<h1 className={styles.label}>
							СТРЕЛКОВЫЙ КОМПЛЕКС И УЧЕБНЫЙ ЦЕНТР
						</h1>
					</div>

					<h2 className={styles.title}>
						<span className={styles.titleSmall}>
							Частное образовательное учреждение
							<br />
							дополнительного профессионального образования
						</span>
						<span className={styles.titleBig}>«СПЕЦЦЕНТР»</span>
					</h2>

					<p className={styles.description}>
						Профессиональные тренировки, обучение безопасному обращению с оружием
						и спортивная подготовка на современном стрелковом комплексе.
					</p>

					<div className={styles.buttons}>
						<Link
							to="#ShootingClub"
							className={styles.btnaccent}
							onClick={(e) => {
								e.preventDefault();
								scrollToSection('ShootingClub');
							}}
						>
							СТРЕЛКОВЫЙ КЛУБ
							<FontAwesomeIcon icon={faArrowRight} className={styles.btnIcon} />
						</Link>

						<Link
							to="#TrainingCenter"
							className={styles.btnprimary}
							onClick={(e) => {
								e.preventDefault();
								scrollToSection('TrainingCenter');
							}}
						>
							УЧЕБНЫЙ ЦЕНТР
							<FontAwesomeIcon icon={faArrowRight} className={styles.btnIconAccent} />
						</Link>

						<Link to="/contacts" className={styles.btnprimary}>
							КОНТАКТЫ
							<FontAwesomeIcon icon={faArrowRight} className={styles.btnIconAccent} />
						</Link>
					</div>

					<div className={styles.stats}>
						<div className={styles.statitem}>
							<span className={styles.statnumber}>20+</span>
							<span className={styles.statlabel}>программ обучения</span>
						</div>
						<div className={styles.statitem}>
							<span className={styles.statnumber}>20+</span>
							<span className={styles.statlabel}>клубных соревнований в год</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
