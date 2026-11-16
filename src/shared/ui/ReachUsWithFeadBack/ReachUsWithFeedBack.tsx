import { useState } from "react";
import style from "./ReachUsWtihFeedBack.module.scss";
import { ContactFormModal } from "../../utils/ContactFormModal";

export const ReachUsWithFeedBack = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className={style.ctaSection}>
        <h2 className={style.title}>Записаться на обучение</h2>

        <p className={style.subtitle}>
          Оставьте заявку, и мы подберем подходящую программу для вас или ваших сотрудников.
        </p>

        {/* Контактные данные (можно оставить, чтобы человек сразу видел, куда звонить) */}
        <div className={style.contactDetails}>
          <a href="tel:+74832320201" className={style.phone}>
            (4832) 32-02-01
          </a>
          <span className={style.address}>
            г. Брянск, ул. Институтская д. 15 к. 3
          </span>
        </div>

        <button
          className={style.submitBtn}
          onClick={() => setIsModalOpen(true)}
        >
          Оставить заявку
        </button>
      </section>

      <ContactFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};
