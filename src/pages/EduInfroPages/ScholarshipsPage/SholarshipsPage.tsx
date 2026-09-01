import React from 'react';
import { PageTitle } from '../../../shared/ui/PageTitle';
import style from './SholarshipsPage.module.scss';

export const ScholarshipsPage: React.FC = () => {
  return (
    <>
      <PageTitle title="Стипендии и иные виды материальной поддержки | СПЕЦЦЕНТР" />

      <main className={style.scholarshipsPage}>

        <section className={style.section}>
          <div className={style.sectionHeader}>
            <h1 className={style.sectionTitle}>Стипендии и иные виды материальной поддержки</h1>
          </div>

          <div className={style.contentContainer}>
            {/* Стипендии */}
            <div className={style.infoCard}>
              <div className={style.cardHeader}>
                <h2 className={style.cardTitle}>Стипендии и меры социальной поддержки</h2>
              </div>
              <p className={style.cardText}>
                стипендия обучающимся не выплачивается (в связи с отсутствием на текущий период реализации
                программ, предусматривающих выплату стипендии); вопросы предоставления мер социальной поддержки
                обучающимся рассматриваются в индивидуальном порядке и находятся в компетенции директора.
              </p>
            </div>

            {/* Общежитие */}
            <div className={style.infoCard}>
              <div className={style.cardHeader}>
                <h2 className={style.cardTitle}>Наличие общежития, интерната</h2>
              </div>
              <p className={style.cardText}>
                общежитием и интернатом для иногородних обучающихся учебный центр не располагает.
              </p>
            </div>

            {/* Трудоустройство */}
            <div className={style.infoCard}>
              <div className={style.cardHeader}>
                <h2 className={style.cardTitle}>Трудоустройство выпускников</h2>
              </div>
              <p className={style.cardText}>
                трудоустройство выпускников не предусмотрено.
              </p>
            </div>

            {/* Дополнительная информация */}
            <div className={style.noteCard}>
              <p className={style.noteText}>
                По всем вопросам социальной поддержки обучающихся обращаться к директору
                в индивидуальном порядке.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
