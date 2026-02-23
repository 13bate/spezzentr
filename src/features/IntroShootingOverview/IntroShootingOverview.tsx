import clsx from "clsx"
import style from "./IntroShootingOverview.module.scss"

import introShootingImg from "../../assets/spezzenter/intro-shooting.jpg"
import { Button } from "../../shared/ui/Button";
import { introShootingContent } from "./IntroShootingData";
import { Link } from "react-router";

interface Props {
  className?: string;
}

export const IntroShootingOverview: React.FC<Props> = ({ className }) => {
  return (
    <section className={clsx(className, style.introShooting)}>
      <div className={style.cardContainer}>
        <div className={style.cardGrid}>
          {/* Контент */}
          <div className={style.content}>
            <h2 className={style.title}>{introShootingContent.title}</h2>

            <p className={style.description}>{introShootingContent.description}</p>

            <ul className={style.highlightsList}>
              {introShootingContent.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>

            <div className={style.buttonWrapper}>
              <Link to={introShootingContent.buttonLink}>
                <Button>
                  {introShootingContent.buttonText}
                </Button>
              </Link>
            </div>
          </div>

          {/* Медиа с WOW эффектами */}
          <div className={style.mediaContainer}>
            <div className={style.glassSphere1} />
            <div className={style.glassSphere2} />
            <div className={style.glassSphere3} />
            <div className={style.patternImage} />

            {/* Парящие частицы */}
            <div className={style.floatingParticles}>
              {[...Array(10)].map((_, i) => (
                <span key={i} />
              ))}
            </div>

            <img
              src={introShootingImg}
              alt="Ознакомительная стрельба"
              className={style.mainImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
