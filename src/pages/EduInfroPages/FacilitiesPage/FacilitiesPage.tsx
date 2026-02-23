import React from 'react';
import { PageTitle } from '../../../shared/ui/PageTitle';
import { BackButton } from '../../../shared/ui/BackButton';
import style from './FacilitiesPage.module.scss';

export const FacilitiesPage: React.FC = () => {
  const facilitiesData = {
    classrooms: [
      {
        address: 'г. Брянск, ул. Институтская, д. 15',
        description: 'Учебные классы, оснащенные всеми необходимыми средствами, в том числе манекенами, макетами, компьютерами, методическими пособиями и специальными средствами, разрешенными в частной охранной деятельности.'
      }
    ],
    shootingRange: {
      address: 'г. Брянск, ул. Институтская, д. 15, корп. 3',
      description: 'Оборудованный стрелковый тир для практических стрельб по учебной дисциплине «Огневая подготовка». Имеет четыре направления стрельбы с дистанциями 25 м.',
      features: [
        '4 направления стрельбы',
        'Дистанция 25 м',
        'Различные виды служебного и гражданского оружия'
      ]
    },
    library: 'Образовательное учреждение располагает достаточным количеством учебной литературы и методических пособий по изучаемым дисциплинам в рамках освоения образовательных программ.',
    sportsFacility: 'Имеется специально оборудованное помещение для занятий физической культурой и спортом с необходимым количеством спортивного инвентаря.',
    internet: 'В учебном классе, оборудованном компьютерной техникой, обеспечен доступ к информационно-телекоммуникационным сетям и электронным образовательным ресурсам для обучающихся.'
  };

  const accessibilityData = {
    description: 'Информация о доступной среде будет добавлена после завершения паспортизации объекта.',
    status: 'В разработке'
  };

  return (
    <>
      <PageTitle title="Материально-техническое обеспечение | СПЕЦЦЕНТР" />

      <main className={style.facilitiesPage}>
        <div className={style.pageNavigation}>
          <BackButton />
        </div>

        <section className={style.section}>
          <div className={style.sectionHeader}>
            <span className={style.sectionIcon}>🏢</span>
            <h1 className={style.sectionTitle}>Материально-техническое обеспечение</h1>
          </div>

          <div className={style.contentContainer}>
            {/* Учебные классы */}
            <h2 className={style.sectionSubtitle}>Учебные классы</h2>
            {facilitiesData.classrooms.map((room, index) => (
              <div key={index} className={style.infoCard}>
                <div className={style.cardHeader}>
                  <span className={style.cardIcon}>🏛️</span>
                  <h3 className={style.cardTitle}>Учебный класс</h3>
                </div>
                <p className={style.cardAddress}>{room.address}</p>
                <p className={style.cardDescription}>{room.description}</p>
              </div>
            ))}

            {/* Стрелковый тир */}
            <h2 className={style.sectionSubtitle}>Стрелковый тир</h2>
            <div className={style.shootingRangeCard}>
              <div className={style.cardHeader}>
                <span className={style.cardIcon}>🎯</span>
                <h3 className={style.cardTitle}>Практический тир</h3>
              </div>
              <p className={style.cardAddress}>{facilitiesData.shootingRange.address}</p>
              <p className={style.cardDescription}>{facilitiesData.shootingRange.description}</p>

              <div className={style.featuresList}>
                {facilitiesData.shootingRange.features.map((feature, index) => (
                  <div key={index} className={style.featureItem}>
                    <span className={style.featureIcon}>✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Библиотека */}
            <h2 className={style.sectionSubtitle}>Библиотека</h2>
            <div className={style.infoCard}>
              <div className={style.cardHeader}>
                <span className={style.cardIcon}>📚</span>
                <h3 className={style.cardTitle}>Учебная литература</h3>
              </div>
              <p className={style.cardDescription}>{facilitiesData.library}</p>
            </div>

            {/* Спортивный зал */}
            <h2 className={style.sectionSubtitle}>Спортивный зал</h2>
            <div className={style.infoCard}>
              <div className={style.cardHeader}>
                <span className={style.cardIcon}>🏋️</span>
                <h3 className={style.cardTitle}>Спортивный зал</h3>
              </div>
              <p className={style.cardDescription}>{facilitiesData.sportsFacility}</p>
            </div>

            {/* Интернет и IT */}
            <h2 className={style.sectionSubtitle}>Информационные ресурсы</h2>
            <div className={style.infoCard}>
              <div className={style.cardHeader}>
                <span className={style.cardIcon}>💻</span>
                <h3 className={style.cardTitle}>Доступ к информационным сетям</h3>
              </div>
              <p className={style.cardDescription}>{facilitiesData.internet}</p>
            </div>

            {/* Дополнительная информация */}
            <div className={style.additionalInfo}>
              <p className={style.additionalText}>
                Для проведения практических стрельб и занятий в образовательном процессе используются
                виды, типы, модели служебного и гражданского оружия.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}; 
