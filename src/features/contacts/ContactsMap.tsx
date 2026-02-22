import React, { useState } from 'react';
import style from './ContactsMap.module.scss';

interface Props {
  className?: string;
  address?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  zoom?: number;
}

export const ContactsMap: React.FC<Props> = ({
  className,
  address = 'г. Брянск, ул. Институтская, д. 15 корп. 3',
  coordinates = { lat: 53.304506, lng: 34.302618 },
  zoom = 16
}) => {

  const [isLoading, setIsLoading] = useState(true);

  const mapUrl = `https://yandex.ru/map-widget/v1/?ll=${coordinates.lng}%2C${coordinates.lat}&z=${zoom}&pt=${coordinates.lng}%2C${coordinates.lat},pmwtm1&l=map`;

  return (
    <div className={`${style.mapContainer} ${className || ''}`}>
      {isLoading && <div className={style.mapLoader}>Загрузка карты...</div>}

      <iframe
        src={mapUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        title={`Карта: ${address}`}
        loading="lazy"
        onLoad={() => setIsLoading(false)}
        allowFullScreen
      />

      <div className={style.mapAddress}>
        {address}
      </div>
    </div>
  );
};
