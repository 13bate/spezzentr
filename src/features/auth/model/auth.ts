const API_URL = 'http://localhost:3001/api';

interface AuthResponse {
  success: boolean;
  token?: string;
  user?: { username: string };
  error?: string;
}

export const auth = {
  login: async (username: string, password: string): Promise<AuthResponse> => {
    try {
      console.log('🔐 Отправка запроса:', { username, password });

      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      console.log('📥 Ответ сервера:', data);

      if (data.success && data.token) {
        localStorage.setItem('authToken', data.token);
        localStorage.setItem('username', data.user?.username || '');
        localStorage.setItem('isAdmin', 'true');
        console.log('✅ Токен сохранён:', data.token);
        return { success: true };
      }

      return data;
    } catch (err) {  // ✅ переименовано в err
      console.error('❌ Login error:', err);
      return {
        success: false,
        error: 'Ошибка соединения с сервером',
      };
    }
  },

  logout: (): void => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('username');
    localStorage.removeItem('isAdmin');
    console.log('👋 Выход выполнен');
  },

  isAuthenticated: async (): Promise<boolean> => {
    const token = localStorage.getItem('authToken');
    console.log('🔍 Проверка токена:', token ? 'есть' : 'нет');

    if (!token) return false;

    try {
      const response = await fetch(`${API_URL}/auth/check`, {
        headers: { 'Authorization': `Bearer ${token}` },
      });

      const result = response.ok;
      console.log('🔍 Результат проверки:', result);
      return result;
    } catch (err) {  // ✅ переименовано в err
      console.error('❌ Check error:', err);
      return false;
    }
  },

  hasToken: (): boolean => {
    return !!localStorage.getItem('authToken');
  },

  getUsername: (): string => {
    return localStorage.getItem('username') || '';
  },
};
