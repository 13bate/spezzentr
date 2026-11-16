import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Путь к папке с документами
const DOCS_DIR = path.resolve(__dirname, './storage/documents');
const DOCUMENTS_FILE = path.resolve(__dirname, './storage/documents.json');

// Читаем текущую базу (или создаем пустую)
let db = [];
if (fs.existsSync(DOCUMENTS_FILE)) {
  db = JSON.parse(fs.readFileSync(DOCUMENTS_FILE, 'utf-8'));
}

// Проходим по категориям (education, structure и т.д.)
const categories = fs.readdirSync(DOCS_DIR).filter(f => fs.statSync(path.join(DOCS_DIR, f)).isDirectory());

categories.forEach(category => {
  const catPath = path.join(DOCS_DIR, category);
  const files = fs.readdirSync(catPath).filter(f => f.endsWith('.pdf'));

  files.forEach(file => {
    // Проверяем, нет ли уже этого файла в базе
    const exists = db.find(d => d.fileName === file && d.category === category);

    if (!exists) {
      // Убираем цифры из начала (01(1). ) и хвост для красивого имени
      let cleanName = file.replace('.pdf', '')
        .replace(/^\d+(\(\d+\))?\.\s*/, '')
        .replace(/\s*—\s*\d{4}\s*—\s*подписанный титульный лист/, '')
        .trim();

      // Добавляем в базу
      db.push({
        id: Date.now().toString() + Math.random().toString(36).substr(2, 5),
        name: cleanName,
        fileName: file,
        path: `/content/documents/${category}/${file}`,
        category: category,
        subCategory: category === 'education' ? 'programs' : '', // По умолчанию кидаем в программы
        createdAt: new Date().toISOString()
      });
    }
  });
});

// Сохраняем
fs.writeFileSync(DOCUMENTS_FILE, JSON.stringify(db, null, 2));
console.log(`✅ Миграция завершена! Добавлено документов: ${db.length}`);
