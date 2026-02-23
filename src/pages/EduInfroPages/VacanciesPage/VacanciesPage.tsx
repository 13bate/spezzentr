import React from 'react';
import { PageTitle } from '../../../shared/ui/PageTitle';
import { BackButton } from '../../../shared/ui/BackButton';
import style from './VacanciesPage.module.scss';

export const VacanciesPage: React.FC = () => {
  return (
    <>
      <PageTitle title="Вакантные места для приема | СПЕЦЦЕНТР" />

      <main className={style.vacanciesPage}>
        <div className={style.pageNavigation}>
          <BackButton />
        </div>

        <section className={style.section}>
          <div className={style.sectionHeader}>
            <span className={style.sectionIcon}>📋</span>
            <h1 className={style.sectionTitle}>Вакантные места для приема</h1>
          </div>

          <div className={style.contentContainer}>
            {/* Информация о бюджетных местах */}
            <div className={style.budgetInfoCard}>
              <div className={style.budgetIcon}>ℹ️</div>
              <div className={style.budgetContent}>
                <h3 className={style.budgetTitle}>Бюджетное финансирование</h3>
                <p className={style.budgetText}>
                  Бюджетное финансирование не производится (финансируемых за счет бюджетных ассигнований
                  федерального бюджета, бюджетов субъектов Российской Федерации и местных бюджетов мест
                  для приема и перевода не имеется).
                </p>
              </div>
            </div>

            {/* Информация о вакантных местах */}
            <div className={style.infoCard}>
              <p className={style.infoText}>
                Информацию о вакантных местах по договорам об образовании за счет средств физических
                и (или) юридических лиц по реализуемым образовательным программам можно получить по телефону:
              </p>

              <div className={style.phonesList}>
                <a href="tel:+74832327545" className={style.phoneLink}>
                  <span className={style.phoneIcon}>📞</span>
                  (4832) 32-75-45
                </a>
                <a href="tel:+74832327546" className={style.phoneLink}>
                  <span className={style.phoneIcon}>📞</span>
                  32-75-46
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
