import { PageTitle } from '../../../shared/ui/PageTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { DocumentViewer } from '../../../features/DocumentViewer/ui/DocumentViewer';
import style from './DocumentsPage.module.scss';

export const DocumentsPage: React.FC = () => {
  // Список ID документов для страницы "Документы"
  const documentIds = [
    'charter',
    'license',
    'self-assessment',
    'privacy-policy',
    'attestation-regulation',
    'relationship-order',
    'transfer-regulation',
    'internal-rules',
    'study-schedule',
    'admission-rules',
  ];

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
            <div className={style.documentsList}>
              {documentIds.map((docId) => (
                <DocumentViewer
                  key={docId}
                  documentId={docId}
                  category="documents"
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
