import React from 'react';
import { PageTitle } from '../../../shared/ui/PageTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import style from './DocumentsPage.module.scss';
import { DocumentList } from '../../../shared/ui/DocumentList';

export const DocumentsPage: React.FC = () => {
  return (
    <>
      <PageTitle title="Документы | СПЕЦЦЕНТР" />

      <main className={style.documentsPage}>
        <section className={style.section}>
          <div className={style.sectionHeader}>
            <div className={style.sectionIcon}>
              <FontAwesomeIcon icon={faFilePdf} />
            </div>
            <div>
              <h1 className={style.sectionTitle}>Документы</h1>
            </div>
          </div>

          <div className={style.contentContainer}>
            <DocumentList category="documents" />
          </div>
        </section>
      </main>
    </>
  );
};
