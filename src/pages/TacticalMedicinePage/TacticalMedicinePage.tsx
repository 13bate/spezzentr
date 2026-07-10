import React from 'react';
import style from './TacticalMedicinePage.module.scss';
import { tacticalMedicineData } from './tacticalMedicineData';
import { PageTitle } from '../../shared/ui/PageTitle';
import { InfoPagesTitle } from '../../shared/ui/InfoPagesTitle';

export const TacticalMedicinePage: React.FC = () => {
  return (
    <main className={style.tacticalMedicinePage}>
      <PageTitle
        title="Тактическая медицина — курсы первой помощи | СПЕЦЦЕНТР"
        description="Курсы тактической медицины: обучение первой помощи, остановка кровотечений, эвакуация пострадавших. Подготовка для сотрудников силовых структур и гражданских."
        keywords="тактическая медицина, первая помощь, кровотечение, эвакуация, курс"
      />
      <InfoPagesTitle
        title="Курсы тактической медицины"
        description="Обучение навыкам оказания первой помощи в экстремальных условиях. Подготовка гражданских и сотрудников силовых структур."
      />

      {/* Первоначальное обучение и Повышение квалификации */}
      <div className={style.grid2}>
        {/* Базовый курс */}
        <div className={style.card}>
          <h2 className={style.cardTitle}>{tacticalMedicineData.basicCourse.title}</h2>
          <p className={style.sectionSubtitle}>{tacticalMedicineData.basicCourse.subtitle}</p>

          <h3 className={style.sectionHeading}>Программа курса:</h3>
          <ul className={style.programList}>
            {tacticalMedicineData.basicCourse.program.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>

          <div className={style.price}>{tacticalMedicineData.basicCourse.price}</div>
          <div className={style.duration}>{tacticalMedicineData.basicCourse.duration}</div>
        </div>

        {/* Продвинутый курс */}
        <div className={style.card}>
          <h2 className={style.cardTitle}>{tacticalMedicineData.advancedCourse.title}</h2>
          <p className={style.sectionSubtitle}>{tacticalMedicineData.advancedCourse.subtitle}</p>

          <h3 className={style.sectionHeading}>Программа курса:</h3>
          <ul className={style.programList}>
            {tacticalMedicineData.advancedCourse.program.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>

          <div className={style.price}>{tacticalMedicineData.advancedCourse.price}</div>
          <div className={style.duration}>{tacticalMedicineData.advancedCourse.duration}</div>
        </div>
      </div>

      {/* Стоимость услуг */}
      <section className={style.section}>
        <h2 className={style.sectionTitle}>Стоимость услуг</h2>
        <div className={style.pricesGrid}>
          {tacticalMedicineData.prices.map((item, idx) => (
            <div key={idx} className={style.priceCard}>
              <div className={style.priceCardTitle}>{item.title}</div>
              <div className={style.priceCardDesc}>{item.description}</div>
              <div className={style.priceCardValue}>{item.price}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Дополнительные услуги */}
      <section className={style.section}>
        <h2 className={style.sectionTitle}>Дополнительные услуги</h2>
        <div className={style.servicesList}>
          {tacticalMedicineData.additionalServices.map((service, idx) => (
            <div key={idx} className={style.serviceItem}>
              <span className={style.serviceName}>{service.name}</span>
              <span className={style.servicePrice}>{service.price}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Расписание */}
      <section className={style.section}>
        <h2 className={style.sectionTitle}>{tacticalMedicineData.schedule.title}</h2>
        <div className={style.scheduleList}>
          {tacticalMedicineData.schedule.dates.map((date, idx) => (
            <div key={idx} className={style.scheduleItem}>{date}</div>
          ))}
        </div>
      </section>

      {/* Информация об экзамене */}
      <section className={style.examSection}>
        <h2 className={style.examTitle}>Итоговая аттестация</h2>

        <div className={style.examGrid}>
          {/* Теоретическая часть */}
          <div className={style.examBlock}>
            <h4>{tacticalMedicineData.examInfo.theoretical.title}</h4>
            <p>{tacticalMedicineData.examInfo.theoretical.description}</p>
            <ul>
              {tacticalMedicineData.examInfo.theoretical.topics.map((topic, idx) => (
                <li key={idx}>{topic}</li>
              ))}
            </ul>
          </div>

          {/* Практическая часть */}
          <div className={style.examBlock}>
            <h4>{tacticalMedicineData.examInfo.practical.title}</h4>
            <ul>
              {tacticalMedicineData.examInfo.practical.scenarios.map((scenario, idx) => (
                <li key={idx}>{scenario}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Критерии оценки */}
        <div className={style.criteriaBlock}>
          <h4>Критерии оценки:</h4>
          <ul className={style.criteriaList}>
            {tacticalMedicineData.examInfo.criteria.map((criterion, idx) => (
              <li key={idx}>{criterion}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Результат */}
      <section className={style.resultBlock}>
        <p>{tacticalMedicineData.result.description}</p>
        <p className={style.resultNote}>{tacticalMedicineData.result.note}</p>
      </section>

      {/* Контакты для записи */}
      <section className={style.contactsBlock}>
        <h3>{tacticalMedicineData.contacts.title}</h3>
        <p>{tacticalMedicineData.contacts.description}</p>

        <div className={style.contactMethods}>
          <div className={style.contactMethod}>
            <span className={style.methodIcon}>📍</span>
            <div className={style.methodContent}>
              <h4>Адрес:</h4>
              <p>{tacticalMedicineData.contacts.address}</p>
            </div>
          </div>

          <div className={style.contactMethod}>
            <span className={style.methodIcon}>📞</span>
            <div className={style.methodContent}>
              <h4>Телефоны:</h4>
              {tacticalMedicineData.contacts.phones.map((phone, idx) => (
                <p key={idx}>
                  <a href={`tel:${phone.replace(/[^0-9+]/g, '')}`}>{phone}</a>
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
