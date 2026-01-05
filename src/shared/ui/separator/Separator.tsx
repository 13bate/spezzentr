import style from "./Separator.module.scss"
import clsx from "clsx";


interface Props {
  className?: string;
}

export const Separator: React.FC<Props> = ({ className }) => {
  return (
    <div className={clsx(className, style.container)}>
    </div>
  )
}
