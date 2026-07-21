import style from "./ReachUs.module.scss"

export const ReachUs = () => {
  return (
    < section className={style.contactsSection} >
      <h2 className={style.sectionTitle}>Запись и справки по телефону:</h2>
      <div className={style.contacts}>
        <a href="tel:+74832757545" className={style.phone}>
          <span className={style.phoneIcon}>📞</span>
          +7 (4832) 32-75-45
        </a>
        <a href="tel:+74832757546" className={style.phone}>
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
