import React from 'react'
import { Link } from 'react-router'
import style from './LaborSafety.module.scss'

// ─── Data ────────────────────────────────────────────────────

const programs = [
  {
    id: 'A',
    who: 'Руководители организаций, заместители, члены комиссий по ОТ',
    hours: '16 часов',
    freq: 'Раз в 3 года',
  },
  {
    id: 'Б',
    who: 'Руководители подразделений, специалисты по охране труда',
    hours: '16 часов',
    freq: 'Раз в 3 года',
  },
  {
    id: 'В',
    who: 'Работники, выполняющие работы повышенной опасности',
    hours: '16 часов',
    freq: 'Раз в 3 года',
  },
]

const steps = [
  { num: '01', title: 'Подача заявки', desc: 'Оставьте заявку — мы подберём нужную программу' },
  { num: '02', title: 'Обучение', desc: 'Очно или онлайн, 40 академических часов' },
  { num: '03', title: 'Проверка знаний', desc: 'Тестирование в соответствии с Постановлением № 2464' },
  { num: '04', title: 'Документы', desc: 'Протокол и удостоверение. Данные вносятся в ЕИСОТ' },
]

const faq = [
  {
    q: 'Кто обязан проходить обучение?',
    a: 'Все работодатели и сотрудники согласно ст. 214 ТК РФ. Руководители — в течение 60 дней с момента назначения, затем раз в 3 года.',
  },
  {
    q: 'Какой документ выдаётся?',
    a: 'Протокол проверки знаний и удостоверение. С 1 марта 2023 г. результаты передаются в ЕИСОТ — единую информационную систему охраны труда.',
  },
  {
    q: 'Можно ли учиться онлайн?',
    a: 'Да. Постановление № 2464 допускает дистанционный формат для программ А и Б. Программа В требует 50% практических занятий.',
  },
  {
    q: 'Что будет, если не пройти обучение?',
    a: 'Работник отстраняется от работы. Штраф для организации — до 130 000 ₽ по ст. 5.27.1 КоАП РФ.',
  },
]

// ─── Component ───────────────────────────────────────────────

export const LaborSafety: React.FC = () => {
  return (
    <main className={style.page}>

      {/* ── Hero ── */}
      <section className={style.hero}>
        <div className={style.heroInner}>
          <span className={style.eyebrow}>Охрана труда</span>
          <h1 className={style.heroTitle}>
            Обучение и проверка<br />
            знаний требований<br />
            <em>охраны труда</em>
          </h1>
          <p className={style.heroSub}>
            По Постановлению Правительства РФ № 2464.<br />
            Очно и онлайн. Удостоверение + внесение в ЕИСОТ.
          </p>
          <div className={style.heroActions}>
            <Link to="/contacts" className={style.btnPrimary}>Записаться на курс</Link>
            <a href="#programs" className={style.btnGhost}>Программы обучения</a>
          </div>
        </div>
        <div className={style.heroStats}>
          <div className={style.stat}>
            <span className={style.statNum}>40</span>
            <span className={style.statLabel}>академических часов</span>
          </div>
          <div className={style.statDivider} />
          <div className={style.stat}>
            <span className={style.statNum}>3 500 ₽</span>
            <span className={style.statLabel}>стоимость курса</span>
          </div>
          <div className={style.statDivider} />
          <div className={style.stat}>
            <span className={style.statNum}>3 года</span>
            <span className={style.statLabel}>срок действия</span>
          </div>
        </div>
      </section>

      {/* ── Basis ── */}
      <section className={style.basis}>
        <div className={style.basisCard}>
          <span className={style.basisLabel}>Нормативная база</span>
          <p className={style.basisText}>
            С 1 сентября 2022 г. обучение по охране труда регулируется
            <strong> Постановлением Правительства РФ от 24.12.2021 № 2464</strong>.
            Документ заменил устаревший Порядок № 1/29 и установил расширенный
            перечень видов обучения, включая обязательное обучение применению СИЗ
            и оказанию первой помощи.
          </p>
        </div>
      </section>

      {/* ── Programs ── */}
      <section className={style.section} id="programs">
        <div className={style.sectionHead}>
          <span className={style.eyebrow}>Программы</span>
          <h2 className={style.sectionTitle}>Три программы обучения</h2>
        </div>
        <div className={style.programGrid}>
          {programs.map((p, i) => (
            <div key={p.id} className={style.programCard} style={{ '--index': i } as React.CSSProperties}>
              <div className={style.programId}>{p.id}</div>
              <p className={style.programTitle}>{p.who}</p>
              <div className={style.programMeta}>
                <div className={style.pmItem}>
                  <span className={style.pmLabel}>Объём</span>
                  <span className={style.pmValue}>{p.hours}</span>
                </div>
                <div className={style.pmItem}>
                  <span className={style.pmLabel}>Периодичность</span>
                  <span className={style.pmValue}>{p.freq}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── What's included ── */}
      <section className={style.section}>
        <div className={style.sectionHead}>
          <span className={style.eyebrow}>Состав курса</span>
          <h2 className={style.sectionTitle}>Что входит в обучение</h2>
        </div>
        <div className={style.includeGrid}>
          {[
            ['Инструктажи по ОТ', 'Вводный, первичный, повторный, внеплановый и целевой — все виды по Постановлению № 2464'],
            ['Стажировка на рабочем месте', 'Практическое освоение безопасных методов работы под руководством наставника'],
            ['Первая помощь', 'С 1 марта 2025 г. — обязательная часть программы согласно Приказу Минтруда № 398н'],
            ['Применение СИЗ', 'Теория и практика 50/50. Единые типовые нормы выдачи СИЗ с 1 января 2025 г.'],
            ['Проверка знаний', 'Тестирование в ЕИСОТ. При несдаче — повторное обучение в течение 30 дней'],
            ['Документы', 'Протокол проверки знаний. Удостоверение. Внесение в государственный реестр Минтруда'],
          ].map(([title, desc], i) => (
            <div key={i} className={style.includeItem}>
              <div className={style.includeNum}>{String(i + 1).padStart(2, '0')}</div>
              <div className={style.includeTitle}>{title}</div>
              <p className={style.includeDesc}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Steps ── */}
      <section className={style.stepsSection}>
        <div className={style.sectionHead}>
          <span className={style.eyebrow}>Процесс</span>
          <h2 className={style.sectionTitle}>Как проходит обучение</h2>
        </div>
        <div className={style.steps}>
          {steps.map((s, i) => (
            <div key={i} className={style.step}>
              <div className={style.stepNum}>{s.num}</div>
              <div className={style.stepTitle}>{s.title}</div>
              <p className={style.stepDesc}>{s.desc}</p>
              {i < steps.length - 1 && <div className={style.stepArrow}>→</div>}
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={style.section}>
        <div className={style.sectionHead}>
          <span className={style.eyebrow}>Вопросы</span>
          <h2 className={style.sectionTitle}>Частые вопросы</h2>
        </div>
        <div className={style.faqList}>
          {faq.map((item, i) => (
            <div key={i} className={style.faqItem}>
              <div className={style.faqQ}>{item.q}</div>
              <p className={style.faqA}>{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={style.cta}>
        <div className={style.ctaInner}>
          <h2 className={style.ctaTitle}>Готовы начать?</h2>
          <p className={style.ctaSub}>Оставьте заявку — ответим в течение рабочего дня</p>
          <Link to="/contacts" className={style.btnPrimary}>Записаться</Link>
        </div>
      </section>

    </main>
  )
}
