import { useState } from 'react';
import { auth } from '../model/auth';
import styles from './LoginForm.module.scss';

export const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    console.log('🔐 Попытка входа:', username);

    const result = await auth.login(username, password);
    console.log('🔐 Результат:', result);

    if (result.success) {
      console.log('✅ Успешный вход, редирект на /admin');
      // Принудительный редирект
      window.location.href = '/spezzentr/admin';
    } else {
      setError(result.error || 'Неверный логин или пароль');
      setLoading(false);
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h1 className={styles.title}>СПЕЦЦЕНТР</h1>
          <p className={styles.subtitle}>Вход в административную панель</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.field}>
            <label htmlFor="username">Логин</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Введите логин"
              required
              autoFocus
              autoComplete="username"
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="password">Пароль</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Введите пароль"
              required
              autoComplete="current-password"
            />
          </div>

          {error && <div className={styles.error}>{error}</div>}

          <button type="submit" className={styles.button} disabled={loading}>
            {loading ? 'Вход...' : 'Войти'}
          </button>
        </form>

        <div className={styles.footer}>
          <span className={styles.version}>v1.0</span>
        </div>
      </div>
    </div>
  );
};
