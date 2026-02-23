import React from 'react';
import { PageTitle } from '../../shared/ui/PageTitle';

import style from './PracticalShootingPage.module.scss';
import { practicalShootingData } from './PracticalShootingData';

export const PracticalShootingPage: React.FC = () => {
  return (
    <>
      <PageTitle title={`${practicalShootingData.page.title} | СПЕЦЦЕНТР`} />

      <main className={style.practicalShootingPage}>
        {/* Hero секция */}
        <section className={style.hero}>
          <div className={style.heroContent}>
            <h1 className={style.title}>
              {practicalShootingData.hero.title}
              <span className={style.subtitle}>{practicalShootingData.hero.subtitle}</span>
            </h1>
            <p className={style.description}>{practicalShootingData.hero.description}</p>

            <div className={style.federationBadge}>
              <span className={style.federationIcon}>🏆</span>
              <span>{practicalShootingData.hero.badge}</span>
            </div>
          </div>
          <div className={style.heroPattern}></div>
        </section>

        {/* Курсы и тренировки */}
        <section className={style.coursesSection}>
          <h2 className={style.sectionTitle}>Программы обучения</h2>

          <div className={style.coursesGrid}>
            {/* Базовая тренировка */}
            <div className={`${style.courseCard} ${style.regularCard}`}>
              <div className={style.courseBadge}>{practicalShootingData.courses[0].badge}</div>
              <h3 className={style.courseTitle}>{practicalShootingData.courses[0].title}</h3>
              <p className={style.courseDescription}>{practicalShootingData.courses[0].description}</p>

              <div className={style.featuresList}>
                {practicalShootingData.courses[0].features.map((feature, idx) => (
                  <div key={idx} className={style.featureItem}>
                    <span className={style.featureIcon}>✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className={style.courseFooter}>
                <div className={style.courseMeta}>
                  <span className={style.metaIcon}>📅</span>
                  <span>{practicalShootingData.courses[0].schedule}</span>
                </div>
                <div className={style.coursePrice}>{practicalShootingData.courses[0].price}</div>
              </div>
            </div>

            {/* Начальный курс */}
            <div className={`${style.courseCard} ${style.courseCardHighlight}`}>
              <div className={style.courseBadgePrimary}>{practicalShootingData.courses[1].badge}</div>
              <h3 className={style.courseTitle}>{practicalShootingData.courses[1].title}</h3>
              <p className={style.courseDescription}>{practicalShootingData.courses[1].description}</p>

              <div className={style.courseDetails}>
                <div className={style.detailItem}>
                  <span className={style.detailIcon}>⏱</span>
                  <span>{practicalShootingData.courses[1].details.duration}</span>
                </div>
                <div className={style.detailItem}>
                  <span className={style.detailIcon}>🔫</span>
                  <span>{practicalShootingData.courses[1].details.weapons.join(' • ')}</span>
                </div>
                <div className={style.detailItem}>
                  <span className={style.detailIcon}>🎯</span>
                  <span>{practicalShootingData.courses[1].details.shots}</span>
                </div>
              </div>

              <div className={style.featuresList}>
                {practicalShootingData.courses[1].includes.map((item, idx) => (
                  <div key={idx} className={style.featureItem}>
                    <span className={style.featureIcon}>✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className={style.courseFooter}>
                <div className={style.courseMeta}>
                  <span className={style.metaIcon}>📋</span>
                  <span>{practicalShootingData.courses[1].metaNote}</span>
                </div>
                <div className={style.coursePriceLarge}>{practicalShootingData.courses[1].details.price}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Расписание */}
        <section className={style.scheduleSection}>
          <div className={style.scheduleContent}>
            <h2 className={style.sectionTitleLight}>{practicalShootingData.schedule.title}</h2>

            <div className={style.scheduleGrid}>
              {practicalShootingData.schedule.days.map((day, idx) => (
                <div key={idx} className={style.scheduleDay}>
                  <span className={style.dayIcon}>{day.icon}</span>
                  <span>{day.day}: {day.time}</span>
                </div>
              ))}
            </div>

            <p className={style.scheduleNote}>{practicalShootingData.schedule.note}</p>
          </div>
        </section>

        {/* Информация о федерации */}
        <section className={style.federationSection}>
          <div className={style.federationContainer}>
            <div className={style.federationLogo}>
              <span className={style.logoIcon}>🏛️</span>
            </div>
            <div className={style.federationInfo}>
              <h3 className={style.federationTitle}>{practicalShootingData.federation.title}</h3>
              <p className={style.federationDescription}>{practicalShootingData.federation.description}</p>
              <div className={style.federationLinks}>
                <a
                  href={practicalShootingData.federation.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={style.federationLink}
                >
                  {practicalShootingData.federation.link.text}
                  <span className={style.linkArrow}>→</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Контакты для записи */}
        <section className={style.contactSection}>
          <h2 className={style.sectionTitle}>{practicalShootingData.contacts.title}</h2>
          <p className={style.contactNote}>{practicalShootingData.contacts.note}</p>

          <div className={style.phoneGrid}>
            {practicalShootingData.contacts.phones.map((phone, idx) => (
              <a
                key={idx}
                href={`tel:${phone.number.replace(/[^0-9+]/g, '')}`}
                className={style.phoneCard}
              >
                <span className={style.phoneIcon}>📞</span>
                <span className={style.phoneNumber}>{phone.display}</span>
              </a>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};
