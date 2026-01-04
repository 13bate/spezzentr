import { Link } from "react-router"
import style from "./TrainningCenterOverview.module.scss"
import clsx from "clsx"
import { trainingCenterCardsData } from "./model"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

interface Props {
  className?: string
}

export const TrainnigCenterOverview: React.FC<Props> = ({ className }) => {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  const handleMouseEnter = (id: string) => {
    setActiveCardId(id);
  };

  const handleMouseLeave = () => {
    setActiveCardId(null);
  };

  return (
    <div className={clsx(className, style.container)}>
      <div className={style.titleContainer}>
        <span className={style.titleLine}></span>
        <h2 className={style.title}>Услуги учебного центра</h2>
      </div>
      <div className={style.blocksContainer}>
        {trainingCenterCardsData.map(tccItem => (
          <div
            key={tccItem.id}
            onMouseEnter={() => handleMouseEnter(tccItem.id)}
            onMouseLeave={handleMouseLeave}
            className={clsx(style.blocksItem, activeCardId === tccItem.id && style.isHovered)}
          >
            <Link to={tccItem.href}>
              <img
                src={tccItem.imageHref}
                className={style.blocksItemPhoto}
                alt={tccItem.label}
              />
              <div className={style.CardBottomPartContainer}>
                <div className={style.blocksItemLabel}>{tccItem.label}</div>
                <div>
                  <button
                    className={style.bottomPartButton}
                    type="button"
                  >
                    Узнать больше
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className={style.bottomPartChevron}
                    />
                  </button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
