import React from 'react';
import style from './ShootingClubSection.module.scss';
import { DarkCardList } from '../../shared/ui/DarkCardList';
import { shootingRangeCardsData } from './model';

// Определяем допустимые цвета
const cardColors = ['red', 'blue', 'green', 'gold'] as const;
type CardColor = typeof cardColors[number]; // 'red' | 'blue' | 'green' | 'gold'

export const ShootingClubSection: React.FC = () => {
  const cardsWithColor = shootingRangeCardsData.map((card, index) => ({
    ...card,
    color: cardColors[index % cardColors.length] as CardColor,
  }));

  return (
    <section className={style.section}>
      {/* Background effects */}
      <div className={style.bg}>
        <div className={style.bgGrid} />
        <div className={style.blob1} />
        <div className={style.blob2} />
        <div className={style.blob3} />
      </div>

      {/* Cards */}
      <DarkCardList items={cardsWithColor} linkText="Подробнее" />
    </section>
  );
};
