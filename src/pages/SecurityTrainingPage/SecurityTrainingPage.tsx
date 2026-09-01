import React, { useState } from 'react';
import { PageTitle } from '../../shared/ui/PageTitle';
import { securityTrainingData } from './model/securityTrainingData.ts';
import style from './SecurityTrainingPage.module.scss';
import { InfoPagesTitle } from '../../shared/ui/InfoPagesTitle';
import { ReachUs } from '../../shared/ui/ReachUs';
import { TestBlock } from '../../shared/ui/TestBlock/TestBlock.tsx';
import { DocumentViewer } from '../../features/DocumentViewer/ui/DocumentViewer.tsx';


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
export const SecurityTrainingPage: React.FC = () => {
  return (
    <>
      <PageTitle title="Обучение частных охранников | СПЕЦЦЕНТР" />

      <main className={style.securityTrainingPage}>
        {/* ─── HERO ────────────────────────────────────────── */}
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
                <InfoPagesTitle title={securityTrainingData.hero.title} />
              </div>

              <div className={style.heroText}>
                <div className={style.heroNote}>
                  <div>
                    <strong>По завершению обучения в ЧОУ ДПО «СПЕЦЦЕНТР»</strong> Вы получите
                    необходимые документы для подачи в Росгвардию.
                  </div>
                </div>
              </div>
            </div>

            <TestBlock
              title="Пройти тестирование онлайн"
              testUrl="https://test.tgrant.ru/category/gro"
              description="Проверьте свои знания по программе подготовки охранников. Тест состоит из 10 вопросов, допускается 1 ошибка."
            />
          </div>
        </section>

        {/* ─── ОБУЧЕНИЕ ЧАСТНЫХ ОХРАННИКОВ ───────────────────── */}
        <section className={style.pricesSection}>
          <h2 className={style.sectionTitle}>Обучение частных охранников</h2>
          <div className={style.pricesGrid}>
            {securityTrainingData.prices.map((item, index) => (
              <div key={index} className={style.priceCard}>
                <div className={style.priceLevel}>{item.level}</div>
                <div className={style.priceHours}>{item.hours}</div>
                <div className={style.priceValue}>{item.price}</div>
                <div className={style.priceDescription}>{item.description}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── ПОВЫШЕНИЕ КВАЛИФИКАЦИИ ────────────────────────── */}
        <section className={style.pricesSection}>
          <h2 className={style.sectionTitle}>Повышение квалификации частных охранников</h2>
          <div className={style.pricesGrid}>
            {securityTrainingData.advancedPrices.map((item, index) => (
              <div key={index} className={style.priceCard}>
                <div className={style.priceLevel}>{item.level}</div>
                <div className={style.priceHours}>{item.hours}</div>
                <div className={style.priceValue}>{item.price}</div>
                <div className={style.priceDescription}>{item.description}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── ДОКУМЕНТЫ ──────────────────────────────────────── */}
        <section className={style.documentsSection}>
          <h3 className={style.documentsTitle}>{securityTrainingData.documents.title}</h3>
          <ul className={style.documentsList}>
            {securityTrainingData.documents.list.map((doc, index) => (
              <li key={index}>{doc}</li>
            ))}
          </ul>
          {securityTrainingData.documents.note && (
            <p className={style.documentsNote}>{securityTrainingData.documents.note}</p>
          )}
        </section>

        {/* ─── ВОПРОСЫ ДЛЯ ПОДГОТОВКИ (PDF) ──────────────────── */}
        <section className={style.faqSection}>
          <h2 className={style.faqTitle}>Вопросы для подготовки</h2>
          <div className={style.faqGrid}>
            <div className={style.faqItem}>
              <DocumentViewer documentId="security-questions" category="security" />
              <DocumentViewer documentId="periodic-questions" category="security" />
            </div>
          </div>
        </section>

        {/* ─── ПОРЯДОК ПОЛУЧЕНИЯ УДОСТОВЕРЕНИЯ ────────────────── */}
        <section className={style.section}>
          <div className={style.sectionHead}>
            <span className={style.eyebrow}>
              <span className={style.eyebrowLine} />
              Процесс
            </span>
            <h2 className={style.sectionTitle}>Порядок получения удостоверения частного охранника</h2>
          </div>

          <div className={style.accordionList}>
            <AccordionItem title="Шаг 1. Медицинское освидетельствование" defaultOpen>
              <p>
                Прохождение медицинского освидетельствования об отсутствии медицинских
                противопоказаний к исполнению обязанностей частного охранника.
              </p>
              <p>
                <strong>Необходимые документы для освидетельствования:</strong>
              </p>
              <ul>
                <li>Паспорт гражданина РФ</li>
                <li>Направление от работодателя или заявление</li>
              </ul>
              <div className={style.docNotice}>
                <span className={style.docNoticeIcon} />
                <span>
                  Медицинское освидетельствование проводится в медицинских организациях,
                  имеющих лицензию на соответствующий вид деятельности.
                </span>
              </div>
            </AccordionItem>

            <AccordionItem title="Шаг 2. Обучение по программе профессиональной подготовки охранников">
              <p>
                Обучение по основной программе профессионального обучения — программе
                профессиональной подготовки охранников в ЧОУ ДПО «СПЕЦЦЕНТР».
              </p>
              <p>
                <strong>Программа включает:</strong>
              </p>
              <ul>
                <li>Правовую подготовку — основы охранной деятельности</li>
                <li>Огневую подготовку — обращение с оружием</li>
                <li>Техническую подготовку — специальные средства</li>
                <li>Тактико-специальную подготовку</li>
                <li>Первую (доврачебную) помощь</li>
              </ul>
            </AccordionItem>

            <AccordionItem title="Шаг 3. Подача заявления в Росгвардию">
              <p>
                Подать заявление лично в отделении Росгвардии по месту жительства,
                предоставив следующие документы:
              </p>
              <ul>
                <li>Паспорт</li>
                <li>Документ о квалификации не старше пяти лет (свидетельство об обучении)</li>
                <li>Медицинское заключение об отсутствии противопоказаний</li>
                <li>2 фотографии 4×6 см</li>
              </ul>
              <div className={style.docNotice}>
                <span className={style.docNoticeIcon} />
                <span>
                  Удостоверение частного охранника выдается территориальным органом Росгвардии
                  по месту жительства или по месту нахождения частной охранной организации
                  сроком на пять лет.
                </span>
              </div>
            </AccordionItem>

            <AccordionItem title="Шаг 4. Получение удостоверения">
              <p>
                После принятия положительного решения Росгвардией, Вы получаете удостоверение
                частного охранника (УЧО).
              </p>
              <p>
                <strong>Важно:</strong> Переоформление удостоверения в связи с продлением срока
                действия должно быть представлено не позднее чем за тридцать дней до дня
                окончания срока действия.
              </p>
            </AccordionItem>
          </div>
        </section>

        {/* ─── ПОРЯДОК ПРОДЛЕНИЯ УДОСТОВЕРЕНИЯ ────────────────── */}
        <section className={style.section}>
          <div className={style.sectionHead}>
            <span className={style.eyebrow}>
              <span className={style.eyebrowLine} />
              Продление
            </span>
            <h2 className={style.sectionTitle}>Порядок продления удостоверения частного охранника</h2>
          </div>

          <div className={style.accordionList}>
            <AccordionItem title="Шаг 1. Медицинское освидетельствование" defaultOpen>
              <p>
                Прохождение медицинского освидетельствования об отсутствии медицинских
                противопоказаний к исполнению обязанностей частного охранника.
              </p>
            </AccordionItem>

            <AccordionItem title="Шаг 2. Повышение квалификации">
              <p>
                Обучение по программе профессионального обучения «Программа повышения
                квалификации охранников» в ЧОУ ДПО «СПЕЦЦЕНТР».
              </p>
              <p>
                <strong>По окончании обучения:</strong> выдается документ о повышении квалификации,
                со дня выдачи которого прошло не более 1 года для подачи в Росгвардию.
              </p>
            </AccordionItem>

            <AccordionItem title="Шаг 3. Подача заявления в Росгвардию">
              <p>
                Подать заявление лично в отделении Росгвардии по месту жительства,
                предоставив следующие документы:
              </p>
              <ul>
                <li>Паспорт</li>
                <li>
                  Документ, полученный по завершении профессионального обучения по программе
                  повышения квалификации частных охранников (не старше 1 года)
                </li>
                <li>Медицинское заключение об отсутствии противопоказаний</li>
                <li>2 фотографии 4×6 см</li>
              </ul>
            </AccordionItem>

            <AccordionItem title="Шаг 4. Получение продленного удостоверения">
              <p>
                Срок действия удостоверения частного охранника продлевается на пять лет.
              </p>
              <div className={style.docNotice}>
                <span className={style.docNoticeIcon} />
                <span>
                  <strong>Важно:</strong> Документы на продление рекомендуется подавать
                  за 3 месяца до окончания срока действия, но не позднее чем за 30 дней.
                </span>
              </div>
            </AccordionItem>
          </div>
        </section>

        {/* ─── ОГРАНИЧЕНИЯ ──────────────────────────────────────── */}
        <section className={style.section}>
          <div className={style.sectionHead}>
            <span className={style.eyebrow}>
              <span className={style.eyebrowLine} />
              Законодательство
            </span>
            <h2 className={style.sectionTitle}>Ограничения для получения удостоверения частного охранника</h2>
          </div>

          <div className={style.limitationsBlock}>
            <p className={style.limitationsIntro}>
              Федеральный закон от 30.11.2024 N 427-ФЗ "О частной охранной деятельности"
              Статья 12. Частный охранник
            </p>
            <p className={style.limitationsText}>
              <strong>Правовой статус частного охранника не могут получить лица:</strong>
            </p>
            <ul className={style.limitationsList}>
              <li>1) указанные в части 3 статьи 11 настоящего Федерального закона</li>
              <li>
                2) не имеющие медицинского заключения об отсутствии медицинских противопоказаний
                к исполнению обязанностей частного охранника
              </li>
              <li>
                3) не прошедшие обучения по основной программе профессионального обучения —
                программе профессиональной подготовки охранников
              </li>
              <li>
                4) у которых удостоверение частного охранника было аннулировано по одному из
                оснований, предусмотренных пунктом 1 части 2 статьи 13 настоящего Федерального
                закона, если после принятия решения об аннулировании удостоверения прошло менее
                одного года
              </li>
              <li>
                5) не прошедшие обязательной либо добровольной государственной дактилоскопической
                регистрации
              </li>
              <li>
                6) в отношении которых по результатам проверки, проведенной органами внутренних дел
                и (или) органами федеральной службы безопасности, имеется заключение о наличии
                опасности нарушения прав и свобод граждан, угрозы государственной или общественной
                безопасности
              </li>
            </ul>
          </div>
        </section>

        {/* ─── ПОРЯДОК МЕДИЦИНСКОГО ОСВИДЕТЕЛЬСТВОВАНИЯ ──────── */}
        <section className={style.section}>
          <div className={style.sectionHead}>
            <span className={style.eyebrow}>
              <span className={style.eyebrowLine} />
              Медицина
            </span>
            <h2 className={style.sectionTitle}>Порядок проведения медицинского освидетельствования</h2>
          </div>

          <div className={style.medicalOrderBlock}>
            <p>
              Медицинское освидетельствование частного охранника проводится в соответствии
              с действующим законодательством.
            </p>
            <div className={style.docNotice}>
              <span className={style.docNoticeIcon} />
              <span>
                <strong>Ссылка на нормативный документ:</strong>{' '}
                <a
                  href="https://login.consultant.ru/link/?req=doc&base=LAW&n=534417&date=27.05.2026&dst=100017&field=134"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={style.link}
                >
                  consultant.ru — Порядок медицинского освидетельствования
                </a>
              </span>
            </div>
          </div>
        </section>

        {/* Контакты */}
        <ReachUs />
      </main>
    </>
  );
};
