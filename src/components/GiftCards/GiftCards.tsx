import React from 'react';
import { Link } from 'react-router';
import clsx from 'clsx';

import style from './GiftCards.module.scss';

import giftCardImg from '../../assets/spezzenter/gift-cards.jpg';
import { giftCardsContent } from './model';
import { Button } from '../../shared/ui/Button';

interface Props {
  className?: string;
}

export const GiftCards: React.FC<Props> = ({ className }) => {
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
        <img
          src={giftCardImg}
          alt="Подарочный сертификат"
          className={style.mainImage}
        />
      </div>
    </section>
  );
};
