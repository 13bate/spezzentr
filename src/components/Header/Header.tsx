import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faPhone } from '@fortawesome/free-solid-svg-icons';
import style from './Header.module.scss';
import { getRouteSection } from './utils/getRouteSection';
import { PageHeaderNavBar } from '../PageHeaderNavBar/PageHeaderNavBar';

interface Props {
  className?: string;
  isHomeHeader?: boolean;
}

export const Header: React.FC<Props> = ({ className, isHomeHeader = false }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = window.location.pathname;
  const section = getRouteSection(pathname);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('menuOpen');
    } else {
      document.body.classList.remove('menuOpen');
    }

    return () => {
      document.body.classList.remove('menuOpen');
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className={clsx(style.header, className)}>
        {/* Логотип */}
        <Link to="/" className={style.logo} onClick={closeMobileMenu}>
          СПЕЦЦЕНТР
        </Link>

        {/* Десктопная навигация */}
        <div className={style.desktopNav}>
          <PageHeaderNavBar
            currentSection={section}
            pathname={pathname}
            isHomepage={isHomeHeader}
          />
        </div>

        {/* Десктоп контакты */}
        <div className={style.desktopContacts}>
          <a href="tel:+74951234567" className={style.phoneLink}>
            <FontAwesomeIcon icon={faPhone} className={style.phoneIcon} />
            <span>+7 (495) 123-45-67</span>
          </a>

          <Link to="/contacts" className={style.contactButton} onClick={closeMobileMenu}>
            <span>КАК НАС НАЙТИ?</span>
            <FontAwesomeIcon size="xs" icon={faChevronRight} />
          </Link>
        </div>

        {/* Бургер-кнопка */}
        <button
          className={clsx(style.burgerButton, mobileMenuOpen && style.open)}
          onClick={toggleMobileMenu}
          aria-label="Меню"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      {/* Мобильное меню */}
      <div className={clsx(style.mobileMenu, mobileMenuOpen && style.open)}>
        <div className={style.mobileNav}>
          <PageHeaderNavBar
            currentSection={section}
            pathname={pathname}
            isHomepage={isHomeHeader}
            mobile
            onItemClick={closeMobileMenu}
          />
        </div>

        <div className={style.mobileContacts}>
          <a href="tel:+74951234567" className={style.phoneLink} onClick={closeMobileMenu}>
            <FontAwesomeIcon icon={faPhone} className={style.phoneIcon} />
            <span>+7 (495) 123-45-67</span>
          </a>

          <Link to="/contacts" className={style.contactButton} onClick={closeMobileMenu}>
            <span>КАК НАС НАЙТИ?</span>
            <FontAwesomeIcon icon={faChevronRight} />
          </Link>
        </div>
      </div>

      {/* Оверлей */}
      {mobileMenuOpen && (
        <div
          className={style.overlay}
          onClick={closeMobileMenu}
        />
      )}
    </>
  );
};
