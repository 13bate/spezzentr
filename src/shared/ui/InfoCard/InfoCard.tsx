import React from 'react';
import { Link } from 'react-router-dom';
import styles from './InfoCard.module.scss';
import clsx from 'clsx';

export interface InfoCardProps {
  /** Заголовок карточки */
  title: string;
  /** Основное описание (большой блок текста) */
  description: string;
  /** Детали/характеристики — массив пар { label: string; value: string } */
  details?: Array<{ label: string; value: string }>;
  /** Список преимуществ/особенностей */
  features?: string[];
  /** Стоимость (опционально) */
  price?: string;
  /** Длительность (опционально) */
  duration?: string;
  /** Текст кнопки */
  buttonText?: string;
  /** Дополнительный класс */
  className?: string;
  /** Вариант темы: 'light' | 'dark' */
  variant?: 'light' | 'dark';
  /** Ссылка для кнопки */
  buttonLink?: string;
  /** Обработчик клика по кнопке */
  onButtonClick?: () => void;
}

export const InfoCard: React.FC<InfoCardProps> = ({
  title,
  description,
  details = [],
  features = [],
  price,
  duration,
  buttonText = 'Записаться',
  className = '',
  variant = 'light',
  buttonLink = '/contacts',
  onButtonClick,
}) => {
  return (
    <article className={clsx(styles.card, styles[variant], className)}>
      {/* Заголовок */}
      <header className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.titleUnderline} />
      </header>

      {/* Основное описание */}
      <div className={styles.descriptionBlock}>
        <p className={styles.description}>{description}</p>
      </div>

      {/* Детали (характеристики) */}
      {details.length > 0 && (
        <div className={styles.details}>
          {details.map((item, index) => (
            <div key={index} className={styles.detailItem}>
              <span className={styles.detailLabel}>{item.label}</span>
              <span className={styles.detailValue}>{item.value}</span>
            </div>
          ))}
        </div>
      )}

      {/* Преимущества/особенности */}
      {features.length > 0 && (
        <ul className={styles.features}>
          {features.map((feature, index) => (
            <li key={index} className={styles.featureItem}>
              <span className={styles.featureBullet} />
              {feature}
            </li>
          ))}
        </ul>
      )}

      {/* Нижняя часть: цена/длительность + кнопка */}
      <div className={styles.footer}>
        <div className={styles.meta}>
          {price && (
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Стоимость</span>
              <span className={styles.metaValue}>{price}</span>
            </div>
          )}
          {duration && (
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Длительность</span>
              <span className={styles.metaValue}>{duration}</span>
            </div>
          )}
        </div>

        <Link
          to={buttonLink}
          className={styles.button}
          onClick={onButtonClick}
        >
          {buttonText}
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 8h10"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </article>
  );
};
