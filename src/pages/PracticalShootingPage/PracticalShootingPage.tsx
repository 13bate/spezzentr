import React from 'react';
import { PageTitle } from '../../shared/ui/PageTitle';
import style from './PracticalShootingPage.module.scss';

// Данные перенесены наверх
export const practicalShootingData = {
  page: {
    title: 'Практическая стрельба',
    subtitle: 'IPSC • Пистолет',
  },

  hero: {
    title: 'Практическая стрельба',
    subtitle: 'IPSC • Пистолет',
    description: 'Еженедельные групповые тренировки проводятся по утверждённому расписанию как с опытными стрелками — членами ФПСР (IPSC), так и с начинающими стрелками, прошедшими Начальный курс по практической стрельбе, с целью совершенствования навыков владения оружием и подготовке к участию в официальных соревнованиях проводимых Федерацией практической стрельбы России.',
    badge: 'Члены ФПСР (IPSC)'
  },

  courses: [
    {
      id: 'regular',
      title: 'Базовая тренировка',
      badge: 'Еженедельно',
      description: 'Регулярные тренировки для поддержания и совершенствования навыков практической стрельбы.',
      features: [
        'Групповые занятия по расписанию',
        'Отработка упражнений IPSC',
        'Работа с опытными инструкторами',
        'Подготовка к соревнованиям'
      ],
      schedule: 'Еженедельно по расписанию',
      price: '2 500 ₽ / тренировка',
      type: 'regular'
    },
    {
      id: 'beginner',
      title: 'Начальный курс по практической стрельбе',
      badge: 'Стартовый курс',
      description: 'Одним из условий для вступления в Общероссийскую спортивную общественную организацию «Федерация практической стрельбы России» (ОСОО «ФПСР»), является прохождение курса «Безопасного и квалифицированного обращения с оружием» (БЕКОСО) и положительная сдача теоретического экзамена.',
      details: {
        duration: '4 занятия (индивидуально)',
        weapons: ['CZ 75 SHADOW', 'Glock 17', 'Викинг M'],
        shots: '250 выстрелов',
        price: '18 000 ₽'
      },
      includes: [
        'Курс «Безопасного и квалифицированного обращения с оружием» (БЕКОСО)',
        'Подготовка к теоретическому экзамену',
        'Практические занятия на стрельбище',
        'Работа с разными видами оружия'
      ],
      metaNote: 'Включает подготовку к экзамену ФПСР',
      type: 'course'
    }
  ],

  schedule: {
    title: 'Расписание тренировок',
    days: [
      { day: 'Понедельник', time: '18:00 - 20:00', icon: '📌' },
      { day: 'Среда', time: '18:00 - 20:00', icon: '📌' },
      { day: 'Пятница', time: '16:00 - 18:00', icon: '📌' },
      { day: 'Суббота', time: '11:00 - 13:00, 14:00 - 16:00', icon: '📌' }
    ],
    note: 'Возможно индивидуальное расписание по согласованию'
  },

  federation: {
    title: 'Федерация практической стрельбы России',
    description: 'Наши тренировки проводятся в соответствии с правилами и стандартами Федерации практической стрельбы России (ФПСР/IPSC).',
    link: {
      url: 'https://www.ipsc.ru',
      text: 'ipsc.ru'
    }
  },

  contacts: {
    title: 'Запись на тренировки',
    note: 'Запись на тренировки и курсы по телефону',
    phones: [
      { number: '+7 (4832) 32-05-10', display: '+7 (4832) 32-05-10' },
      { number: '+7 (930) 732-05-10', display: '+7 (930) 732-05-10' }
    ]
  }
};

export const PracticalShootingPage: React.FC = () => {
  // Сохраняем данные в переменные для удобства
  const courses = practicalShootingData.courses;
  const regularCourse = courses[0];
  const beginnerCourse = courses[1];

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
            {regularCourse && (
              <div className={`${style.courseCard} ${style.regularCard}`}>
                <div className={style.courseBadge}>{regularCourse.badge}</div>
                <h3 className={style.courseTitle}>{regularCourse.title}</h3>
                <p className={style.courseDescription}>{regularCourse.description}</p>

                {regularCourse.features && (
                  <div className={style.featuresList}>
                    {regularCourse.features.map((feature, idx) => (
                      <div key={idx} className={style.featureItem}>
                        <span className={style.featureIcon}>✓</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className={style.courseFooter}>
                  <div className={style.courseMeta}>
                    <span className={style.metaIcon}>📅</span>
                    <span>{regularCourse.schedule}</span>
                  </div>
                  <div className={style.coursePrice}>{regularCourse.price}</div>
                </div>
              </div>
            )}

            {/* Начальный курс */}
            {beginnerCourse && (
              <div className={`${style.courseCard} ${style.courseCardHighlight}`}>
                <div className={style.courseBadgePrimary}>{beginnerCourse.badge}</div>
                <h3 className={style.courseTitle}>{beginnerCourse.title}</h3>
                <p className={style.courseDescription}>{beginnerCourse.description}</p>

                {beginnerCourse.details && (
                  <div className={style.courseDetails}>
                    <div className={style.detailItem}>
                      <span className={style.detailIcon}>⏱</span>
                      <span>{beginnerCourse.details.duration}</span>
                    </div>
                    <div className={style.detailItem}>
                      <span className={style.detailIcon}>🔫</span>
                      <span>{beginnerCourse.details.weapons?.join(' • ')}</span>
                    </div>
                    <div className={style.detailItem}>
                      <span className={style.detailIcon}>🎯</span>
                      <span>{beginnerCourse.details.shots}</span>
                    </div>
                  </div>
                )}

                {beginnerCourse.includes && (
                  <div className={style.featuresList}>
                    {beginnerCourse.includes.map((item, idx) => (
                      <div key={idx} className={style.featureItem}>
                        <span className={style.featureIcon}>✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className={style.courseFooter}>
                  <div className={style.courseMeta}>
                    <span className={style.metaIcon}>📋</span>
                    <span>{beginnerCourse.metaNote}</span>
                  </div>
                  <div className={style.coursePriceLarge}>{beginnerCourse.details?.price}</div>
                </div>
              </div>
            )}
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
