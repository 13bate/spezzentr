import React from 'react';
import styles from './HeroSection.module.scss';
import heroImage from '../../assets/heroShapes.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong, faArrowRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router';

export const HeroSection: React.FC = () => {
	// Функция для плавного скролла к секции
	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			const headerOffset = 80; // Высота хедера
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
			<div className={styles.container}>
				{/* Левая колонка — текст */}
				<div className={styles.content}>
					<div className={styles.labelcontainer}>
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
						{/* Кнопка "СТРЕЛКОВЫЙ КЛУБ" — якорь на ShootingClubSection */}
						<Link
							to="#shooting-club"
							className={styles.btnaccent}
							onClick={(e) => {
								e.preventDefault();
								scrollToSection('shooting-club');
							}}
						>
							СТРЕЛКОВЫЙ КЛУБ
							<FontAwesomeIcon icon={faArrowRight} style={{ transform: 'rotate(320deg)' }} />
						</Link>

						{/* Кнопка "УЧЕБНЫЙ ЦЕНТР" — якорь на TrainigCenterSection */}
						<Link
							to="#training-center"
							className={styles.btnprimary}
							onClick={(e) => {
								e.preventDefault();
								scrollToSection('training-center');
							}}
						>
							УЧЕБНЫЙ ЦЕНТР
							<FontAwesomeIcon icon={faArrowRight} style={{ color: "rgb(200, 21, 36)", transform: "rotate(320deg)" }} />
						</Link>

						<Link to="/contacts" className={styles.btnprimary}>
							КОНТАКТЫ
							<FontAwesomeIcon icon={faArrowRight} style={{ color: "rgb(200, 21, 36)", transform: "rotate(320deg)" }} />
						</Link>
					</div>

					<div className={styles.stats}>
						<div className={styles.statitem}>
							<span className={styles.statnumber}>X+</span>
							<span className={styles.statlabel}>программ обучения</span>
						</div>
						<div className={styles.statitem}>
							<span className={styles.statnumber}>15+</span>
							<span className={styles.statlabel}>...</span>
						</div>
						<div className={styles.statitem}>
							<span className={styles.statnumber}>40+</span>
							<span className={styles.statlabel}>соревнований в год</span>
						</div>
						<div className={styles.statitem}>
							<span className={styles.statnumber}>10+</span>
							<span className={styles.statlabel}>лет опыта и безупречной репутации</span>
						</div>
					</div>

					<div className={styles.btmoreContainer}>
						<FontAwesomeIcon className={styles['arrow-icon-muted']} icon={faChevronDown} />
						<a href="#shooting-club" className={styles.btnmore} onClick={(e) => {
							e.preventDefault();
							scrollToSection('shooting-club');
						}}>
							ПОДРОБНЕЕ
						</a>
					</div>
				</div>

				{/* Правая колонка — изображение */}
				<div className={styles.imagewrapper}>
					<img src={heroImage} alt="Стрелковый комплекс" className={styles.heroimage} />
				</div>
			</div>

			<div className={styles.textureGraphy} />
			<div className={styles.textureGrid} />
			<div className={styles.textureDrops} />
		</section>
	);
};
