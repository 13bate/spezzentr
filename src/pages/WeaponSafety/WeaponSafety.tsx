import React, { useState } from 'react';
import style from './WeaponSafety.module.scss';
import { REQUIRED_DOCUMENTS, safetyTrainingData } from './safetyTrainingData';
import { PageTitle } from '../../shared/ui/PageTitle';
import { ReachUs } from '../../shared/ui/ReachUs';
import { TestBlock } from '../../shared/ui/TestBlock';
import { InfoPagesTitle } from '../../shared/ui/InfoPagesTitle';
import { ScheduleViewer } from '../../features/ScheduleViewer';
import { DocumentViewer } from '../../features/DocumentViewer/ui/DocumentViewer';
import { InfoCardWithModal } from '../../shared/ui/InfoCardWithModal';
import { MedicalDocumentContent } from '../../entities/document/ui';
import { RequiredDocuments } from '../../shared/ui/RequiredDocuments';

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

const MedicalIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#e63946"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
    <path d="M12 11v4M10 13h4"></path>
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
        <div className={style.heroContainer}>
          <div className={style.heroContent}>
            <div className={style.heroHeader}>
              <span className={style.eyebrow}>
                <span className={style.eyebrowLine} />
                Обучение
              </span>
              <InfoPagesTitle title='Обучение безопасному
обращению с оружием'/>
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

          <TestBlock title='Пройти тестирование онлайн' testUrl='https://test.tgrant.ru/category/gro'
            description='Проверьте свои знания правил безопасного обращения с оружием в формате онлайн-теста. 
          Тест состоит из 10 вопросов. Для успешной сдачи допускается 1 ошибка.'/>
        </div>
      </section>

      {/* ─── НЕОБХОДИМЫЕ ДОКУМЕНТЫ ───────────────────────────── */}

      <RequiredDocuments
        title="Необходимые документы"
        items={REQUIRED_DOCUMENTS}
        eyebrow="Документы"
      />

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
          <AccordionItem title="Шаг 1. Медицинское освидетельствование">
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

      <InfoCardWithModal
        title="Медицинское освидетельствование"
        description="Полный текст Федерального закона «О частной охранной деятельности» (Статья 12). Порядок прохождения ежегодной проверки здоровья."
        icon={<MedicalIcon />}
        buttonText="Читать документ"
        modalEyebrow="Правовая база"
        modalTitle="Медицинское освидетельствование"
        modalSubtitle="Статья 12. Частный охранник"
        modalContent={<MedicalDocumentContent />} // <-- Передаем текст
      />

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

      {/* ─── Расписание и документ ──────────────────────────── */}
      <ScheduleViewer scheduleId="weapon-safety-schedule" />

      <DocumentViewer
        category='security'
        documentId="weapon-safety-questions"
      />

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
