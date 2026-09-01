import { useEffect, useState } from 'react';

import styles from './Carousel.module.scss';
import { Link } from 'react-router-dom';
import { api } from '../../../api/client';

interface NewsItem {
  id: string;
  title: string;
  content: string;
  image: string;
  date: string;
  isPublished: boolean;
}

export const Carousel: React.FC = () => {
  const [slides, setSlides] = useState<NewsItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.news.list()
      .then((data) => {
        // Берём только опубликованные новости с изображениями
        const published = data
          .filter((item: NewsItem) => item.isPublished && item.image)
        //.slice(0, 5); // максимум 5 слайдов
        setSlides(published);
        setLoading(false);
      })
      .catch(() => {
        setSlides([]);
        setLoading(false);
      });
  }, []);



  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  if (loading) {
    return <div className={styles.loading}>Загрузка новостей...</div>;
  }

  if (slides.length === 0) {
    return null;
  }

  const currentSlide = slides[currentIndex];

  // Обрезаем текст до 100 символов
  const truncateText = (text: string, maxLength: number = 100) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.slideWrapper}>
        {currentSlide.image && (
          <img
            src={`/spezzentr${currentSlide.image}`}
            alt={currentSlide.title}
            className={styles.slideImage}
          />
        )}
        <div className={styles.slideOverlay}>
          <div className={styles.slideContent}>
            <div className={styles.slideDate}>
              {new Date(currentSlide.date).toLocaleDateString('ru-RU', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </div>
            <h2 className={styles.slideTitle}>{currentSlide.title}</h2>
            <p className={styles.slideDescription}>
              {truncateText(currentSlide.content, 120)}
            </p>
            <Link to={`/news/${currentSlide.id}`} className={styles.slideLink}>
              Читать далее →
            </Link>
          </div>
        </div>
      </div>

      {slides.length > 1 && (
        <>
          <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={goToPrev}>
            ‹
          </button>
          <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={goToNext}>
            ›
          </button>

          <div className={styles.dots}>
            {slides.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
