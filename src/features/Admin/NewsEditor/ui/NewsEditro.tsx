import { useState, useEffect, useRef } from 'react';
import { api } from '../../../../shared/api/client';
import type { NewsItem, NewsFormData } from '../../../../shared/types/news.types';
import styles from './NewsEditor.module.scss';
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
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [existingImage, setExistingImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const isEdit = !!newsId;

  useEffect(() => {
    if (isOpen && newsId) {
      setLoading(true);
      api.news.get(newsId)
        .then((data: NewsItem) => {
          setForm({
            title: data.title,
            date: data.date,
            content: data.content,
            isPublished: data.isPublished,
          });
          setExistingImage(data.image || null);
          setLoading(false);
        })
        .catch(() => {
          setForm(emptyForm);
          setLoading(false);
        });
    } else if (isOpen) {
      setForm(emptyForm);
      setExistingImage(null);
      setImagePreview(null);
      setImageFile(null);
    }
  }, [newsId, isOpen]);

  const handleChange = (field: keyof NewsFormData, value: string | boolean) => {
    setForm({ ...form, [field]: value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImageFile(null);
    setImagePreview(null);
    setExistingImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = async () => {
    if (!form.title.trim() || !form.content.trim()) {
      alert('Заполните заголовок и содержание');
      return;
    }

    setSaving(true);
    try {
      const formData = new FormData();
      formData.append('title', form.title);
      formData.append('date', form.date);
      formData.append('content', form.content);
      formData.append('isPublished', String(form.isPublished));

      if (imageFile) {
        formData.append('image', imageFile);
      }

      if (isEdit && newsId) {
        await api.news.update(newsId, formData);
      } else {
        await api.news.create(formData);
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
            <label>Изображение</label>
            <div className={styles.imageArea}>
              {(imagePreview || existingImage) && (
                <div className={styles.imagePreview}>
                  <img
                    src={imagePreview || `/spezzentr${existingImage}`}
                    alt="Превью"
                  />
                  <button
                    type="button"
                    className={styles.removeImageBtn}
                    onClick={handleRemoveImage}
                  >
                    ✕
                  </button>
                </div>
              )}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className={styles.fileInput}
                id="news-image"
              />
              <label htmlFor="news-image" className={styles.fileLabel}>
                {imagePreview || existingImage ? 'Заменить изображение' : 'Выбрать изображение'}
              </label>
              <span className={styles.fileHint}>PNG, JPG, WEBP до 5MB</span>
            </div>
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
            <Button variant="liquid" onClick={onClose}>
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
