import React from 'react';
import { Link } from 'react-router';
import clsx from 'clsx';


import style from './SecurityTrainingOverview.module.scss';
import { securityTrainingContent } from './model';
import { Button } from '../../shared/ui/Button';

interface Props {
  className?: string;
}

export const SecurityTrainingOverview: React.FC<Props> = ({ className }) => {
  return (
    <section className={clsx(className, style.securityTraining)}>
      {/* Заголовок */}
      <div className={style.header}>
        <span className={style.subtitle}>{securityTrainingContent.subtitle}</span>
        <h2 className={style.title}>{securityTrainingContent.title}</h2>
        <p className={style.mainDescription}>{securityTrainingContent.mainDescription}</p>
      </div>

      {/* Полное описание */}
      <p className={style.fullDescription}>{securityTrainingContent.fullDescription}</p>

      {/* Стоимость */}
      <div className={style.pricesSection}>
        <h3>Стоимость обучения</h3>
        <div className={style.pricesGrid}>
          {securityTrainingContent.prices.map((item, index) => (
            <div key={index} className={style.priceCard}>
              <div className={style.priceLevel}>{item.level}</div>
              <div className={style.priceHours}>{item.hours}</div>
              <div className={style.priceValue}>{item.price}</div>
              <div className={style.priceDescription}>{item.description}</div>
            </div>
          ))}
        </div>
      </div>


      {/* Расписание */}
      <div className={style.scheduleSection}>
        <div className={style.scheduleIcon}>📅</div>
        <div className={style.scheduleInfo}>
          <p>{securityTrainingContent.schedule.text}</p>
          <div className={style.scheduleDetails}>
            {securityTrainingContent.schedule.days} • {securityTrainingContent.schedule.time}
          </div>
        </div>
      </div>

      {/* Информация о записи */}
      <div className={style.enrollmentBox}>
        <p className={style.enrollmentText}>{securityTrainingContent.enrollment}</p>
        <p className={style.enrollmentText}>{securityTrainingContent.enrollmentInfo}</p>
      </div>





      {/* Контакты */}
      <div className={style.contactsSection}>
        <div className={style.contactItem}>
          <span className={style.contactIcon}>📞</span>
          <span className={style.contactText}>
            <a href={`tel:${securityTrainingContent.contacts.phone}`}>
              {securityTrainingContent.contacts.phone}
            </a>
          </span>
        </div>
        <div className={style.contactItem}>
          <span className={style.contactIcon}>📍</span>
          <span className={style.contactText}>{securityTrainingContent.contacts.address}</span>
        </div>
      </div>

      {/* Кнопка */}
      <div className={style.buttonWrapper}>
        <Link to={securityTrainingContent.buttonLink}>
          <Button>
            {securityTrainingContent.buttonText}
          </Button>
        </Link>
      </div>
    </section>
  );
};
