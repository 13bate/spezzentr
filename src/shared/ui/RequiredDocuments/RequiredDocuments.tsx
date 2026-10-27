import React from 'react';
import style from './RequiredDocuments.module.scss';

export interface RequiredDocumentItem {
  /** Заголовок документа */
  title: string;
  /** Описание/уточнение (необязательно) */
  description?: React.ReactNode;
}

export interface RequiredDocumentsProps {
  /** Заголовок секции, например "Необходимые документы" */
  title: string;
  /** Массив документов */
  items: RequiredDocumentItem[];
  /** Надзаголовок (eyebrow). По умолчанию "Документы" */
  eyebrow?: string;
  /** Тёмная тема */
  dark?: boolean;
  /** ID секции для якорных ссылок */
  id?: string;
  /** Дополнительный CSS-класс */
  className?: string;
}

export const RequiredDocuments: React.FC<RequiredDocumentsProps> = ({
  title,
  items,
  eyebrow = 'Документы',
  dark = false,
  id,
  className,
}) => {
  if (!items.length) return null;

  return (
    <section
      id={id}
      className={[
        style.documentsSection,
        dark ? style.dark : '',
        className || '',
      ].filter(Boolean).join(' ')}
    >
      <div className={style.documentsSectionInner}>
        <span className={style.eyebrow}>
          <span className={style.eyebrowLine} />
          {eyebrow}
        </span>
        <h2 className={style.documentsTitle}>{title}</h2>

        <div className={style.documentsGrid}>
          {items.map((item, index) => (
            <div key={index} className={style.documentsItem}>
              <span className={style.documentsNumber}>
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className={style.documentsContent}>
                <h4>{item.title}</h4>
                {item.description && <p>{item.description}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
