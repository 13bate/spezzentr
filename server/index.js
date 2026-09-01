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

// ─── Директории ──────────────────────────────────────────────
const SCHEDULES_DIR = path.resolve(__dirname, '../public/content/schedules');
const NEWS_DIR = path.resolve(__dirname, '../public/content/news');
const NEWS_FILE = path.join(NEWS_DIR, 'news.json');
const DOCUMENTS_DIR = path.resolve(__dirname, '../public/content/documents');
const CAROUSEL_DIR = path.resolve(__dirname, '../public/content/carousel');
const CAROUSEL_FILE = path.join(CAROUSEL_DIR, 'carousel.json');

// Создаём папки, если их нет
if (!fs.existsSync(NEWS_DIR)) fs.mkdirSync(NEWS_DIR, { recursive: true });
if (!fs.existsSync(NEWS_FILE)) fs.writeFileSync(NEWS_FILE, JSON.stringify([], null, 2));
if (!fs.existsSync(DOCUMENTS_DIR)) fs.mkdirSync(DOCUMENTS_DIR, { recursive: true });
if (!fs.existsSync(CAROUSEL_DIR)) fs.mkdirSync(CAROUSEL_DIR, { recursive: true });
if (!fs.existsSync(CAROUSEL_FILE)) fs.writeFileSync(CAROUSEL_FILE, JSON.stringify([], null, 2));

console.log('📂 Schedules:', SCHEDULES_DIR);
console.log('📂 Documents:', DOCUMENTS_DIR);
console.log('📂 Carousel:', CAROUSEL_DIR);

// ─── Multer для PDF ──────────────────────────────────────────
const pdfStorage = multer.diskStorage({
  destination: function(req, file, cb) {
    const category = req.body.category || 'documents';
    const dir = path.join(DOCUMENTS_DIR, category);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    cb(null, dir);
  },
  filename: function(req, file, cb) {
    const customName = req.body.name;
    const ext = '.pdf';
    const finalName = customName ? `${customName}${ext}` : file.originalname;
    cb(null, finalName);
  }
});

const uploadPDF = multer({
  storage: pdfStorage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'application/pdf') cb(null, true);
    else cb(new Error('Только PDF'));
  },
  limits: { fileSize: 10 * 1024 * 1024 }
});

// ─── Multer для изображений ──────────────────────────────────
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
    if (allowed.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Только изображения (JPEG, PNG, WEBP, GIF)'));
    }
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
    if (allowed.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Только изображения (JPEG, PNG, WEBP)'));
    }
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
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
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
    if (index === -1) {
      return res.status(404).json({ error: 'Новость не найдена' });
    }

    if (req.file && data[index].imageFile) {
      const oldImagePath = path.join(NEWS_DIR, 'images', data[index].imageFile);
      if (fs.existsSync(oldImagePath)) {
        fs.unlinkSync(oldImagePath);
      }
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
    const filtered = data.filter(item => item.id !== req.params.id);
    fs.writeFileSync(NEWS_FILE, JSON.stringify(filtered, null, 2));
    res.json({ success: true });
  } catch { res.status(500).json({ error: 'Ошибка' }); }
});

// ─────────────────────────────────────────────────────────────
// DOCUMENTS API
// ─────────────────────────────────────────────────────────────

app.get('/api/documents/:category', (req, res) => {
  const categoryDir = path.join(DOCUMENTS_DIR, req.params.category);
  try {
    if (!fs.existsSync(categoryDir)) return res.json([]);
    const files = fs.readdirSync(categoryDir).filter(f => f.endsWith('.pdf'));
    const documents = files.map((file, i) => ({
      id: `${req.params.category}-${i}`,
      name: file.replace('.pdf', '').replace(/-/g, ' '),
      fileName: file,
      path: `/content/documents/${req.params.category}/${encodeURIComponent(file)}`,
      category: req.params.category,
    }));
    res.json(documents);
  } catch { res.status(500).json({ error: 'Ошибка' }); }
});

app.get('/api/documents', (req, res) => {
  try {
    const result = [];
    const categories = fs.readdirSync(DOCUMENTS_DIR);
    for (const category of categories) {
      const categoryDir = path.join(DOCUMENTS_DIR, category);
      if (fs.statSync(categoryDir).isDirectory()) {
        const files = fs.readdirSync(categoryDir).filter(f => f.endsWith('.pdf'));
        for (const file of files) {
          result.push({
            id: `${category}-${Date.now()}-${Math.random()}`,
            name: file.replace('.pdf', '').replace(/-/g, ' '),
            fileName: file,
            path: `/content/documents/${category}/${encodeURIComponent(file)}`,
            category,
          });
        }
      }
    }
    res.json(result);
  } catch { res.status(500).json({ error: 'Ошибка' }); }
});

app.post('/api/documents/upload', uploadPDF.single('file'), (req, res) => {
  try {
    const { category, name } = req.body;
    const file = req.file;
    if (!file) return res.status(400).json({ error: 'Нет файла' });
    if (file.mimetype !== 'application/pdf') return res.status(400).json({ error: 'Только PDF' });

    const finalCategory = category || 'documents';
    const fileName = name ? `${name}.pdf` : file.originalname;
    const dir = path.join(DOCUMENTS_DIR, finalCategory);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    const filePath = path.join(dir, fileName);

    fs.renameSync(file.path, filePath);
    console.log(`✅ Загружен: ${finalCategory}/${fileName}`);

    res.json({ success: true, fileName, category: finalCategory, path: `/content/documents/${finalCategory}/${fileName}` });
  } catch (error) {
    console.error('❌ Upload error:', error);
    res.status(500).json({ error: 'Ошибка' });
  }
});

app.delete('/api/documents/:category/:fileName', (req, res) => {
  const filePath = path.join(DOCUMENTS_DIR, req.params.category, decodeURIComponent(req.params.fileName));
  try {
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
    console.log(`🗑️ Удалён: ${req.params.category}/${req.params.fileName}`);
    res.json({ success: true });
  } catch { res.status(500).json({ error: 'Ошибка' }); }
});

// ─────────────────────────────────────────────────────────────
// CAROUSEL API
// ─────────────────────────────────────────────────────────────

// ─── GET: все слайды карусели ──────────────────────────────
app.get('/api/carousel', (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync(CAROUSEL_FILE, 'utf-8'));
    res.json(data);
  } catch {
    res.status(500).json({ error: 'Ошибка чтения карусели' });
  }
});

// ─── GET: один слайд ────────────────────────────────────────
app.get('/api/carousel/:id', (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync(CAROUSEL_FILE, 'utf-8'));
    const slide = data.find(item => item.id === req.params.id);
    if (!slide) return res.status(404).json({ error: 'Слайд не найден' });
    res.json(slide);
  } catch {
    res.status(500).json({ error: 'Ошибка чтения слайда' });
  }
});

// ─── POST: создать слайд ────────────────────────────────────
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
    console.error('Create slide error:', error);
    res.status(500).json({ error: 'Ошибка создания слайда' });
  }
});

// ─── PUT: обновить слайд ────────────────────────────────────
app.put('/api/carousel/:id', uploadCarousel.single('image'), (req, res) => {
  const { id } = req.params;
  try {
    const data = JSON.parse(fs.readFileSync(CAROUSEL_FILE, 'utf-8'));
    const index = data.findIndex(item => item.id === id);
    if (index === -1) {
      return res.status(404).json({ error: 'Слайд не найден' });
    }

    // Удаляем старое изображение, если загружено новое
    if (req.file && data[index].imageFile) {
      const oldImagePath = path.join(CAROUSEL_DIR, 'images', data[index].imageFile);
      if (fs.existsSync(oldImagePath)) {
        fs.unlinkSync(oldImagePath);
      }
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
    console.error('Update slide error:', error);
    res.status(500).json({ error: 'Ошибка обновления слайда' });
  }
});

// ─── DELETE: удалить слайд ──────────────────────────────────
app.delete('/api/carousel/:id', (req, res) => {
  const { id } = req.params;
  try {
    const data = JSON.parse(fs.readFileSync(CAROUSEL_FILE, 'utf-8'));
    const index = data.findIndex(item => item.id === id);
    if (index === -1) {
      return res.status(404).json({ error: 'Слайд не найден' });
    }

    // Удаляем файл изображения
    if (data[index].imageFile) {
      const imagePath = path.join(CAROUSEL_DIR, 'images', data[index].imageFile);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    data.splice(index, 1);
    fs.writeFileSync(CAROUSEL_FILE, JSON.stringify(data, null, 2));
    res.json({ success: true });
  } catch (error) {
    console.error('Delete slide error:', error);
    res.status(500).json({ error: 'Ошибка удаления слайда' });
  }
});

// ─── PATCH: обновить порядок слайдов ────────────────────────
app.patch('/api/carousel/reorder', (req, res) => {
  const { order } = req.body;
  try {
    const data = JSON.parse(fs.readFileSync(CAROUSEL_FILE, 'utf-8'));
    const reordered = order.map(id => data.find(item => item.id === id)).filter(Boolean);
    fs.writeFileSync(CAROUSEL_FILE, JSON.stringify(reordered, null, 2));
    res.json({ success: true });
  } catch (error) {
    console.error('Reorder error:', error);
    res.status(500).json({ error: 'Ошибка изменения порядка' });
  }
});

// ─────────────────────────────────────────────────────────────
// AUTH API
// ─────────────────────────────────────────────────────────────

app.post('/api/auth/login', (req, res) => {
  const { username, password } = req.body;

  console.log('🔐 Login attempt:', username);
  console.log('📝 Env check:', {
    ADMIN_USERNAME: process.env.ADMIN_USERNAME,
    ADMIN_PASSWORD: process.env.ADMIN_PASSWORD ? '***' : 'not set'
  });

  const validUsername = process.env.ADMIN_USERNAME || 'admin';
  const validPassword = process.env.ADMIN_PASSWORD || 'spezzentr2024';

  console.log('🔑 Valid credentials:', { validUsername, validPassword: '***' });

  if (username === validUsername && password === validPassword) {
    const token = Buffer.from(`${username}:${Date.now()}`).toString('base64');
    console.log('✅ Login success:', username);
    res.json({
      success: true,
      token,
      user: { username }
    });
  } else {
    console.log('❌ Login failed:', username);
    res.status(401).json({
      success: false,
      error: 'Неверный логин или пароль'
    });
  }
});

app.get('/api/auth/check', (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];

  console.log('🔍 Check token:', token ? 'present' : 'missing');

  if (!token) {
    return res.status(401).json({ success: false, error: 'Не авторизован' });
  }

  res.json({ success: true });
});

app.post('/api/auth/logout', (req, res) => {
  res.json({ success: true });
});

// ─── CAROUSEL API ─────────────────────────────────────────────

// ─── GET: все слайды карусели ──────────────────────────────
app.get('/api/carousel', (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync(CAROUSEL_FILE, 'utf-8'));
    res.json(data);
  } catch {
    res.status(500).json({ error: 'Ошибка чтения карусели' });
  }
});

// ─── GET: один слайд ────────────────────────────────────────
app.get('/api/carousel/:id', (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync(CAROUSEL_FILE, 'utf-8'));
    const slide = data.find(item => item.id === req.params.id);
    if (!slide) return res.status(404).json({ error: 'Слайд не найден' });
    res.json(slide);
  } catch {
    res.status(500).json({ error: 'Ошибка чтения слайда' });
  }
});

// ─── POST: создать слайд ────────────────────────────────────
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
    console.error('Create slide error:', error);
    res.status(500).json({ error: 'Ошибка создания слайда' });
  }
});

// ─── PUT: обновить слайд ────────────────────────────────────
app.put('/api/carousel/:id', uploadCarousel.single('image'), (req, res) => {
  const { id } = req.params;
  try {
    const data = JSON.parse(fs.readFileSync(CAROUSEL_FILE, 'utf-8'));
    const index = data.findIndex(item => item.id === id);
    if (index === -1) {
      return res.status(404).json({ error: 'Слайд не найден' });
    }

    if (req.file && data[index].imageFile) {
      const oldImagePath = path.join(CAROUSEL_DIR, 'images', data[index].imageFile);
      if (fs.existsSync(oldImagePath)) {
        fs.unlinkSync(oldImagePath);
      }
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
    console.error('Update slide error:', error);
    res.status(500).json({ error: 'Ошибка обновления слайда' });
  }
});

// ─── DELETE: удалить слайд ──────────────────────────────────
app.delete('/api/carousel/:id', (req, res) => {
  const { id } = req.params;
  try {
    const data = JSON.parse(fs.readFileSync(CAROUSEL_FILE, 'utf-8'));
    const index = data.findIndex(item => item.id === id);
    if (index === -1) {
      return res.status(404).json({ error: 'Слайд не найден' });
    }

    if (data[index].imageFile) {
      const imagePath = path.join(CAROUSEL_DIR, 'images', data[index].imageFile);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    data.splice(index, 1);
    fs.writeFileSync(CAROUSEL_FILE, JSON.stringify(data, null, 2));
    res.json({ success: true });
  } catch (error) {
    console.error('Delete slide error:', error);
    res.status(500).json({ error: 'Ошибка удаления слайда' });
  }
});

// ─── PATCH: обновить порядок слайдов ────────────────────────
app.patch('/api/carousel/reorder', (req, res) => {
  const { order } = req.body;
  try {
    const data = JSON.parse(fs.readFileSync(CAROUSEL_FILE, 'utf-8'));
    const reordered = order.map(id => data.find(item => item.id === id)).filter(Boolean);
    fs.writeFileSync(CAROUSEL_FILE, JSON.stringify(reordered, null, 2));
    res.json({ success: true });
  } catch (error) {
    console.error('Reorder error:', error);
    res.status(500).json({ error: 'Ошибка изменения порядка' });
  }
});

// ─── ЗАПУСК СЕРВЕРА ─────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`✅ Сервер запущен: http://localhost:${PORT}`);
});
