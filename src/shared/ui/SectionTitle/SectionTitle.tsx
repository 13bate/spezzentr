import clsx from "clsx";
import style from "./SectionTitle.module.scss"

interface Props {
  className?: string;
  title: string;
}

export const SectionTitle: React.FC<Props> = ({ className, title }) => {
  return (
    <div className={clsx(className, style.sectionTitle)}>
      <h3 className={style.title}>{title}</h3>
    </div>
  )
}
