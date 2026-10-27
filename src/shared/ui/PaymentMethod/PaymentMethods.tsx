
import styles from './PaymentMethods.module.scss';

// --- Иконки (SVG) ---
const IconCheck = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const IconDoc = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const IconCard = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
    <line x1="1" y1="10" x2="23" y2="10" />
  </svg>
);

const IconComputer = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

const IconCash = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="6" width="20" height="12" rx="2" />
    <circle cx="12" cy="12" r="2" />
    <path d="M6 12h.01M18 12h.01" />
  </svg>
);

export const PaymentMethods = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <div className={styles.header}>
          <h2 className={styles.title}>Способы оплаты</h2>
          <p className={styles.subtitle}>
            Оплатить обучение можно любым удобным способом: как физическое лицо, так и юридическое лицо.
          </p>
        </div>

        <div className={styles.cardsList}>

          {/* Карточка 1: Юридические лица */}
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Для юридических лиц</h3>
              <p className={styles.cardText}>
                Для обучения сотрудников юридических лиц необходимо заключить договор на возмездное оказание образовательных услуг, оплатить счет. После успешного окончания обучения подписывается акт выполненных работ.
              </p>
            </div>

            <div className={styles.steps}>
              <div className={styles.step}>
                <div className={styles.stepIcon}><IconCheck /></div>
                <div className={styles.stepText}>Заполнить анкету по выбранной программе</div>
              </div>
              <div className={styles.step}>
                <div className={styles.stepIcon}><IconDoc /></div>
                <div className={styles.stepText}>Заключить договор</div>
              </div>
              <div className={styles.step}>
                <div className={styles.stepIcon}><IconCard /></div>
                <div className={styles.stepText}>Внести оплату на расчетный счет</div>
              </div>
              <div className={styles.step}>
                <div className={styles.stepIcon}><IconDoc /></div>
                <div className={styles.stepText}>После успешного окончания обучения подписать акт выполненных работ</div>
              </div>
            </div>
          </div>

          {/* Карточка 2: Физические лица */}
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Для физических лиц</h3>
              <p className={styles.cardText}>
                Заполняется заявление на обучение, составляется и подписывается договор на оказание образовательных услуг. Услуга оплачивается любым удобным способом: наличными или безналичными средствами. После успешного окончания обучения слушатель подписывает с центром акт выполненных работ.
              </p>
            </div>

            <div className={styles.steps}>
              <div className={styles.step}>
                <div className={styles.stepIcon}><IconComputer /></div>
                <div className={styles.stepText}>Оплатить онлайн по предоставленной ссылке</div>
              </div>
              <div className={styles.step}>
                <div className={styles.stepIcon}><IconCash /></div>
                <div className={styles.stepText}>Оплатить наличным расчетом в кассе нашего центра</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
