import React from 'react';
import { PageTitle } from '../../../shared/ui/PageTitle';
import { BackButton } from '../../../shared/ui/BackButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChalkboardTeacher,
  faUserGraduate,
  faUserTie,
  faGraduationCap,
  faBookOpen,
  faClock
} from '@fortawesome/free-solid-svg-icons';
import style from './TeachersPage.module.scss';

export const TeachersPage: React.FC = () => {
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
      <PageTitle title="Педагогический состав | СПЕЦЦЕНТР" />

      <main className={style.teachersPage}>
        <div className={style.pageNavigation}>
          <BackButton />
        </div>

        <section className={style.section}>
          <div className={style.sectionHeader}>
            <div className={style.sectionIcon}>
              <FontAwesomeIcon icon={faChalkboardTeacher} />
            </div>
            <h1 className={style.sectionTitle}>Педагогический состав</h1>
          </div>

          <div className={style.contentContainer}>
            <div className={style.teachersGrid}>
              {teachers.map((teacher, index) => (
                <div key={index} className={style.teacherCard}>
                  <div className={style.cardHeader}>
                    <div className={style.teacherIcon}>
                      <FontAwesomeIcon icon={faUserGraduate} />
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
                        <FontAwesomeIcon icon={faUserTie} className={style.infoIcon} />
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
          </div>
        </section>
      </main>
    </>
  );
};
