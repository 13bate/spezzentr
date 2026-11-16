import { useState, useEffect } from 'react';
import { api } from '../../../shared/api/client';
import styles from './AdminDocumentsPage.module.scss';

interface DocumentItem {
  id: string;
  name: string;
  fileName: string;
  path: string;
  category: string;
  subCategory?: string;
}

const categories = [
  { id: 'documents', label: 'Документы' },
  { id: 'education', label: 'Образование' },
  { id: 'basic-info', label: 'Основные сведения' },
  { id: 'paid-services', label: 'Платные услуги' },
  { id: 'structure', label: 'Структура' },
  { id: 'security', label: 'Безопасность' },
];

const subCategories = [
  { id: 'programs', label: 'Образовательные программы' },
  { id: 'study', label: 'Учебные документы' },
];

export const AdminDocumentsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('education');
  const [documents, setDocuments] = useState<DocumentItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshKey, setRefreshKey] = useState(0);

  // --- Состояния для ДОБАВЛЕНИЯ ---
  const [newFile, setNewFile] = useState<File | null>(null);
  const [newName, setNewName] = useState('');
  const [newSubCat, setNewSubCat] = useState('programs');
  const [isUploading, setIsUploading] = useState(false);

  // --- Состояния для РЕДАКТИРОВАНИЯ ---
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editName, setEditName] = useState('');
  const [editSubCat, setEditSubCat] = useState('');

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

  // --- ДОБАВЛЕНИЕ ---
  const handleAddNew = async () => {
    if (!newFile || !newName.trim()) {
      alert('Выберите файл и введите название');
      return;
    }

    setIsUploading(true);
    const formData = new FormData();

    // ✅ ВАЖНО: Сначала добавляем текстовые поля, чтобы multer знал категорию
    formData.append('category', selectedCategory);
    formData.append('displayName', newName);
    formData.append('subCategory', selectedCategory === 'education' ? newSubCat : '');

    // ✅ Файл добавляем в самом конце
    formData.append('file', newFile);

    try {
      await fetch('/api/documents/upload', { method: 'POST', body: formData });
      setNewFile(null);
      setNewName('');
      setRefreshKey(prev => prev + 1);

      const input = document.getElementById('new-file-input') as HTMLInputElement;
      if (input) input.value = '';

      alert('✅ Документ добавлен');
    } catch {
      alert('❌ Ошибка загрузки');
    } finally {
      setIsUploading(false);
    }
  };

  // --- УДАЛЕНИЕ ---
  const handleDelete = async (id: string) => {
    if (!window.confirm('Вы уверены, что хотите удалить этот документ?')) return;
    try {
      await fetch(`/api/documents/${id}`, { method: 'DELETE' });
      setRefreshKey(prev => prev + 1);
    } catch {
      alert('Ошибка при удалении');
    }
  };

  // --- РЕДАКТИРОВАНИЕ ---
  const startEdit = (doc: DocumentItem) => {
    setEditingId(doc.id);
    setEditName(doc.name);
    setEditSubCat(doc.subCategory || '');
  };

  const saveEdit = async (id: string) => {
    try {
      await fetch(`/api/documents/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ displayName: editName, subCategory: editSubCat }),
      });
      setEditingId(null);
      setRefreshKey(prev => prev + 1);
    } catch {
      alert('Ошибка при сохранении');
    }
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

      {/* ─── ФОРМА ДОБАВЛЕНИЯ ─────────────────────────────── */}
      <div className={styles.addNewSection}>
        <h3>Добавить документ в «{categories.find(c => c.id === selectedCategory)?.label}»</h3>
        <div className={styles.formGrid}>
          <input
            id="new-file-input"
            type="file"
            accept=".pdf"
            onChange={(e) => setNewFile(e.target.files?.[0] || null)}
            className={styles.fileInput}
          />
          <input
            type="text"
            placeholder="Название для сайта (например: Устав 2026)"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            className={styles.textInput}
          />
          {selectedCategory === 'education' && (
            <select
              value={newSubCat}
              onChange={(e) => setNewSubCat(e.target.value)}
              className={styles.selectInput}
            >
              {subCategories.map(sub => (
                <option key={sub.id} value={sub.id}>{sub.label}</option>
              ))}
            </select>
          )}
          <button onClick={handleAddNew} disabled={isUploading} className={styles.addBtn}>
            {isUploading ? 'Загрузка...' : 'Загрузить'}
          </button>
        </div>
      </div>

      {/* ─── СПИСОК ────────────────────────────────────────── */}
      {loading ? (
        <div className={styles.loading}>Загрузка...</div>
      ) : documents.length === 0 ? (
        <div className={styles.empty}>Нет документов в этой категории</div>
      ) : (
        <div className={styles.list}>
          {documents.map((doc) => (
            <div key={doc.id} className={styles.item}>
              <div className={styles.itemInfo}>
                {editingId === doc.id ? (
                  <div className={styles.editForm}>
                    <input
                      type="text"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      className={styles.textInput}
                    />
                    {selectedCategory === 'education' && (
                      <select
                        value={editSubCat}
                        onChange={(e) => setEditSubCat(e.target.value)}
                        className={styles.selectInput}
                      >
                        {subCategories.map(sub => (
                          <option key={sub.id} value={sub.id}>{sub.label}</option>
                        ))}
                      </select>
                    )}
                    <button onClick={() => saveEdit(doc.id)} className={styles.saveBtn}>ОК</button>
                    <button onClick={() => setEditingId(null)} className={styles.cancelBtn}>Отмена</button>
                  </div>
                ) : (
                  <>
                    <span className={styles.itemName}>{doc.name}</span>
                    {doc.subCategory && (
                      <span className={styles.badge}>
                        {subCategories.find(s => s.id === doc.subCategory)?.label}
                      </span>
                    )}
                  </>
                )}
              </div>

              <div className={styles.itemActions}>
                <a href={`/spezzentr${doc.path}`} target="_blank" rel="noreferrer" className={styles.viewBtn}>Просмотр</a>
                <button onClick={() => startEdit(doc)} className={styles.editBtn}>Ред.</button>
                <button onClick={() => handleDelete(doc.id)} className={styles.deleteBtn}>Удалить</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
