import clsx from "clsx";
import styles from "./TitleWithLine.module.scss"
interface Props {
  className?: string;
  title?: string;
}

export const TitleWithLine: React.FC<Props> = ({ className, title }) => {
  return (<div className={clsx(styles.container, className)}>
    <div className={styles.titleContainer}>
      <span className={styles.titleLine}></span>
      <h2 className={styles.title}>{title}</h2>
    </div>
  </div>)
}
