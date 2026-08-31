export interface NewsItem {
  id: string;
  title: string;
  date: string;
  content: string;
  image?: string;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
}

export type NewsFormData = Omit<NewsItem, 'id' | 'createdAt' | 'updatedAt'>;
