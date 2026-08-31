export interface DocumentMeta {
  id: string;
  title: string;
  fileName: string;        // физическое имя файла
  description?: string;
  isPublished: boolean;
  updatedAt: string;
}

export type DocumentId =
  | 'security-questions'       // Вопросы для обучения охранников
  | 'periodic-check-questions' // Вопросы для периодической проверки
  | 'exam-questions'           // Вопросы для экзамена
  | 'tactical-medicine-guide'  // Методичка тактической медицины
  | 'shooting-rules';          // Правила стрельбища
