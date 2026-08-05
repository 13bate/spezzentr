import React from 'react';
import { Link } from 'react-router';
import styles from './CourseBanner.module.scss';
import type { CourseBannerProps } from './types';

export const CourseBanner: React.FC<CourseBannerProps> = ({
  title,
  description,
  highlights = [],
  price,
  duration,
  buttonText = 'Подробнее',
  buttonLink = '/',
  imageUrl,
  imageAlt = 'Изображение курса',
  imagePosition = 'left',
  className = '',
}) => {
  // Флаг для чередования
  const isLeft = imagePosition === 'left';

  return (
    <section className={`${styles.banner} ${className}`}>
      <div className={`${styles.container} ${isLeft ? styles.left : styles.right}`}>
        {/* Изображение */}
        <div className={styles.imageWrap}>
          {imageUrl ? (
            <img src={imageUrl} alt={imageAlt} className={styles.image} />
          ) : (
            <div className={styles.imagePlaceholder}>
              <span>Изображение</span>
            </div>
          )}
        </div>

        {/* Контент */}
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>

          {highlights.length > 0 && (
            <ul className={styles.highlights}>
              {highlights.map((item, index) => (
                <li key={index} className={styles.highlightItem}>
                  <span className={styles.bullet} />
                  {item}
                </li>
              ))}
            </ul>
          )}

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

            <Link to={buttonLink} className={styles.button}>
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
        </div>
      </div>
    </section>
  );
};
