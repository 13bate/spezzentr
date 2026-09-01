export interface NewsItem {
  id: string;
  title: string;
  date: string;
  content: string;
  image?: string;          // путь к изображению
  imageFile?: string;      // имя файла изображения
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
}

export type NewsFormData = Omit<NewsItem, 'id' | 'createdAt' | 'updatedAt'>;
