import { useState, useEffect } from 'react';
import { api } from '../../../shared/api/client';
import type { NewsItem } from '../../../shared/types/news.types';
import styles from "./AdminsNewsPage.module.scss";
import { NewsEditor } from '../../../features/Admin/NewsEditor/ui/NewsEditro';
import { Button } from '../../../shared/ui/Button';

export const AdminNewsPage = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    api.news.list()
      .then((data) => {
        setNews(data);
        setLoading(false);
      })
      .catch(() => {
        setNews([]);
        setLoading(false);
      });
  }, [refresh]);


  if (loading) {
    return <div className={styles.loading}>Загрузка...</div>;
  }

  return (
    <div className={styles.page}>
      <div className={styles.headerRow}>
        <div>
          <h1 className={styles.title}>📰 Управление новостями</h1>
          <p className={styles.subtitle}>Добавляйте и редактируйте новости клуба</p>
        </div>
        <button className={styles.addBtn} onClick={() => setIsCreating(true)}>
          + Новая новость
        </button>
      </div>

      {news.length === 0 ? (
        <div className={styles.empty}>Новостей пока нет</div>
      ) : (
        <div className={styles.list}>
          {news.map((item) => (
            <div key={item.id} className={styles.item}>
              <div className={styles.itemContent}>
                <span className={styles.itemDate}>
                  {new Date(item.date).toLocaleDateString('ru-RU')}
                </span>
                <span className={styles.itemTitle}>{item.title}</span>
                <span className={item.isPublished ? styles.published : styles.draft}>
                  {item.isPublished ? 'Опубликовано' : 'Черновик'}
                </span>
              </div>
              <div className={styles.editBtn}>
                <Button
                  onClick={() => setEditingId(item.id)}
                  size='sm'
                  variant='liquid'
                >
                  Редактировать
                </Button>

              </div>
            </div>
          ))}
        </div>
      )}

      {(editingId || isCreating) && (
        <NewsEditor
          newsId={editingId}
          isOpen={true}
          onClose={() => {
            setEditingId(null);
            setIsCreating(false);
          }}
          onSave={() => {
            setRefresh(!refresh);
            setEditingId(null);
            setIsCreating(false);
          }}
        />
      )}
    </div>
  );
};
