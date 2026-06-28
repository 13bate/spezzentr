import styles from './ArsenalShowCase.module.scss';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { weapons } from '../../model/weapons';
import { WeaponCard } from '../WeaponCard/WeaponCard';

export const ArsenalShowCase = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
          <div className={styles.badge}>
            <span />
            Арсенал
          </div>
          <h2>
            <span>18</span> eдиниц оружия
          </h2>
          <Link to="/shooting/intro" className={styles.button}>
            Весь арсенал
            <ArrowRight size={18} />
          </Link>
        </header>

        {/* Grid — 3 cards */}
        <div className={styles.grid}>
          {weapons.slice(0, 3).map((weapon) => (
            <WeaponCard key={weapon.title} {...weapon} />
          ))}
        </div>




        {/* Bottom: "Весь арсенал" button (visible on mobile) */}
        <div className={styles.mobileButton}>
          <Link to="/shooting/arsenal" className={styles.buttonFull}>
            Весь арсенал
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};
