import { Link } fromimport React from 'react';
import { Link } from 'react-router';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faWifi } from '@fortawesome/free-solid-svg-icons';

import style from './GiftCardsOverview.module.scss';

import giftCardImg from '../../assets/spezzenter/gift-cards.jpg';
import { giftCardsContent } from './model';
import { Button } from '../../shared/ui/Button';

interface Props {
  className?: string;
}

export const GiftCardsOverview: React.FC<Props> = ({ className }) => {
  return (
    <section className={clsx(className, style.giftCards)}>
      <div className={style.content}>
        <span className={style.badge}>🎁 Идеальный подарок</span>

        <h2 className={style.title}>{giftCardsContent.title}</h2>

        <p className={style.description}>{giftCardsContent.description}</p>

        <div className={style.buttonWrapper}>
          <Link to={giftCardsContent.buttonLink}>
            <Button>
              {giftCardsContent.buttonText}
            </Button>
          </Link>
        </div>
      </div>

      <div className={style.mediaContainer}>
        {/* Декоративные элементы карты */}
        <div className={style.decorChip}></div>
        <div className={style.decorNumber}>
          **** <span>****</span> **** <span>1234</span>
        </div>
        <div className={style.decorContactless}>
          <FontAwesomeIcon icon={faWifi} />
        </div>

        {/* Основное изображение */}
        <img
          src={giftCardImg}
          alt="Подарочный сертификат"
          className={style.mainImage}
        />
      </div>
    </section>
  );
};
