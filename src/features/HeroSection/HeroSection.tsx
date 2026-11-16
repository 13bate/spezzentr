import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HeroSection.module.scss';

export const HeroSection: React.FC = () => {
	// Функция для плавного скролла к секции
	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			const headerOffset = 80; // Отступ под фиксированный хедер
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
			{/* Легкий фон: свечение и сетка */}
			<div className={styles.bgGlow} />
			<div className={styles.bgGrid} />

			<div className={styles.container}>

				<h1 className={styles.title}>
					<span className={styles.titleSmall}>
						Частное образовательное учреждение
						<br />
						дополнительного профессионального образования
					</span>
					<span className={styles.titleBig}>
						«СПЕЦ<span>ЦЕНТР</span>»
					</span>
				</h1>

				{/* Ссылки */}
				<div className={styles.links}>
					<a
						href="#ShootingClub"
						className={styles.link}
						onClick={(e) => {
							e.preventDefault();
							scrollToSection('ShootingClub');
						}}
					>
						Стрелковый клуб
					</a>

					<span className={styles.divider}>/</span>

					<a
						href="#TrainingCenter"
						className={styles.link}
						onClick={(e) => {
							e.preventDefault();
							scrollToSection('TrainingCenter');
						}}
					>
						Учебный центр
					</a>

					<span className={styles.divider}>/</span>

					{/* Контакты - обычный переход на страницу */}
					<Link to="/contacts" className={styles.link}>
						Контакты
					</Link>
				</div>
			</div>
		</section>
	);
};
