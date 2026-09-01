/* eslint-disable react-hooks/set-state-in-effect */

import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
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
  const [isInteractive, setIsInteractive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // ✅ Используем useLayoutEffect для синхронного обновления
  useLayoutEffect(() => {
    if (isMobile) {
      setIsInteractive(false);
    }
  }, [isMobile]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (isMobile) return;
      if (mapRef.current && !mapRef.current.contains(event.target as Node)) {
        setIsInteractive(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMobile]);

  const mapUrl = `https://yandex.ru/map-widget/v1/?ll=${coordinates.lng}%2C${coordinates.lat}&z=${zoom}&pt=${coordinates.lng}%2C${coordinates.lat},pmwtm1&l=map`;

  const handleMapClick = () => {
    if (isMobile) return;
    setIsInteractive(true);
  };

  return (
    <div
      ref={mapRef}
      className={`${style.mapContainer} ${className || ''} ${isInteractive ? style.interactive : ''
        } ${isMobile ? style.mobile : ''}`}
      onClick={handleMapClick}
    >
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
        className={style.mapIframe}
        scrolling="no"
      />

      <div className={style.mapAddress}>
        <span>{address}</span>
      </div>

      {!isInteractive && !isMobile && (
        <div className={style.mapOverlay}>
          <span>Нажмите, чтобы управлять картой</span>
        </div>
      )}

      {isMobile && (
        <div className={style.mobileOverlay}>
          <span>📍</span>
          <p>Нажмите, чтобы открыть карту в приложении</p>
        </div>
      )}
    </div>
  );
};
