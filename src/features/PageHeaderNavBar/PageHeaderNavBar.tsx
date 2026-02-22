import clsx from "clsx"
import { shootingRange, trainingCenterShort } from "../../shared/utils/model";
import style from "./PageHeaderNavBar.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";
import type { INavBarItems } from "../../shared/types";
import { NavBar } from "../NavBar";

interface Props {
  className?: string;
  currentSection: string;
  pathname: string;
  isHomepage?: boolean;
  mobile?: boolean; // добавили проп для мобильной версии
  onItemClick?: () => void; // для закрытия меню после клика
}

export const PageHeaderNavBar: React.FC<Props> = ({
  className,
  currentSection,
  pathname,
  isHomepage,
  mobile = false,
  onItemClick
}) => {

  let links: INavBarItems[] = [];

  if (currentSection === "training") links = trainingCenterShort;
  if (currentSection === "shooting") links = shootingRange;

  if (isHomepage == true) return <NavBar />
  else
    return (
      <ul className={clsx(
        className,
        style.pageHeaderNavBar,
        mobile && style.mobile
      )}>
        {links.map((item) => (
          <li
            key={item.href}
            className={clsx(
              style.navBarElement,
              item.href === pathname && style.navBarActiveElement
            )}
          >
            <Link to={item.href} onClick={onItemClick}>
              {item.label}
            </Link>
            {item.href === pathname && (
              <FontAwesomeIcon
                className={style.NavBarElementChevron}
                icon={faChevronUp}
              />
            )}
          </li>
        ))}
      </ul>
    );
}
