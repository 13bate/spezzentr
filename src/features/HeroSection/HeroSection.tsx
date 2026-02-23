import style from "./HeroSection.module.scss"
import patternImg from "../../assets/spezzenter/ab6c22b1-562f-4bc9-a9f2-97dfbe6b05bf.png"
import clsx from "clsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { Link } from "react-router";
import { heroContent } from "./model";

interface Props {
  className?: string;
}

export const HeroSection: React.FC<Props> = ({ className }) => {
  return (
    <div className={clsx(className, style.heroSection)}>
      {/* Акцентные линии */}
      <div className={`${style.accentLine} ${style.vertical}`} />
      <div className={`${style.accentLine} ${style.horizontal}`} />

      {/* Левая колонка с паттерном */}
      <div className={style.patternContainer}>
        <img className={style.patternImg} src={patternImg} alt="pattern" />
        <div className={style.patternOverlay}>
          <span>{heroContent.patternText}</span>
        </div>
      </div>

      {/* Правая колонка с CSS-фоном */}
      <div className={style.bgContainer}>
        <div className={style.heroBackground} />

        {/* Динамические световые линии */}
        <div className={style.lightLines}>
          {[...Array(8)].map((_, i) => (
            <span key={i} />
          ))}
        </div>

        {/* Парящие частицы */}
        <div className={style.particles}>
          {[...Array(30)].map((_, i) => (
            <span key={i} />
          ))}
        </div>

        <div className={style.heroContent}>
          <h1 className={style.heroTitle}>
            {heroContent.title.main}
            <span>{heroContent.title.highlighted}</span>
          </h1>

          <p className={style.heroParagraph}>
            {heroContent.description}
          </p>

          {/* Кнопка справа */}
          <div className={style.buttonContainer}>
            <Link to={heroContent.buttons.primary.link} className={style.glassButton}>
              <span>{heroContent.buttons.primary.text}</span>
              <FontAwesomeIcon icon={faArrowRight} className={style.buttonArrow} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
