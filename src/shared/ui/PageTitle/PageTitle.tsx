import { useEffect } from 'react';

interface PageTitleProps {
  title: string;
  description?: string;
  keywords?: string;
}

export const PageTitle: React.FC<PageTitleProps> = ({
  title,
  description,
  keywords
}) => {
  console.log('PageTitle монтируется с title:', title);
  useEffect(() => {
    // Сохраняем оригинальный title
    const originalTitle = document.title;

    // Устанавливаем новый
    document.title = title;

    // Работа с meta description
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', description);
      } else {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        metaDesc.setAttribute('content', description);
        document.head.appendChild(metaDesc);
      }
    }

    // Работа с meta keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      } else {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        metaKeywords.setAttribute('content', keywords);
        document.head.appendChild(metaKeywords);
      }
    }

    // Восстанавливаем при размонтировании
    return () => {
      document.title = originalTitle;
    };
  }, [title, description, keywords]);

  return null;
};
