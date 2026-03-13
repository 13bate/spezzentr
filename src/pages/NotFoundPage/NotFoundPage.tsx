import { Link } from "react-router-dom"
import styles from "./NotFoundPage.module.scss"

export const NotFoundPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.backgroundGlow}></div>

      <div className={styles.card}>
        <h1 className={styles.code}>404</h1>

        <h2 className={styles.title}>
          Страница не найдена
        </h2>

        <p className={styles.text}>
          Возможно вы перешли по неверной ссылке или страница была перемещена.
        </p>

        <div className={styles.buttons}>
          <Link to="/" className={styles.primary}>
            На главную
          </Link>

          <Link to="/#contacts" className={styles.secondary}>
            Связаться с нами
          </Link>
        </div>
      </div>
    </div>
  )
}
