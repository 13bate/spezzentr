
import style from "./Button.module.scss"


interface Props {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  disabled?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<Props> = ({ children, onClick }) => {

  return (
    <button className={style.button} onClick={onClick}>
      {children}
    </button>

  )
}
