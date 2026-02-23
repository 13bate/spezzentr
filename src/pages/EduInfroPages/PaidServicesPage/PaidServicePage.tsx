import React from 'react';
import { PageTitle } from '../../../shared/ui/PageTitle';
import { BackButton } from '../../../shared/ui/BackButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFilePdf,
  faDownload,
  faMoneyBillWave
} from '@fortawesome/free-solid-svg-icons';
import style from './PaidServicePage.module.scss';

export const PaidServicesPage: React.FC = () => {
  const documents = [
    {
      title: 'Положение о порядке оказания платных образовательных услуг',
      file: '/files/paid-services-regulation.pdf',
      icon: faFilePdf
    },
    {
      title: 'Приказ «Об утверждении перечня и стоимости платных образовательных услуг»',
      file: '/files/services-price-list.pdf',
      icon: faFilePdf
    },
    {
      title: 'Договор на оказание платных образовательных услуг',
      file: '/files/service-contract-template.pdf',
      icon: faFilePdf
    }
  ];

  return (
    <>
      <PageTitle title="Платные образовательные услуги | СПЕЦЦЕНТР" />

      <main className={style.paidServicesPage}>
        <div className={style.pageNavigation}>
          <BackButton />
        </div>

        <section className={style.section}>
          <div className={style.sectionHeader}>
            <div className={style.sectionIcon}>
              <FontAwesomeIcon icon={faMoneyBillWave} />
            </div>
            <h1 className={style.sectionTitle}>Платные образовательные услуги</h1>
          </div>

          <div className={style.contentContainer}>
            <h2 className={style.sectionSubtitle}>Документы</h2>

            <div className={style.documentsList}>
              {documents.map((doc, index) => (
                <a
                  key={index}
                  href={doc.file}
                  className={style.documentLink}
                  download
                >
                  <div className={style.documentIcon}>
                    <FontAwesomeIcon icon={doc.icon} />
                  </div>
                  <span className={style.documentTitle}>{doc.title}</span>
                  <div className={style.downloadButton}>
                    <FontAwesomeIcon icon={faDownload} />
                    <span>Скачать</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
