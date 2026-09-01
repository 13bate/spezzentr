import { Navigate } from 'react-router-dom';
import { auth } from '../model/auth';
import { useState, useEffect } from 'react';
import styles from './PrivateRoute.module.scss';

interface Props {
  children: React.ReactNode;
}

export const PrivateRoute = ({ children }: Props) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const hasToken = auth.hasToken();
      console.log('🔍 Есть токен:', hasToken);

      if (!hasToken) {
        setIsAuthenticated(false);
        setLoading(false);
        return;
      }

      const result = await auth.isAuthenticated();
      console.log('🔍 Токен валидный:', result);
      setIsAuthenticated(result);
      setLoading(false);
    };

    checkAuth();
  }, []);

  if (loading) {
    return <div className={styles.loading}>Проверка авторизации...</div>;
  }

  if (!isAuthenticated) {
    console.log('🚫 Не авторизован, редирект на /admin/login');
    return <Navigate to="/admin/login" replace />;
  }

  console.log('✅ Авторизован, показываем страницу');
  return <>{children}</>;
};
