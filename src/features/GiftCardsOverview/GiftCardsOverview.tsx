import { Link } from 'react-router';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi, faGift, faClock } from '@fortawesome/free-solid-svg-icons'; // удалил faCreditCard

import style from './GiftCardsOverview.module.scss';

import { giftCardsContent } from './model';
import { Button } from '../../shared/ui/Button';

interface Props {
  className?: string;
}

export const GiftCardsOverview: React.FC<Props> = ({ className }) => {
  const features = [
    { icon: faGift, text: 'Любой номинал' },
    { icon: faClock, text: '12 месяцев' },
    { icon: faWifi, text: 'Мгновенно' }
  ];

  return (
    <section className={clsx(className, style.giftCards)}>
      <div className={style.cardContainer}>
        <div className={style.cardGrid}>
          {/* Контент */}
          <div className={style.content}>
            <h2 className={style.title}>
              Подарочные
              <span>сертификаты</span>
            </h2>

            <p className={style.description}>
              {giftCardsContent.description}
            </p>

            <div className={style.features}>
              {features.map((feature, index) => (
                <div key={index} className={style.feature}>
                  <FontAwesomeIcon icon={feature.icon} className={style.featureIcon} />
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>

            <div className={style.buttonWrapper}>
              <Link to={giftCardsContent.buttonLink}>
                <Button>
                  {giftCardsContent.buttonText}
                </Button>
              </Link>
            </div>
          </div>

          {/* Платежная карта */}
          <div className={style.cardVisual}>
            <div className={style.card}>
              <div className={style.cardChip}></div>
              <div className={style.cardContactless}>
                <FontAwesomeIcon icon={faWifi} />
              </div>

              <div className={style.cardNumber}>
                1234 <span>****</span> **** <span>5678</span>
              </div>

              <div className={style.cardInfo}>
                <div className={style.cardHolder}>
                  <div className={style.label}>Card Holder</div>
                  <div className={style.name}>SPEZZENTER</div>
                </div>
                <div className={style.cardExpiry}>
                  <div className={style.label}>Valid Thru</div>
                  <div className={style.date}>12/26</div>
                </div>
              </div>

              <div className={style.cardLogo}>СПЕЦЦЕНТР</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
