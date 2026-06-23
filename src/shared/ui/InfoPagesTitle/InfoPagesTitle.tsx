import clsx from "clsx";
import style from "./InfoPagesTitle.module.scss"

interface Props {
  className?: string;
  title?: string;
  description?: string;
}

export const InfoPagesTitle: React.FC<Props> = ({ className, title, description }) => {
  return (
    <div className={clsx(className, style.InfoPagesTitle)}>
      <h2 className={style.title}>{title}</h2>
      <p className={style.description}>{description}</p>
    </div>
  )
}
