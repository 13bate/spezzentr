import type { FC } from "react";
import style from "./TestBlock.module.scss"
import clsx from "clsx";
import { Button } from "../Button";
import { useMediaQuery } from "@uidotdev/usehooks"

interface Props {
  className?: string;
  title: string;
  description?: string;
  buttonText?: string;
  testUrl: string;
}


export const TestBlock: FC<Props> = ({ className, title, description, buttonText = "Начать тестирование", testUrl }) => {



  const buttonTestHandler = () => {
    window.location.href = testUrl;
  }

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
          <Button className={style.button} size={isMobile ? "xxs" : "sm"} variant="primary" onClick={() => buttonTestHandler()}>{buttonText}</Button>
        </div>
      </div>
    </div>
  )
}
