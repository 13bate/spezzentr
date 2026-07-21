import React, { useState } from 'react';
import style from './WeaponSafety.module.scss';
import { safetyTrainingData } from './safetyTrainingData';
import { PageTitle } from '../../shared/ui/PageTitle';
import { ReachUs } from '../../shared/ui/ReachUs';

// ─── Icons ──────────────────────────────────────────────────
const ChevronDown = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M5 7l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronUp = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M15 13l-5-5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ─── Accordion Component ────────────────────────────────────
const AccordionItem: React.FC<{
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}> = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`${style.accordionItem} ${isOpen ? style.accordionOpen : ''}`}>
      <button className={style.accordionHeader} onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        <span className={style.accordionIcon}>{isOpen ? <ChevronUp /> : <ChevronDown />}</span>
      </button>
      <div className={style.accordionBody}>
        <div className={style.accordionContent}>{children}</div>
      </div>
    </div>
  );
};

// ─── Page ────────────────────────────────────────────────────
export const WeaponSafety: React.FC = () => {
  return (
    <main className={style.safetyTrainingPage}>
      <PageTitle
        title="Обучение безопасному обращению с оружием | СПЕЦЦЕНТР"
        description="Обучение безопасному обращению с оружием для получения лицензии на приобретение гражданского оружия."
        keywords="обучение оружию, лицензия на оружие, безопасное обращение"
      />

      {/* ─── Hero Section ───────────────────────────────────── */}
      <section className={style.heroSection}>
        <div className={style.heroBg}>
          <div className={style.heroGrid} />
          <div className={style.heroBlob1} />
          <div className={style.heroBlob2} />
        </div>
        <div className={style.heroContent}>
          <div className={style.heroHeader}>
            <span className={style.eyebrow}>
              <span className={style.eyebrowLine} />
              Обучение
            </span>
            <h1 className={style.heroTitle}>
              Обучение безопасному
              <br />
              <span>обращению с оружием</span>
            </h1>
          </div>

          <div className={style.heroText}>
            <p>
              Граждане РФ, впервые приобретающие гражданское оружие, обязаны пройти подготовку
              (обучение для получения лицензии на оружие) в целях изучения правил безопасного
              обращения с оружием и приобретения навыков безопасного обращения с оружием.
            </p>
            <p>
              Граждане РФ, являющиеся владельцами огнестрельного оружия ограниченного поражения,
              газовых пистолетов или револьверов, гражданского огнестрельного гладкоствольного
              длинноствольного оружия самообороны, обязаны не реже одного раза в пять лет проходить
              проверку знания правил безопасного обращения с оружием и наличия навыков безопасного
              обращения с оружием.
            </p>
            <div className={style.heroNote}>
              <div>
                <strong>По завершению обучения в ЧОУ ДПО «СПЕЦЦЕНТР»</strong> Вы получите
                свидетельство и акт установленного образца о том, что пройдено обучение для
                получения лицензии или продления разрешения на оружие.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── НЕОБХОДИМЫЕ ДОКУМЕНТЫ ───────────────────────────── */}
      <section className={style.documentsSection}>
        <div className={style.documentsSectionInner}>
          <span className={style.eyebrow}>
            <span className={style.eyebrowLine} />
            Документы
          </span>
          <h2 className={style.documentsTitle}>Необходимые документы</h2>
          <div className={style.documentsGrid}>
            <div className={style.documentsItem}>
              <span className={style.documentsNumber}>01</span>
              <div className={style.documentsContent}>
                <h4>Паспорт гражданина РФ</h4>
                <p>и его копия (основной разворот с фото и прописка)</p>
              </div>
            </div>
            <div className={style.documentsItem}>
              <span className={style.documentsNumber}>02</span>
              <div className={style.documentsContent}>
                <h4>Фотографии 3 × 4</h4>
                <p>матовые, без уголка – 3 шт.</p>
              </div>
            </div>
            <div className={style.documentsItem}>
              <span className={style.documentsNumber}>03</span>
              <div className={style.documentsContent}>
                <h4>Выписка о результатах медицинского освидетельствования</h4>
                <p>
                  и ее копия на наличие медицинских противопоказаний к владению оружием,
                  выданная медицинской организацией государственной или муниципальной
                  системы здравоохранения по месту жительства (пребывания) гражданина РФ
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Порядок получения лицензии ────────────────────── */}
      <section className={style.section}>
        <div className={style.sectionHead}>
          <span className={style.eyebrow}>
            <span className={style.eyebrowLine} />
            Процесс
          </span>
          <h2 className={style.sectionTitle}>Порядок первичного получения лицензии на оружие</h2>
        </div>

        <div className={style.accordionList}>
          {/* Шаг 1 */}
          <AccordionItem title="Шаг 1. Медицинское освидетельствование" defaultOpen>
            <p>
              Медицинское освидетельствование на наличие медицинских противопоказаний к владению
              оружием проводится медицинскими организациями государственной или муниципальной
              системы здравоохранения по месту жительства (пребывания) гражданина РФ.
            </p>
            <p>
              <strong>Медицинское освидетельствование включает:</strong>
            </p>
            <ul>
              <li>Медицинский осмотр врачом</li>
              <li>Психиатрическое освидетельствование</li>
              <li>Медицинский осмотр врачом-психиатром-наркологом</li>
              <li>Химико-токсикологические исследования</li>
              <li>
                Лабораторные исследования крови и (или) мочи на определение хронического
                употребления алкоголя
              </li>
            </ul>
            <div className={style.docNotice}>
              <span className={style.docNoticeIcon} />
              <span>
                Ответственный работник медицинской организации информирует освидетельствуемого
                о результатах и передаче информации в Росгвардию, а также направляет выписку
                о результатах медицинского освидетельствования по просьбе гражданина.
              </span>
            </div>
          </AccordionItem>

          {/* Шаг 2 */}
          <AccordionItem title="Шаг 2. Обучение правилам безопасного обращения с оружием">
            <p>
              Пройдите обучение в ЧОУ ДПО «СПЕЦЦЕНТР» по программе первоначального обучения
              безопасному обращению с оружием.
            </p>
            <p>
              <strong>Программа включает:</strong>
            </p>
            <ul>
              <li>Правовую подготовку — 1.4 часа</li>
              <li>Огневую подготовку — 2.6 часа</li>
              <li>Итоговую аттестацию — 2 часа</li>
            </ul>
            <p>
              <strong>По окончании обучения:</strong> сдача экзамена (теоретическая и практическая часть).
            </p>

            <div className={style.examSubBlock}>
              <h4>Теоретическая часть</h4>
              <ul>
                <li>Билет состоит из 10 вопросов</li>
                <li>Допускается 1 ошибка</li>
                <li>Предоставляется одна попытка</li>
              </ul>
            </div>

            <div className={style.examSubBlock}>
              <h4>Практическая часть</h4>
              <ul>
                <li>Упражнение №1 «Базовое»</li>
                <li>Упражнение №2 «Гражданское короткоствольное оружие»</li>
                <li>Упражнение №3 «Гражданское длинноствольное оружие»</li>
              </ul>
            </div>
          </AccordionItem>

          {/* Шаг 3 */}
          <AccordionItem title="Шаг 3. Покупка сейфа">
            <p>
              Принадлежащие гражданам РФ оружие и патроны, а также инициирующие и воспламеняющие
              вещества и материалы (порох, капсюли) для самостоятельного снаряжения патронов
              к гражданскому огнестрельному длинноствольному оружию должны храниться по месту
              их жительства.
            </p>
            <p>
              <strong>Требования к хранению:</strong>
            </p>
            <ul>
              <li>В запирающихся на замок (замки) сейфах</li>
              <li>Сейфовых шкафах или металлических шкафах для хранения оружия</li>
              <li>Ящиках из высокопрочных материалов</li>
              <li>Либо в деревянных ящиках, обитых железом</li>
            </ul>
            <div className={style.docNotice}>
              <span className={style.docNoticeIcon} />
              <span>
                Условия хранения должны обеспечивать сохранность, безопасность хранения
                и исключать доступ посторонних лиц.
              </span>
            </div>
          </AccordionItem>

          {/* Шаг 4 */}
          <AccordionItem title="Шаг 4. Подача заявления">
            <p>
              Заявление на получение лицензии на приобретение оружия подается через личный кабинет
              сайта государственных услуг.
            </p>
            <p>
              <strong>Порядок подачи:</strong>
            </p>
            <ul>
              <li>Личный кабинет на сайте ГосУслуг</li>
              <li>Выбрать «Услуги»</li>
              <li>Выбрать «Прочее»</li>
              <li>В разделе «Оружие» выбрать необходимый вид лицензии</li>
              <li>Выбрать «Получить услугу»</li>
              <li>Заполнить все поля и отправить заявление</li>
            </ul>
            <div className={style.docNotice}>
              <span className={style.docNoticeIcon} />
              <span>
                После оплаты государственной пошлины Вас пригласят в территориальный орган Росгвардии.
                Необходимо иметь при себе две фотографии 3×4 на каждое разрешение.
              </span>
            </div>
          </AccordionItem>

          {/* Шаг 5 */}
          <AccordionItem title="Шаг 5. Проверка условий хранения оружия">
            <p>
              Федеральная служба войск национальной гвардии Российской Федерации, ее территориальные
              органы, органы внутренних дел по месту жительства (пребывания) владельцев имеют право
              проверять условия хранения зарегистрированного оружия.
            </p>
          </AccordionItem>

          {/* Шаг 6 */}
          <AccordionItem title="Шаг 6. Получение лицензии">
            <p>
              По истечении тридцати дней Вас пригласят получить готовую лицензию на приобретение оружия.
            </p>
            <div className={style.docNotice}>
              <span className={style.docNoticeIcon} />
              <span>
                Срок действия лицензии на приобретение оружия составляет 6 месяцев.
                Если в этот срок вы не приобрели оружие, лицензия сдается по месту получения.
              </span>
            </div>
          </AccordionItem>

          {/* Шаг 7 */}
          <AccordionItem title="Шаг 7. Покупка оружия">
            <p>
              Оружие подлежит регистрации в территориальном органе федерального органа
              исполнительной власти, уполномоченного в сфере оборота оружия, по месту жительства
              в двухнедельный срок со дня его приобретения.
            </p>
            <p>
              <strong>Срок действия разрешения на оружие:</strong>
            </p>
            <ul>
              <li>Составляет 5 лет</li>
              <li>Охотничье оружие продлевается на основании охотничьего билета</li>
              <li>Оружие самообороны — на основании акта проверки знаний</li>
              <li>Документы на продление подаются за 3 месяца, но не позднее чем за месяц</li>
            </ul>
            <div className={style.docNotice}>
              <span className={style.docNoticeIcon} />
              <span>
                <strong>Статья 20.11 КоАП РФ:</strong> Нарушение сроков регистрации оружия —
                предупреждение или штраф от 1 000 до 3 000 рублей.
              </span>
            </div>
            <div className={style.docNotice} style={{ marginTop: '8px' }}>
              <span className={style.docNoticeIcon} />
              <span>
                <strong>Контрольный отстрел оружия с нарезным стволом:</strong> один раз в 15 лет,
                перед продажей или дарением, перед постановкой на учет оружия, приобретенного
                за пределами РФ.
              </span>
            </div>
          </AccordionItem>

          {/* Шаг 8 */}
          <AccordionItem title="Шаг 8. Получение разрешения">
            <p>
              Заявление на получение разрешения на оружие подается через личный кабинет сайта
              государственных услуг.
            </p>
            <p>
              <strong>Порядок подачи:</strong>
            </p>
            <ul>
              <li>Личный кабинет на сайте ГосУслуг</li>
              <li>Выбрать «Услуги»</li>
              <li>Выбрать «Прочее»</li>
              <li>
                В разделе «Оружие» выбрать: «Разрешение на хранение и ношение оружия»
              </li>
              <li>
                Далее выбрать: «Получение разрешения на хранение и ношение охотничьего оружия
                либо оружия ограниченного поражения»
              </li>
            </ul>
            <div className={style.docNotice}>
              <span className={style.docNoticeIcon} />
              <span>
                После оплаты государственной пошлины Вас пригласят в территориальный орган
                Росгвардии на осмотр оружия. Необходимо иметь при себе две фотографии 3×4
                на каждое разрешение.
              </span>
            </div>
          </AccordionItem>

          {/* Шаг 9 */}
          <AccordionItem title="Шаг 9. Стоимость лицензии и разрешения">
            <div className={style.priceTable}>
              <div className={style.priceRow}>
                <span className={style.priceRowLabel}>КБК 180 1 08 07441 01 0020 110</span>
                <span className={style.priceRowValue}>2 000 ₽</span>
              </div>
              <div className={style.priceRow}>
                <span className={style.priceRowLabel}>КБК 180 1 08 07442 01 0020 110</span>
                <span className={style.priceRowValue}>500 ₽</span>
              </div>
              <div className={style.priceRow}>
                <span className={style.priceRowLabel}>КБК 180 1 08 07444 01 0020 110</span>
                <span className={style.priceRowValue}>250 ₽</span>
              </div>
            </div>
            <p style={{ fontSize: '13px', color: '#888', marginTop: '12px' }}>
              * Государственные пошлины за выдачу, продление и переоформление лицензий и разрешений.
            </p>
          </AccordionItem>
        </div>
      </section>

      {/* ─── Первоначальное обучение и Периодическая проверка ── */}
      <div className={style.grid2}>
        {/* Первоначальное обучение */}
        <div className={style.card}>
          <div className={style.cardHeader}>
            <span className={style.cardBadge}>Обучение</span>
            <h2 className={style.cardTitle}>{safetyTrainingData.initialTraining.title}</h2>
          </div>
          <p className={style.sectionSubtitle}>{safetyTrainingData.initialTraining.subtitle}</p>

          <h3 className={style.sectionHeading}>Необходимые документы:</h3>
          <ul className={style.documentsList}>
            {safetyTrainingData.initialTraining.documents.map((doc, idx) => (
              <li key={idx}>{doc}</li>
            ))}
          </ul>

          <h3 className={style.sectionHeading}>Программа обучения:</h3>
          <div className={style.programList}>
            {safetyTrainingData.initialTraining.program.map((item, idx) => (
              <div key={idx} className={style.programItem}>
                <span className={style.programName}>{item.name}</span>
                <span className={style.programHours}>{item.hours}</span>
              </div>
            ))}
          </div>

          <div className={style.price}>{safetyTrainingData.initialTraining.price}</div>
        </div>

        {/* Периодическая проверка */}
        <div className={style.card}>
          <div className={style.cardHeader}>
            <span className={style.cardBadge}>Проверка</span>
            <h2 className={style.cardTitle}>{safetyTrainingData.periodicCheck.title}</h2>
          </div>
          <p className={style.sectionSubtitle}>{safetyTrainingData.periodicCheck.subtitle}</p>

          <h3 className={style.sectionHeading}>Необходимые документы:</h3>
          <ul className={style.documentsList}>
            {safetyTrainingData.periodicCheck.documents.map((doc, idx) => (
              <li key={idx}>{doc}</li>
            ))}
          </ul>

          <h3 className={style.sectionHeading}>Стоимость:</h3>
          {safetyTrainingData.periodicCheck.prices.map((item, idx) => (
            <div key={idx} className={style.priceItem}>
              <span className={style.priceItemLabel}>{item.type}</span>
              <span className={style.priceItemValue}>{item.price}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ─── Дополнительные услуги ──────────────────────────── */}
      <section className={style.section}>
        <div className={style.sectionHead}>
          <span className={style.eyebrow}>
            <span className={style.eyebrowLine} />
            Услуги
          </span>
          <h2 className={style.sectionTitle}>Дополнительные услуги</h2>
        </div>
        <div className={style.servicesList}>
          {safetyTrainingData.additionalServices.map((service, idx) => (
            <div key={idx} className={style.serviceItem}>
              <span className={style.serviceName}>{service.name}</span>
              <span className={style.servicePrice}>{service.price}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Расписание ──────────────────────────────────────── */}
      <section className={style.section}>
        <div className={style.sectionHead}>
          <span className={style.eyebrow}>
            <span className={style.eyebrowLine} />
            Расписание
          </span>
          <h2 className={style.sectionTitle}>{safetyTrainingData.schedule.title}</h2>
        </div>
        <div className={style.scheduleList}>
          {safetyTrainingData.schedule.dates.map((date, idx) => (
            <div key={idx} className={style.scheduleItem}>
              <span className={style.scheduleDot} />
              {date}
            </div>
          ))}
        </div>
      </section>

      {/* ─── Тестирование ОНЛАЙН ────────────────────────────── */}
      <section className={style.section}>
        <div className={style.sectionHead}>
          <span className={style.eyebrow}>
            <span className={style.eyebrowLine} />
            Тестирование
          </span>
          <h2 className={style.sectionTitle}>Проверка знаний онлайн</h2>
        </div>
        <div className={style.onlineTest}>
          <div className={style.onlineTestContent}>
            <h3>Пройти тестирование онлайн</h3>
            <p>
              Проверьте свои знания правил безопасного обращения с оружием в формате онлайн-теста.
              Тест состоит из 10 вопросов. Для успешной сдачи допускается 1 ошибка.
            </p>
            <a href="/online-test" className={style.onlineTestBtn}>
              Начать тестирование
              <ArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* ─── Результат ────────────────────────────────────────── */}
      <section className={style.resultBlock}>
        <p>{safetyTrainingData.result.description}</p>
        <p className={style.resultNote}>{safetyTrainingData.result.note}</p>
      </section>

      {/* ─── Контакты ────────────────────────────────────────── */}
      <ReachUs />
    </main>
  );
};
