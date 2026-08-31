import React from 'react';
import style from './ShootingClubSection.module.scss';
import { DarkCardList } from '../../shared/ui/DarkCardList';
import { shootingRangeCardsData } from './model';

type CardColor = 'red' | 'blue' | 'green' | 'gold';

export const ShootingClubSection: React.FC = () => {
  const cardColors: CardColor[] = ['red', 'blue', 'green', 'gold'];
  
  const cardsWithColor = shootingRangeCardsData.map((card, index) => ({
    ...card,
    color: cardColors[index % cardColors.length] as CardColor,
  }));

  return (
    // Добавляем id для якорной ссылки
    <section id="shooting-club" className={style.section}>
      {/* Background effects */}
      <div className={style.bg}>
        <div className={style.bgGrid} />
        <div className={style.blob1} />
        <div className={style.blob2} />
        <div className={style.blob3} />
      </div>

      <DarkCardList items={cardsWithColor} linkText="Подробнее" />
    </section>
  );
};
