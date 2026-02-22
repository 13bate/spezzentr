type WeaponCategory = import type { weaponsData } from './model';
'all' | 'pistols' | 'rifles' | 'shotguns';

export const weaponsData = {
  pistols: [
    { name: 'Пистолет Макарова', caliber: '9х18', price: 80, minShots: 10, image: '🔫' },
    { name: 'Пистолет Ярыгина', caliber: '9х19', price: 100, minShots: 10, image: '🔫' },
    { name: 'GLOСK 17', caliber: '9х19', price: 100, minShots: 10, image: '🔫' },
    { name: 'GLOСK 17 optic', caliber: '9х19', price: 100, minShots: 10, image: '🎯' },
    { name: 'CZ 85B', caliber: '9х19', price: 100, minShots: 10, image: '🔫' },
    { name: 'Револьвер ARMSCOR M200', caliber: '.38 Spl', price: 150, minShots: 6, image: '🔫' },
    { name: 'SIG SAUER P226 .40', caliber: '.40 S&W', price: 120, minShots: 10, image: '🔫' },
    { name: 'COLT 1911', caliber: '.45 ACP', price: 120, minShots: 10, image: '🔫' },
    { name: 'TT', caliber: '7,62х25', price: 140, minShots: 10, image: '🔫' }
  ],
  rifles: [
    { name: 'ПП ВИТЯЗЬ', caliber: '9х19', price: 100, minShots: 10, image: '🔫' },
    { name: 'ППШ', caliber: '9х19', price: 100, minShots: 10, image: '🔫' },
    { name: 'АК-103', caliber: '7,62х39', price: 110, minShots: 10, image: '🔫' },
    { name: 'ROSSI 92', caliber: '.357 Magnum / .38 Spl', price: 150, minShots: 5, image: '🔫' },
    { name: 'AR-15', caliber: '.223 Rem', price: 115, minShots: 10, image: '🔫' },
    { name: 'ВИНТОВКА МОСИНА', caliber: '7,62х54R', price: 200, minShots: 5, image: '🔫' },
    { name: 'СВД', caliber: '7,62х54R', price: 200, minShots: 5, image: '🔫' },
    { name: 'СВТ', caliber: '7,62х54R', price: 200, minShots: 5, image: '🔫' }
  ],
  shotguns: [
    { name: 'ПОМПОВОЕ РУЖЬЁ', caliber: '12', price: 240, minShots: 5, image: '🔫' }
  ]
};
