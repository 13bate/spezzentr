// src/pages/EducationInfo/educationSectionsData.ts
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faBuilding,
  faSitemap,
  faFileLines,
  faGraduationCap,
  faUsers,
  faChalkboardUser,
  faWrench,
  faCreditCard,
  faChartLine,
  faBriefcase,
  faGift,
  faWheelchair,
  faGlobe,
  faStamp
} from '@fortawesome/free-solid-svg-icons';

export interface SectionData {
  id: string;
  title: string;
  subtitle: string;
  icon: IconDefinition;
  color?: string;
}

export const educationSectionsData: SectionData[] = [
  {
    id: 'basic-info',
    title: 'Основные сведения',
    subtitle: 'Дата создания, учредитель, адреса и контакты',
    icon: faBuilding,
    color: '#FE3B15'
  },
  {
    id: 'structure',
    title: 'Структура и органы управления',
    subtitle: 'Организационная структура и органы управления',
    icon: faSitemap,
    color: '#FE3B15'
  },
  {
    id: 'documents',
    title: 'Документы',
    subtitle: 'Устав, лицензии, локальные акты и отчеты',
    icon: faFileLines,
    color: '#FE3B15'
  },
  {
    id: 'education',
    title: 'Образование',
    subtitle: 'Программы обучения и учебные планы',
    icon: faGraduationCap,
    color: '#FE3B15'
  },
  {
    id: 'standards',
    title: 'Образовательные стандарты',
    subtitle: 'Федеральные образовательные стандарты',
    icon: faStamp,
    color: '#FE3B15'
  },
  {
    id: 'management',
    title: 'Руководство',
    subtitle: 'Директор и заместитель',
    icon: faUsers,
    color: '#FE3B15'
  },
  {
    id: 'teachers',
    title: 'Педагогический состав',
    subtitle: 'Квалифицированные преподаватели',
    icon: faChalkboardUser,
    color: '#FE3B15'
  },
  {
    id: 'facilities',
    title: 'Материально-техническое обеспечение',
    subtitle: 'Учебные классы и стрелковый тир',
    icon: faWrench,
    color: '#FE3B15'
  },
  {
    id: 'paidServices',
    title: 'Платные образовательные услуги',
    subtitle: 'Положение и договоры',
    icon: faCreditCard,
    color: '#FE3B15'
  },
  {
    id: 'finance',
    title: 'Финансово-хозяйственная деятельность',
    subtitle: 'Финансовые документы и отчеты',
    icon: faChartLine,
    color: '#FE3B15'
  },
  {
    id: 'vacancies',
    title: 'Вакантные места для приема',
    subtitle: 'Информация о вакантных местах',
    icon: faBriefcase,
    color: '#FE3B15'
  },
  {
    id: 'scholarships',
    title: 'Стипендии и иные виды материальной поддержки',
    subtitle: 'Стипендии и материальная поддержка',
    icon: faGift,
    color: '#FE3B15'
  },
  {
    id: 'accessibility',
    title: 'Доступная среда',
    subtitle: 'Условия для лиц с ограниченными возможностями',
    icon: faWheelchair,
    color: '#FE3B15'
  },
  {
    id: 'international',
    title: 'Международное сотрудничество',
    subtitle: 'Информация о международном сотрудничестве',
    icon: faGlobe,
    color: '#FE3B15'
  }
];
