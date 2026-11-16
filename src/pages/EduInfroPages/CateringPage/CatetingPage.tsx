import React from 'react';
import { PageTitle } from '../../../shared/ui/PageTitle';
import style from './CateringPage.module.scss';

// Иконка для блока с информацией (тарелка с приборами, чтобы визуально поддержать тему)
const FoodIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path>
    <path d="M7 2v20"></path>
    <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path>
  </svg>
);

export const CateringPage: React.FC = () => {
  return (
    <>
      <PageTitle title="Организация питания | СПЕЦЦЕНТР" />

      <main className={style.cateringPage}>
        <section className={style.section}>
          <div className={style.sectionHeader}>
            <h1 className={style.sectionTitle}>Организация питания</h1>
          </div>

          <div className={style.contentContainer}>
            {/* Информационное сообщение */}
            <div className={style.infoMessage}>
              <div className={style.messageIcon}>
                <FoodIcon />
              </div>
              <div className={style.messageContent}>
                <h2 className={style.messageTitle}>Питание не организуется</h2>
                <p className={style.messageText}>
                  Информируем вас, что в ЧОУ ДПО «СПЕЦЦЕНТР» организация питания
                  для обучающихся и слушателей <strong>не предусмотрена</strong>.
                </p>
              </div>
            </div>

            {/* Примечание */}
            <div className={style.noteCard}>
              <p className={style.noteText}>
                * Учебный центр не имеет собственной столовой или буфета.
                Вы можете воспользоваться ближайшими кафе и магазинами, расположенными рядом с центром.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
