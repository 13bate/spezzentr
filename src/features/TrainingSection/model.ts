// features/TrainingSection/model.ts
import type { CardItem } from '../../shared/ui/DarkCardList/types';

export const trainingCardsData: CardItem[] = [
  {
    id: 't1',
    label: 'Обучение на гражданское оружие',
    href: '/training/civilian',
    description:
      'Обучение и итоговая аттестация для приобретения гражданского оружия',
    color: 'red',
  },
  {
    id: 't2',
    label: 'Обучение частных охранников',
    href: '/training/security',
    description: 'Профессиональное обучение охранников 4-6 разрядов',
    color: 'blue',
  },
  {
    id: 't3',
    label: 'Периодическая проверка охранников',
    href: '/training/security-check',
    description:
      'Проверка работников частных охранных организаций и юридических лиц',
    color: 'green',
  },
  {
    id: 't4',
    label: 'Подготовка руководителей охранных организаций',
    href: '/training/security-managers',
    description:
      'Программы повышения квалификации руководителей частных охранных организаций',
    color: 'gold',
  },
  {
    id: 't5',
    label: 'Обучение телохранителей',
    href: '/training/bodyguard',
    description:
      'Программа повышения квалификации – защита жизни и здоровья физических лиц',
    color: 'red',
  },
  {
    id: 't6',
    label: 'Обучение операторов БПЛА',
    href: '/training/drone',
    description:
      'Пилотирование, противодействие и техническое обслуживание БАС',
    color: 'blue',
  },
  {
    id: 't7',
    label: 'Охрана труда',
    href: '/training/occupational-safety',
    description:
      'Обучение и проверка знаний требований охраны труда для руководителей и специалистов',
    color: 'green',
  },
  {
    id: 't8',
    label: 'Обучение рабочим специальностям',
    href: '/training/working-professions',
    description:
      'Профессиональная подготовка и переподготовка по рабочим профессиям с выдачей документа',
    color: 'gold',
  },
];
