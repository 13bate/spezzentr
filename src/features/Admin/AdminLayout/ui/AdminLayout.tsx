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
          <span>СПЕЦЦЕНТР</span>
          <small>Админка</small>
        </div>

        <nav className={styles.nav}>
          <Link to="/admin/schedules" className={styles.navLink}>
            📅 Расписания
          </Link>
          <Link to="/admin/news" className={styles.navLink}>
            📰 Новости
          </Link>
          <Link to="/admin/documents" className={styles.navLink}>
            📄 Документы PDF
          </Link>
        </nav>

        <button onClick={handleLogout} className={styles.logoutBtn}>
          Выйти
        </button>
      </aside>

      {/* Main content */}
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};
