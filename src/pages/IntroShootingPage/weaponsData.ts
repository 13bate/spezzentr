// src/pages/IntroShooting/data/weaponsData.ts

// Импорты для пистолетов
import pmImg from '../../assets/weapons/ПММ.jpg'; // Пистолет Макарова
import yaryginImg from '../../assets/weapons/Викинг.jpg'; // Пистолет Ярыгина (Викинг)
import glock17Gen4Img from '../../assets/weapons/Glock17Gen.4.jpg'; // GLOСK 17

import cz85Img from '../../assets/weapons/CZ85.jpg'; // CZ 85B
import revolverImg from '../../assets/weapons/Револьвер.jpg'; // Револьвер ARMSCOR M200
import sigP226Img from '../../assets/weapons/Sig Sauer P226.jpg'; // SIG SAUER P226
import colt1911Img from '../../assets/weapons/Colt1911.jpg'; // COLT 1911
import ttImg from '../../assets/weapons/TT.jpg'; // TT

// Импорты для карабинов
import vityazImg from '../../assets/weapons/ВикингМ.jpg'; // ПП ВИТЯЗЬ
import ppshImg from '../../assets/weapons/ППШ.jpg'; // ППШ
import ak103Img from '../../assets/weapons/АК103.jpg'; // АК-103
import rossiImg from '../../assets/weapons/Rossi.jpg'; // ROSSI 92
import ar15Img from '../../assets/weapons/ar15.jpeg'; // AR-15
import mosinImg from '../../assets/weapons/Мосинка.jpg'; // ВИНТОВКА МОСИНА
import svdImg from '../../assets/weapons/СВД.jpg'; // СВД
// СВТ - нет фото, используем Сайга9 как временную или убираем

// Импорты для ружей
import shotgunImg from '../../assets/weapons/Помпа.jpg'; // ПОМПОВОЕ РУЖЬЁ
import TGImg from "../../assets/weapons/TG.jpg"

export const weaponsData = {
  pistols: [
    {
      name: 'Пистолет Макарова',
      caliber: '9х18',
      price: 80,
      minShots: 10,
      image: pmImg,
      description: 'Легендарный пистолет, состоящий на вооружении с 1951 года.'
    },
    {
      name: 'Пистолет Ярыгина',
      caliber: '9х19',
      price: 100,
      minShots: 10,
      image: yaryginImg,
      description: 'Современный армейский пистолет, отличается эргономичностью.'
    },
    {
      name: 'GLOСK 17',
      caliber: '9х19',
      price: 100,
      minShots: 10,
      image: glock17Gen4Img,
      description: 'Австрийский пистолет, популярный во всем мире благодаря надежности.'
    },
    {
      name: 'GLOСK 17 optic',
      caliber: '9х19',
      price: 100,
      minShots: 10,
      image: glock17Gen4Img, // Используем Gen.5 как версию с оптикой
      description: 'Версия Glock 17 с установленной оптикой для прицеливания.'
    },
    {
      name: 'CZ 85B',
      caliber: '9х19',
      price: 100,
      minShots: 10,
      image: cz85Img,
      description: 'Чешский пистолет с отличным балансом и точностью боя.'
    },
    {
      name: 'Револьвер ARMSCOR M200',
      caliber: '.38 Spl',
      price: 150,
      minShots: 6,
      image: revolverImg,
      description: 'Надежный револьвер под патрон .38 Special.'
    },
    {
      name: 'SIG SAUER P226',
      caliber: '.40 S&W',
      price: 120,
      minShots: 10,
      image: sigP226Img,
      description: 'Пистолет, стоящий на вооружении спецподразделений по всему миру.'
    },
    {
      name: 'COLT 1911',
      caliber: '.45 ACP',
      price: 120,
      minShots: 10,
      image: colt1911Img,
      description: 'Легендарный американский пистолет, конструкция 1911 года.'
    },
    {
      name: 'ТТ',
      caliber: '7,62х25',
      price: 140,
      minShots: 10,
      image: ttImg,
      description: 'Тульский Токарева — советский самозарядный пистолет.'
    }
  ],

  rifles: [
    {
      name: 'ПП ВИТЯЗЬ',
      caliber: '9х19',
      price: 100,
      minShots: 10,
      image: vityazImg,
      description: 'Российский пистолет-пулемет, компактный и удобный.'
    },
    {
      name: 'ППШ',
      caliber: '9х19',
      price: 100,
      minShots: 10,
      image: ppshImg,
      description: 'Легендарный пистолет-пулемет Шпагина.'
    },
    {
      name: 'АК-103',
      caliber: '7,62х39',
      price: 110,
      minShots: 10,
      image: ak103Img,
      description: 'Современный автомат Калашникова под патрон 7.62 мм.'
    },
    {
      name: 'ROSSI 92',
      caliber: '.357 Magnum / .38 Spl',
      price: 150,
      minShots: 5,
      image: rossiImg,
      description: 'Карабин винтовочного типа с рычажным взведением.'
    },
    {
      name: 'AR-15',
      caliber: '.223 Rem',
      price: 115,
      minShots: 10,
      image: ar15Img,
      description: 'Американская винтовка, одна из самых популярных в мире.'
    },
    {
      name: 'ВИНТОВКА МОСИНА',
      caliber: '7,62х54R',
      price: 200,
      minShots: 5,
      image: mosinImg,
      description: 'Легендарная русская трехлинейка.'
    },
    {
      name: 'СВД',
      caliber: '7,62х54R',
      price: 200,
      minShots: 5,
      image: svdImg,
      description: 'Снайперская винтовка Драгунова.'
    }

  ],

  shotguns: [
    {
      name: 'ПОМПОВОЕ РУЖЬЁ',
      caliber: '12',
      price: 240,
      minShots: 5,
      image: shotgunImg,
      description: 'Надежное помповое ружье 12 калибра.'
    },
    {
      name: 'Ружьё гладкоствольное TG 1',
      caliber: '9х19',
      price: 110,
      minShots: 10,
      image: TGImg,
      description: 'Тренировочный/газовый пистолет для отработки навыков.'
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
