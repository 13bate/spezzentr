import styles from './DirectionsSection.module.scss';
import { Link, useLocation } from 'react-router';
import { directions } from './model/data';
import { ArrowRightIcon } from './assets/icons';


// ── Component ──────────────────────────────────────────────
export const DirectionsSection = () => {
  const location = useLocation();
  const currentPath = location.pathname;


  return (
    <section className={styles.directions}>
      <div className={styles.container}>
        {/* Title at top */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            Направления
          </h2>
        </div>

        {/* List */}
        <div className={styles.list}>
          {directions.map((dir) => {
            const isActive = currentPath.startsWith(dir.href);
            return (
              <Link
                to={dir.href}
                key={dir.label}
                className={`${styles.cardLink} ${isActive ? styles.active : ''}`}
              >
                <div className={styles.card}>

                  <span className={styles.cardTitle}>{dir.label}</span>
                  <div className={styles.arrowWrapper}>
                    <ArrowRightIcon />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
