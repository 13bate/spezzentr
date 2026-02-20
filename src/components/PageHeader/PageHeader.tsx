import clsx from "clsx"
import style from "./PageHeader.module.scss"
import { shootingRange, trainingCenterShort } from "../../shared/utils/model"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight, faPhone } from "@fortawesome/free-solid-svg-icons"
import { Toaster } from "react-hot-toast"
import { Link } from "react-router"
import logo from "../../assets/spezzenter/logo.png"
import { getRouteSection } from "./utils/getRouteSection"
import { PageHeaderNavBar } from "./ui/PageHeaderNavBar/PageHeaderNavBar"


interface Props {
  className?: string
}

export const PageHeader: React.FC<Props> = ({ className }) => {
  const pathname = window.location.pathname
  const section = getRouteSection(pathname)

  return (
    <header className={clsx(style.header, className)}>
      <Toaster
        toastOptions={{
          className: '',
          style: {
            background: '#545245',
            padding: '16px',

            color: '#E8E9DD',
          },
        }}
      />

      <Link to="/" className={style.logo}>
        <img src={logo} />
      </Link>
      <nav><PageHeaderNavBar currentSection={section} pathname={pathname} /></nav>
      <div className={style.upperSideInfo}>
        {/* <div className={style.phoneSection}> */}
        {/*   <a href="tel:74832320201"><FontAwesomeIcon icon={faPhone} />(4832)32 02 01</a> */}
        {/* </div> */}
        <button className={style.contactButton}><Link to="/contacts">АДРЕСС И КОНТАКТЫ<FontAwesomeIcon size="xs" icon={faChevronRight} /></Link></button>
      </div>
    </header>
  )
}
