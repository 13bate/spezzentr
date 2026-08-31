import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Путь к файлам — поднимаемся на уровень выше в public/
const SCHEDULES_DIR = path.resolve(__dirname, '../public/content/schedules');

console.log('📂 Schedules dir:', SCHEDULES_DIR);

// ─── GET: получить расписание ──────────────────────────────
app.get('/api/schedules/:id', (req, res) => {
  const { id } = req.params;
  const filePath = path.join(SCHEDULES_DIR, `${id}.json`);

  try {
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: 'Не найдено' });
    }
    const data = fs.readFileSync(filePath, 'utf-8');
    res.json(JSON.parse(data));
  } catch (error) {
    res.status(500).json({ error: 'Ошибка чтения' });
  }
});

// ─── POST: сохранить расписание ─────────────────────────────
app.post('/api/schedules/:id', (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const filePath = path.join(SCHEDULES_DIR, `${id}.json`);

  try {
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
    console.log('✅ Сохранено:', filePath);
    res.json({ success: true, message: 'Сохранено' });
  } catch (error) {
    console.error('❌ Save error:', error);
    res.status(500).json({ error: 'Ошибка сохранения' });
  }
});

// ─── GET: список всех расписаний ────────────────────────────
app.get('/api/schedules', (req, res) => {
  try {
    if (!fs.existsSync(SCHEDULES_DIR)) {
      fs.mkdirSync(SCHEDULES_DIR, { recursive: true });
      return res.json([]);
    }
    const files = fs.readdirSync(SCHEDULES_DIR).filter(f => f.endsWith('.json'));
    const schedules = files.map(file => {
      const filePath = path.join(SCHEDULES_DIR, file);
      const content = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
      return {
        id: file.replace('.json', ''),
        title: content.title || file.replace('.json', ''),
      };
    });
    res.json(schedules);
  } catch (error) {
    res.status(500).json({ error: 'Ошибка чтения списка' });
  }
});

// ─── DELETE: удалить расписание ─────────────────────────────
app.delete('/api/schedules/:id', (req, res) => {
  const { id } = req.params;
  const filePath = path.join(SCHEDULES_DIR, `${id}.json`);

  try {
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      console.log('🗑️ Удалено:', filePath);
    }
    res.json({ success: true, message: 'Удалено' });
  } catch (error) {
    res.status(500).json({ error: 'Ошибка удаления' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Сервер запущен: http://localhost:${PORT}`);
});


// ─── NEWS ENDPOINTS ─────────────────────────────────────────

const NEWS_DIR = path.resolve(__dirname, '../public/content/news');
const NEWS_FILE = path.join(NEWS_DIR, 'news.json');

// Убедимся, что папка и файл существуют
if (!fs.existsSync(NEWS_DIR)) {
  fs.mkdirSync(NEWS_DIR, { recursive: true });
}
if (!fs.existsSync(NEWS_FILE)) {
  fs.writeFileSync(NEWS_FILE, JSON.stringify([], null, 2));
}

// ─── GET: все новости ──────────────────────────────────────
app.get('/api/news', (req, res) => {
  try {
    const data = fs.readFileSync(NEWS_FILE, 'utf-8');
    res.json(JSON.parse(data));
  } catch (error) {
    res.status(500).json({ error: 'Ошибка чтения новостей' });
  }
});

// ─── GET: одна новость ─────────────────────────────────────
app.get('/api/news/:id', (req, res) => {
  const { id } = req.params;
  try {
    const data = JSON.parse(fs.readFileSync(NEWS_FILE, 'utf-8'));
    const news = data.find((item) => item.id === id);
    if (!news) {
      return res.status(404).json({ error: 'Новость не найдена' });
    }
    res.json(news);
  } catch (error) {
    res.status(500).json({ error: 'Ошибка чтения новости' });
  }
});

// ─── POST: создать новость ─────────────────────────────────
app.post('/api/news', (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync(NEWS_FILE, 'utf-8'));
    const newNews = {
      ...req.body,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    data.unshift(newNews); // Добавляем в начало
    fs.writeFileSync(NEWS_FILE, JSON.stringify(data, null, 2));
    res.json(newNews);
  } catch (error) {
    res.status(500).json({ error: 'Ошибка создания новости' });
  }
});

// ─── PUT: обновить новость ──────────────────────────────────
app.put('/api/news/:id', (req, res) => {
  const { id } = req.params;
  try {
    const data = JSON.parse(fs.readFileSync(NEWS_FILE, 'utf-8'));
    const index = data.findIndex((item) => item.id === id);
    if (index === -1) {
      return res.status(404).json({ error: 'Новость не найдена' });
    }
    data[index] = {
      ...data[index],
      ...req.body,
      updatedAt: new Date().toISOString(),
    };
    fs.writeFileSync(NEWS_FILE, JSON.stringify(data, null, 2));
    res.json(data[index]);
  } catch (error) {
    res.status(500).json({ error: 'Ошибка обновления новости' });
  }
});

// ─── DELETE: удалить новость ──────────────────────────────
app.delete('/api/news/:id', (req, res) => {
  const { id } = req.params;
  try {
    const data = JSON.parse(fs.readFileSync(NEWS_FILE, 'utf-8'));
    const filtered = data.filter((item) => item.id !== id);
    if (filtered.length === data.length) {
      return res.status(404).json({ error: 'Новость не найдена' });
    }
    fs.writeFileSync(NEWS_FILE, JSON.stringify(filtered, null, 2));
    res.json({ success: true, message: 'Новость удалена' });
  } catch (error) {
    res.status(500).json({ error: 'Ошибка удаления новости' });
  }
});
