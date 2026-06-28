import pistol from '../../../assets/Glock17Gen.5.png';
import rifle from '../../../assets/АК103.png';
import shotgun from '../../../assets/Помпа.png';
import { weaponsData } from '../../../shared/model';


export const weapons = [
  {
    title: 'Пистолеты',
    count: weaponsData.pistols.length,
    image: pistol,
  },
  {
    title: 'Ружья',
    count: weaponsData.shotguns.length,
    image: shotgun,
  },
  {
    title: 'Карабины',
    count: weaponsData.rifles.length,
    image: rifle,
  },
];
