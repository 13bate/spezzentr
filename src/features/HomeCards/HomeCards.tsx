import style from "./HomeCards.module.scss"
import type { ICardList } from "./model/cardsList";
import clsx from "clsx";

import { Link } from "react-router-dom"
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faGun,
  faGift,
  faBullseye,
  faUserShield,
  faMicrochip,
  faClipboardCheck
} from "@fortawesome/free-solid-svg-icons";

// Маппинг иконок для разных типов карточек


interface Props {
  className?: string;
  title: string;
  cardsData: ICardList;
}

export const HomeCards: React.FC<Props> = ({ className, title, cardsData }) => {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);


  const handleMouseEnter = (id: string) => {
    setActiveCardId(id);
  };

  const handleMouseLeave = () => {
    setActiveCardId(null);
  };



  // Функция для получения иконки по типу карточки
  const getCardIcon = (cardId: string) => {
    // Можно определить тип по id или добавить поле type в ICardList
    if (cardId.includes('practive')) return faBullseye;
    if (cardId.includes('intro')) return faGun;
    if (cardId.includes("gift-cards")) return faGift;
    if (cardId.includes("safety")) return faGun;
    if (cardId.includes("security-guards")) return faUserShield;
    if (cardId.includes("drones")) return faMicrochip;
    if (cardId.includes("periodic-checks")) return faClipboardCheck;
    return faBullseye;
  };

  return (
    <div className={clsx(className, style.cardsOverview)}>
      {/* <TitleWithLine title={title} /> */}

      {cardsData.length > 0 ? (
        <div className={style.cardsContainer}>
          {cardsData.map((cardItem, index) => (
            <div
              key={cardItem.href}
              onMouseEnter={() => handleMouseEnter(cardItem.href)}
              onMouseLeave={handleMouseLeave}
              className={style.cardItem}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Link className={style.cardItemLink} to={cardItem.href}>
                {/* Иконка */}
                <FontAwesomeIcon
                  icon={getCardIcon(cardItem.href)}
                  className={style.cardIcon}
                />

                {/* Заголовок */}
                <div className={style.cardLabel}>
                  {cardItem.label}
                </div>

                {/* Описание */}
                <p className={style.cardDescription}>
                  {cardItem.description}
                </p>

                {/* Кнопка */}
                <button
                  className={clsx(
                    style.cardButton,
                    activeCardId === cardItem.href && style.isHovered
                  )}
                  type="button"
                >
                  <span>Узнать больше</span>
                  <FontAwesomeIcon
                    className={style.cardChevron}
                    icon={faChevronRight}
                  />
                </button>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className={style.noCards}>
          <p>Нет доступных карточек</p>
        </div>
      )}
    </div>
  );
};
