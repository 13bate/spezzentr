import styles from './ArsenalSection.module.scss';
import weaponImg from '../../assets/arsenal_weapon.png';
import { Button } from '../../shared/ui/Button';
import { useScrollToContacts } from '../../shared/utils/ScrollToContacts';
import { Link } from 'react-router';

// ── Icons ──────────────────────────────────────────────────
const ArrowRightIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M3 9h12M10 4l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CrosshairIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="6" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="10" cy="10" r="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M10 1v4M10 15v4M1 10h4M15 10h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const PlusIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// Corner bracket SVG
const CornerBracket = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M2 10V2h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Radar/targeting reticle background
const RadarReticle = () => (
  <svg
    className={styles.radarSvg}
    viewBox="0 0 500 500"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="250" cy="250" r="220" stroke="#b32025" strokeWidth="0.6" strokeOpacity="0.12" />
    <circle cx="250" cy="250" r="160" stroke="#b32025" strokeWidth="0.6" strokeOpacity="0.10" />
    <circle cx="250" cy="250" r="100" stroke="#b32025" strokeWidth="0.6" strokeOpacity="0.08" />
    <circle cx="250" cy="250" r="50" stroke="#b32025" strokeWidth="0.6" strokeOpacity="0.08" />
    {/* crosshair lines */}
    <line x1="250" y1="30" x2="250" y2="470" stroke="#b32025" strokeWidth="0.5" strokeOpacity="0.08" />
    <line x1="30" y1="250" x2="470" y2="250" stroke="#b32025" strokeWidth="0.5" strokeOpacity="0.08" />
  </svg>
);

// Dot grid
const DotGrid = () => (
  <svg className={styles.dotGrid} width="80" height="50" viewBox="0 0 80 50" fill="none">
    {Array.from({ length: 5 }).map((_, row) =>
      Array.from({ length: 8 }).map((_, col) => (
        <circle
          key={`${row}-${col}`}
          cx={col * 10 + 5}
          cy={row * 10 + 5}
          r="1.2"
          fill="#b32025"
          fillOpacity="0.2"
        />
      ))
    )}
  </svg>
);

// ── Component ──────────────────────────────────────────────
export const ArsenalSection = () => {
  return (
    <section className={styles.arsenal}>
      <div className={styles.container}>

        {/* Left: Content */}
        <div className={styles.content}>
          {/* Eyebrow with crosshair and line */}
          <div className={styles.eyebrowRow}>
            <span className={styles.eyebrow}>Арсенал</span>
            <span className={styles.eyebrowLine} />
            <span className={styles.eyebrowIcon}>
              <CrosshairIcon size={18} />
            </span>
          </div>

          <h1 className={styles.title}>
            Выбирай. Целься.<br />
            Попадай.
          </h1>

          <p className={styles.subtext}>
            Современное оружие, безопасные условия
            и профессиональные инструкторы.
          </p>
          <a href='/#contacts'>
            <Button onClick={() => useScrollToContacts} >
              <span className={styles.ctaIcon}><CrosshairIcon size={18} /></span>
              <span className={styles.ctaText}>ЗАПИСАТЬСЯ НА СТРЕЛЬБУ</span>
              <span className={styles.ctaArrow}><ArrowRightIcon /></span>
            </Button>
          </a>
        </div>

        {/* Right: Weapon Image */}
        <div className={styles.imageWrapper}>
          <RadarReticle />

          <img
            src={weaponImg}
            alt="Современное оружие"
            className={styles.weaponImg}
          />

          {/* Corner brackets */}
          <span className={`${styles.corner} ${styles.cornerTL}`}>
            <CornerBracket size={28} />
          </span>
          <span className={`${styles.corner} ${styles.cornerBR}`}>
            <CornerBracket size={28} />
          </span>

          {/* Plus accents */}
          <span className={`${styles.plusAccent} ${styles.plusTop}`}>
            <PlusIcon size={14} />
          </span>
          <span className={`${styles.plusAccent} ${styles.plusBottom}`}>
            <PlusIcon size={14} />
          </span>

          {/* Dot grid */}
          <DotGrid />

          {/* Dash line bottom right */}
          <svg className={styles.dashLine} width="60" height="4" viewBox="0 0 60 4">
            <line x1="0" y1="2" x2="60" y2="2" stroke="#b32025" strokeWidth="1.5"
              strokeDasharray="4 4" strokeOpacity="0.35" strokeLinecap="round" />
          </svg>
        </div>

      </div>
    </section>
  );
};
