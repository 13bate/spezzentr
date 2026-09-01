import type { Schedule } from "../types";

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
  // ─── Расписания ───────────────────────────────────────────
  schedules: {
    get: (id: string) =>
      fetch(`${API_URL}/schedules/${getFileName(id)}`).then((res) => {
        if (!res.ok) throw new Error('Не удалось загрузить');
        return res.json();
      }),

    save: (id: string, data: Schedule) =>
      fetch(`${API_URL}/schedules/${getFileName(id)}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }).then((res) => {
        if (!res.ok) throw new Error('Не удалось сохранить');
        return res.json();
      }),

    delete: (id: string) =>
      fetch(`${API_URL}/schedules/${getFileName(id)}`, {
        method: 'DELETE',
      }).then((res) => {
        if (!res.ok) throw new Error('Не удалось удалить');
        return res.json();
      }),

    list: () =>
      fetch(`${API_URL}/schedules`).then((res) => {
        if (!res.ok) throw new Error('Не удалось загрузить список');
        return res.json();
      }),
  },

  // ─── Новости ──────────────────────────────────────────────
  news: {
    list: () =>
      fetch(`${API_URL}/news`).then((res) => {
        if (!res.ok) throw new Error('Не удалось загрузить новости');
        return res.json();
      }),

    get: (id: string) =>
      fetch(`${API_URL}/news/${id}`).then((res) => {
        if (!res.ok) throw new Error('Не удалось загрузить новость');
        return res.json();
      }),

    create: (data: FormData) =>
      fetch(`${API_URL}/news`, {
        method: 'POST',
        body: data,
      }).then((res) => {
        if (!res.ok) throw new Error('Не удалось создать новость');
        return res.json();
      }),

    update: (id: string, data: FormData) =>
      fetch(`${API_URL}/news/${id}`, {
        method: 'PUT',
        body: data,
      }).then((res) => {
        if (!res.ok) throw new Error('Не удалось обновить новость');
        return res.json();
      }),

    delete: (id: string) =>
      fetch(`${API_URL}/news/${id}`, {
        method: 'DELETE',
      }).then((res) => {
        if (!res.ok) throw new Error('Не удалось удалить новость');
        return res.json();
      }),
  },

  // ─── Документы ─────────────────────────────────────────────
  documents: {
    getByCategory: (category: string) =>
      fetch(`${API_URL}/documents/${category}`).then((res) => {
        if (!res.ok) throw new Error('Не удалось загрузить документы');
        return res.json();
      }),

    getAll: () =>
      fetch(`${API_URL}/documents`).then((res) => {
        if (!res.ok) throw new Error('Не удалось загрузить документы');
        return res.json();
      }),

    upload: (category: string, file: File, name?: string) => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('category', category);
      if (name) formData.append('name', name);

      return fetch(`${API_URL}/documents/upload`, {
        method: 'POST',
        body: formData,
      }).then((res) => {
        if (!res.ok) throw new Error('Не удалось загрузить PDF');
        return res.json();
      });
    },

    delete: (category: string, fileName: string) =>
      fetch(`${API_URL}/documents/${category}/${encodeURIComponent(fileName)}`, {
        method: 'DELETE',
      }).then((res) => {
        if (!res.ok) throw new Error('Не удалось удалить документ');
        return res.json();
      }),
  },

  // ─── Карусель ──────────────────────────────────────────────
  carousel: {
    list: () =>
      fetch(`${API_URL}/carousel`).then((res) => {
        if (!res.ok) throw new Error('Не удалось загрузить карусель');
        return res.json();
      }),

    get: (id: string) =>
      fetch(`${API_URL}/carousel/${id}`).then((res) => {
        if (!res.ok) throw new Error('Не удалось загрузить слайд');
        return res.json();
      }),

    create: (data: FormData) =>
      fetch(`${API_URL}/carousel`, {
        method: 'POST',
        body: data,
      }).then((res) => {
        if (!res.ok) throw new Error('Не удалось создать слайд');
        return res.json();
      }),

    update: (id: string, data: FormData) =>
      fetch(`${API_URL}/carousel/${id}`, {
        method: 'PUT',
        body: data,
      }).then((res) => {
        if (!res.ok) throw new Error('Не удалось обновить слайд');
        return res.json();
      }),

    delete: (id: string) =>
      fetch(`${API_URL}/carousel/${id}`, {
        method: 'DELETE',
      }).then((res) => {
        if (!res.ok) throw new Error('Не удалось удалить слайд');
        return res.json();
      }),

    reorder: (order: string[]) =>
      fetch(`${API_URL}/carousel/reorder`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ order }),
      }).then((res) => {
        if (!res.ok) throw new Error('Не удалось изменить порядок');
        return res.json();
      }),
  },
};
