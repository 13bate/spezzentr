export interface CourseBannerProps {
  /** Заголовок */
  title: string;
  /** Описание */
  description: string;
  /** Список особенностей (может быть массивом строк) */
  highlights?: string[];
  /** Цена */
  price?: string;
  /** Длительность */
  duration?: string;
  /** Текст кнопки */
  buttonText?: string;
  /** Ссылка для кнопки */
  buttonLink?: string;
  /** URL изображения */
  imageUrl?: string;
  /** Alt для изображения */
  imageAlt?: string;
  /** Позиция изображения: 'left' или 'right' */
  imagePosition?: 'left' | 'right';
  /** Дополнительный класс */
  className?: string;
}
