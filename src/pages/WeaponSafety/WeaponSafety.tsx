import clsx from 'clsx'
import style from "./WeaponSafety.module.scss"


interface Props {
  className?: string;
}

export const WeaponSafety: React.FC<Props> = ({ className }) => {
  return (
    <div className={clsx(className, style.layout)}>

    </div>
  )
}
