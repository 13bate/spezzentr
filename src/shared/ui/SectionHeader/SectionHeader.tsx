import React from 'react';
import styles from './SectionHeader.module.scss';
import type { SectionHeaderProps } from './types';

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  eyebrow,
  description,
  align = 'left',
  accentColor,
  className = '',
  children,
  noAnimation = false,
}) => {
  const colorStyle = accentColor ? { '--accent-color': accentColor } as React.CSSProperties : {};

  return (
    <header
      className={`
        ${styles.header}
        ${styles[align]}
        ${noAnimation ? '' : styles.animate}
        ${className}
      `}
      style={colorStyle}
    >
      <div className={styles.content}>
        {eyebrow && (
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            <span className={styles.eyebrowText}>{eyebrow}</span>
          </div>
        )}

        <h2 className={styles.title}>{title}</h2>

        {description && (
          <p className={styles.description}>{description}</p>
        )}

        {children && (
          <div className={styles.extra}>
            {children}
          </div>
        )}
      </div>

      {/* Декоративная линия (под заголовком) */}
      <div className={styles.lineWrap}>
        <span className={styles.line} />
        <span className={styles.lineAccent} />
      </div>
    </header>
  );
};
