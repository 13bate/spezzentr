import React from 'react';
import { PageTitle } from '../../shared/ui/PageTitle';
import { BackButton } from '../../shared/ui/BackButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWifi,
  faGift,
  faClock,
  faCreditCard,
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faChevronRight,
  faQuestionCircle
} from '@fortawesome/free-solid-svg-icons';
import { giftCardsData } from './giftCardsData.ts';
import style from './GiftCardsPage.module.scss';

export const GiftCardsPage: React.FC = () => {
  const features = [
    { icon: faGift, text: 'Любой номинал' },
    { icon: faClock, text: '12 месяцев' },
    { icon: faCreditCard, text: 'Электронный' },
    { icon: faWifi, text: 'Мгновенно' }
  ];

  return (
    <>
      <PageTitle title={`${giftCardsData.page.title} | СПЕЦЦЕНТР`} />

      <main className={style.giftCardsPage}>
        <div className={style.pageNavigation}>
          <BackButton text='Назад' to='/' />
        </div>

        {/* Hero секция с картой */}
        <section className={style.heroSection}>
          <div className={style.heroContent}>
            <h1 className={style.heroTitle}>
              Подарочные
              <span>сертификаты</span>
            </h1>
            <p className={style.heroSubtitle}>{giftCardsData.hero.subtitle}</p>
          </div>

          {/* Дебетовая карта */}
          <div className={style.cardContainer}>
            <div className={style.card}>
              {/* Золотая полоса */}
              <div className={style.cardGoldStripe}></div>

              {/* Чип карты */}
              <div className={style.cardChip}>
                <div className={style.chipLines}></div>
              </div>

              {/* Бесконтактная оплата */}
              <div className={style.cardContactless}>
                <FontAwesomeIcon icon={faWifi} />
              </div>

              {/* Номинал */}
              <div className={style.cardAmount}>
                <span className={style.currency}>₽</span>
                <span className={style.amount}>5 000</span>
                <span className={style.decimal}>00</span>
              </div>

              {/* Информация о карте */}
              <div className={style.cardInfo}>
                <div className={style.cardHolder}>
                  <div className={style.label}>Card Holder</div>
                  <div className={style.name}>SPEZZENTER</div>
                </div>
                <div className={style.cardExpiry}>
                  <div className={style.label}>Valid Thru</div>
                  <div className={style.date}>12/26</div>
                </div>
              </div>

              {/* Голографическая наклейка */}
              <div className={style.hologram}></div>

              {/* Логотип */}
              <div className={style.cardLogo}>СПЕЦЦЕНТР</div>

              {/* Парящие элементы */}
              <div className={style.glowEffect}></div>
              <div className={style.sparkle1}></div>
              <div className={style.sparkle2}></div>
            </div>
          </div>
        </section>

        {/* Преимущества */}
        <section className={style.featuresSection}>
          <h2 className={style.sectionTitle}>Почему выбирают нас</h2>
          <div className={style.featuresGrid}>
            {features.map((feature, index) => (
              <div key={index} className={style.featureCard}>
                <div className={style.featureIconWrapper}>
                  <FontAwesomeIcon icon={feature.icon} />
                </div>
                <h3>{feature.text}</h3>
                <p>Подарочный сертификат с возможностью выбора</p>
              </div>
            ))}
          </div>
        </section>

        {/* Номиналы */}
        <section className={style.nominalsSection}>
          <h2 className={style.sectionTitle}>Выберите номинал</h2>
          <div className={style.nominalsGrid}>
            {[1000, 2500, 5000, 7500, 10000].map((nominal) => (
              <div key={nominal} className={style.nominalCard}>
                <div className={style.nominalAmount}>
                  <span className={style.nominalCurrency}>₽</span>
                  <span className={style.nominalValue}>{nominal.toLocaleString()}</span>
                </div>
                <button className={style.nominalButton}>Выбрать</button>
              </div>
            ))}
          </div>
        </section>

        {/* Поводы для подарка */}
        <section className={style.occasionsSection}>
          <h2 className={style.sectionTitle}>Идеальный подарок на любой повод</h2>
          <div className={style.occasionsGrid}>
            {giftCardsData.occasions.map((occasion, index) => (
              <div key={index} className={style.occasionCard}>
                <span className={style.occasionIcon}>{occasion.icon}</span>
                <span className={style.occasionText}>{occasion.text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Как это работает */}
        <section className={style.howItWorksSection}>
          <h2 className={style.sectionTitle}>Как это работает</h2>
          <div className={style.stepsGrid}>
            {giftCardsData.howToBuy.map((step) => (
              <div key={step.step} className={style.stepCard}>
                <div className={style.stepNumber}>{step.step}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className={style.faqSection}>
          <h2 className={style.sectionTitle}>Часто задаваемые вопросы</h2>
          <div className={style.faqGrid}>
            {giftCardsData.faq.map((item, index) => (
              <div key={index} className={style.faqCard}>
                <div className={style.faqQuestion}>
                  <FontAwesomeIcon icon={faQuestionCircle} />
                  <h3>{item.question}</h3>
                </div>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Контакты */}
        <section className={style.contactsSection}>
          <h2 className={style.sectionTitle}>Закажите прямо сейчас</h2>
          <p className={style.contactNote}>{giftCardsData.contacts.orderNote}</p>

          <div className={style.contactsGrid}>
            <a href={`tel:${giftCardsData.contacts.phone.replace(/[^0-9+]/g, '')}`} className={style.contactCard}>
              <div className={style.contactIcon}>
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div className={style.contactInfo}>
                <span className={style.contactLabel}>Телефон</span>
                <span className={style.contactValue}>{giftCardsData.contacts.phone}</span>
              </div>
            </a>

            <a href={`mailto:${giftCardsData.contacts.email}`} className={style.contactCard}>
              <div className={style.contactIcon}>
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className={style.contactInfo}>
                <span className={style.contactLabel}>Email</span>
                <span className={style.contactValue}>{giftCardsData.contacts.email}</span>
              </div>
            </a>

            <div className={style.contactCard}>
              <div className={style.contactIcon}>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              <div className={style.contactInfo}>
                <span className={style.contactLabel}>Адрес</span>
                <span className={style.contactValue}>{giftCardsData.contacts.address}</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
