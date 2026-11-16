import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import multer from 'multer';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// ─── Директории и файлы ──────────────────────────────────────
const STORAGE_DIR = path.resolve(__dirname, '../storage');
const DOCUMENTS_DIR = path.join(STORAGE_DIR, 'documents');
const NEWS_DIR = path.join(STORAGE_DIR, 'news');
const CAROUSEL_DIR = path.join(STORAGE_DIR, 'carousel');
const SCHEDULES_DIR = path.join(STORAGE_DIR, 'schedules');

const NEWS_FILE = path.join(NEWS_DIR, 'news.json');
const CAROUSEL_FILE = path.join(CAROUSEL_DIR, 'carousel.json');
const DOCUMENTS_FILE = path.join(STORAGE_DIR, 'documents.json');

// Создаём папки и файлы, если их нет
if (!fs.existsSync(SCHEDULES_DIR)) fs.mkdirSync(SCHEDULES_DIR, { recursive: true });
if (!fs.existsSync(NEWS_DIR)) fs.mkdirSync(NEWS_DIR, { recursive: true });
if (!fs.existsSync(NEWS_FILE)) fs.writeFileSync(NEWS_FILE, JSON.stringify([], null, 2));
if (!fs.existsSync(DOCUMENTS_DIR)) fs.mkdirSync(DOCUMENTS_DIR, { recursive: true });
if (!fs.existsSync(CAROUSEL_DIR)) fs.mkdirSync(CAROUSEL_DIR, { recursive: true });
if (!fs.existsSync(CAROUSEL_FILE)) fs.writeFileSync(CAROUSEL_FILE, JSON.stringify([], null, 2));
if (!fs.existsSync(DOCUMENTS_FILE)) fs.writeFileSync(DOCUMENTS_FILE, JSON.stringify([], null, 2));

console.log('📂 Schedules:', SCHEDULES_DIR);
console.log('📂 Documents:', DOCUMENTS_DIR);
console.log('📂 Carousel:', CAROUSEL_DIR);

// Раздаем файлы из storage
app.use('/content', express.static(STORAGE_DIR));

// ─── Multer для PDF ──────────────────────────────────────────
const pdfStorage = multer.diskStorage({
  destination: function(req, file, cb) {
    // Сохраняем во временную папку
    const dir = path.join(STORAGE_DIR, 'temp');
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    cb(null, dir);
  },
  filename: function(req, file, cb) {
    const ext = '.pdf';
    const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1E9)}${ext}`;
    cb(null, uniqueName);
  }
});

const uploadPDF = multer({
  storage: pdfStorage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'application/pdf') cb(null, true);
    else cb(new Error('Только PDF'));
  },
  limits: { fileSize: 15 * 1024 * 1024 }
});

// ─── Multer для изображений (Новости) ────────────────────────
const imageStorage = multer.diskStorage({
  destination: function(req, file, cb) {
    const dir = path.join(NEWS_DIR, 'images');
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    cb(null, dir);
  },
  filename: function(req, file, cb) {
    const ext = path.extname(file.originalname);
    const name = Date.now() + ext;
    cb(null, name);
  }
});

const uploadImage = multer({
  storage: imageStorage,
  fileFilter: (req, file, cb) => {
    const allowed = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
    if (allowed.includes(file.mimetype)) cb(null, true);
    else cb(new Error('Только изображения'));
  },
  limits: { fileSize: 5 * 1024 * 1024 }
});

// ─── Multer для карусели ─────────────────────────────────────
const carouselStorage = multer.diskStorage({
  destination: function(req, file, cb) {
    const dir = path.join(CAROUSEL_DIR, 'images');
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    cb(null, dir);
  },
  filename: function(req, file, cb) {
    const ext = path.extname(file.originalname);
    const name = Date.now() + ext;
    cb(null, name);
  }
});

const uploadCarousel = multer({
  storage: carouselStorage,
  fileFilter: (req, file, cb) => {
    const allowed = ['image/jpeg', 'image/png', 'image/webp'];
    if (allowed.includes(file.mimetype)) cb(null, true);
    else cb(new Error('Только изображения (JPEG, PNG, WEBP)'));
  },
  limits: { fileSize: 10 * 1024 * 1024 }
});

// ─────────────────────────────────────────────────────────────
// SCHEDULES API
// ─────────────────────────────────────────────────────────────
app.get('/api/schedules/:id', (req, res) => {
  const filePath = path.join(SCHEDULES_DIR, `${req.params.id}.json`);
  try {
    if (!fs.existsSync(filePath)) return res.status(404).json({ error: 'Не найдено' });
    res.json(JSON.parse(fs.readFileSync(filePath, 'utf-8')));
  } catch { res.status(500).json({ error: 'Ошибка' }); }
});

app.post('/api/schedules/:id', (req, res) => {
  const filePath = path.join(SCHEDULES_DIR, `${req.params.id}.json`);
  try {
    if (!fs.existsSync(SCHEDULES_DIR)) fs.mkdirSync(SCHEDULES_DIR, { recursive: true });
    fs.writeFileSync(filePath, JSON.stringify(req.body, null, 2), 'utf-8');
    res.json({ success: true });
  } catch { res.status(500).json({ error: 'Ошибка' }); }
});

app.get('/api/schedules', (req, res) => {
  try {
    if (!fs.existsSync(SCHEDULES_DIR)) return res.json([]);
    const files = fs.readdirSync(SCHEDULES_DIR).filter(f => f.endsWith('.json'));
    const schedules = files.map(file => {
      const content = JSON.parse(fs.readFileSync(path.join(SCHEDULES_DIR, file), 'utf-8'));
      return { id: file.replace('.json', ''), title: content.title || file.replace('.json', '') };
    });
    res.json(schedules);
  } catch { res.status(500).json({ error: 'Ошибка' }); }
});

app.delete('/api/schedules/:id', (req, res) => {
  const filePath = path.join(SCHEDULES_DIR, `${req.params.id}.json`);
  try {
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
    res.json({ success: true });
  } catch { res.status(500).json({ error: 'Ошибка' }); }
});

// ─────────────────────────────────────────────────────────────
// NEWS API
// ─────────────────────────────────────────────────────────────
app.get('/api/news', (req, res) => {
  try { res.json(JSON.parse(fs.readFileSync(NEWS_FILE, 'utf-8'))); }
  catch { res.status(500).json({ error: 'Ошибка' }); }
});

app.get('/api/news/:id', (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync(NEWS_FILE, 'utf-8'));
    const news = data.find(item => item.id === req.params.id);
    if (!news) return res.status(404).json({ error: 'Не найдено' });
    res.json(news);
  } catch { res.status(500).json({ error: 'Ошибка' }); }
});

app.post('/api/news', uploadImage.single('image'), (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync(NEWS_FILE, 'utf-8'));
    const newNews = {
      ...req.body,
      id: Date.now().toString(),
      image: req.file ? `/content/news/images/${req.file.filename}` : null,
      imageFile: req.file ? req.file.filename : null,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    data.unshift(newNews);
    fs.writeFileSync(NEWS_FILE, JSON.stringify(data, null, 2));
    res.json(newNews);
  } catch (error) {
    console.error('Create error:', error);
    res.status(500).json({ error: 'Ошибка создания новости' });
  }
});

app.put('/api/news/:id', uploadImage.single('image'), (req, res) => {
  const { id } = req.params;
  try {
    const data = JSON.parse(fs.readFileSync(NEWS_FILE, 'utf-8'));
    const index = data.findIndex((item) => item.id === id);
    if (index === -1) return res.status(404).json({ error: 'Новость не найдена' });

    if (req.file && data[index].imageFile) {
      const oldImagePath = path.join(NEWS_DIR, 'images', data[index].imageFile);
      if (fs.existsSync(oldImagePath)) fs.unlinkSync(oldImagePath);
    }

    data[index] = {
      ...data[index],
      ...req.body,
      image: req.file ? `/content/news/images/${req.file.filename}` : data[index].image,
      imageFile: req.file ? req.file.filename : data[index].imageFile,
      updatedAt: new Date().toISOString(),
    };
    fs.writeFileSync(NEWS_FILE, JSON.stringify(data, null, 2));
    res.json(data[index]);
  } catch (error) {
    console.error('Update error:', error);
    res.status(500).json({ error: 'Ошибка обновления новости' });
  }
});

app.delete('/api/news/:id', (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync(NEWS_FILE, 'utf-8'));
    const item = data.find(i => i.id === req.params.id);

    if (item && item.imageFile) {
      const imgPath = path.join(NEWS_DIR, 'images', item.imageFile);
      if (fs.existsSync(imgPath)) fs.unlinkSync(imgPath);
    }

    const filtered = data.filter(item => item.id !== req.params.id);
    fs.writeFileSync(NEWS_FILE, JSON.stringify(filtered, null, 2));
    res.json({ success: true });
  } catch { res.status(500).json({ error: 'Ошибка' }); }
});

// ─────────────────────────────────────────────────────────────
// DOCUMENTS API
// ─────────────────────────────────────────────────────────────

// Получить документы по категории
app.get('/api/documents/:category', (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync(DOCUMENTS_FILE, 'utf-8'));
    const docs = data.filter(d => d.category === req.params.category);
    docs.sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' }));
    res.json(docs);
  } catch { res.status(500).json({ error: 'Ошибка' }); }
});

// Получить ВСЕ документы (для админки)
app.get('/api/documents', (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync(DOCUMENTS_FILE, 'utf-8'));
    res.json(data);
  } catch { res.status(500).json({ error: 'Ошибка' }); }
});

// Загрузить новый документ
app.post('/api/documents/upload', uploadPDF.single('file'), (req, res) => {
  try {
    const { category, displayName, subCategory } = req.body;
    const file = req.file;
    if (!file) return res.status(400).json({ error: 'Нет файла' });

    const finalCategory = category || 'documents';

    // 1. Создаем папку нужной категории, если её нет
    const targetDir = path.join(DOCUMENTS_DIR, finalCategory);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    // 2. Переносим файл из временной папки (temp) в папку категории
    const oldPath = file.path;
    const newPath = path.join(targetDir, file.filename);
    fs.renameSync(oldPath, newPath);

    // 3. Записываем метаданные в базу (documents.json)
    const data = JSON.parse(fs.readFileSync(DOCUMENTS_FILE, 'utf-8'));

    const newDoc = {
      id: Date.now().toString(),
      name: displayName || file.originalname.replace('.pdf', ''),
      fileName: file.filename,
      path: `/content/documents/${finalCategory}/${file.filename}`, // Правильный путь
      category: finalCategory,
      subCategory: subCategory || '',
      createdAt: new Date().toISOString()
    };

    data.push(newDoc);
    fs.writeFileSync(DOCUMENTS_FILE, JSON.stringify(data, null, 2));

    console.log(`✅ Загружен: ${newDoc.name} в папку ${finalCategory}`);
    res.json(newDoc);
  } catch (error) {
    console.error('❌ Upload error:', error);
    res.status(500).json({ error: 'Ошибка загрузки' });
  }
});

// Обновить метаданные (имя или подкатегорию)
app.put('/api/documents/:id', (req, res) => {
  try {
    const { displayName, subCategory } = req.body;
    const data = JSON.parse(fs.readFileSync(DOCUMENTS_FILE, 'utf-8'));
    const index = data.findIndex(d => d.id === req.params.id);

    if (index === -1) return res.status(404).json({ error: 'Не найдено' });

    if (displayName !== undefined) data[index].name = displayName;
    if (subCategory !== undefined) data[index].subCategory = subCategory;

    fs.writeFileSync(DOCUMENTS_FILE, JSON.stringify(data, null, 2));
    res.json(data[index]);
  } catch { res.status(500).json({ error: 'Ошибка' }); }
});

// Удалить документ
app.delete('/api/documents/:id', (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync(DOCUMENTS_FILE, 'utf-8'));
    const index = data.findIndex(d => d.id === req.params.id);

    if (index === -1) return res.status(404).json({ error: 'Не найдено' });

    const doc = data[index];
    // Формируем путь для удаления файла
    const filePath = path.join(STORAGE_DIR, doc.path.replace('/content/', ''));

    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);

    data.splice(index, 1);
    fs.writeFileSync(DOCUMENTS_FILE, JSON.stringify(data, null, 2));

    res.json({ success: true });
  } catch { res.status(500).json({ error: 'Ошибка' }); }
});

// ─────────────────────────────────────────────────────────────
// CAROUSEL API
// ─────────────────────────────────────────────────────────────
app.get('/api/carousel', (req, res) => {
  try { res.json(JSON.parse(fs.readFileSync(CAROUSEL_FILE, 'utf-8'))); }
  catch { res.status(500).json({ error: 'Ошибка чтения карусели' }); }
});

app.get('/api/carousel/:id', (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync(CAROUSEL_FILE, 'utf-8'));
    const slide = data.find(item => item.id === req.params.id);
    if (!slide) return res.status(404).json({ error: 'Слайд не найден' });
    res.json(slide);
  } catch { res.status(500).json({ error: 'Ошибка' }); }
});

app.post('/api/carousel', uploadCarousel.single('image'), (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync(CAROUSEL_FILE, 'utf-8'));
    const newSlide = {
      id: Date.now().toString(),
      title: req.body.title || '',
      description: req.body.description || '',
      link: req.body.link || '',
      image: req.file ? `/content/carousel/images/${req.file.filename}` : null,
      imageFile: req.file ? req.file.filename : null,
      isPublished: req.body.isPublished === 'true' || req.body.isPublished === true,
      order: data.length,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    data.push(newSlide);
    fs.writeFileSync(CAROUSEL_FILE, JSON.stringify(data, null, 2));
    res.json(newSlide);
  } catch (error) {
    res.status(500).json({ error: 'Ошибка создания слайда' });
  }
});

app.put('/api/carousel/:id', uploadCarousel.single('image'), (req, res) => {
  const { id } = req.params;
  try {
    const data = JSON.parse(fs.readFileSync(CAROUSEL_FILE, 'utf-8'));
    const index = data.findIndex(item => item.id === id);
    if (index === -1) return res.status(404).json({ error: 'Слайд не найден' });

    if (req.file && data[index].imageFile) {
      const oldImagePath = path.join(CAROUSEL_DIR, 'images', data[index].imageFile);
      if (fs.existsSync(oldImagePath)) fs.unlinkSync(oldImagePath);
    }

    data[index] = {
      ...data[index],
      title: req.body.title !== undefined ? req.body.title : data[index].title,
      description: req.body.description !== undefined ? req.body.description : data[index].description,
      link: req.body.link !== undefined ? req.body.link : data[index].link,
      image: req.file ? `/content/carousel/images/${req.file.filename}` : data[index].image,
      imageFile: req.file ? req.file.filename : data[index].imageFile,
      isPublished: req.body.isPublished !== undefined
        ? (req.body.isPublished === 'true' || req.body.isPublished === true)
        : data[index].isPublished,
      updatedAt: new Date().toISOString(),
    };

    fs.writeFileSync(CAROUSEL_FILE, JSON.stringify(data, null, 2));
    res.json(data[index]);
  } catch (error) {
    res.status(500).json({ error: 'Ошибка обновления слайда' });
  }
});

app.delete('/api/carousel/:id', (req, res) => {
  const { id } = req.params;
  try {
    const data = JSON.parse(fs.readFileSync(CAROUSEL_FILE, 'utf-8'));
    const index = data.findIndex(item => item.id === id);
    if (index === -1) return res.status(404).json({ error: 'Слайд не найден' });

    if (data[index].imageFile) {
      const imagePath = path.join(CAROUSEL_DIR, 'images', data[index].imageFile);
      if (fs.existsSync(imagePath)) fs.unlinkSync(imagePath);
    }

    data.splice(index, 1);
    fs.writeFileSync(CAROUSEL_FILE, JSON.stringify(data, null, 2));
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Ошибка удаления слайда' });
  }
});

app.patch('/api/carousel/reorder', (req, res) => {
  const { order } = req.body;
  try {
    const data = JSON.parse(fs.readFileSync(CAROUSEL_FILE, 'utf-8'));
    const reordered = order.map(id => data.find(item => item.id === id)).filter(Boolean);
    fs.writeFileSync(CAROUSEL_FILE, JSON.stringify(reordered, null, 2));
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Ошибка изменения порядка' });
  }
});

// ─────────────────────────────────────────────────────────────
// AUTH API
// ─────────────────────────────────────────────────────────────
app.post('/api/auth/login', (req, res) => {
  const { username, password } = req.body;
  const validUsername = process.env.ADMIN_USERNAME || 'admin';
  const validPassword = process.env.ADMIN_PASSWORD || 'spezzentr2024';

  if (username === validUsername && password === validPassword) {
    const token = Buffer.from(`${username}:${Date.now()}`).toString('base64');
    res.json({ success: true, token, user: { username } });
  } else {
    res.status(401).json({ success: false, error: 'Неверный логин или пароль' });
  }
});

app.get('/api/auth/check', (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ success: false, error: 'Не авторизован' });
  res.json({ success: true });
});

app.post('/api/auth/logout', (req, res) => {
  res.json({ success: true });
});

// ─── ЗАПУСК СЕРВЕРА ─────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`✅ Сервер запущен: http://localhost:${PORT}`);
});
