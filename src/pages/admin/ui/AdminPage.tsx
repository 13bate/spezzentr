import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faClock,
  faCalendarDays,
  faNewspaper,
  faFilePdf,
} from '@fortawesome/free-solid-svg-icons';
import styles from './AdminPage.module.scss';

interface AdminSection {
  id: string;
  title: string;
  description: string;
  link: string;
  color: string;
  stats?: string;
  icon: any; // Можно заменить на IconDefinition, если импортировать типы
}

export const AdminPage: React.FC = () => {
  const sections: AdminSection[] = [
    {
      id: 'schedules',
      title: 'Расписания',
      description: 'Управление расписаниями экзаменов, соревнований и тренировок',
      link: '/admin/schedules',
      color: '#c81524', // Красный
      stats: '4 раздела',
      icon: faCalendarDays,
    },
    {
      id: 'news',
      title: 'Новости',
      description: 'Добавление и редактирование новостей клуба',
      link: '/admin/news',
      color: '#4a8fff', // Синий
      stats: 'Управление',
      icon: faNewspaper,
    },
    {
      id: 'documents',
      title: 'Документы',
      description: 'Загрузка и замена PDF-документов',
      link: '/admin/documents',
      color: '#2dc653', // Зеленый
      stats: '6 категорий',
      icon: faFilePdf,
    },
  ];

  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours();
    if (hours < 12) return 'Доброе утро';
    if (hours < 18) return 'Добрый день';
    return 'Добрый вечер';
  };

  const getCurrentDate = () => {
    return new Date().toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      weekday: 'long',
    });
  };

  return (
    <div className={styles.adminPage}>
      {/* Приветствие */}
      <div className={styles.welcomeSection}>
        {/* Декоративный элемент на фоне */}
        <div className={styles.welcomeBgDecor} />

        <div className={styles.welcomeContent}>
          <div className={styles.welcomeText}>
            <span className={styles.greeting}>{getCurrentTime()}!</span>
            <h1 className={styles.welcomeTitle}>
              Добро пожаловать в <span>админ-панель</span>
            </h1>
            <p className={styles.welcomeDesc}>
              Управляйте контентом сайта: расписаниями, новостями и документами
            </p>
          </div>
          <div className={styles.welcomeDate}>
            <FontAwesomeIcon icon={faClock} />
            <span>{getCurrentDate()}</span>
          </div>
        </div>
      </div>

      {/* Карточки разделов */}
      <div className={styles.sectionsGrid}>
        {sections.map((section) => (
          <Link to={section.link} key={section.id} className={styles.sectionCard}>
            {/* Цветная полоска сверху карточки */}
            <div className={styles.cardAccent} style={{ background: section.color }} />

            <div
              className={styles.cardIcon}
              style={{ background: `${section.color}15`, color: section.color }}
            >
              <FontAwesomeIcon icon={section.icon} />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{section.title}</h3>
              <p className={styles.cardDescription}>{section.description}</p>
              <div className={styles.cardFooter}>
                <span className={styles.cardStats}>{section.stats}</span>
                <span className={styles.cardArrow} style={{ color: section.color }}>
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
