// ─── Основные типы ──────────────────────────────────────────

export interface DocumentMeta {
  id: string;
  name: string;
  fileName: string;
  path: string;
  category: string;
  isPublished: boolean;
  updatedAt?: string;
}

export interface DocumentCategory {
  id: string;
  label: string;
  documents: DocumentMeta[];
}

// ─── ID документов (для привязки к страницам) ──────────────

export type DocumentId =
  // ─── Безопасность (Security) ──────────────────────────────
  | 'periodic-questions'
  | 'security-questions'
  | 'weapon-safety-questions'

  // ─── Документы (Education → Documents) ──────────────────
  | 'charter'
  | 'license'
  | 'self-assessment'
  | 'privacy-policy'
  | 'attestation-regulation'
  | 'relationship-order'
  | 'transfer-regulation'
  | 'internal-rules'
  | 'study-schedule'
  | 'admission-rules'

  // ─── Образование (Education → Education) ────────────────
  | 'program-security-guard'
  | 'program-pk-security-guard'
  | 'program-detective-2019'
  | 'program-detective'
  | 'program-pk-detective-2019'
  | 'program-pk-detective'
  | 'program-pk-guard'
  | 'program-special-comm'
  | 'program-fgup-ohrana'
  | 'program-pk-ruk-chop'
  | 'program-ruk-chop'
  | 'program-boo'
  | 'program-yur-lic'
  | 'study-plan'

  // ─── Основные сведения (Basic Info) ──────────────────────
  | 'basic-license'

  // ─── Платные услуги (Paid Services) ──────────────────────
  | 'paid-contract'

  // ─── Структура (Structure) ──────────────────────────────
  | 'teachers-council'
  | 'general-meeting';

// ─── Маппинг ID → отображаемое имя ──────────────────────────

export const documentNames: Record<DocumentId, string> = {
  // Безопасность
  'periodic-questions': 'Вопросы для периодической проверки частных охранников',
  'security-questions': 'Вопросы для обучения частных охранников',
  'weapon-safety-questions': 'Вопросы для экзамена по безопасному обращению с оружием',

  // Документы
  'charter': 'Устав образовательной организации',
  'license': 'Лицензия на образовательную деятельность',
  'self-assessment': 'Отчет о результатах самообследования за 2025 год',
  'privacy-policy': 'Политика в отношении обработки персональных данных',
  'attestation-regulation': 'Положение об аттестации обучающихся',
  'relationship-order': 'Порядок отношений с обучающимися',
  'transfer-regulation': 'Порядок перевода и отчисления обучающихся',
  'internal-rules': 'Правила внутреннего распорядка обучающихся',
  'study-schedule': 'Режим занятий обучающихся',
  'admission-rules': 'Правила приема обучающихся',

  // Образование
  'program-security-guard': 'Программа обучения охранников (2024)',
  'program-pk-security-guard': 'Программа повышения квалификации охранников (2024)',
  'program-detective-2019': 'Программа подготовки детективов (2019)',
  'program-detective': 'Программа подготовки детективов',
  'program-pk-detective-2019': 'Программа ПК детективов (2019)',
  'program-pk-detective': 'Программа ПК детективов',
  'program-pk-guard': 'Программа ПК охранников',
  'program-special-comm': 'Программа подготовки работников Спецсвязи',
  'program-fgup-ohrana': 'Программа профессиональной подготовки работников ФГУП Охрана',
  'program-pk-ruk-chop': 'Программа ПК руководителей ЧОП',
  'program-ruk-chop': 'Программа руководителей ЧОП',
  'program-boo': 'Программа безопасного обращения с оружием',
  'program-yur-lic': 'Программа подготовки работников юридических лиц',
  'study-plan': 'Учебный план',

  // Основные сведения
  'basic-license': 'Лицензия на образовательную деятельность',

  // Платные услуги
  'paid-contract': 'Договор на оказание платных образовательных услуг',

  // Структура
  'teachers-council': 'Положение о педагогическом совете',
  'general-meeting': 'Положение о собрании работников',
};

// ─── Маппинг ID → категория ──────────────────────────────────

export const documentCategoryMap: Record<string, string> = {
  // Безопасность
  'weapon-safety-questions': 'security',
  'security-questions': 'security',
  'periodic-questions': 'security',

  // Документы
  'charter': 'documents',
  'license': 'documents',
  'self-assessment': 'documents',
  'privacy-policy': 'documents',
  'attestation-regulation': 'documents',
  'relationship-order': 'documents',
  'transfer-regulation': 'documents',
  'internal-rules': 'documents',
  'study-schedule': 'documents',
  'admission-rules': 'documents',

  // Образование
  'program-security-guard': 'education',
  'program-pk-security-guard': 'education',
  'program-detective-2019': 'education',
  'program-detective': 'education',
  'program-pk-detective-2019': 'education',
  'program-pk-detective': 'education',
  'program-pk-guard': 'education',
  'program-special-comm': 'education',
  'program-fgup-ohrana': 'education',
  'program-pk-ruk-chop': 'education',
  'program-ruk-chop': 'education',
  'program-boo': 'education',
  'program-yur-lic': 'education',
  'study-plan': 'education',

  // Основные сведения
  'basic-license': 'basic-info',

  // Платные услуги
  'paid-contract': 'paid-services',

  // Структура
  'teachers-council': 'structure',
  'general-meeting': 'structure',
};

// ─── Маппинг ID → имя файла ──────────────────────────────────

export const documentFileNames: Record<string, string> = {
  // Безопасность — реальные имена из папки security
  'weapon-safety-questions': 'Вопросы БОО 2026.pdf',
  'security-questions': 'Методичка-ОХРАННИКИ-2023-4-6-разряд.pdf',
  'periodic-questions': 'ПЕРИОДИЧЕСКАЯ-ПРОВЕРКА-2023-4-6-разряд.pdf',

  // Документы — реальные имена из папки documents
  'charter': 'УСТАВ-СПЕЦЦЕНТР-2025.pdf',
  'license': 'лицензия.pdf',
  'self-assessment': 'Отчет о результатах самообследования за 2025.pdf',
  'privacy-policy': 'Политика в отношении ОПД ЧОУ ДПО СПЕЦЦЕНТР (апрель 2026).pdf',
  'attestation-regulation': 'положение-аттестация.pdf',
  'relationship-order': 'порядок-отношений.pdf',
  'transfer-regulation': 'порядок-перевода-отчисления.pdf',
  'internal-rules': 'правила распорядка.pdf',
  'study-schedule': 'приказ-1-5-режим-занятий.pdf',
  'admission-rules': 'приказ-4-1-правила-приема (2).pdf',

  // Образование — реальные имена из папки education
  'program-security-guard': 'Программа 2024 обучение охранников.pdf',
  'program-pk-security-guard': 'Программа 2024 ПК охранников.pdf',
  'program-detective-2019': 'Программа ДЕТЕКТИВ 2019.pdf',
  'program-detective': 'Программа ДЕТЕКТИВ.pdf',
  'program-pk-detective-2019': 'Программа ПК ДЕТЕКТИВ 2019.pdf',
  'program-pk-detective': 'Программа ПК ДЕТЕКТИВ.pdf',
  'program-pk-guard': 'Программа ПК Охранник.pdf',
  'program-special-comm': 'Программа подготовки работников Спецсвязи.pdf',
  'program-fgup-ohrana': 'Программа профессиональной подготовки работников ФГУП Охрана.pdf',
  'program-pk-ruk-chop': 'ПРОГРАММА-2021-ПК-рук-чоп (1).pdf',
  'program-ruk-chop': 'ПРОГРАММА-2021-рук-чоп (1).pdf',
  'program-boo': 'Программа-БОО-ред.2023 (1).pdf',
  'program-yur-lic': 'Программа-подготовки-ЮР.ЛИЦ-с-особыми-уставными-задачами (1).pdf',
  'study-plan': 'Учебный-план.pdf',

  // Основные сведения
  'basic-license': 'лицензия.pdf',

  // Платные услуги
  'paid-contract': 'договор-обучение.pdf',

  // Структура
  'teachers-council': 'положение-педсовет.pdf',
  'general-meeting': 'положение-собрание-работников.pdf',
};

// ─── Категории для админки ───────────────────────────────────

export const documentCategories: { id: string; label: string; documentIds: DocumentId[] }[] = [
  {
    id: 'documents',
    label: 'Документы',
    documentIds: [
      'charter',
      'license',
      'self-assessment',
      'privacy-policy',
      'attestation-regulation',
      'relationship-order',
      'transfer-regulation',
      'internal-rules',
      'study-schedule',
      'admission-rules',
    ],
  },
  {
    id: 'education',
    label: 'Образование',
    documentIds: [
      'program-security-guard',
      'program-pk-security-guard',
      'program-detective-2019',
      'program-detective',
      'program-pk-detective-2019',
      'program-pk-detective',
      'program-pk-guard',
      'program-special-comm',
      'program-fgup-ohrana',
      'program-pk-ruk-chop',
      'program-ruk-chop',
      'program-boo',
      'program-yur-lic',
      'study-plan',
    ],
  },
  {
    id: 'basic-info',
    label: 'Основные сведения',
    documentIds: ['basic-license'],
  },
  {
    id: 'paid-services',
    label: 'Платные услуги',
    documentIds: ['paid-contract'],
  },
  {
    id: 'structure',
    label: 'Структура',
    documentIds: ['teachers-council', 'general-meeting'],
  },
  {
    id: 'security',
    label: 'Безопасность',
    documentIds: ['periodic-questions', 'security-questions', 'weapon-safety-questions'],
  },
];
