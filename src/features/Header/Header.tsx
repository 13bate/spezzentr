import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import style from "./Header.module.scss";
import { NavBar } from "../NavBar";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add("menuOpen");
    } else {
      document.body.classList.remove("menuOpen");
    }

    return () => {
      document.body.classList.remove("menuOpen");
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const scrollToContacts = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    // If NOT on home page → navigate
    if (location.pathname !== "/") {
      navigate("/#contacts");
      return;
    }

    // Already on home → scroll
    const contactsSection = document.getElementById("contacts");

    if (contactsSection) {
      const headerHeight = 80;

      const elementPosition =
        contactsSection.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: elementPosition - headerHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header
        className={clsx(
          style.header,
          className,
          scrolled && style.scrolled,
          mobileMenuOpen && style.menuOpen
        )}
      >
        <div className={style.headerContainer}>
          <Link to="/" className={style.logo} onClick={closeMobileMenu}>
            СПЕЦ<span>ЦЕНТР</span>
          </Link>

          <div className={style.desktopNav}>
            <NavBar />
          </div>

          <div className={style.desktopContacts}>
            <a
              href="/#contacts"
              className={style.contactButton}
              onClick={scrollToContacts}
            >
              <span>Контакты</span>
              <FontAwesomeIcon icon={faChevronRight} />
            </a>
          </div>

          <button
            className={clsx(style.burgerButton, mobileMenuOpen && style.open)}
            onClick={toggleMobileMenu}
            aria-label="Меню"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <div className={clsx(style.mobileMenu, mobileMenuOpen && style.open)}>
        <div className={style.mobileMenuHeader}>
          <Link to="/" className={style.mobileLogo} onClick={closeMobileMenu}>
            СПЕЦЦЕНТР
          </Link>

          <button className={style.closeButton} onClick={closeMobileMenu}>
            ✕
          </button>
        </div>

        <div className={style.mobileNav}>
          <NavBar onItemClick={closeMobileMenu} />
        </div>

        <div className={style.mobileContacts}>
          <a
            href="tel:+74832320201"
            className={style.mobilePhone}
            onClick={closeMobileMenu}
          >
            <span className={style.mobilePhoneIcon}>📞</span>

            <div className={style.mobilePhoneText}>
              <span className={style.mobilePhoneLabel}>Позвоните нам</span>
              <span className={style.mobilePhoneNumber}>
                +7 (4832) 32-02-01
              </span>
            </div>
          </a>

          <a
            href="/#contacts"
            className={style.mobileContactButton}
            onClick={scrollToContacts}
          >
            <span>Контакты</span>
            <FontAwesomeIcon icon={faChevronRight} />
          </a>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className={style.overlay} onClick={closeMobileMenu} />
      )}
    </>
  );
};
