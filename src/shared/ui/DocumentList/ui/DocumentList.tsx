import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faDownload } from '@fortawesome/free-solid-svg-icons';
import styles from './DocumentList.module.scss';

export interface DocumentItem {
  id: string;
  name: string;
  fileName: string;
  path: string;
  category: string;
  subCategory?: string; // Добавили подкатегорию
}

interface Props {
  category: string;
  className?: string;
  subCategory?: string; // 'programs' или 'study'
}

export const DocumentList: React.FC<Props> = ({ category, className, subCategory }) => {
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

  // Фильтруем по подкатегории, если она передана
  const displayedDocuments = subCategory
    ? documents.filter(doc => doc.subCategory === subCategory)
    : documents;

  if (displayedDocuments.length === 0) {
    return <div className={styles.empty}>Документов пока нет</div>;
  }

  return (
    <div className={`${styles.documentList} ${className || ''}`}>
      {displayedDocuments.map((doc) => (
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
