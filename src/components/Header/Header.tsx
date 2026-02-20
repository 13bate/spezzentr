import clsx from "clsx"
import style from "./Header.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router"
import logo from "../../assets/spezzenter/logo.png"
import { getRouteSection } from "./utils/getRouteSection"
import { PageHeaderNavBar } from "../PageHeaderNavBar/PageHeaderNavBar"



interface Props {
  className?: string;
  isHomeHeader?: string;
}

export const Header: React.FC<Props> = ({ className, isHomeHeader }) => {
  const pathname = window.location.pathname
  const section = getRouteSection(pathname)
  return (
    <header className={clsx(style.header, className)}>


      <Link to="/" className={style.logo}>
        <img src={logo} />
      </Link>
      {isHomeHeader ? <nav><PageHeaderNavBar currentSection={section} pathname={pathname} isHomepage={true} /></nav>
        : <nav><PageHeaderNavBar currentSection={section} pathname={pathname} /></nav>

      }
      <button className={style.contactButton}><Link to="/contacts">КАК НАС НАЙТИ?<FontAwesomeIcon size="xs" icon={faChevronRight} /></Link></button>
    </header>
  )
}
