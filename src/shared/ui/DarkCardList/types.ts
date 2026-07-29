export type CardColor = 'red' | 'blue' | 'green' | 'gold';

export interface CardItem {
  id: string | number;
  label: string;
  description: string;
  href: string;
  color?: CardColor; // если не указан, будет 'red'
}
