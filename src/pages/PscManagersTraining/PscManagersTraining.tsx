import React from 'react'
import clsx from 'clsx'
import style from './PscManagersTraining.module.scss'
import { InfoPagesTitle } from '../../shared/ui/InfoPagesTitle'

interface Props {
  className?: string
}

const audience = [
  'Граждане, впервые назначаемые на должность руководителя частной охранной организации',
  'Действующие руководители ЧОО',
  'Заместители руководителей охранных организаций',
  'Лица, планирующие создание охранного предприятия',
]

const program = [
  'Правовые основы частной охранной деятельности',
  'Лицензирование и государственный контроль',
  'Организация охраны объектов и имущества',
  'Управление персоналом охранной организации',
  'Взаимодействие с государственными органами',
  'Трудовое законодательство и кадровая работа',
  'Применение технических средств охраны',
  'Обеспечение безопасности объектов различных категорий',
]

const requirements = [
  'Гражданство Российской Федерации',
  'Наличие высшего образования',
  'Документ, удостоверяющий личность',
]

const result = [
  'Получение необходимых компетенций руководителя ЧОО',
  'Соответствие требованиям законодательства РФ',
  'Подготовка к осуществлению управленческой деятельности',
  'Документ установленного образца по итогам обучения',
]

export const PscManagersTraining: React.FC<Props> = ({ className }) => {
  return (
    <div className={clsx(className, style.page)}>
      <section className={style.hero}>
        <span className={style.kicker}>
          Дополнительное профессиональное образование
        </span>

        <InfoPagesTitle title='Обучение руководителей
        частных охранных организаций' description="          Программа предназначена для руководителей частных охранных
          организаций и лиц, планирующих осуществлять руководство
          охранной деятельностью. Обучение проводится в соответствии
          с требованиями законодательства Российской Федерации.
        " className={style.title} />


      </section>

      <section className={style.section}>
        <div className={style.sectionHeader}>
          <h2>О программе</h2>
        </div>

        <p className={style.textBlock}>
          Курс направлен на формирование профессиональных компетенций,
          необходимых для организации деятельности частной охранной
          организации, управления персоналом, обеспечения соблюдения
          законодательства и эффективного взаимодействия с заказчиками
          и контролирующими органами.
        </p>
      </section>

      <section className={style.section}>
        <div className={style.sectionHeader}>
          <h2>Кому подходит обучение</h2>
        </div>

        <ul className={style.listItems}>
          {audience.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className={style.section}>
        <div className={style.sectionHeader}>
          <h2>Основные темы программы</h2>
        </div>

        <ul className={style.listItems}>
          {program.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className={style.section}>
        <div className={style.sectionHeader}>
          <h2>Требования к слушателям</h2>
        </div>

        <ul className={style.listItems}>
          {requirements.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className={style.section}>
        <div className={style.sectionHeader}>
          <h2>Результат обучения</h2>
        </div>

        <ul className={style.listItems}>
          {result.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className={style.cta}>
        <div className={style.ctaContent}>
          <h2>Записаться на обучение</h2>

          <p>
            Получите консультацию по вопросам обучения, требованиям к
            кандидатам и порядку оформления документов.
          </p>

          <a href="#contacts" className={style.btn}>
            Оставить заявку
          </a>
        </div>
      </section>
    </div>
  )
}
