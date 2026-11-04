import React from 'react'
import { useSearchParams } from 'react-router' // или 'react-router-dom'
import { PageTitle } from '../../shared/ui/PageTitle'
import style from './IntroShootingPage.module.scss'
import type { WeaponCategory } from './types'
import { getAllWeapons, weaponsData } from "../../shared/model"
import { VisitRulesCard } from '../../features/VisitRulesCard'

export const IntroShootingPage: React.FC = () => {
	// Используем URL для хранения состояния фильтра
	const [searchParams, setSearchParams] = useSearchParams()
	
	// Получаем категорию из URL или ставим 'all' по умолчанию
	const activeCategory = (searchParams.get('category') as WeaponCategory) || 'all'

	// Функция для смены категории
	const handleCategoryChange = (category: WeaponCategory) => {
		if (category === 'all') {
			searchParams.delete('category')
		} else {
			searchParams.set('category', category)
		}
		setSearchParams(searchParams)
		
		// Скроллим к началу сетки при смене категории (опционально)
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

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

<VisitRulesCard/>

				{/* Фильтры */}
				<section className={style.filters}>
					<button
						className={`${style.filterButton} ${activeCategory === 'all' ? style.active : ''}`}
						onClick={() => handleCategoryChange('all')}
					>
						Все категории
					</button>
					<button
						className={`${style.filterButton} ${activeCategory === 'pistols' ? style.active : ''}`}
						onClick={() => handleCategoryChange('pistols')}
					>
						Пистолеты
					</button>
					<button
						className={`${style.filterButton} ${activeCategory === 'rifles' ? style.active : ''}`}
						onClick={() => handleCategoryChange('rifles')}
					>
						Карабины
					</button>
					<button
						className={`${style.filterButton} ${activeCategory === 'shotguns' ? style.active : ''}`}
						onClick={() => handleCategoryChange('shotguns')}
					>
						Ружья
					</button>
				</section>

				{/* Сетка оружия (без изменений) */}
				<section className={style.weaponsGrid}>
					{getDisplayWeapons().map((weapon, index) => (
						<div
							key={index}
							className={style.weaponCard}
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
									<img src={weapon.image} alt={weapon.name} loading="lazy" decoding="async" />
								) : (
									<div className={style.weaponSkeleton}>
										<span>{weapon.name}</span>
									</div>
								)}
							</div>

							<h3 className={style.weaponName}>{weapon.name}</h3>

							<div className={style.weaponDetails}>

							</div>

							{weapon.description && (
								<p className={style.weaponDescription}>{weapon.description}</p>
							)}
						</div>
					))}
				</section>

				{/* Правила и информация (без изменений) */}
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

				{/* Контакты (без изменений) */}
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
