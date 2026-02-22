import { ContactsMap } from './ContactsMap';
import style from './ContactsSection.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';

interface Props {
  className?: string;
}

export const ContactsSection: React.FC<Props> = ({ className }) => {



  return (
    <section className={clsx(style.contactsSection, className)} id='contacts'>
      <div className={style.container}>
        <h2 className={style.title}>Контакты</h2>

        <div className={style.grid}>
          {/* Информация слева */}
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
                  <a href="tel:+74951234567">
                    (4832) 32-02-01</a>
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

          {/* Карта справа */}
          <div className={style.mapWrapper}>
            <ContactsMap
              address={'г. Брянск, ул. Институтская, д. 15 корп. 3'}
              coordinates={{ lat: 53.304506, lng: 34.302618 }}
              zoom={16}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
