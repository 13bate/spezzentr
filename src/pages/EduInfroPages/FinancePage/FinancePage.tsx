import React from 'react';
import { PageTitle } from '../../../shared/ui/PageTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartLine
} from '@fortawesome/free-solid-svg-icons';
import style from './FinancePage.module.scss';

export const FinancePage: React.FC = () => {
  return (
    <>
      <PageTitle title="Финансово-хозяйственная деятельность | СПЕЦЦЕНТР" />

      <main className={style.financePage}>

        <section className={style.section}>
          <div className={style.sectionHeader}>
            <div className={style.sectionIcon}>
              <FontAwesomeIcon icon={faChartLine} />
            </div>
            <h1 className={style.sectionTitle}>Финансово-хозяйственная деятельность</h1>
          </div>

          <div className={style.contentContainer}>
            {/* Информационные блоки */}
            <div className={style.infoCard}>
              <p className={style.infoText}>
                Образовательная организация не ведёт образовательной деятельности, финансовое обеспечение
                которой осуществляется за счет бюджетных ассигнований федерального бюджета, бюджетов
                субъектов Российской Федерации, местных бюджетов.
              </p>
            </div>

            <div className={style.infoCard}>
              <p className={style.infoText}>
                Финансирование деятельности организации осуществляется по договорам об образовании
                за счет средств физических и (или) юридических лиц.
              </p>
            </div>

            <div className={style.infoCard}>
              <p className={style.infoText}>
                Поступление финансовых и материальных средств и отчёт об их расходовании по итогам
                финансового года отражается в бухгалтерской отчетности организации и плане
                финансово-хозяйственной деятельности.
              </p>
            </div>

          </div>
        </section>
      </main>
    </>
  );
};
