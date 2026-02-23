import React from 'react';
import { PageTitle } from '../../../shared/ui/PageTitle';
import { BackButton } from '../../../shared/ui/BackButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUsers,
  faUserTie,
  faUser,
  faPhone,
  faEnvelope,
  faClock,
  faChalkboardTeacher,
  faGraduationCap,
  faBookOpen,
  faUserGraduate,
  faBriefcase
} from '@fortawesome/free-solid-svg-icons';
import style from './ManagmentPage.module.scss';

export const ManagementPage: React.FC = () => {
  const managementData = {
    director: {
      name: 'Першукевич Андрей Викторович',
      position: 'Директор ЧОУ ДПО «СПЕЦЦЕНТР»',
      phone: '+7 (4832) 32-75-46',
      email: 'spezzentr@bk.ru',
      receptionHours: 'Пн-Пт 10:00-17:00'
    },
    deputy: {
      name: 'Агеенко Олег Николаевич',
      position: 'Заместитель директора',
      phone: '+7 (4832) 32-75-45',
      email: 'spezzentr@bk.ru'
    }
  };

  const teachers = [
    {
      name: 'Агеенко Олег Николаевич',
      education: 'высшее',
      qualification: 'инженер-механик',
      disciplines: ['Тактико-специальная подготовка', 'Использование специальных средств'],
      experience: {
        total: '31 год',
        teaching: '3 года'
      }
    },
    {
      name: 'Першукевич Андрей Викторович',
      education: 'высшее',
      qualification: 'учитель физической культуры',
      disciplines: ['Специальная физическая подготовка', 'Первая медицинская помощь', 'Правовая подготовка', 'Огневая подготовка'],
      experience: {
        total: '17 лет',
        teaching: '9 лет'
      }
    },
    {
      name: 'Марочкина Наталья Николаевна',
      education: 'высшее',
      qualification: 'психолог, преподаватель психологии',
      disciplines: ['Психологическая подготовка'],
      experience: {
        total: '10 лет',
        teaching: '9 лет'
      }
    },
    {
      name: 'Першукевич Виктор Наумович',
      education: 'высшее',
      qualification: 'инженер-электромеханик',
      disciplines: ['Техническая подготовка'],
      experience: {
        total: '47 лет',
        teaching: '9 лет'
      }
    },
    {
      name: 'Мармус Владимир Викторович',
      education: 'среднее специальное',
      qualification: 'преподаватель физической культуры',
      disciplines: ['Огневая подготовка'],
      experience: {
        total: '33 года',
        teaching: '9 лет'
      }
    }
  ];

  return (
    <>
      <PageTitle title="Руководство и педагогический состав | СПЕЦЦЕНТР" />

      <main className={style.managementPage}>
        <div className={style.pageNavigation}>
          <BackButton />
        </div>

        <section className={style.section}>
          <div className={style.sectionHeader}>
            <div className={style.sectionIcon}>
              <FontAwesomeIcon icon={faUsers} />
            </div>
            <h1 className={style.sectionTitle}>Руководство и педагогический состав</h1>
          </div>

          <div className={style.contentContainer}>
            {/* Руководство */}
            <h2 className={style.sectionSubtitle}>Руководство</h2>

            <div className={style.managementGrid}>
              {/* Директор */}
              <div className={style.managementCard}>
                <div className={style.managementIcon}>
                  <FontAwesomeIcon icon={faUserTie} />
                </div>
                <div className={style.managementContent}>
                  <span className={style.managementLabel}>Директор</span>
                  <h3 className={style.managementName}>{managementData.director.name}</h3>
                  <div className={style.managementContacts}>
                    <div className={style.contactItem}>
                      <FontAwesomeIcon icon={faPhone} className={style.contactIcon} />
                      <a href={`tel:${managementData.director.phone.replace(/[^0-9+]/g, '')}`}>
                        {managementData.director.phone}
                      </a>
                    </div>
                    <div className={style.contactItem}>
                      <FontAwesomeIcon icon={faEnvelope} className={style.contactIcon} />
                      <a href={`mailto:${managementData.director.email}`}>
                        {managementData.director.email}
                      </a>
                    </div>
                    <div className={style.contactItem}>
                      <FontAwesomeIcon icon={faClock} className={style.contactIcon} />
                      <span>{managementData.director.receptionHours}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Заместитель */}
              <div className={style.managementCard}>
                <div className={style.managementIcon}>
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <div className={style.managementContent}>
                  <span className={style.managementLabel}>Заместитель директора</span>
                  <h3 className={style.managementName}>{managementData.deputy.name}</h3>
                  <div className={style.managementContacts}>
                    <div className={style.contactItem}>
                      <FontAwesomeIcon icon={faPhone} className={style.contactIcon} />
                      <a href={`tel:${managementData.deputy.phone.replace(/[^0-9+]/g, '')}`}>
                        {managementData.deputy.phone}
                      </a>
                    </div>
                    <div className={style.contactItem}>
                      <FontAwesomeIcon icon={faEnvelope} className={style.contactIcon} />
                      <a href={`mailto:${managementData.deputy.email}`}>
                        {managementData.deputy.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Педагогический состав */}
            <h2 className={style.sectionSubtitle}>Педагогический состав</h2>

            <div className={style.teachersGrid}>
              {teachers.map((teacher, index) => (
                <div key={index} className={style.teacherCard}>
                  <div className={style.teacherHeader}>
                    <div className={style.teacherIcon}>
                      <FontAwesomeIcon icon={faChalkboardTeacher} />
                    </div>
                    <h3 className={style.teacherName}>{teacher.name}</h3>
                  </div>

                  <div className={style.teacherInfo}>
                    <div className={style.infoRow}>
                      <span className={style.infoLabel}>
                        <FontAwesomeIcon icon={faGraduationCap} className={style.infoIcon} />
                        Образование:
                      </span>
                      <span className={style.infoValue}>{teacher.education}</span>
                    </div>

                    <div className={style.infoRow}>
                      <span className={style.infoLabel}>
                        <FontAwesomeIcon icon={faUserGraduate} className={style.infoIcon} />
                        Квалификация:
                      </span>
                      <span className={style.infoValue}>{teacher.qualification}</span>
                    </div>

                    <div className={style.infoRow}>
                      <span className={style.infoLabel}>
                        <FontAwesomeIcon icon={faBookOpen} className={style.infoIcon} />
                        Дисциплины:
                      </span>
                      <span className={style.infoValue}>{teacher.disciplines.join(', ')}</span>
                    </div>

                    <div className={style.experienceRow}>
                      <div className={style.experienceItem}>
                        <FontAwesomeIcon icon={faClock} className={style.experienceIcon} />
                        <span className={style.experienceLabel}>Общий стаж</span>
                        <span className={style.experienceValue}>{teacher.experience.total}</span>
                      </div>
                      <div className={style.experienceItem}>
                        <FontAwesomeIcon icon={faClock} className={style.experienceIcon} />
                        <span className={style.experienceLabel}>Педагогический стаж</span>
                        <span className={style.experienceValue}>{teacher.experience.teaching}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Информация о вакансиях */}
            <div className={style.infoCard}>
              <h3 className={style.infoCardTitle}>
                <FontAwesomeIcon icon={faBriefcase} className={style.infoCardIcon} />
                Информация для педагогов
              </h3>
              <p className={style.infoCardText}>
                По вопросам трудоустройства в педагогический состав обращаться к директору
                или заместителю директора по указанным выше контактам.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
