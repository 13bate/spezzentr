import React from 'react';
import { Link } from 'react-router';
import style from './WorkingProfessions.module.scss';
import { PageTitle } from '../../shared/ui/PageTitle';
import { InfoPagesTitle } from '../../shared/ui/InfoPagesTitle';

// ─── Data ────────────────────────────────────────────────────

const programs = [
  {
    id: '01',
    title: 'Профессиональная подготовка',
    who: 'Лица без опыта работы, желающие получить профессию и первый разряд.',
    hours: 'от 250 до 2 000 ч',
    doc: 'Свидетельство о профессии',
    note: 'Новая профессия с нуля',
  },
  {
    id: '02',
    title: 'Переподготовка',
    who: 'Специалисты, желающие освоить новую профессию или сменить сферу деятельности.',
    hours: 'от 250 до 2 000 ч',
    doc: 'Свидетельство о профессии',
    note: 'Новая профессия с нуля',
  },
  {
    id: '03',
    title: 'Повышение квалификации',
    who: 'Специалисты с опытом, желающие повысить разряд или подтвердить квалификацию.',
    hours: 'от 16 до 144 ч',
    doc: 'Удостоверение о повышении квалификации',
    note: 'Повышение разряда',
  },
];

const professions = [
  'Сварщик', 'Электромонтажник', 'Машинист крана',
  'Водитель погрузчика', 'Стропальщик', 'Кровельщик',
  'Бетонщик', 'Газорезчик', 'Арматурщик',
  'Изолировщик', 'Землекоп', 'Дробильщик',
];

const steps = [
  { num: '01', title: 'Заявка', desc: 'Оставьте заявку — подберём программу под ваш опыт и цели' },
  { num: '02', title: 'Договор', desc: 'Заключаем договор. Документы принимаем в электронном виде' },
  { num: '03', title: 'Обучение', desc: 'Очно, заочно или дистанционно — в удобном формате' },
  { num: '04', title: 'Аттестация', desc: 'Квалификационный экзамен с присвоением разряда' },
  { num: '05', title: 'Документы', desc: 'Свидетельство установленного образца. Внесение в ФИС ФРДО' },
];

const docs = [
  ['Паспорт', 'Копия паспорта гражданина РФ'],
  ['Образование', 'Копия диплома или аттестата об образовании'],
  ['Трудовая книжка', 'Копия — при наличии стажа по специальности'],
  ['Смена ФИО', 'Документ о смене фамилии, если данные не совпадают'],
];

const faq = [
  {
    q: 'Кто может пройти обучение?',
    a: 'Граждане любого возраста начиная с 16 лет, независимо от уровня образования. Для программ профессиональной подготовки наличие диплома не требуется.',
  },
  {
    q: 'Какой документ выдаётся?',
    a: 'Свидетельство о профессии рабочего установленного образца. Данные вносятся в ФИС ФРДО — федеральный реестр Рособрнадзора. Документ действует бессрочно.',
  },
  {
    q: 'Можно ли учиться без отрыва от работы?',
    a: 'Да. Доступен дистанционный формат с круглосуточным доступом к материалам. Очно-заочная форма также позволяет совмещать обучение с работой.',
  },
  {
    q: 'Сколько стоит обучение?',
    a: 'От 5 000 ₽ в зависимости от программы, специальности и количества часов. Корпоративным клиентам — скидки при обучении группы от 5 человек.',
  },
  {
    q: 'Нормативная база?',
    a: 'Федеральный закон № 273-ФЗ «Об образовании в РФ», ст. 73. Перечень профессий утверждён Приказом Минпросвещения от 14.07.2023 № 534 (ред. 10.09.2025).',
  },
  {
    q: 'Засчитывается ли разряд при трудоустройстве?',
    a: 'Да. Свидетельство подтверждает квалификационный разряд, класс или категорию по профессии и принимается всеми работодателями на территории РФ.',
  },
];

// ─── Component ────────────────────────────────────────────────

export const WorkingProfessions: React.FC = () => {
  return (
    <main className={style.page}>
      <PageTitle
        title="Обучение рабочим специальностям | СПЕЦЦЕНТР"
        description="Профессиональная подготовка, переподготовка и повышение квалификации рабочих. Свидетельство установленного образца. Внесение в ФИС ФРДО."
        keywords="обучение рабочим специальностям, профессиональная подготовка, переподготовка, повышение квалификации"
      />

      {/* ── Hero ── */}
      <section className={style.hero}>
        <div className={style.heroBg}>
          <div className={style.heroGlow1} />
          <div className={style.heroGlow2} />
          <div className={style.heroGrid} />
        </div>

        <div className={style.heroContent}>
          <div className={style.heroText}>
            <span className={style.eyebrow}>
              <span className={style.eyebrowLine} />
              Рабочие специальности
            </span>
            <InfoPagesTitle
              title="Обучение рабочим
специальностям"
              description="Профессиональная подготовка, переподготовка и повышение квалификации. Свидетельство установленного образца. Внесение в ФИС ФРДО."
            />
            <div className={style.heroActions}>
              <Link to="/contacts" className={style.btnPrimary}>
                Записаться на курс
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <a href="#programs" className={style.btnGhost}>Программы обучения</a>
            </div>
          </div>

          <div className={style.heroStats}>
            <div className={style.stat}>
              <span className={style.statNum}>250+</span>
              <span className={style.statLabel}>специальностей</span>
            </div>
            <div className={style.statDivider} />
            <div className={style.stat}>
              <span className={style.statNum}>от 5 000 ₽</span>
              <span className={style.statLabel}>стоимость курса</span>
            </div>
            <div className={style.statDivider} />
            <div className={style.stat}>
              <span className={style.statNum}>Бессрочно</span>
              <span className={style.statLabel}>действие документа</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Basis ── */}
      <section className={style.basis}>
        <div className={style.basisInner}>
          <span className={style.basisLabel}>Нормативная база</span>
          <p className={style.basisText}>
            Профессиональное обучение регулируется
            <strong> Федеральным законом от 29.12.2012 № 273-ФЗ «Об образовании в РФ»</strong>,
            ст. 73. Перечень профессий рабочих, по которым ведётся обучение,
            утверждён <strong>Приказом Минпросвещения от 14.07.2023 № 534</strong> (ред. от 10.09.2025,
            действует с 21.10.2025). Выданные документы регистрируются в
            федеральном реестре <strong>ФИС ФРДО</strong> и проверяются на сайте Рособрнадзора.
          </p>
        </div>
      </section>

      {/* ── Programs ── */}
      <section className={style.section} id="programs">
        <div className={style.sectionHead}>
          <span className={style.eyebrow}>
            <span className={style.eyebrowLine} />
            Программы
          </span>
          <h2 className={style.sectionTitle}>Три вида обучения</h2>
          <p className={style.sectionDesc}>Выберите подходящий формат профессионального обучения</p>
        </div>
        <div className={style.programGrid}>
          {programs.map((p) => (
            <div key={p.id} className={style.programCard}>
              <div className={style.programTop}>
                <span className={style.programId}>{p.id}</span>
                <span className={style.programNote}>{p.note}</span>
              </div>
              <h3 className={style.programTitle}>{p.title}</h3>
              <p className={style.programWho}>{p.who}</p>
              <div className={style.programMeta}>
                <div className={style.pmItem}>
                  <span className={style.pmLabel}>Объём</span>
                  <span className={style.pmValue}>{p.hours}</span>
                </div>
                <div className={style.pmItem}>
                  <span className={style.pmLabel}>Документ</span>
                  <span className={style.pmValue}>{p.doc}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Professions list ── */}
      <section className={style.section}>
        <div className={style.sectionHead}>
          <span className={style.eyebrow}>
            <span className={style.eyebrowLine} />
            Специальности
          </span>
          <h2 className={style.sectionTitle}>Популярные профессии</h2>
        </div>
        <div className={style.profGrid}>
          {professions.map((p, i) => (
            <div key={i} className={style.profItem}>
              <span className={style.profDot} />
              {p}
            </div>
          ))}
        </div>
        <p className={style.profMore}>
          Полный перечень — более 250 специальностей. Уточните наличие нужной программы у менеджера.
        </p>
      </section>

      {/* ── Steps ── */}
      <section className={style.stepsSection}>
        <div className={style.sectionHead}>
          <span className={style.eyebrow}>
            <span className={style.eyebrowLine} />
            Процесс
          </span>
          <h2 className={style.sectionTitle}>Как проходит обучение</h2>
        </div>
        <div className={style.steps}>
          {steps.map((s, i) => (
            <div key={i} className={style.step}>
              <div className={style.stepNum}>{s.num}</div>
              <h4 className={style.stepTitle}>{s.title}</h4>
              <p className={style.stepDesc}>{s.desc}</p>
              {i < steps.length - 1 && <div className={style.stepArrow}>→</div>}
            </div>
          ))}
        </div>
      </section>

      {/* ── Documents required ── */}
      <section className={style.section}>
        <div className={style.sectionHead}>
          <span className={style.eyebrow}>
            <span className={style.eyebrowLine} />
            Документы
          </span>
          <h2 className={style.sectionTitle}>Что нужно для поступления</h2>
        </div>
        <div className={style.docGrid}>
          {docs.map(([title, desc], i) => (
            <div key={i} className={style.docItem}>
              <span className={style.docNum}>{String(i + 1).padStart(2, '0')}</span>
              <h4 className={style.docTitle}>{title}</h4>
              <p className={style.docDesc}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={style.section}>
        <div className={style.sectionHead}>
          <span className={style.eyebrow}>
            <span className={style.eyebrowLine} />
            Вопросы
          </span>
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
          <h2 className={style.ctaTitle}>Готовы начать обучение?</h2>
          <p className={style.ctaSub}>Оставьте заявку — подберём программу и ответим в течение рабочего дня</p>
          <Link to="/contacts" className={style.btnPrimary}>
            Записаться
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
};
