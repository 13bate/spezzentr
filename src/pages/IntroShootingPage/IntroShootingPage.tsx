import React, { useState } from 'react';
import { PageTitle } from '../../shared/ui/PageTitle';
import style from './IntroShootingPage.module.scss';

// Типы оружия
type WeaponCategory = 'all' | 'pistols' | 'rifles' | 'shotguns';

// Данные об оружии
const weaponsData = {
  pistols: [
    { name: 'Пистолет Макарова', caliber: '9х18', price: 80, minShots: 10, image: '🔫' },
    { name: 'Пистолет Ярыгина', caliber: '9х19', price: 100, minShots: 10, image: '🔫' },
    { name: 'GLOСK 17', caliber: '9х19', price: 100, minShots: 10, image: '🔫' },
    { name: 'GLOСK 17 optic', caliber: '9х19', price: 100, minShots: 10, image: '🎯' },
    { name: 'CZ 85B', caliber: '9х19', price: 100, minShots: 10, image: '🔫' },
    { name: 'Револьвер ARMSCOR M200', caliber: '.38 Spl', price: 150, minShots: 6, image: '🔫' },
    { name: 'SIG SAUER P226 .40', caliber: '.40 S&W', price: 120, minShots: 10, image: '🔫' },
    { name: 'COLT 1911', caliber: '.45 ACP', price: 120, minShots: 10, image: '🔫' },
    { name: 'TT', caliber: '7,62х25', price: 140, minShots: 10, image: '🔫' }
  ],
  rifles: [
    { name: 'ПП ВИТЯЗЬ', caliber: '9х19', price: 100, minShots: 10, image: '🔫' },
    { name: 'ППШ', caliber: '9х19', price: 100, minShots: 10, image: '🔫' },
    { name: 'АК-103', caliber: '7,62х39', price: 110, minShots: 10, image: '🔫' },
    { name: 'ROSSI 92', caliber: '.357 Magnum / .38 Spl', price: 150, minShots: 5, image: '🔫' },
    { name: 'AR-15', caliber: '.223 Rem', price: 115, minShots: 10, image: '🔫' },
    { name: 'ВИНТОВКА МОСИНА', caliber: '7,62х54R', price: 200, minShots: 5, image: '🔫' },
    { name: 'СВД', caliber: '7,62х54R', price: 200, minShots: 5, image: '🔫' },
    { name: 'СВТ', caliber: '7,62х54R', price: 200, minShots: 5, image: '🔫' }
  ],
  shotguns: [
    { name: 'ПОМПОВОЕ РУЖЬЁ', caliber: '12', price: 240, minShots: 5, image: '🔫' }
  ]
};

export const IntroShootingPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<WeaponCategory>('all');
  const [selectedWeapon, setSelectedWeapon] = useState<any>(null);

  // Получаем все оружие для отображения
  const getAllWeapons = () => {
    return [
      ...weaponsData.pistols.map(w => ({ ...w, category: 'pistols' })),
      ...weaponsData.rifles.map(w => ({ ...w, category: 'rifles' })),
      ...weaponsData.shotguns.map(w => ({ ...w, category: 'shotguns' }))
    ];
  };

  // Получаем отображаемое оружие в зависимости от категории
  const getDisplayWeapons = () => {
    switch (activeCategory) {
      case 'pistols':
        return weaponsData.pistols.map(w => ({ ...w, category: 'pistols' }));
      case 'rifles':
        return weaponsData.rifles.map(w => ({ ...w, category: 'rifles' }));
      case 'shotguns':
        return weaponsData.shotguns.map(w => ({ ...w, category: 'shotguns' }));
      default:
        return getAllWeapons();
    }
  };

  // Статистика
  const stats = {
    totalWeapons: getAllWeapons().length,
    minPrice: Math.min(...getAllWeapons().map(w => w.price)),
    maxPrice: Math.max(...getAllWeapons().map(w => w.price))
  };

  return (
    <>
      <PageTitle title="Ознакомительная стрельба | СПЕЦЦЕНТР" />

      <main className={style.introShootingPage}>
        {/* Hero секция */}
        <section className={style.hero}>
          <h1 className={style.title}>Ознакомительная стрельба</h1>
          <p className={style.description}>
            Попробуйте свои силы в стрельбе из различных видов оружия.
            Профессиональные инструкторы помогут сделать первые выстрелы.
          </p>

          <div className={style.stats}>
            <div className={style.statItem}>
              <span className={style.statValue}>{stats.totalWeapons}</span>
              <span className={style.statLabel}>единиц оружия</span>
            </div>
            <div className={style.statItem}>
              <span className={style.statValue}>{stats.minPrice}₽</span>
              <span className={style.statLabel}>минимальная цена</span>
            </div>
            <div className={style.statItem}>
              <span className={style.statValue}>5-10</span>
              <span className={style.statLabel}>мин. выстрелов</span>
            </div>
          </div>
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
                  {weapon.category === 'pistols' && '🔫 Пистолет'}
                  {weapon.category === 'rifles' && '🔫 Карабин'}
                  {weapon.category === 'shotguns' && '🔫 Ружье'}
                </span>
              </div>

              <div className={style.weaponImage}>
                {weapon.image === '🔫' ? '🔫' : '🎯'}
              </div>

              <h3 className={style.weaponName}>{weapon.name}</h3>

              <div className={style.weaponDetails}>
                <div className={style.weaponCaliber}>
                  <span>Калибр:</span>
                  <strong>{weapon.caliber}</strong>
                </div>

                <div className={style.weaponPrice}>
                  <span>Стоимость выстрела:</span>
                  <strong>{weapon.price} ₽</strong>
                </div>

                <div className={style.weaponMinShots}>
                  <span>Мин. количество:</span>
                  <strong>{weapon.minShots}</strong>
                </div>
              </div>

              <button className={style.selectButton}>
                Выбрать
              </button>
            </div>
          ))}
        </section>

        {/* Информация о пакетах */}
        <section className={style.packagesSection}>
          <h2 className={style.sectionTitle}>Готовые пакеты</h2>

          <div className={style.packagesGrid}>
            <div className={style.packageCard}>
              <h3>Стартовый</h3>
              <ul>
                <li>3 вида оружия</li>
                <li>30 выстрелов</li>
                <li>Инструктаж</li>
              </ul>
              <div className={style.packagePrice}>2 500 ₽</div>
            </div>

            <div className={`${style.packageCard} ${style.popular}`}>
              <div className={style.popularBadge}>Популярный</div>
              <h3>Оптимальный</h3>
              <ul>
                <li>5 видов оружия</li>
                <li>50 выстрелов</li>
                <li>Инструктаж</li>
                <li>Фото с мишенью</li>
              </ul>
              <div className={style.packagePrice}>4 000 ₽</div>
            </div>

            <div className={style.packageCard}>
              <h3>Экстрим</h3>
              <ul>
                <li>7 видов оружия</li>
                <li>80 выстрелов</li>
                <li>Инструктаж</li>
                <li>Фото/видео</li>
                <li>Сертификат</li>
              </ul>
              <div className={style.packagePrice}>6 500 ₽</div>
            </div>
          </div>
        </section>

        {/* Правила и информация */}
        <section className={style.infoSection}>
          <div className={style.infoCard}>
            <h3>Правила безопасности</h3>
            <ul>
              <li>Перед стрельбой обязательный инструктаж</li>
              <li>Всегда обращайтесь с оружием как с заряженным</li>
              <li>Пальцы на спусковом крючке только перед выстрелом</li>
              <li>Строго соблюдайте команды инструктора</li>
            </ul>
          </div>

          <div className={style.infoCard}>
            <h3>Что включено</h3>
            <ul>
              <li>Инструктаж по безопасности</li>
              <li>Помощь инструктора</li>
              <li>Защитные очки и наушники</li>
              <li>Боеприпасы</li>
              <li>Мишени</li>
            </ul>
          </div>
        </section>

        {/* Контакты */}
        <section className={style.contactsSection}>
          <h2 className={style.sectionTitle}>Записаться на стрельбу</h2>

          <div className={style.contacts}>
            <div className={style.contactItem}>
              <span className={style.contactIcon}>📞</span>
              <div>
                <a href="tel:+74832757545">+7 (4832) 32-75-45</a>
                <a href="tel:+74832757546">32-75-46</a>
              </div>
            </div>

            <div className={style.contactItem}>
              <span className={style.contactIcon}>📍</span>
              <div>
                <p>г. Брянск, ул. Институтская д. 15 к. 3 офис 232</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
