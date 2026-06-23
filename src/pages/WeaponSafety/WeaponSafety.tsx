import React from 'react';

import style from './WeaponSafety.module.scss';
import { safetyTrainingData } from './safetyTrainingData';
import { PageTitle } from '../../shared/ui/PageTitle';
import { InfoPagesTitle } from '../../shared/ui/InfoPagesTitle';

export const WeaponSafety: React.FC = () => {
  return (
    <>


      <main className={style.safetyTrainingPage}>
        <PageTitle
          title="Обучение безопасному обращению с оружием | СПЕЦЦЕНТР"
          description="Обучение безопасному обращению с оружием для получения лицензии на приобретение гражданского оружия."
          keywords="обучение оружию, лицензия на оружие, безопасное обращение"
        />
        <InfoPagesTitle title='Обучение безопасному обращению с оружием' description='Обучение безопасному обращению с оружием для получения лицензии на приобретение гражданского оружия.' />
        {/* Первоначальное обучение и Периодическая проверка */}
        <div className={style.grid2}>
          {/* Первоначальное обучение */}
          <div className={style.card}>
            <h2 className={style.cardTitle}>{safetyTrainingData.initialTraining.title}</h2>
            <p className={style.sectionSubtitle}>{safetyTrainingData.initialTraining.subtitle}</p>

            <h3 style={{ fontFamily: 'Oswald', margin: '20px 0 10px' }}>Необходимые документы:</h3>
            <ul className={style.documentsList}>
              {safetyTrainingData.initialTraining.documents.map((doc, idx) => (
                <li key={idx}>{doc}</li>
              ))}
            </ul>

            <h3 style={{ fontFamily: 'Oswald', margin: '20px 0 10px' }}>Программа обучения:</h3>
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
            <h2 className={style.cardTitle}>{safetyTrainingData.periodicCheck.title}</h2>
            <p className={style.sectionSubtitle}>{safetyTrainingData.periodicCheck.subtitle}</p>

            <h3 style={{ fontFamily: 'Oswald', margin: '20px 0 10px' }}>Необходимые документы:</h3>
            <ul className={style.documentsList}>
              {safetyTrainingData.periodicCheck.documents.map((doc, idx) => (
                <li key={idx}>{doc}</li>
              ))}
            </ul>

            <h3 style={{ fontFamily: 'Oswald', margin: '20px 0 10px' }}>Стоимость:</h3>
            {safetyTrainingData.periodicCheck.prices.map((item, idx) => (
              <div key={idx} style={{ marginBottom: '15px' }}>
                <div style={{ fontFamily: 'PT Sans', color: '#555' }}>{item.type}</div>
                <div className={style.price} style={{ fontSize: '22px', marginTop: '5px' }}>{item.price}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Стоимость услуг */}
        <section className={style.section}>
          <h2 className={style.sectionTitle}>Стоимость услуг</h2>
          <div className={style.pricesGrid}>
            {safetyTrainingData.prices.map((item, idx) => (
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
            {safetyTrainingData.additionalServices.map((service, idx) => (
              <div key={idx} className={style.serviceItem}>
                <span className={style.serviceName}>{service.name}</span>
                <span className={style.servicePrice}>{service.price}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Расписание */}
        <section className={style.section}>
          <h2 className={style.sectionTitle}>{safetyTrainingData.schedule.title}</h2>
          <div className={style.scheduleList}>
            {safetyTrainingData.schedule.dates.map((date, idx) => (
              <div key={idx} className={style.scheduleItem}>{date}</div>
            ))}
          </div>
        </section>

        {/* Информация об экзамене */}
        <section className={style.examSection}>
          <h2 className={style.examTitle}>Экзамен</h2>

          <div className={style.examGrid}>
            {/* Теоретическая часть */}
            <div className={style.examBlock}>
              <h4>{safetyTrainingData.examInfo.theoretical.title}</h4>
              <p>{safetyTrainingData.examInfo.theoretical.description}</p>
              <ul>
                {safetyTrainingData.examInfo.theoretical.rules.map((rule, idx) => (
                  <li key={idx}>{rule}</li>
                ))}
              </ul>
            </div>

            {/* Практическая часть */}
            <div className={style.examBlock}>
              <h4>{safetyTrainingData.examInfo.practical.title}</h4>
              <ul>
                {safetyTrainingData.examInfo.practical.exercises.map((ex, idx) => (
                  <li key={idx}>{ex}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Типичные ошибки */}
          <div style={{ marginTop: '30px' }}>
            <h4 style={{ fontFamily: 'Oswald', fontSize: '20px', marginBottom: '15px' }}>
              Типичные ошибки практической части экзамена:
            </h4>
            <ul className={style.mistakesList}>
              {safetyTrainingData.examInfo.practical.commonMistakes.map((mistake, idx) => (
                <li key={idx}>{mistake}</li>
              ))}
            </ul>
            <p className={style.warning}>{safetyTrainingData.examInfo.practical.warning}</p>
          </div>
        </section>

        {/* Результат */}
        <section className={style.resultBlock}>
          <p>{safetyTrainingData.result.description}</p>
          <p>{safetyTrainingData.result.note}</p>
        </section>

        {/* Контакты для записи */}
        <section className={style.contactsBlock}>
          <h3>{safetyTrainingData.contacts.title}</h3>
          <p>{safetyTrainingData.contacts.description}</p>

          <div className={style.contactMethods}>
            <div className={style.contactMethod}>
              <span className={style.methodIcon}>📍</span>
              <div className={style.methodContent}>
                <h4>Адрес:</h4>
                <p>{safetyTrainingData.contacts.address}</p>
              </div>
            </div>

            <div className={style.contactMethod}>
              <span className={style.methodIcon}>📞</span>
              <div className={style.methodContent}>
                <h4>Телефоны:</h4>
                {safetyTrainingData.contacts.phones.map((phone, idx) => (
                  <p key={idx}>
                    <a href={`tel:${phone.replace(/[^0-9+]/g, '')}`}>{phone}</a>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
