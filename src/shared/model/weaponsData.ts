// src/pages/IntroShooting/data/weaponsData.ts

// Импорты для пистолетов
import pmImg from '../../assets/weapons/ПММ.webp'; // Пистолет Макарова
import yaryginImg from '../../assets/weapons/Викинг.webp'; // Пистолет Ярыгина (Викинг)
import glock17Gen4Img from '../../assets/weapons/Glock17Gen.4.webp'; // GLOСK 17

import cz85Img from '../../assets/weapons/CZ85.webp'; // CZ 85B
import revolverImg from '../../assets/weapons/Револьвер.webp'; // Револьвер ARMSCOR M200
import sigP226Img from '../../assets/weapons/Sig Sauer P226.webp'; // SIG SAUER P226
import colt1911Img from '../../assets/weapons/Colt1911.webp'; // COLT 1911
import ttImg from '../../assets/weapons/TT.webp'; // TT

// Импорты для карабинов
import vityazImg from '../../assets/weapons/Сайга9.webp'; // ПП ВИТЯЗЬ
import ppshImg from '../../assets/weapons/ППШ.webp'; // ППШ
import ak103Img from '../../assets/weapons/АК103.webp'; // АК-103
import rossiImg from '../../assets/weapons/Rossi.webp'; // ROSSI 92
import ar15Img from '../../assets/weapons/ar15.webp'; // AR-15
import mosinImg from '../../assets/weapons/Мосинка.webp'; // ВИНТОВКА МОСИНА
import svdImg from '../../assets/weapons/СВД.webp'; // СВД
// СВТ - нет фото, используем Сайга9 как временную или убираем

// Импорты для ружей
import shotgunImg from '../../assets/weapons/Помпа.webp'; // ПОМПОВОЕ РУЖЬЁ
import TGImg from "../../assets/weapons/TG.webp"

export const weaponsData = {
  pistols: [
    {
      name: 'Пистолет Макарова',
      caliber: '9х18',
      image: pmImg,
    },
    {
      name: 'Пистолет Ярыгина',
      caliber: '9х19',
      image: yaryginImg,
    },
    {
      name: 'GLOСK 17',
      caliber: '9х19',
      image: glock17Gen4Img,
    },
    {
      name: 'CZ 85B',
      caliber: '9х19',
      image: cz85Img,
    },
    {
      name: 'Револьвер ARMSCOR M200',
      caliber: '.38 Spl',
      image: revolverImg,
    },
    {
      name: 'SIG SAUER P226',
      caliber: '.40 S&W',
      image: sigP226Img,
    },
    {
      name: 'COLT 1911',
      caliber: '.45 ACP',
      image: colt1911Img,
    },
    {
      name: 'ТТ',
      caliber: '7,62х25',
      image: ttImg,
    }
  ],

  rifles: [
    {
      name: 'ПП ВИТЯЗЬ',
      caliber: '9х19',
      image: vityazImg,
    },
    {
      name: 'ППШ',
      caliber: '9х19',
      image: ppshImg,
    },
    {
      name: 'АК-103',
      caliber: '7,62х39',
      image: ak103Img,
    },
    {
      name: 'ROSSI 92',
      caliber: '.357 Magnum / .38 Spl',
      image: rossiImg,
    },
    {
      name: 'AR-15',
      caliber: '.223 Rem',
      image: ar15Img,
    },
    {
      name: 'ВИНТОВКА МОСИНА',
      caliber: '7,62х54R',
      image: mosinImg,
    },
    {
      name: 'СВД',
      caliber: '7,62х54R',
      image: svdImg,
    },
    {
      name: 'СВТ',
      caliber: '7,62х54R',
      image: null,
    }
  ],

  shotguns: [
    {
      name: 'ПОМПОВОЕ РУЖЬЁ',
      caliber: '12',
      image: shotgunImg,
    },
    {
      name: 'Ружьё гладкоствольное TG 1',
      caliber: '9х19',
      image: TGImg,
    }
  ]
};

// Для удобства - функция получения всего оружия
export const getAllWeapons = () => {
  return [
    ...weaponsData.pistols.map(w => ({ ...w, category: 'pistols' })),
    ...weaponsData.rifles.map(w => ({ ...w, category: 'rifles' })),
    ...weaponsData.shotguns.map(w => ({ ...w, category: 'shotguns' }))
  ];
};
