import React, { useState, useEffect } from 'react';
import style from './InfoCardWithModal.module.scss';

interface Props {
  /** Заголовок карточки */
  title: string;
  /** Описание в карточке (может быть несколько абзацев) */
  description: React.ReactNode;
  /** Иконка в карточке (ReactNode) */
  icon?: React.ReactNode;
  /** Текст кнопки "Подробнее" */
  buttonText?: string;
  /** Заголовок в модалке */
  modalTitle: string;
  /** Подзаголовок в модалке */
  modalSubtitle?: string;
  /** Метка над заголовком в модалке */
  modalEyebrow?: string;
  /** Содержимое модалки */
  modalContent: React.ReactNode;
  /** Текст кнопки "Понятно" внизу модалки */
  modalCloseText?: string;
  /** Дополнительный класс */
  className?: string;
}

export const InfoCardWithModal: React.FC<Props> = ({
  title,
  description,
  icon,
  buttonText = 'Подробный порядок проведения',
  modalTitle,
  modalSubtitle,
  modalEyebrow,
  modalContent,
  modalCloseText = 'Закрыть',
  className,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Блокируем скролл body когда открыта модалка
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  // Закрытие по Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsModalOpen(false);
    };
    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isModalOpen]);

  return (
    <>
      {/* Карточка */}
      <div className={`${style.card} ${className || ''}`}>
        {icon && <div className={style.cardIcon}>{icon}</div>}
        <div className={style.cardContent}>
          <h4 className={style.cardTitle}>{title}</h4>
          <div className={style.cardText}>{description}</div>
          <button
            type="button"
            className={style.cardLink}
            onClick={() => setIsModalOpen(true)}
          >
            {buttonText}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Модалка */}
      {isModalOpen && (
        <div
          className={style.modalOverlay}
          onClick={() => setIsModalOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className={style.modal}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className={style.modalHeader}>
              <div className={style.modalHeaderContent}>
                {modalEyebrow && (
                  <span className={style.modalEyebrow}>{modalEyebrow}</span>
                )}
                <h3 className={style.modalTitle}>{modalTitle}</h3>
                {modalSubtitle && (
                  <p className={style.modalSubtitle}>{modalSubtitle}</p>
                )}
              </div>
              <button
                type="button"
                className={style.modalClose}
                onClick={() => setIsModalOpen(false)}
                aria-label="Закрыть"
              >
                ✕
              </button>
            </div>

            {/* Body */}
            <div className={style.modalBody}>{modalContent}</div>

            {/* Footer */}
            <div className={style.modalFooter}>
              <button
                type="button"
                className={style.modalFooterBtn}
                onClick={() => setIsModalOpen(false)}
              >
                {modalCloseText}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
