/* eslint-disable react-hooks/purity */
 

import { useEffect, useState, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faDownload, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { api } from '../../../shared/api/client';
import { documentNames, documentFileNames, type DocumentId } from '../../../shared/types/document.types';
import styles from './DocumentViewer.module.scss';

interface DocumentMeta {
  id: string;
  name: string;
  fileName: string;
  path: string;
  category: string;
}

interface Props {
  documentId: string;
  category: string;
  className?: string;
  showTitle?: boolean;
}

export const DocumentViewer: React.FC<Props> = ({
  documentId,
  category,
  className,
  showTitle = true,
}) => {
  const [document, setDocument] = useState<DocumentMeta | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // ✅ Используем useMemo с пустыми зависимостями
  const timestamp = useMemo(() => Date.now(), []);

  useEffect(() => {
    const targetFileName = documentFileNames[documentId];
    const displayName = documentNames[documentId as DocumentId] || documentId;

    console.log('📄 Ищем документ:', { documentId, targetFileName, displayName, category });

    api.documents.getByCategory(category)
      .then((data) => {
        console.log('📄 Данные из API:', data);

        const found = data.find((doc: DocumentMeta) => doc.fileName === targetFileName);

        if (found) {
          console.log('✅ Документ найден по имени файла:', found);
          setDocument({
            ...found,
            name: displayName,
          });
          setError(null);
        } else {
          console.error('❌ Документ не найден по имени файла:', targetFileName);
          if (data.length > 0) {
            console.log('⚠️ Используем первый документ из категории');
            setDocument({
              ...data[0],
              name: displayName,
            });
          } else {
            setError('Документы не найдены');
          }
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('❌ Ошибка загрузки:', err);
        setError('Ошибка загрузки документа');
        setLoading(false);
      });
  }, [documentId, category]);

  if (loading) {
    return (
      <div className={styles.loading}>
        <FontAwesomeIcon icon={faSpinner} spin />
        <span>Загрузка документа...</span>
      </div>
    );
  }

  if (error || !document) {
    return null;
  }

  if (!document.path) {
    return (
      <div className={styles.document}>
        <div className={styles.documentContent}>
          <div className={styles.documentInfo}>
            {showTitle && <span className={styles.documentTitle}>{document.name}</span>}
          </div>
          <span className={styles.notFound}>Файл не загружен</span>
        </div>
      </div>
    );
  }

  // ✅ Используем useMemo значение
  const fileUrl = `/spezzentr${document.path}?v=${timestamp}`;

  return (
    <div className={`${styles.document} ${className || ''}`}>
      <div className={styles.documentContent}>
        <div className={styles.documentInfo}>
          {showTitle && <span className={styles.documentTitle}>{document.name}</span>}
        </div>
        <a
          href={fileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.downloadBtn}
        >
          <FontAwesomeIcon icon={faFilePdf} />
          <span>Скачать PDF</span>
          <FontAwesomeIcon icon={faDownload} />
        </a>
      </div>
    </div>
  );
};
