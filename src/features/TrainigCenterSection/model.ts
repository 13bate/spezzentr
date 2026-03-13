export interface CourseItem {
  id: string
  tag: string
  title: string
  description: string
  highlights: string[]
  price: string
  duration: string

  buttonText: string
  buttonLink: string
  accent: string // per-card accent color
}

export const courses: CourseItem[] = [
  {
    id: 'civil-weapon',
    tag: 'Гражданское',
    title: 'Обучение на гражданское оружие',
    description: 'Теория, практика на тренажёрах и стрельбище под руководством опытных инструкторов.',
    highlights: ['Правовая подготовка', 'Огневая подготовка', 'Итоговая аттестация'],
    price: '6 000 ₽',
    duration: '6 часов',
    buttonText: 'Записаться',
    buttonLink: '/training/civil-weapon',
    accent: '#FE3B15',
  },
  {
    id: 'security-guard',
    tag: 'Охранники',
    title: 'Обучение частных охранников',
    description: 'Профессиональная подготовка охранников 4–6 разряда с выдачей удостоверения.',
    highlights: ['Правовой минимум', 'Тактическая подготовка', 'Квалификационный экзамен'],
    price: '12 000 ₽',
    duration: '2 недели',
    buttonText: 'Записаться',
    buttonLink: '/training/security-guard',
    accent: '#1A1A2E',
  },
  {
    id: 'guard-check',
    tag: 'Аттестация',
    title: 'Периодическая проверка охранников',
    description: 'Обязательная периодическая проверка для действующих частных охранников.',
    highlights: ['Правовая часть', 'Огневая подготовка', 'Физическая подготовка'],
    price: '4 500 ₽',
    duration: '1 день',
    buttonText: 'Записаться',
    buttonLink: '/training/guard-check',
    accent: '#FE3B15',
  },
  {
    id: 'drones',
    tag: 'БПЛА',
    title: 'Обучение операторов БПЛА',
    description: 'Подготовка сертифицированных операторов беспилотных воздушных судов.',
    highlights: ['Теория полётов', 'Симулятор и практика', 'Сертификат оператора'],
    price: '18 000 ₽',
    duration: '3 дня',
    buttonText: 'Записаться',
    buttonLink: '/trainning/drones',
    accent: '#0A2540',
  },
  {
    id: 'labor-safety',
    tag: 'Охрана труда',
    title: 'Охрана труда',
    description: 'Обучение и проверка знаний требований охраны труда для руководителей и специалистов.',
    highlights: ['Нормативная база', 'Производственный контроль', 'Удостоверение'],
    price: '3 500 ₽',
    duration: '40 часов',
    buttonText: 'Записаться',
    buttonLink: '/training/labor-safety',
    accent: '#FE3B15',
  },
  {
    id: 'professions',
    tag: 'Рабочие специальности',
    title: 'Обучение рабочим специальностям',
    description: 'Профессиональная подготовка и переподготовка по рабочим профессиям с выдачей документа.',
    highlights: ['Теоретический курс', 'Производственная практика', 'Диплом / свидетельство'],
    price: 'от 5 000 ₽',
    duration: 'от 1 месяца',
    buttonText: 'Записаться',
    buttonLink: '/training/professions',
    accent: '#1A1A2E',
  },
]

