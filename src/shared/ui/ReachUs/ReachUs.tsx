import style from "./ReachUs.module.scss";

// Строгие SVG-иконки
const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const PinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

export const ReachUs = () => {
  return (
    <section className={style.contactsSection}>
      <div className={style.contentWrapper}>

        <h2 className={style.sectionTitle}>Запись и справки по телефону:</h2>

        <div className={style.infoGrid}>
          {/* Блок с телефоном */}
          <a href="tel:+74832320201" className={style.contactItem}>
            <div className={style.iconWrapper}>
              <PhoneIcon />
            </div>
            <span className={style.phoneNumber}>+7 (4832) 32-02-01</span>
          </a>

          {/* Блок с адресом */}
          <div className={style.contactItem}>
            <div className={style.iconWrapper}>
              <PinIcon />
            </div>
            <span className={style.addressText}>
              г. Брянск, ул. Институтская д. 15 к. 3
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
