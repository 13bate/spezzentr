import { useState, useEffect } from 'react';
import { api } from '../../../../shared/api/client';
import styles from './NewsEditor.module.scss';
import type { NewsFormData } from '../../../../shared/types/news.types';
import { Modal } from '../../../../shared/ui/Modal';
import { Input } from '../../../../shared/ui/Input';
import { Button } from '../../../../shared/ui/Button';

interface Props {
  newsId?: string | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const emptyForm: NewsFormData = {
  title: '',
  date: new Date().toISOString().split('T')[0],
  content: '',
  isPublished: true,
};

export const NewsEditor: React.FC<Props> = ({ newsId, isOpen, onClose, onSave }) => {
  const [form, setForm] = useState<NewsFormData>(emptyForm);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const isEdit = !!newsId;

  useEffect(() => {
    if (isOpen && newsId) {
      setLoading(true);
      api.news.get(newsId)
        .then((data) => {
          setForm({
            title: data.title,
            date: data.date,
            content: data.content,
            isPublished: data.isPublished,
          });
          setLoading(false);
        })
        .catch(() => {
          setForm(emptyForm);
          setLoading(false);
        });
    } else if (isOpen) {
      setForm(emptyForm);
    }
  }, [newsId, isOpen]);

  const handleChange = (field: keyof NewsFormData, value: string | boolean) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = async () => {
    if (!form.title.trim() || !form.content.trim()) {
      alert('Заполните заголовок и содержание');
      return;
    }

    setSaving(true);
    try {
      if (isEdit && newsId) {
        await api.news.update(newsId, form);
      } else {
        await api.news.create(form);
      }
      onSave();
      onClose();
    } catch (error) {
      console.error('Save error:', error);
      alert('Не удалось сохранить новость');
    } finally {
      setSaving(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={isEdit ? 'Редактирование новости' : 'Новая новость'}>
      {loading ? (
        <div className={styles.loading}>Загрузка...</div>
      ) : (
        <div className={styles.editor}>
          <div className={styles.field}>
            <label>Заголовок</label>
            <Input
              value={form.title}
              onChange={(e) => handleChange('title', e.target.value)}
              placeholder="Введите заголовок"
            />
          </div>

          <div className={styles.field}>
            <label>Дата</label>
            <Input
              type="date"
              value={form.date}
              onChange={(e) => handleChange('date', e.target.value)}
            />
          </div>

          <div className={styles.field}>
            <label>Содержание</label>
            <textarea
              className={styles.textarea}
              value={form.content}
              onChange={(e) => handleChange('content', e.target.value)}
              placeholder="Введите текст новости..."
              rows={6}
            />
          </div>

          <div className={styles.field}>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={form.isPublished}
                onChange={(e) => handleChange('isPublished', e.target.checked)}
              />
              Опубликовано
            </label>
          </div>

          <div className={styles.actions}>
            <Button variant="primary" onClick={onClose}>
              Отмена
            </Button>
            <Button onClick={handleSubmit} disabled={saving}>
              {saving ? 'Сохранение...' : isEdit ? 'Обновить' : 'Создать'}
            </Button>
          </div>
        </div>
      )}
    </Modal>
  );
};
