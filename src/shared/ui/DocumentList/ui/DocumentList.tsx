import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faDownload } from '@fortawesome/free-solid-svg-icons';
import styles from './DocumentList.module.scss';

interface DocumentItem {
  id: string;
  name: string;
  fileName: string;
  path: string;
  category: string;
}

interface Props {
  category: string;
  className?: string;
}

export const DocumentList: React.FC<Props> = ({ category, className }) => {
  const [documents, setDocuments] = useState<DocumentItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/documents/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setDocuments(data);
        setLoading(false);
      })
      .catch(() => {
        setDocuments([]);
        setLoading(false);
      });
  }, [category]);

  if (loading) {
    return <div className={styles.loading}>Загрузка документов...</div>;
  }

  if (documents.length === 0) {
    return <div className={styles.empty}>Документов пока нет</div>;
  }

  return (
    <div className={`${styles.documentList} ${className || ''}`}>
      {documents.map((doc) => (
        <a
          key={doc.id}
          href={doc.path}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.documentItem}
          download
        >
          <div className={styles.documentIcon}>
            <FontAwesomeIcon icon={faFilePdf} />
          </div>
          <span className={styles.documentName}>{doc.name}</span>
          <div className={styles.downloadButton}>
            <FontAwesomeIcon icon={faDownload} />
            <span>Скачать</span>
          </div>
        </a>
      ))}
    </div>
  );
};
