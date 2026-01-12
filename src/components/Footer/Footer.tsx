import style from "./Footer.module.scss"
import LogoImg from "../../assets/spezzenter/logo.png"
import clsx from "clsx";
import { Link } from "react-router-dom"
import vkLogo from "../../assets/spezzenter/vkLogo.png"
import { trainingCenter, shootingRange } from "../../shared/utils/model";

interface Props {
  className?: string;
}


export const Footer: React.FC<Props> = ({ className }) => {
  return (
    <footer className={clsx(className, style.footer)}>
      <div className={style.contentContainer}>
        <img src={LogoImg} alt="logo" className={style.logoImage} />

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
            <li className={style.contactsAreaPhone}>(4832)32-02-01</li>
            <li className={style.contactsAreaAdress}>г. Брянск, ул. Институтская, д. 15 корп. 3</li>
            <li className={style.email}>spezzentr@bk.ru</li>
            <li className={style.socialNetworks}><Link className={style.vkLink} to="https://vk.com/spezzentr"><img className={style.vkImage} src={vkLogo} />СПЕЦЦЕНТР</Link></li>
          </ul>
        </div>
      </div>
      {/* <Separator /> */}
      <div className={style.companyInfo}> ЧОУ ДПО "СПЕЦЦЕНТР"  ИНН 3257001611, ОГРН 1133256002670</div>
    </footer>
  )
}
