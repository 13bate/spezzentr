import React from 'react'
import { Link } from 'react-router'
import style from './IntroShootingOverview.module.scss'

export const introShootingContent = {
  title: 'Стрелковые программы',
  description:
    'Попробуйте свои силы в стрельбе из пистолетов, ружей и карабинов. Программа включает полный инструктаж, экипировку и помощь личного инструктора.',
  highlights: ['Индивидуальный подход', 'Опытные инструкторы', '3 вида оружия'],
  buttonText: 'Подробнее о программе',
  buttonLink: '/shooting/intro',
}

const courses = [
  { tag: 'Пистолет', title: 'Базовый курс IPSC', hours: '6 ч', price: 'от 4 500 ₽', z: 'cc1' },
  { tag: 'Ружьё', title: 'Спортинг и стенд', hours: '3 ч', price: 'от 2 800 ₽', z: 'cc2' },
  { tag: 'Карабин', title: 'Тактическая стрельба', hours: '4 ч', price: 'от 3 200 ₽', z: 'cc3' },
]

const skills = [
  { label: 'Пистолет', pct: 85 },
  { label: 'Карабин', pct: 70 },
  { label: 'Ружьё', pct: 92 },
]

const CheckIcon = () => (
  <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
    <path d="M1 3l2 2 4-4" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const SceneVisual = () => (
  <div className={style.visual}>

    {/* Stacked course cards — render back to front */}
    <div className={style.cardStack}>
      {[...courses].reverse().map((c) => (
        <div key={c.tag} className={`${style.courseCard} ${style[c.z]}`}>
          <div className={style.ccTag}>{c.tag}</div>
          <div className={style.ccTitle}>{c.title}</div>
          <div className={style.ccMeta}>
            <span className={style.ccPill}>{c.hours}</span>
            <span className={style.ccPill}>{c.price}</span>
          </div>
        </div>
      ))}
    </div>
    <div className={style.targetWrap}>
      <div className={style.paper}>
        <div className={style.zoneD} />
        <div className={style.zoneC} />
        <div className={style.silHead} />
        <div className={style.silBody}>
          <div className={style.zoneA} />
        </div>
        <div className={`${style.hole} ${style.hA1}`} />
        <div className={`${style.hole} ${style.hA2}`} />
        <div className={`${style.hole} ${style.hA3}`} />
        <div className={`${style.hole} ${style.hB1}`} />
        <div className={`${style.hole} ${style.hB2}`} />
        <div className={style.score}>A·ZONE</div>
      </div>
      <div className={style.crossbar} />
      <div className={style.pole} />
    </div>

    {/* Medal */}
    <div className={style.medal}>
      <div className={style.medalRibbon} />
      <div className={style.medalCircle}>
        <div className={style.star} />
      </div>
      <div className={style.medalLabel}>Сертификат</div>
    </div>


    {/* Weapon silhouettes */}
    <div className={style.weapons}>
      <div className={style.wrifle} />
      <div className={style.wshotgun} />
      <div className={style.wpistol} />
    </div>

    {/* Instructor badge */}
    <div className={style.instrBadge}>
      <div className={style.instrAvatar}>ИВ</div>
      <div className={style.instrInfo}>
        <div className={style.instrName}>Личный инструктор</div>
        <div className={style.instrRole}>Сертифицированный МКПС</div>
      </div>
    </div>

  </div>
)

interface Props {
  className?: string
}

export const IntroShootingOverview: React.FC<Props> = ({ className }) => {
  return (
    <section className={`${className ?? ''} ${style.section}`}>

      <div className={style.bg}>
        <div className={style.bgGrid} />
        <div className={style.b1} />
        <div className={style.b2} />
      </div>

      <div className={style.inner}>
        <div className={style.content}>
          <div className={style.eyebrow}>Стрелковый клуб</div>
          <h2 className={style.title}>
            Стрелковые программы<br />и <em>курсы</em>
          </h2>
          <p className={style.desc}>{introShootingContent.description}</p>

          <ul className={style.list}>
            {introShootingContent.highlights.map((item, i) => (
              <li key={i}>
                <span className={style.tick}><CheckIcon /></span>
                {item}
              </li>
            ))}
          </ul>

          <Link to={introShootingContent.buttonLink} className={style.btn}>
            {introShootingContent.buttonText}
            <span className={style.arr}>→</span>
          </Link>
        </div>

        <SceneVisual />
      </div>

    </section>
  )
}
