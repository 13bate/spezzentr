import styles from './ArsenalShowCase.module.scss';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { weapons } from '../../model/weapons';
import { WeaponCard } from '../WeaponCard/WeaponCard';

// Вспомогательная функция: определяем слаг категории
// (если в объекте weapon нет поля id/category)
const getCategorySlug = (title: string) => {
  if (title.includes('Пистолет')) return 'pistols';
  if (title.includes('Ружье') || title.includes('Ружья')) return 'shotguns';
  if (title.includes('Карабин')) return 'rifles';
  return 'all';
};

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
            Более 40 единиц оружия
          </h2>
          <Link to="/shooting/intro" className={styles.button}>
            Весь арсенал
            <ArrowRight size={18} />
          </Link>
        </header>

        {/* Grid — 3 cards */}
        <div className={styles.grid}>
          {weapons.slice(0, 3).map((weapon) => {
            // Берем category или id из данных, либо определяем по названию
            const categorySlug = (weapon as any).category || (weapon as any).id || getCategorySlug(weapon.title);

            return (
              <Link
                key={weapon.title}
                to={`/shooting/intro?category=${categorySlug}`}
                className={styles.cardLink} // Добавляем класс для обертки
              >
                <WeaponCard {...weapon} />
              </Link>
            );
          })}
        </div>

        {/* Bottom: "Весь арсенал" button (visible on mobile) */}
        <div className={styles.mobileButton}>
          <Link to="/shooting/intro" className={styles.buttonFull}>
            Весь арсенал
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};
