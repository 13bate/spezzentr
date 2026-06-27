import styles from "../ShootingProgramsPage.module.scss"

// ─── Icons ───────────────────────────────────────────────────

export const IconTarget = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='1.8'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <circle cx='12' cy='12' r='10' />
    <circle cx='12' cy='12' r='6' />
    <circle cx='12' cy='12' r='2' />
  </svg>
)

export const IconClock = ({ size = 14 }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <circle cx='12' cy='12' r='10' />
    <polyline points='12 6 12 12 16 14' />
  </svg>
)

export const IconArrow = ({ size = 14 }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2.5'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <line x1='5' y1='12' x2='19' y2='12' />
    <polyline points='12 5 19 12 12 19' />
  </svg>
)

export const IconPhone = ({ size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.28-1.28a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z' />
  </svg>
)

export const IconShield = ({ size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' />
  </svg>
)

// ─── Crosshair SVG ───────────────────────────────────────────

export const CrosshairDecor = () => (
  <svg
    className={styles.heroCrosshair}
    width='240'
    height='240'
    viewBox='0 0 240 240'
    fill='none'
  >
    <circle cx='120' cy='120' r='100' stroke='#b32025' strokeWidth='1.2' />
    <circle cx='120' cy='120' r='72' stroke='#7f868e' strokeWidth='0.8' />
    <circle cx='120' cy='120' r='44' stroke='#b32025' strokeWidth='1.2' />
    <circle cx='120' cy='120' r='16' stroke='#7f868e' strokeWidth='0.8' />
    <circle cx='120' cy='120' r='4' fill='#b32025' />
    {/* crosshair lines */}
    <line x1='120' y1='8' x2='120' y2='90' stroke='#7f868e' strokeWidth='0.8' />
    <line
      x1='120'
      y1='150'
      x2='120'
      y2='232'
      stroke='#7f868e'
      strokeWidth='0.8'
    />
    <line x1='8' y1='120' x2='90' y2='120' stroke='#7f868e' strokeWidth='0.8' />
    <line
      x1='150'
      y1='120'
      x2='232'
      y2='120'
      stroke='#7f868e'
      strokeWidth='0.8'
    />
    {/* tick marks */}
    {[30, 60, 90, 150, 180, 210].map(angle => {
      const rad = (angle * Math.PI) / 180
      const x1 = 120 + 96 * Math.cos(rad)
      const y1 = 120 + 96 * Math.sin(rad)
      const x2 = 120 + 104 * Math.cos(rad)
      const y2 = 120 + 104 * Math.sin(rad)
      return (
        <line
          key={angle}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke='#7f868e'
          strokeWidth='0.8'
        />
      )
    })}
  </svg>
)
