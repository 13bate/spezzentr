import React, { useState, useEffect } from 'react';
import style from './ContactFormModal.module.scss';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactFormModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const [isSent, setIsSent] = useState(false);

  // Блокировка скролла и закрытие по Escape
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setFormData({ name: '', phone: '', message: '' }); // Очистка при открытии
      setIsSent(false);
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) document.addEventListener('keydown', handleEscape);
    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Формируем шаблон письма для mailto
    const email = 'spezzentr@bk.ru';
    const subject = encodeURIComponent(`Обратная связь с сайта от ${formData.name || 'Гостя'}`);
    const body = encodeURIComponent(
      `Здравствуйте!\n\n` +
      `Имя: ${formData.name}\n` +
      `Телефон для связи: ${formData.phone}\n\n` +
      `Сообщение:\n${formData.message}\n\n` +
      `---\nОтправлено с сайта spezzentr`
    );

    // Открываем почтовый клиент
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;

    // Показываем экран успеха
    setIsSent(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={style.overlay} onClick={onClose}>
      <div className={style.modal} onClick={(e) => e.stopPropagation()}>

        <button className={style.closeBtn} onClick={onClose} aria-label="Закрыть">
          ✕
        </button>

        {isSent ? (
          <div className={style.successState}>
            <div className={style.successIcon}>✓</div>
            <h3>Письмо сформировано!</h3>
            <p>Мы открыли ваш почтовый клиент. Если окно не появилось, напишите нам напрямую на <a href="mailto:spezzentr@bk.ru">spezzentr@bk.ru</a></p>
            <button className={style.submitBtn} onClick={onClose}>Понятно</button>
          </div>
        ) : (
          <>
            <div className={style.modalHeader}>
              <h2 className={style.modalTitle}>Написать нам</h2>
              <p className={style.modalSubtitle}>Оставьте сообщение, и мы свяжемся с вами в ближайшее время.</p>
            </div>

            <form className={style.form} onSubmit={handleSubmit}>
              <div className={style.formGroup}>
                <label htmlFor="name">Ваше имя</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Иван Иванов"
                  required
                />
              </div>

              <div className={style.formGroup}>
                <label htmlFor="phone">Телефон (для связи)</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+7 (___) ___-__-__"
                  required
                />
              </div>

              <div className={style.formGroup}>
                <label htmlFor="message">Сообщение</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Ваш вопрос или предложение..."
                  rows={4}
                  required
                />
              </div>

              <button type="submit" className={style.submitBtn}>
                Сформировать письмо
              </button>

              <p className={style.privacyHint}>
                Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
