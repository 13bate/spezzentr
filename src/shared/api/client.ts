const API_URL = 'http://localhost:3001/api';

// Маппинг: scheduleId → имя файла
const fileNames: Record<string, string> = {
  'weapon-safety-schedule': 'exam-schedule',
  'periodic-check-schedule': 'training-schedule',
  'competitions-schedule': 'competitions-schedule',
  'tactical-medicine-schedule': 'tactical-medicine-schedule',
};

const getFileName = (id: string): string => {
  return fileNames[id] || id;
};

export const api = {
  schedules: {
    // Получить одно расписание
    get: (id: string) =>
      fetch(`${API_URL}/schedules/${getFileName(id)}`).then((res) => {
        if (!res.ok) throw new Error('Не удалось загрузить');
        return res.json();
      }),

    // Сохранить расписание
    save: (id: string, data: any) =>
      fetch(`${API_URL}/schedules/${getFileName(id)}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }).then((res) => {
        if (!res.ok) throw new Error('Не удалось сохранить');
        return res.json();
      }),

    // Удалить расписание
    delete: (id: string) =>
      fetch(`${API_URL}/schedules/${getFileName(id)}`, {
        method: 'DELETE',
      }).then((res) => {
        if (!res.ok) throw new Error('Не удалось удалить');
        return res.json();
      }),

    // Получить список всех расписаний
    list: () =>
      fetch(`${API_URL}/schedules`).then((res) => {
        if (!res.ok) throw new Error('Не удалось загрузить список');
        return res.json();
      }),
  },
  news: {
    // Получить все новости
    list: () =>
      fetch(`${API_URL}/news`).then((res) => {
        if (!res.ok) throw new Error('Не удалось загрузить новости');
        return res.json();
      }),

    // Получить одну новость
    get: (id: string) =>
      fetch(`${API_URL}/news/${id}`).then((res) => {
        if (!res.ok) throw new Error('Не удалось загрузить новость');
        return res.json();
      }),

    // Создать новость
    create: (data: any) =>
      fetch(`${API_URL}/news`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }).then((res) => {
        if (!res.ok) throw new Error('Не удалось создать новость');
        return res.json();
      }),

    // Обновить новость
    update: (id: string, data: any) =>
      fetch(`${API_URL}/news/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }).then((res) => {
        if (!res.ok) throw new Error('Не удалось обновить новость');
        return res.json();
      }),

    // Удалить новость
    delete: (id: string) =>
      fetch(`${API_URL}/news/${id}`, {
        method: 'DELETE',
      }).then((res) => {
        if (!res.ok) throw new Error('Не удалось удалить новость');
        return res.json();
      }),
  },
};
