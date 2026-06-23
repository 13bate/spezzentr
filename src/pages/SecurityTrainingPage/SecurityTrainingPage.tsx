import React from 'react';
import { PageTitle } from '../../shared/ui/PageTitle';
import { securityTrainingData } from '../../features/SecurityTraining/data/securityTrainingData';
import style from './SecurityTrainingPage.module.scss';
import studyQeuestionsPdf from "../../../public/Методичка-ОХРАННИКИ-2023-4-6-разряд.pdf";
import periodicCheckQuestionsPdf from "../../../public/ПЕРИОДИЧЕСКАЯ-ПРОВЕРКА-2023-4-6-разряд.pdf";
import { InfoPagesTitle } from '../../shared/ui/InfoPagesTitle';

export const SecurityTrainingPage: React.FC = () => {
  return (
    <>
      <PageTitle title="Обучение частных охранников | СПЕЦЦЕНТР" />

      <main className={style.securityTrainingPage}>
        {/* Hero секция */}
        <section className={style.hero}>
          <InfoPagesTitle title={securityTrainingData.hero.title} description={securityTrainingData.hero.description} />
        </section>

        {/* Полное описание */}
        <p className={style.fullDescription}>{securityTrainingData.fullDescription}</p>

        {/* Стоимость обучения */}
        <section className={style.pricesSection}>
          <h2 className={style.sectionTitle}>Стоимость обучения</h2>
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

        {/* Расписание */}
        <section className={style.scheduleSection}>
          <h3 className={style.scheduleTitle}>{securityTrainingData.schedule.title}</h3>
          <p className={style.scheduleText}>{securityTrainingData.schedule.text}</p>
          <div className={style.scheduleDetails}>
            {securityTrainingData.schedule.days} • {securityTrainingData.schedule.time}
          </div>
        </section>

        {/* Информация о записи */}
        <div className={style.enrollmentBox}>
          <p>{securityTrainingData.enrollment.text}</p>
          <p>{securityTrainingData.enrollment.note}</p>
        </div>

        {/* Документы */}
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

        {/* Контакты */}
        <section className={style.contactsBlock}>
          <h3 className={style.contactsTitle}>{securityTrainingData.contacts.title}</h3>

          <div className={style.contactMethods}>
            <div className={style.contactMethod}>
              <span className={style.methodIcon}>📞</span>
              <div className={style.methodContent}>
                <h4>Телефоны:</h4>
                {securityTrainingData.contacts.phones.map((phone, idx) => (
                  <p key={idx}>
                    <a href={`tel:${phone.replace(/[^0-9+]/g, '')}`}>{phone}</a>
                  </p>
                ))}
              </div>
            </div>

            <div className={style.contactMethod}>
              <span className={style.methodIcon}>📍</span>
              <div className={style.methodContent}>
                <h4>Адрес:</h4>
                <p>{securityTrainingData.contacts.address}</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ секция */}
        <section className={style.faqSection}>
          <h2 className={style.faqTitle}>Часто задаваемые вопросы</h2>
          <div className={style.faqGrid}>
            {securityTrainingData.faq.map((item, index) => (
              <div key={index} className={style.faqItem}>
                <a href={studyQeuestionsPdf}><button className={style.faqQuestion}>{item.question}</button></a>
                <a href={periodicCheckQuestionsPdf}><button className={style.faqAnswer}>{item.question}</button></a>
              </div>
            ))}
          </div>
        </section >
      </main >
    </>
  );
};
