
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faClock,
  faCircleInfo,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { PageTitle } from '../../shared/ui/PageTitle';

import style from './ContactsPage.module.scss';
import { ContactsMap } from '../../features/contacts/ContactsMap';

export const ContactsPage: React.FC = () => {
  return (
    <>
      <PageTitle
        title="Контакты | СПЕЦЦЕНТР"
        description="Свяжитесь с нами: адрес, телефоны, email, режим работы. Стрелковый комплекс и учебный центр в Брянске."
        keywords="контакты, адрес, телефон, обратная связь, стрелковый клуб, учебный центр"
      />

      <main className={style.contactsPage}>
        {/* ─── Hero ────────────────────────────────────────── */}
        <section className={style.hero}>
          <div className={style.heroBg}>
            <div className={style.heroGrid} />
            <div className={style.heroBlob1} />
            <div className={style.heroBlob2} />
          </div>
          <div className={style.heroContent}>
            <span className={style.eyebrow}>
              <span className={style.eyebrowLine} />
              Связь с нами
            </span>
            <h1 className={style.heroTitle}>Контакты</h1>
            <p className={style.heroDesc}>
              Свяжитесь с нами удобным для вас способом — по телефону, email
              или приезжайте к нам в центр.
            </p>
          </div>
        </section>

        <div className={style.container}>
          {/* ─── Информация + Карта ────────────────────────── */}
          <div className={style.contactsGrid}>
            {/* Левая колонка — контакты */}
            <div className={style.contactsInfo}>
              <div className={style.contactItem}>
                <FontAwesomeIcon icon={faLocationDot} className={style.contactIcon} />
                <div>
                  <span className={style.contactLabel}>Адрес</span>
                  <p>г. Брянск, ул. Институтская, д. 15 корп. 3</p>
                  <a
                    href="https://yandex.ru/maps/?text=Брянск,+ул.+Институтская,+д.+15+корп.+3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={style.contactLink}
                  >
                    Открыть на карте →
                  </a>
                </div>
              </div>

              <div className={style.contactItem}>
                <FontAwesomeIcon icon={faPhone} className={style.contactIcon} />
                <div>
                  <span className={style.contactLabel}>Телефон</span>
                  <a href="tel:+74832320201" className={style.contactPhone}>
                    +7 (4832) 32-02-01
                  </a>
                  <a href="tel:+74832327545" className={style.contactPhone}>
                    +7 (4832) 32-75-45
                  </a>
                </div>
              </div>

              <div className={style.contactItem}>
                <FontAwesomeIcon icon={faEnvelope} className={style.contactIcon} />
                <div>
                  <span className={style.contactLabel}>Email</span>
                  <a href="mailto:spezzentr@bk.ru" className={style.contactEmail}>
                    spezzentr@bk.ru
                  </a>
                </div>
              </div>

              <div className={style.contactItem}>
                <FontAwesomeIcon icon={faClock} className={style.contactIcon} />
                <div>
                  <span className={style.contactLabel}>Режим работы</span>
                  <p>
                    <strong>Учебный центр:</strong> 09:00 – 18:00
                    <br />
                    <strong>Тир:</strong> 10:00 – 19:00
                    <br />
                    <strong>Выходные:</strong> Ежедневно
                  </p>
                </div>
              </div>

              {/* ─── Памятка о записи ────────────────────────── */}
              <div className={style.noteBox}>
                <div className={style.noteIcon}>
                  <FontAwesomeIcon icon={faCircleInfo} />
                </div>
                <div className={style.noteContent}>
                  <span className={style.noteTitle}>Важно</span>
                  <p>
                    Для посещения тира обязательна <strong>предварительная запись</strong>.
                    Свяжитесь с нами по телефону, чтобы согласовать удобное время.
                  </p>
                  <div className={style.noteAction}>
                    <a href="tel:+74832320201" className={style.notePhone}>
                      Записаться по телефону
                      <FontAwesomeIcon icon={faArrowRight} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Правая колонка — карта */}
            <div className={style.contactsMap}>
              <ContactsMap />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
