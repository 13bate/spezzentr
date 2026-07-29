// features/TrainingSection/TrainingSection.tsx
import React from 'react';
import { DarkCardList } from '../../shared/ui/DarkCardList';
import { trainingCardsData } from './model';
import styles from './TrainingSection.module.scss';

export const TrainingSection: React.FC = () => {
  return (
    <section className={styles.section}>
      {/* Можно добавить заголовок и фон, как в ShootingClubSection */}
      <div className={styles.bg}>
        <div className={styles.bgGrid} />
        <div className={styles.blob1} />
        <div className={styles.blob2} />
        <div className={styles.blob3} />
      </div>

      <div className={styles.content}>
        <DarkCardList items={trainingCardsData} linkText="Подробнее" />
      </div>
    </section>
  );
};
