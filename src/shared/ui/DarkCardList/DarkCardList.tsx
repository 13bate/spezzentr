import React from 'react';
import { Link } from 'react-router';
import styles from './DarkCardList.module.scss';
import type { CardItem } from './types';

interface CardListProps {
  items: CardItem[];
  className?: string;
  linkText?: string; // текст ссылки, по умолчанию "Подробнее"
}

export const DarkCardList: React.FC<CardListProps> = ({
  items,
  className,
  linkText = 'Подробнее',
}) => {
  return (
    <div className={`${styles.grid} ${className || ''}`}>
      {items.map((item, index) => {
        const colorClass = item.color || 'red';
        return (
          <Link
            key={item.id}
            to={item.href}
            className={`${styles.card} ${styles[colorClass]}`}
          >
            <div className={styles.cardInner}>
              <div className={styles.shimmer} />
              <div className={styles.cardTop}>
                <span className={styles.cardNum}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className={styles.cardAccent} />
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardLabel}>{item.label}</div>
                <p className={styles.cardDesc}>{item.description}</p>
              </div>
              <div className={styles.cardFooter}>
                <span className={styles.cardLink}>{linkText}</span>
                <span className={styles.cardArrow}>→</span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
