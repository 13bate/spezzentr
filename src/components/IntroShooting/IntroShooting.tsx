import clsx from "clsx"
import style from "./IntroShooting.module.scss"

import introShootingImg from "../../assets/spezzenter/intro-shooting.jpg"
import patternImg from "../../assets/spezzenter/ab6c22b1-562f-4bc9-a9f2-97dfbe6b05bf.png"
import { Button } from "../../shared/ui/Button";
import { introShootingContent } from "./IntroShootingData";
import { Link } from "react-router";


interface Props {
  className?: string;
}

export const IntroShooting: React.FC<Props> = ({ className }) => {
  return (
    <section className={clsx(className, style.introShooting)}>
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

      <div className={style.mediaContainer}>
        <img
          src={introShootingImg}
          alt="Ознакомительная стрельба"
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
