import React, { useState } from 'react'
import { PageTitle } from '../../shared/ui/PageTitle'
import style from './IntroShootingPage.module.scss'
import { getAllWeapons, weaponsData } from './weaponsData'

type WeaponCategory = 'all' | 'pistols' | 'rifles' | 'shotguns'

export const IntroShootingPage: React.FC = () => {
	const [activeCategory, setActiveCategory] = useState<WeaponCategory>('all')
	const [selectedWeapon, setSelectedWeapon] = useState<any>(null)

	// Получаем отображаемое оружие в зависимости от категории
	const getDisplayWeapons = () => {
		switch (activeCategory) {
			case 'pistols':
				return weaponsData.pistols.map(w => ({ ...w, category: 'pistols' }))
			case 'rifles':
				return weaponsData.rifles.map(w => ({ ...w, category: 'rifles' }))
			case 'shotguns':
				return weaponsData.shotguns.map(w => ({ ...w, category: 'shotguns' }))
			default:
				return getAllWeapons()
		}
	}

	// Статистика
	//  const allWeapons = getAllWeapons();
	//  const stats = {
	//    totalWeapons: allWeapons.length,
	//    minPrice: Math.min(...allWeapons.map(w => w.price)),
	//    maxPrice: Math.max(...allWeapons.map(w => w.price))
	//  };
	//
	return (
		<>
			<PageTitle title='Ознакомительная стрельба | СПЕЦЦЕНТР' />

			<main className={style.introShootingPage}>
				{/* Hero секция */}
				<section className={style.hero}>
					<h1 className={style.title}>Арсенал</h1>
					<p className={style.description}>
						Попробуйте свои силы в стрельбе из различных видов оружия.
						Профессиональные инструкторы помогут сделать первые выстрелы.
					</p>
				</section>

				{/* Фильтры */}
				<section className={style.filters}>
					<button
						className={`${style.filterButton} ${activeCategory === 'all' ? style.active : ''}`}
						onClick={() => setActiveCategory('all')}
					>
						Все категории
					</button>
					<button
						className={`${style.filterButton} ${activeCategory === 'pistols' ? style.active : ''}`}
						onClick={() => setActiveCategory('pistols')}
					>
						Пистолеты
					</button>
					<button
						className={`${style.filterButton} ${activeCategory === 'rifles' ? style.active : ''}`}
						onClick={() => setActiveCategory('rifles')}
					>
						Карабины
					</button>
					<button
						className={`${style.filterButton} ${activeCategory === 'shotguns' ? style.active : ''}`}
						onClick={() => setActiveCategory('shotguns')}
					>
						Ружья
					</button>
				</section>

				{/* Сетка оружия */}
				<section className={style.weaponsGrid}>
					{getDisplayWeapons().map((weapon, index) => (
						<div
							key={index}
							className={`${style.weaponCard} ${selectedWeapon === weapon ? style.selected : ''}`}
							onClick={() => setSelectedWeapon(weapon)}
						>
							<div className={style.weaponHeader}>
								<span className={style.weaponCategory}>
									{weapon.category === 'pistols' && 'Пистолет'}
									{weapon.category === 'rifles' && 'Карабин'}
									{weapon.category === 'shotguns' && 'Ружье'}
								</span>
							</div>

							<div className={style.weaponImage}>
								{weapon.image ? (
									<img src={weapon.image} alt={weapon.name} />
								) : (
									<div className={style.weaponSkeleton}>
										<span>{weapon.name}</span>
									</div>
								)}
							</div>

							<h3 className={style.weaponName}>{weapon.name}</h3>

							<div className={style.weaponDetails}>
								<div className={style.weaponCaliber}>
									<span>Калибр:</span>
									<strong>{weapon.caliber}</strong>
								</div>

								<div className={style.weaponPrice}>
									<span>Цена выстрела:</span>
									<strong>{weapon.price} ₽</strong>
								</div>

								<div className={style.weaponMinShots}>
									<span>Мин. количество:</span>
									<strong>{weapon.minShots}</strong>
								</div>
							</div>

							{weapon.description && (
								<p className={style.weaponDescription}>{weapon.description}</p>
							)}
						</div>
					))}
				</section>

				{/* Правила и информация */}
				<section className={style.infoSection}>
					<div className={style.infoCard}>
						<h3>Правила безопасности</h3>
						<ul>
							<li>Обязательный инструктаж перед стрельбой</li>
							<li>Всегда обращайтесь с оружием как с заряженным</li>
							<li>Пальцы на спусковом крючке только перед выстрелом</li>
							<li>Строго соблюдайте команды инструктора</li>
							<li>Запрещено направлять оружие в стороны</li>
						</ul>
					</div>
				</section>

				{/* Контакты */}
				<section className={style.contactsSection}>
					<h2 className={style.sectionTitle}>Записаться на стрельбу</h2>

					<div className={style.contactsGrid}>
						<div className={style.contactCard}>
							<div className={style.contactIcon}>📞</div>
							<div className={style.contactContent}>
								<h4>Телефон</h4>
								<a href='tel:+74832757545'>+7 (4832) 32-75-45</a>
								<a href='tel:+74832757546'>32-75-46</a>
							</div>
						</div>

						<div className={style.contactCard}>
							<div className={style.contactIcon}>📍</div>
							<div className={style.contactContent}>
								<h4>Адрес</h4>
								<p>г. Брянск, ул. Институтская д. 15 к. 3 офис 232</p>
							</div>
						</div>

						<div className={style.contactCard}>
							<div className={style.contactIcon}>⏰</div>
							<div className={style.contactContent}>
								<h4>Режим работы</h4>
								<p>Ежедневно с 10:00 до 20:00</p>
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	)
}
