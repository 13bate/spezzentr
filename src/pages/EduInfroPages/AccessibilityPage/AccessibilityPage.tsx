import React from 'react';
import { PageTitle } from '../../../shared/ui/PageTitle';
import style from './AccessibilityPage.module.scss';

export const AccessibilityPage: React.FC = () => {
  return (
    <>
      <PageTitle title="Доступная среда | СПЕЦЦЕНТР" />

      <main className={style.accessibilityPage}>
        <section className={style.section}>
          <div className={style.sectionHeader}>
            <h1 className={style.sectionTitle}>Доступная среда</h1>
          </div>

          <div className={style.contentContainer}>
            {/* Информационное сообщение */}
            <div className={style.infoMessage}>
              <div className={style.messageContent}>
                <h2 className={style.messageTitle}>Информация о доступной среде</h2>
                <p className={style.messageText}>
                  Информация о специальных условиях для обучения инвалидов и лиц с ограниченными
                  возможностями здоровья будет добавлена позже.
                </p>
              </div>
            </div>

            {/* Контактная информация */}
            <div className={style.contactCard}>
              <h3 className={style.contactTitle}>По вопросам доступной среды обращаться:</h3>
              <div className={style.contactGrid}>
                <div className={style.contactItem}>
                  <div>
                    <div className={style.contactLabel}>Телефон:</div>
                    <a href="tel:+74832327545" className={style.contactValue}>+7 (4832) 32-75-45</a>
                  </div>
                </div>
                <div className={style.contactItem}>
                  <div>
                    <div className={style.contactLabel}>Email:</div>
                    <a href="mailto:spezzentr@bk.ru" className={style.contactValue}>spezzentr@bk.ru</a>
                  </div>
                </div>
                <div className={style.contactItem}>
                  <div>
                    <div className={style.contactLabel}>Адрес:</div>
                    <span className={style.contactValue}>г. Брянск, ул. Институтская, д. 15, оф. 232</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Примечание */}
            <div className={style.noteCard}>
              <p className={style.noteText}>
                * Информация будет дополняться.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
