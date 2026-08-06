export type SectionHeaderAlign = 'left' | 'center';

export interface SectionHeaderProps {
  id?: string;
  /** Основной заголовок (может содержать <em> для выделения) */
  title: string;
  /** Короткий текст над заголовком (eyebrow) */
  eyebrow?: string;
  /** Описание под заголовком */
  description?: string;
  /** Выравнивание: left (по умолчанию) или center */
  align?: SectionHeaderAlign;
  /** Цвет акцента (линия, иконка) — по умолчанию brand-primary */
  accentColor?: string;
  /** Дополнительный класс */
  className?: string;
  /** Дополнительный контент справа (например, кнопка) */
  children?: React.ReactNode;
  /** Отключить анимацию при появлении */
  noAnimation?: boolean;
}
