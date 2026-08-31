// Простая авторизация (временно)
// Позже заменить на реальный API

const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'spezzentr2024',
};

export const auth = {
  login: (username: string, password: string): boolean => {
    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
      localStorage.setItem('isAdmin', 'true');
      return true;
    }
    return false;
  },

  logout: (): void => {
    localStorage.removeItem('isAdmin');
  },

  isAuthenticated: (): boolean => {
    return localStorage.getItem('isAdmin') === 'true';
  },
};
