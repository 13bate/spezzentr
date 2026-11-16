import React from 'react';
import { PageTitle } from '../../shared/ui/PageTitle'; // Укажи правильный путь
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShieldHalved,
  faClock,
  faUserShield,
  faFileContract,
  faCheckCircle,
  faExclamationTriangle,
  faFilePdf,
} from '@fortawesome/free-solid-svg-icons';
import style from './BodyguardTrainingPage.module.scss';
import { ReachUsWithFeedBack } from '../../shared/ui/ReachUsWithFeadBack';

export const BodyguardTrainingPage: React.FC = () => {
  const requirements = [
    'Объём программы — 50 аудиторных часов независимо от имеющегося разряда.',
    'Обучаются частные охранники 5-го или 6-го разряда, имеющие право на использование спецсредств и оружия.',
    'Программа осваивается однократно, разряд не изменяется.',
    'Заочная форма не допускается. Огневая и физическая подготовка проходят только очно.',
    'Включает правовую, тактико-специальную, техническую, огневую и физическую подготовку, первую помощь и противодействие терроризму.',
    'Завершается итоговой аттестацией.',
  ];

  const documents = [
    'Паспорт гражданина РФ',
    'Удостоверение частного охранника и личная карточка (с разрядом 5 или 6)',
    'Действующее медицинское заключение об отсутствии противопоказаний к работе с оружием',
    'Заявление на обучение',
  ];

  return (
    <>
      <PageTitle title="Обучение телохранителей | СПЕЦЦЕНТР" />

      <main className={style.page}>
        {/* ─── Hero секция ─────────────────────────────────────── */}
        <section className={style.hero}>
          <div className={style.badge}>
            <span />
            Новый закон 427-ФЗ
          </div>
          <h1 className={style.title}>Обучение телохранителей</h1>
          <p className={style.subtitle}>
            С 1 сентября 2026 года защита жизни и здоровья граждан выделена в самостоятельный вид
            охранных услуг. Работать телохранителем можно только после прохождения специальной
            программы повышения квалификации.
          </p>
        </section>

        {/* ─── О программе ─────────────────────────────────────── */}
        <section className={style.section}>
          <h2 className={style.sectionTitle}>О программе</h2>
          <div className={style.introCard}>
            <p>
              Правовой статус телохранителя получают частные охранники, прошедшие обучение по
              типовым программам, утверждённым <strong>приказом Росгвардии от 18.06.2026 № 212</strong>.
              Без этой отметки в удостоверении с указанной даты работать в данной специализации запрещено.
            </p>
            <p>
              Для организаций, оказывающих услуги личной охраны, наличие в штате обученных
              телохранителей — обязательное условие законной деятельности.
            </p>
          </div>
        </section>

        {/* ─── Требования к программе ──────────────────────────── */}
        <section className={style.section}>
          <h2 className={style.sectionTitle}>Ключевые требования программы</h2>
          <div className={style.requirementsGrid}>
            <div className={style.reqCard}>
              <div className={style.reqIcon}><FontAwesomeIcon icon={faClock} /></div>
              <div>
                <h3>50 часов</h3>
                <p>Объём аудиторных занятий</p>
              </div>
            </div>
            <div className={style.reqCard}>
              <div className={style.reqIcon}><FontAwesomeIcon icon={faUserShield} /></div>
              <div>
                <h3>5 или 6 разряд</h3>
                <p>Требования к слушателям</p>
              </div>
            </div>
            <div className={style.reqCard}>
              <div className={style.reqIcon}><FontAwesomeIcon icon={faShieldHalved} /></div>
              <div>
                <h3>Только очно</h3>
                <p>Заочная форма не допускается</p>
              </div>
            </div>
          </div>

          <ul className={style.checkList}>
            {requirements.map((req, index) => (
              <li key={index}>
                <FontAwesomeIcon icon={faCheckCircle} className={style.checkIcon} />
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ─── Важное действие после обучения ──────────────────── */}
        <section className={style.section}>
          <div className={style.warningBox}>
            <div className={style.warningIcon}>
              <FontAwesomeIcon icon={faExclamationTriangle} />
            </div>
            <div>
              <h3>Важно после обучения</h3>
              <p>
                В течение <strong>15 дней</strong> после завершения программы телохранитель обязан подать
                в территориальный орган Росгвардии заявление о внесении изменений в удостоверение
                частного охранника (в удостоверение вносится отметка о квалификации телохранителя).
              </p>
            </div>
          </div>
        </section>

        {/* ─── Кому доступно и документы ───────────────────────── */}
        <section className={style.section}>
          <h2 className={style.sectionTitle}>Кому доступно обучение</h2>
          <p className={style.sectionDesc}>
            На программу зачисляются граждане, которые уже имеют:
          </p>

          <div className={style.infoGrid}>
            <div className={style.infoCard}>
              <FontAwesomeIcon icon={faFileContract} className={style.infoIcon} />
              <p>Действующее удостоверение частного охранника с квалификационным разрядом <strong>не ниже 5-го</strong>.</p>
            </div>
            <div className={style.infoCard}>
              <FontAwesomeIcon icon={faFileContract} className={style.infoIcon} />
              <p>Действующее медицинское заключение об отсутствии противопоказаний к работе с оружием.</p>
            </div>
            <div className={style.infoCard}>
              <FontAwesomeIcon icon={faFileContract} className={style.infoIcon} />
              <p>Отсутствие оснований для отказа в выдаче лицензии на оружие (мед. заключение и справка об отсутствии судимости).</p>
            </div>
          </div>

          <h3 className={style.documentsSubtitle}>Документы для зачисления:</h3>
          <div className={style.documentsList}>
            {documents.map((doc, index) => (
              <div key={index} className={style.documentItem}>
                <FontAwesomeIcon icon={faFilePdf} className={style.docIcon} />
                <span>{doc}</span>
              </div>
            ))}
          </div>
        </section>

        <ReachUsWithFeedBack />

      </main>
    </>
  );
};
