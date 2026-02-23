import React from 'react';
import { Link } from 'react-router-dom';
import { PageTitle } from '../../../shared/ui/PageTitle';
import style from './BasicInfoPage.module.scss';
import { BackButton } from '../../../shared/ui/BackButton';

export const BasicInfoPage: React.FC = () => {
  return (
    <>
      <PageTitle title="Основные сведения | СПЕЦЦЕНТР" />

      <main className={style.basicInfoPage}>
        {/* Кнопка с отступом слева */}
        <div className={style.buttonWrapper}>
          <BackButton />
        </div>

        {/* Секция с отступом слева */}
        <section className={style.categorySection}>
          <div className={style.categoryHeader}>
            <div>
              <h2 className={style.categoryTitle}>Основные сведения</h2>
            </div>
          </div>

          <div className={style.contentContainer}>
            <div className={style.infoGrid}>
              <div className={style.infoCard}>
                <span className={style.infoLabel}>Дата создания</span>
                <div className={`${style.infoValue} ${style.large}`}>25 февраля 2013 года</div>
              </div>

              <div className={style.infoCard}>
                <span className={style.infoLabel}>Учредитель</span>
                <div className={style.infoValue}>Першукевич Андрей Викторович</div>
              </div>

              <div className={style.infoCard}>
                <span className={style.infoLabel}>Юридический адрес</span>
                <div className={style.infoValue}>241035, г. Брянск, ул. Институтская, д. 15</div>
              </div>

              <div className={style.infoCard}>
                <span className={style.infoLabel}>Фактический адрес</span>
                <div className={style.infoValue}>241035, г. Брянск, ул. Институтская, д. 15, оф. 232</div>
              </div>

              <div className={style.infoCard}>
                <span className={style.infoLabel}>График работы</span>
                <div className={style.infoValue}>понедельник — суббота с 09.00 до 20.00</div>
              </div>

              <div className={style.infoCard}>
                <span className={style.infoLabel}>Телефоны</span>
                <div className={style.infoList}>
                  <div><a href="tel:+74832327545">8 (4832) 32-75-45</a></div>
                  <div><a href="tel:+74832327546">32-75-46</a></div>
                </div>
              </div>

              <div className={style.infoCard}>
                <span className={style.infoLabel}>Email</span>
                <div className={style.infoValue}>
                  <a href="mailto:spezzentr@bk.ru">spezzentr@bk.ru</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
