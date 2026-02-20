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
}

export const PageHeaderNavBar: React.FC<Props> = ({ className, currentSection, pathname, isHomepage }) => {

  let links: INavBarItems[] = [];

  if (currentSection === "training") links = trainingCenterShort;
  if (currentSection === "shooting") links = shootingRange;

  if (isHomepage == true) return <NavBar />
  else
    return (
      <ul className={clsx(className, style.pageHeaderNavBar)}>

        {links.map((item) => (
          item.href == pathname ?
            <li key={item.href} className={clsx(style.navBarElement, style.navBarActiveElement)}>
              <Link to={item.href}>{item.label}
              </Link>
              <FontAwesomeIcon className={style.NavBarElementChevron} icon={faChevronUp} />

            </li>
            :
            <li key={item.href} className={clsx(style.navBarElement)}>
              <Link to={item.href}>{item.label}
              </Link>
            </li>
        ))}
      </ul>
    );
}
