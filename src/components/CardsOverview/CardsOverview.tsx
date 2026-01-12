import style from "./CardsOverview.module.scss"
import type { ICardList } from "./model/cardsList";
import clsx from "clsx";
import { TitleWithLine } from "../../shared/ui/TitleWithLineLeft";
import { Link } from "react-router-dom"
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

interface Props {
  className?: string;
  title: string;
  cardsData: ICardList;
}

export const CardsOverview: React.FC<Props> = ({ className, title, cardsData }) => {

  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  const handleMouseEnter = (id: string) => {
    setActiveCardId(id);
  };

  const handleMouseLeave = () => {
    setActiveCardId(null);
  };


  return (
    <div className={clsx(className, style.container)}>
      <TitleWithLine title={title} />
      <div className={style.blocksContainer}>
        {cardsData.map(cardItem => (
          <div
            key={cardItem.id}
            onMouseEnter={() => handleMouseEnter(cardItem.id)}
            onMouseLeave={handleMouseLeave}
            className={clsx(style.blocksItem, activeCardId === cardItem.id && style.isHovered)}
          >
            <Link to={cardItem.href}>
              <img
                src={cardItem.imageHref}
                className={style.blocksItemPhoto}
                alt={cardItem.label}
              />
              <div className={style.CardBottomPartContainer}>
                <div className={style.blocksItemLabel}>{cardItem.label}</div>
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
