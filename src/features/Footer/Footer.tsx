import style from "./Footer.module.scss";
import clsx from "clsx";
import { Link } from "react-router-dom";
import vkLogo from "../../assets/spezzenter/vkLogo.png";

// Banner imports
import eaisBanner from "../../assets/spezzenter/weapons_cluster.png";
import minobrBanner from "../../assets/spezzenter/min_obr_nauki_logo.jpeg";
import minprosvBanner from "../../assets/spezzenter/min_prosv.jpeg";

import { trainingCenter, shootingRange } from "../../shared/utils/model";

interface Props {
  className?: string;
}

export const Footer: React.FC<Props> = ({ className }) => {
  return (
    <footer className={clsx(className, style.footer)}>
      <div className={style.contentContainer}>
        {/* Логотип текстом */}
        <div className={style.logo}>
          СПЕЦЦЕНТР
          <span>ЧОУ ДПО</span>
        </div>

        <div className={style.InfoArea}>
          <ul>
            <li>
              <h4>Учебный центр</h4>
            </li>
            {trainingCenter.map((item, index) => (
              <li key={index}>
                <Link to={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>

          <ul>
            <li>
              <h4>Стрелковый клуб</h4>
            </li>
            {shootingRange.map((item, index) => (
              <li key={index}>
                <Link to={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={style.contactsArea}>
          <ul>
            <li className={style.contactsAreaPhone}>(4832) 32-02-01</li>
            <li className={style.contactsAreaAdress}>г. Брянск, ул. Институтская, д. 15 корп. 3</li>
            <li className={style.email}>
              <a href="mailto:spezzentr@bk.ru">spezzentr@bk.ru</a>
            </li>
            <li className={style.socialNetworks}>
              <Link className={style.vkLink} to="https://vk.com/spezzentr" target="_blank">
                <img className={style.vkImage} src={vkLogo} alt="VK" />
                СПЕЦЦЕНТР
              </Link>
            </li>
            <li >
              <iframe
                src="https://yandex.ru/sprav/widget/rating-badge/67934832673?type=rating&theme=dark"
                width="150"
                height="50"
                frameBorder="0"
                className={style.ratingBadge}
                title="Yandex Rating Badge"
              ></iframe>
            </li>

          </ul>
        </div>
      </div>

      {/* Banners section */}
      <div className={style.footerBanners}>
        <a href="https://eais-ok.ru/" target="_blank" rel="noopener noreferrer" className="footerBanners-banner">
          <img src={eaisBanner} alt="ЕАИС-ОК" className="footerBanners-banner-img" />
        </a>
        <a href="https://minobr.ru/" target="_blank" rel="noopener noreferrer" className="footerBanners-banner">
          <img src={minobrBanner} alt="Министерство науки и образования РФ" className="footerBanners-banner-img" />
        </a>
        <a href="https://minprosv.ru/" target="_blank" rel="noopener noreferrer" className="footerBanners-banner">
          <img src={minprosvBanner} alt="Министерство просвещения РФ" className="footerBanners-banner-img" />
        </a>
      </div>

      <div className={style.companyInfo}>
        ЧОУ ДПО "СПЕЦЦЕНТР"  ИНН 3257001611, ОГРН 1133256002670
      </div>
    </footer >
  );
};
