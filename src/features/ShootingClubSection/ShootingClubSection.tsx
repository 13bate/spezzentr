import React from 'react'
import { Link } from 'react-router'
import style from './ShootingClubSection.module.scss'
import {SectionTitle} from "../../shared/ui/SectionTitle"

export const shootingRangeCardsData = [
  {
    id: 't1',
    label: 'IPSC /Пистолет/Карабин',
    href: '/shooting/practice',
    description: 'Еженедельные групповые и индивидуальные тренировки проводятся по утверждённому расписанию',
  },
  {
    id: 't2',
    label: 'Стрелковые программы и курсы',
    href: '/shooting/courses',
    description: 'Авторские курсы от инструкторов: от базовой техники до тактической стрельбы.',
  },
  {
    id: 't3',
    label: 'Программы для детей и подростков',
    href: '/shooting/youth',
    description: 'Безопасное знакомство с оружием под контролем инструктора. С 14 лет.',
  },
  {
    id: 't4',
    label: 'Подарочные сертификаты',
    href: '/shooting/gift-cards',
    description: 'Подарите незабываемые эмоции — стрельба из разных видов оружия с инструктором.',
  },
]

const IPSCTarget = () => (
  <div className={style.target}>
    <div className={style.targetHead} />
    <div className={style.targetBody}>
      <div className={style.targetC} />
      <div className={style.targetA} />
      <div className={style.targetDot} />
      <div className={`${style.hole} ${style.h1}`} />
      <div className={`${style.hole} ${style.h2}`} />
      <div className={`${style.hole} ${style.h3}`} />
    </div>
  </div>
)

export const ShootingClubSection: React.FC = () => {
  return (
    <section className={style.section}>

      {/* Background effects */}
      <div className={style.bg}>
        <div className={style.bgGrid} />
        <div className={style.blob1} />
        <div className={style.blob2} />
        <div className={style.blob3} />
      </div>

      {/* Cards */}
      <div className={style.grid}>
        {shootingRangeCardsData.map((card, i) => (
          <Link
            key={card.id}
            to={card.href}
            className={`${style.card} ${style[card.id]}`}
            style={{ '--index': i } as React.CSSProperties}
          >
            <div className={style.cardInner}>
              <div className={style.shimmer} />
              <div className={style.cardTop}>
                <span className={style.cardNum}>{String(i + 1).padStart(2, '0')}</span>
                <div className={style.cardAccent} />
              </div>
              <div className={style.cardBody}>
                <div className={style.cardLabel}>{card.label}</div>
                <p className={style.cardDesc}>{card.description}</p>
              </div>
              <div className={style.cardFooter}>
                <span className={style.cardLink}>Подробнее</span>
                <span className={style.cardArrow}>→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Arsenal */}
      <div className={style.arsenal}>
        <div className={style.arsenalLeft}>
          <div className={style.arsenalEye}>Наш арсенал</div>
          <div className={style.arsenalTitle}>18 единиц оружия</div>
          <p className={style.arsenalDesc}>Пистолеты, карабины, ружья — стреляйте из того, о чём мечтали.</p>
        </div>
        <div className={style.arsenalMid}>
          {['Пистолеты', 'Карабины', 'Ружья'].map(item => (
            <div key={item} className={style.aItem}>{item}</div>
          ))}
        </div>
        <div className={style.arsenalRight}>
          <IPSCTarget />
          <Link to="/shooting/intro" className={style.arsenalBtn}>
            Весь арсенал →
          </Link>
        </div>
      </div>

    </section>
  )
}
