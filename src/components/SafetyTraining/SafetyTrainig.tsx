import React from 'react';
import { Link } from 'react-router';
import clsx from 'clsx';

import style from './SafetyTrainig.module.scss';

import gunImage from "../../assets/spezzenter/scale_1200.jpg"
import patternImg from '../../assets/spezzenter/ab6c22b1-562f-4bc9-a9f2-97dfbe6b05bf.png';
import { safetyTrainingContent } from './model';
import { Button } from '../../shared/ui/Button';

interface Props {
  className?: string;
}

export const SafetyTraining: React.FC<Props> = ({ className }) => {
  return (
    <section className={clsx(className, style.safetyTraining)}>
      <div className={style.content}>
        <span className={style.badge}>🛡️ Для начинающих</span>

        <h2 className={style.title}>{safetyTrainingContent.title}</h2>

        <p className={style.description}>{safetyTrainingContent.description}</p>

        <ul className={style.highlightsList}>
          {safetyTrainingContent.highlights.map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>

        <div className={style.infoRow}>
          <div className={style.price}>
            {safetyTrainingContent.price}
            <span>/курс</span>
          </div>
          <div className={style.duration}>
            {safetyTrainingContent.duration}
          </div>
          <div className={style.format}>
            {safetyTrainingContent.format}
          </div>
        </div>

        <div className={style.buttonWrapper}>
          <Link to={safetyTrainingContent.buttonLink}>
            <Button>
              {safetyTrainingContent.buttonText}
            </Button>
          </Link>
        </div>
      </div>

      <div className={style.mediaContainer}>
        <img
          src={gunImage}
          alt="Безопасное обращение с оружием"
          className={style.mainImage}
        />
        <img
          src={patternImg}
          alt=""
          className={style.patternImage}
          aria-hidden="true"
        />
      </div>
    </section>
  );
};
