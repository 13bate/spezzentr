import style from "./HeroSection.module.scss"
import heroBackground from "../../assets/spezzenter/hero.jpg"
import patternImg from "../../assets/spezzenter/ab6c22b1-562f-4bc9-a9f2-97dfbe6b05bf.png"
import clsx from "clsx";
import { Button } from "../../shared/ui/Button";

import { Link } from "react-router";
import { heroContent } from "./model";

interface Props {
  className?: string;
}

export const HeroSection: React.FC<Props> = ({ className }) => {
  return (
    <div className={clsx(className, style.heroSection)}>
      {/* Левая колонка с паттерном */}
      <div className={style.patternContainer}>
        <img className={style.patternImg} src={patternImg} alt="pattern" />
        <div className={style.patternOverlay}>
          <span>{heroContent.patternText}</span>
        </div>
      </div>

      {/* Правая колонка с фоном и контентом */}
      <div className={style.bgContainer}>
        <img className={style.heroBackground} src={heroBackground} alt="background" />
        <div className={style.heroContent}>
          <h1 className={style.heroTitle}>
            {heroContent.title.main}
            <span>{heroContent.title.highlighted}</span>
          </h1>

          <p className={style.heroParagraph}>
            {heroContent.description}
          </p>

          <div className={style.buttons}>
            <Link to={heroContent.buttons.primary.link}>
              <Button>
                {heroContent.buttons.primary.text}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
