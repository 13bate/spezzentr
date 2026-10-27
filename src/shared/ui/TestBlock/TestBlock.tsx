import type { FC } from "react";
import style from "./TestBlock.module.scss"
import clsx from "clsx";
import { useMediaQuery } from "@uidotdev/usehooks"

interface Props {
  className?: string;
  title: string;
  description?: string;
  buttonText?: string;
  testUrl: string;
}


export const TestBlock: FC<Props> = ({ className, title, description, buttonText = "Начать тестирование", testUrl }) => {



  const isMobile = useMediaQuery('(max-width: 800px)');


  return (
    <div className={clsx(style.testBlock, className)}>
      <div className={style.subTitleBlock}>
        <div className={style.line} />
        <span className={style.subTitle}>ТЕСТИРОВАНИЕ</span>
      </div>
      <div className={style.content}>
        <h2 className={style.title}>{title}</h2>
        <div className={style.cardFooter}>
          <p className={style.description}>{description}</p>
          <a
            href={testUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={clsx(style.button, style[`button_${isMobile ? "xxs" : "sm"}`], style.button_primary)}
          >
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  )
}
