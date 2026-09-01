import React from 'react';
import { PageTitle } from '../../../shared/ui/PageTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMoneyBillWave,
  faFilePdf,
} from '@fortawesome/free-solid-svg-icons';
import { DocumentViewer } from '../../../features/DocumentViewer/ui/DocumentViewer';
import style from "./PaidServicePage.module.scss"

export const PaidServicesPage: React.FC = () => {
  // ID документов для страницы "Платные услуги"
  const documentIds = [
    'paid-contract',
  ];

  return (
    <>
      <PageTitle title="Платные образовательные услуги | СПЕЦЦЕНТР" />

      <main className={style.paidServicesPage}>
        <section className={style.section}>
          <div className={style.sectionHeader}>
            <div className={style.sectionIcon}>
              <FontAwesomeIcon icon={faMoneyBillWave} />
            </div>
            <div>
              <h1 className={style.sectionTitle}>Платные образовательные услуги</h1>
              <p className={style.sectionDescription}>
                Документы, регламентирующие оказание платных образовательных услуг
              </p>
            </div>
          </div>

          <div className={style.contentContainer}>
            <h2 className={style.sectionSubtitle}>
              <FontAwesomeIcon icon={faFilePdf} />
              Документы
            </h2>

            <div className={style.documentsList}>
              {documentIds.map((docId) => (
                <DocumentViewer
                  key={docId}
                  documentId={docId}
                  category="paid-services"
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
