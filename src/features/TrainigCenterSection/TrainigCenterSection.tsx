import React, { useRef, useState } from 'react'
import { Link } from 'react-router'
import clsx from 'clsx'
import style from './TrainingCenterSection.module.scss'
import type { CourseItem } from './model.ts'
import { courses } from "./model.ts"
import { SectionTitle } from '../../shared/ui/SectionTitle/SectionTitle.tsx'

interface Props {
  className?: string
}

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <circle cx="7" cy="7" r="7" fill="#FE3B15" />
    <path d="M4 7l2 2 4-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const CourseCard: React.FC<{ course: CourseItem; index: number }> = ({ course, index }) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10
    setTilt({ x, y })
  }

  const resetTilt = () => {
    setTilt({ x: 0, y: 0 })
    setHovered(false)
  }


  return (
    <div
      ref={cardRef}
      className={clsx(style.card, hovered && style.cardHovered)}
      style={{
        '--accent': course.accent,
        '--index': index,
        transform: hovered
          ? `perspective(1000px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg) translateZ(8px)`
          : 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0)',
      } as React.CSSProperties}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={resetTilt}
    >

      {/* Glossy shimmer layer */}
      <div
        className={style.shimmer}
        style={{
          background: hovered
            ? `radial-gradient(circle at ${((tilt.x / 10) + 0.5) * 100}% ${((-tilt.y / 10) + 0.5) * 100}%, rgba(255,255,255,0.12) 0%, transparent 60%)`
            : 'none',
        }}
      />

      <div className={style.cardTop}>
        <span className={style.tag}>{course.tag}</span>
        <span className={style.indexNum}>{String(index + 1).padStart(2, '0')}</span>
      </div>

      <div className={style.accentBar} />

      <h3 className={style.cardTitle}>{course.title}</h3>
      <p className={style.cardDesc}>{course.description}</p>

      <ul className={style.cardHighlights}>
        {course.highlights.map((h, i) => (
          <li key={i}>
            <CheckIcon />
            {h}
          </li>
        ))}
      </ul>

      <div className={style.cardMeta}>
        <div className={style.metaItem}>
          <span className={style.metaLabel}>Стоимость</span>
          <span className={style.metaValue}>{course.price}</span>
        </div>
        <div className={style.metaDivider} />
        <div className={style.metaItem}>
          <span className={style.metaLabel}>Длительность</span>
          <span className={style.metaValue}>{course.duration}</span>
        </div>

      </div>

      <Link to={course.buttonLink} className={style.cardBtn}>
        <span>{"Подробнее"}</span>
        <ArrowIcon />
      </Link>
    </div>
  )
}

export const TrainigCenterSection: React.FC<Props> = ({ className }) => {
  return (
    <section className={clsx(className, style.section)}>
      <div className={style.sectionHeader}>
        <div className={style.headerLeft}>
          <span className={style.eyebrow}>Наши программы</span>
          <h2 className={style.sectionTitle}>
            Обучение &<br />
            <em>аттестация</em>
          </h2>
        </div>
        <p className={style.headerDesc}>
          Профессиональные курсы с государственной аккредитацией.
          Практика с первого дня. Документы, признанные по всей России.
        </p>
      </div>

      <div className={style.grid}>
        {courses.map((course, i) => (
          <CourseCard key={course.id} course={course} index={i} />
        ))}
      </div>
    </section>
  )
}

