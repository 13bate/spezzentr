import { useEffect, useState } from 'react';

import styles from './NewsList.module.scss';
import type { NewsItem } from '../../../types';
import { api } from '../../../api/client';

interface Props {
  limit?: number;
  className?: string;
}

export const NewsList: React.FC<Props> = ({ limit, className }) => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.news.list()
      .then((data) => {
        const published = data.filter((item: NewsItem) => item.isPublished);
        setNews(limit ? published.slice(0, limit) : published);
        setLoading(false);
      })
      .catch(() => {
        setNews([]);
        setLoading(false);
      });
  }, [limit]);

  if (loading) {
    return <div className={styles.loading}>Загрузка новостей...</div>;
  }

  if (news.length === 0) {
    return <div className={styles.empty}>Новостей пока нет</div>;
  }

  return (
    <div className={`${styles.newsList} ${className || ''}`}>
      {news.map((item) => (
        <article key={item.id} className={styles.newsItem}>
          {item.image && (
            <div className={styles.newsImage}>
              <img src={`/spezzentr${item.image}`} alt={item.title} />
            </div>
          )}
          <div className={styles.newsContent}>
            <div className={styles.newsDate}>
              {new Date(item.date).toLocaleDateString('ru-RU')}
            </div>
            <h3 className={styles.newsTitle}>{item.title}</h3>
            <p className={styles.newsText}>{item.content}</p>
          </div>
        </article>
      ))}
    </div>
  );
};
