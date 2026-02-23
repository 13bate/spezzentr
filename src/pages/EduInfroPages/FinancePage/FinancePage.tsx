import React from 'react';
import { PageTitle } from '../../../shared/ui/PageTitle';
import { BackButton } from '../../../shared/ui/BackButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFileInvoice,
  faDownload,
  faChartLine
} from '@fortawesome/free-solid-svg-icons';
import style from './FinancePage.module.scss';

export const FinancePage: React.FC = () => {
  return (
    <>
      <PageTitle title="Финансово-хозяйственная деятельность | СПЕЦЦЕНТР" />

      <main className={style.financePage}>
        <div className={style.pageNavigation}>
          <BackButton />
        </div>

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

            {/* Блок с документом */}
            <div className={style.documentSection}>
              <h2 className={style.sectionSubtitle}>План финансово-хозяйственной деятельности</h2>

              <a
                href="/files/financial-plan.pdf"
                className={style.documentLink}
                download
              >
                <div className={style.documentIcon}>
                  <FontAwesomeIcon icon={faFileInvoice} />
                </div>
                <span className={style.documentTitle}>План финансово-хозяйственной деятельности</span>
                <div className={style.downloadButton}>
                  <FontAwesomeIcon icon={faDownload} />
                  <span>Скачать</span>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
