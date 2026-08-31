import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { ContactsMap } from './ContactsMap';
import style from './ContactsSection.module.scss';

export const ContactsSection: React.FC = () => {
  return (
    <section className={style.contactsSection}>
      <div className={style.container}>
        <h2 className={style.title}>Контакты</h2>

        <div className={style.grid}>
          {/* Левая часть — информация */}
          <div className={style.info}>
            <div className={style.infoCard}>
              <h3>ЧОУ ДПО "СПЕЦЦЕНТР"</h3>

              <div className={style.infoItem}>
                <FontAwesomeIcon icon={faLocationDot} className={style.icon} />
                <div>
                  <span className={style.label}>Адрес:</span>
                  <p>г. Брянск, ул. Институтская, д. 15 корп. 3</p>
                </div>
              </div>

              <div className={style.infoItem}>
                <FontAwesomeIcon icon={faPhone} className={style.icon} />
                <div>
                  <span className={style.label}>Телефон:</span>
                  <a href="tel:+74832320201">(4832) 32-02-01</a>
                </div>
              </div>

              <div className={style.infoItem}>
                <FontAwesomeIcon icon={faEnvelope} className={style.icon} />
                <div>
                  <span className={style.label}>Email:</span>
                  <a href="mailto:spezzentr@bk.ru">spezzentr@bk.ru</a>
                </div>
              </div>
            </div>
          </div>

          {/* Правая часть — карта */}
          <div className={style.mapWrapper}>
            <ContactsMap />
          </div>
        </div>
      </div>
    </section>
  );
};
