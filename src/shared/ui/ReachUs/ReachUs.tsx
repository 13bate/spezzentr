import style from "./ReachUs.module.scss"

export const ReachUs = () => {
  return (
    < section className={style.contactsSection} >
      <h2 className={style.sectionTitle}>Запись и справки по телефону:</h2>
      <div className={style.contacts}>
        <a href="tel:+74953200201" className={style.phone}>
          <span className={style.phoneIcon}>📞</span>
          32-02-01
        </a>
      </div>
      <p className={style.address}>
        <span className={style.addressIcon}>📍</span>
        г. Брянск, ул. Институтская д. 15 к. 3
      </p>
    </section >
  )
}
