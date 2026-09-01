import { Outlet, Link, useNavigate } from 'react-router-dom';
import { auth } from '../../../auth/model/auth.ts';
import styles from './AdminLayout.module.scss';

export const AdminLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate('/admin/login');
  };

  return (
    <div className={styles.layout}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.logo}>
          <Link to="/admin" className={styles.logoName}>СПЕЦЦЕНТР</Link>
          <small>ПАНЕЛЬ АДМИНИСТРАТОРА</small>
        </div>

        <nav className={styles.nav}>
          <Link to="/admin" className={styles.navLink}>
            <span className={styles.navIcon}></span>
            Главная
          </Link>
          <Link to="/admin/schedules" className={styles.navLink}>
            <span className={styles.navIcon}></span>
            Расписания
          </Link>
          <Link to="/admin/news" className={styles.navLink}>
            <span className={styles.navIcon}></span>
            Новости
          </Link>
          <Link to="/admin/documents" className={styles.navLink}>
            <span className={styles.navIcon}></span>
            Документы PDF
          </Link>
        </nav>

        <div className={styles.sidebarFooter}>
          <a href="/spezzentr/" target="_blank" rel="noopener noreferrer" className={styles.siteLink}>
            <span className={styles.navIcon}>🌐</span>
            Перейти на сайт
          </a>
          <button onClick={handleLogout} className={styles.logoutBtn}>
            <span className={styles.navIcon}>↩</span>
            Выйти
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};
