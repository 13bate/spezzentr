import { useState, useEffect } from 'react';
import { api } from '../../../shared/api/client';
import { documentNames, type DocumentId } from '../../../shared/types/document.types';
import styles from './AdminDocumentsPage.module.scss';

interface DocumentItem {
  id: string;
  name: string;
  fileName: string;
  path: string;
  category: string;
}

const categories = [
  { id: 'documents', label: 'Документы' },
  { id: 'education', label: 'Образование' },
  { id: 'basic-info', label: 'Основные сведения' },
  { id: 'paid-services', label: 'Платные услуги' },
  { id: 'structure', label: 'Структура' },
  { id: 'security', label: 'Безопасность' },
];

export const AdminDocumentsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('documents');
  const [documents, setDocuments] = useState<DocumentItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [replacingId, setReplacingId] = useState<string | null>(null);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    setLoading(true);
    api.documents.getByCategory(selectedCategory)
      .then((data) => {
        setDocuments(data);
        setLoading(false);
      })
      .catch(() => {
        setDocuments([]);
        setLoading(false);
      });
  }, [selectedCategory, refreshKey]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, docId: string) => {
    const file = e.target.files?.[0] || null;
    if (file && file.type === 'application/pdf') {
      setSelectedFile(file);
      setReplacingId(docId);
    } else if (file) {
      alert('Пожалуйста, выберите PDF-файл');
      e.target.value = '';
    }
  };

  const handleReplace = async (doc: DocumentItem) => {
    if (!selectedFile || !replacingId) {
      alert('Выберите файл');
      return;
    }

    setUploading(replacingId);
    try {
      const docCategory = doc.category;
      const docFileName = doc.fileName;

      // 1. Удаляем старый файл
      await api.documents.delete(docCategory, docFileName);

      // 2. Загружаем новый с тем же именем
      const nameWithoutExt = docFileName.replace('.pdf', '');
      await api.documents.upload(docCategory, selectedFile, nameWithoutExt);

      setSelectedFile(null);
      setReplacingId(null);
      setRefreshKey(prev => prev + 1);

      const input = document.getElementById(`file-${doc.id}`) as HTMLInputElement;
      if (input) input.value = '';

      alert('✅ Файл успешно заменён');
    } catch (error) {
      console.error('Replace error:', error);
      alert('❌ Не удалось заменить файл');
    } finally {
      setUploading(null);
    }
  };

  const getDocumentName = (id: string) => {
    return documentNames[id as DocumentId] || id;
  };

  const getFileUrl = (path: string) => {
    const timestamp = Date.now();
    return `/spezzentr${path}?v=${timestamp}`;
  };

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Управление документами</h1>

      <div className={styles.categoryTabs}>
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`${styles.categoryTab} ${selectedCategory === cat.id ? styles.active : ''}`}
            onClick={() => setSelectedCategory(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {loading ? (
        <div className={styles.loading}>Загрузка...</div>
      ) : documents.length === 0 ? (
        <div className={styles.empty}>Нет документов в этой категории</div>
      ) : (
        <div className={styles.list}>
          {documents.map((doc) => (
            <div key={doc.id} className={styles.item}>
              <div className={styles.itemInfo}>
                <span className={styles.itemName}>{getDocumentName(doc.name)}</span>
                <span className={styles.itemFileName}>{getDocumentName(doc.fileName)}</span>
              </div>
              <div className={styles.itemActions}>
                <a
                  href={getFileUrl(doc.path)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.viewBtn}
                >
                  Просмотр
                </a>

                <label className={styles.replaceBtn}>
                  {uploading === doc.id ? 'Замена...' : 'Заменить'}
                  <input
                    id={`file-${doc.id}`}
                    type="file"
                    accept=".pdf"
                    onChange={(e) => handleFileChange(e, doc.id)}
                    disabled={uploading === doc.id}
                    className={styles.hiddenInput}
                  />
                </label>

                {replacingId === doc.id && selectedFile && (
                  <button
                    onClick={() => handleReplace(doc)}
                    className={styles.confirmReplaceBtn}
                    disabled={uploading === doc.id}
                  >
                    {uploading === doc.id ? 'Загрузка...' : 'Подтвердить'}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
