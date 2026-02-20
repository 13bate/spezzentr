import clsx from "clsx"
import { shootingRange, trainingCenterShort } from "../../../../shared/utils/model";
import style from "./PageHeaderNavBar.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";
interface Props {
  className?: string;
  currentSection: string;
  pathname: string;
}

export const PageHeaderNavBar: React.FC<Props> = ({ className, currentSection, pathname }) => {

  const links =
    currentSection === "training"
      ? trainingCenterShort

      : shootingRange;

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
