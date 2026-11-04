import { Link } from 'react-router-dom';
import style from './LaborSafety.module.scss';

// --- Иконки ---
const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M13.3 4L6 11.3L2.7 8" stroke="#b32025" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconLeader = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#b32025" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
);

const IconWorker = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#b32025" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 18h20M4 14h16M12 4a6 6 0 0 0-6 6v4h12v-4a6 6 0 0 0-6-6z" />
  </svg>
);

const IconSpecialist = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#b32025" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const IconCommittee = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#b32025" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

// --- Данные ---
const standardPrograms = [
  { name: 'Общие вопросы охраны труда и функционирования системы управления охраной труда (программа «А»)', price: 'от 500', hours: '16', doc: 'протокол' },
  { name: 'Безопасные методы и приёмы выполнения работ при воздействии вредных и (или) опасных производственных факторов, источников опасности (программа «Б»)', price: 'от 500', hours: '16', doc: 'протокол' },
  { name: 'Обучение по оказанию первой помощи пострадавшим', price: 'от 500', hours: '8', doc: 'протокол' },
  { name: 'Программа обучения по использованию (применению) средств индивидуальной защиты', price: 'от 500', hours: '16', doc: 'протокол' },
  { name: 'Комплексное обучение по программам А, Б, ПП, СИЗ', price: 'от 2000', hours: '56', doc: 'протокол' },
];

const professionalPrograms = [
  { name: 'Техносферная безопасность. Охрана труда. «Специалист в области охраны труда»', price: '10000', hours: '256', doc: 'Диплом о профессиональной переподготовке' },
  { name: 'Управление профессиональными рисками в системе управления охраной труда.', price: '4000', hours: '72', doc: 'Удостоверение о повышении квалификации' },
  { name: 'Организация работы по охране труда и функционирование СОУТ у работодателя.', price: '4000', hours: '72', doc: 'Удостоверение о повышении квалификации' },
  { name: 'Расследование и учёт несчастных случаев на производстве и профессиональных заболеваний.', price: '2500', hours: '40', doc: 'Удостоверение о повышении квалификации' },
  { name: 'Инструктор по обучению навыкам оказания первой помощи пострадавшим', price: '10000', hours: '256', doc: 'Диплом о профессиональной переподготовке' },
  { name: 'Подготовка преподавателей и инструкторов, обучающих приёмам оказания первой помощи', price: '5600', hours: '32', doc: 'Удостоверение о повышении квалификации' },
];

export const LaborSafety = () => {
  return (
    <main className={style.page}>

      {/* 1. Hero */}
      <section className={style.hero}>
        <span className={style.eyebrow}>
          <span className={style.eyebrowLine} />
          Учебный центр
        </span>
        <h1 className={style.title}>Обучение по охране труда</h1>
        <p className={style.subtitle}>
          Обязательное требование для работодателей и специалистов. Проводим обучение в соответствии с Постановлением Правительства РФ № 2464 от 24.12.2021 г.
        </p>
      </section>

      {/* 2. Зачем проходить (Текст) */}
      <section className={style.section}>
        <h2 className={style.sectionTitle}>Зачем проходить курсы по охране труда</h2>
        <div className={style.textContent}>
          <p>
            Обучение по охране труда — обязательное требование. Статьи 214 и 219 ТК РФ и Постановление Правительства РФ от 24.12.2021 № 2464 обязывают работодателя организовать обучение и не допускать к работе работников, не прошедших его и проверку знания требований охраны труда.
          </p>
          <p className={style.warningText}>
            <strong>Внимание:</strong> За допуск работника без обязательного обучения предусмотрен штраф для юридического лица от 110 000 до 130 000 рублей (ч. 3 ст. 5.27.1 КоАП РФ). При повторном нарушении — от 100 000 до 200 000 рублей либо приостановление деятельности до 90 суток.
          </p>
          <p>
            В зависимости от должности и условий труда обучение проводится по программам А, Б и В: от общих вопросов и СОУТ до безопасных методов выполнения работ повышенной опасности. Отдельно проводится обучение по использованию СИЗ и оказанию первой помощи.
          </p>
        </div>
      </section>

      {/* 3. Сравнение (Обязательное vs Повышение квалификации) */}
      <section className={style.section}>
        <h2 className={style.sectionTitle}>Чем обязательное обучение отличается от повышения квалификации</h2>
        <div className={style.comparisonGrid}>

          <div className={style.comparisonCard}>
            <h3 className={style.cardTitle}>Обязательное обучение по ПП № 2464</h3>
            <ul className={style.checkList}>
              <li>
                <span className={style.checkIcon}><CheckIcon /></span>
                <div>
                  <strong>Основание</strong>
                  <p>Трудовой кодекс РФ (ст. 214) и Постановление Правительства № 2464.</p>
                </div>
              </li>
              <li>
                <span className={style.checkIcon}><CheckIcon /></span>
                <div>
                  <strong>Кому нужно</strong>
                  <p>Практически всем работникам, от директора до рабочего.</p>
                </div>
              </li>
              <li>
                <span className={style.checkIcon}><CheckIcon /></span>
                <div>
                  <strong>Программы и часы</strong>
                  <p>Программы А, Б и В от 16 часов, при обучении сразу по А, Б и В минимум от 40 часов.</p>
                </div>
              </li>
              <li>
                <span className={style.checkIcon}><CheckIcon /></span>
                <div>
                  <strong>Периодичность</strong>
                  <p>Не реже 1 раза в 3 года.</p>
                </div>
              </li>
              <li>
                <span className={style.checkIcon}><CheckIcon /></span>
                <div>
                  <strong>Документ</strong>
                  <p>Протокол проверки знаний. Именно его проверяет ГИТ.</p>
                </div>
              </li>
              <li>
                <span className={style.checkIcon}><CheckIcon /></span>
                <div>
                  <strong>Реестр</strong>
                  <p>ЕИСОТ Минтруда и реестр обученных лиц.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className={style.comparisonCard}>
            <h3 className={style.cardTitle}>Повышение квалификации (ДПО)</h3>
            <ul className={style.checkList}>
              <li>
                <span className={style.checkIcon}><CheckIcon /></span>
                <div>
                  <strong>Основание</strong>
                  <p>Федеральный закон № 273-ФЗ и приказ Минобрнауки № 266.</p>
                </div>
              </li>
              <li>
                <span className={style.checkIcon}><CheckIcon /></span>
                <div>
                  <strong>Кому нужно</strong>
                  <p>Не всем, а отдельным категориям: специалистам по ОТ, экспертам и консультантам, преподавателям первой помощи.</p>
                </div>
              </li>
              <li>
                <span className={style.checkIcon}><CheckIcon /></span>
                <div>
                  <strong>Продолжительность</strong>
                  <p>От 16 часов.</p>
                </div>
              </li>
              <li>
                <span className={style.checkIcon}><CheckIcon /></span>
                <div>
                  <strong>Зачем</strong>
                  <p>Обновление компетенций и соответствие профстандарту (приказ Минтруда № 274н).</p>
                </div>
              </li>
              <li>
                <span className={style.checkIcon}><CheckIcon /></span>
                <div>
                  <strong>Документ</strong>
                  <p>Удостоверение о повышении квалификации.</p>
                </div>
              </li>
              <li>
                <span className={style.checkIcon}><CheckIcon /></span>
                <div>
                  <strong>Реестр</strong>
                  <p>ФИС ФРДО Рособрнадзора.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <p className={style.note}>
          <em>Одно не заменяет другое. Обучение по Постановлению № 2464 не является дополнительным профессиональным образованием. Повышение квалификации требуется лишь тогда, когда это предусмотрено квалификационными требованиями или профстандартами.</em>
        </p>
      </section>

      {/* 4. Кому обязательно пройти */}
      <section className={style.section}>
        <h2 className={style.sectionTitle}>Кому обязательно пройти обучение по охране труда</h2>
        <p className={style.subtitleGrid}>
          Обучению подлежат категории работников, предусмотренные Правилами № 2464, с учетом должности, условий труда и оценки профессиональных рисков.
        </p>

        <div className={style.audienceGrid}>
          <div className={style.audienceCard}>
            <div className={style.audienceIcon}><IconLeader /></div>
            <h4>Руководителям</h4>
            <ul>
              <li>Руководителям организации, филиала, структурного подразделения и его заместителям</li>
              <li>Директорам и заведующим подразделениями</li>
              <li>Лицам, на которых приказом возложены обязанности по охране труда</li>
              <li>Работодателям и индивидуальным предпринимателям</li>
            </ul>
          </div>

          <div className={style.audienceCard}>
            <div className={style.audienceIcon}><IconWorker /></div>
            <h4>Работникам</h4>
            <ul>
              <li>Работникам рабочих профессий и служащим при воздействии вредных и опасных факторов</li>
              <li>Работникам, в чьи обязанности входит оказание первой помощи</li>
              <li>Работникам, применяющим средства индивидуальной защиты</li>
            </ul>
          </div>

          <div className={style.audienceCard}>
            <div className={style.audienceIcon}><IconSpecialist /></div>
            <h4>Специалистам по ОТ</h4>
            <ul>
              <li>Специалистам и инженерам организации</li>
              <li>Лицам, проводящим инструктажи и обучение по охране труда</li>
              <li>Специалистам ОТ</li>
            </ul>
          </div>

          <div className={style.audienceCard}>
            <div className={style.audienceIcon}><IconCommittee /></div>
            <h4>Членам комиссий</h4>
            <ul>
              <li>Членам комиссий по проверке знания требований охраны труда</li>
              <li>Членам комитетов по охране труда, уполномоченным лицам по охране труда профсоюзов</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Программы и стоимость */}
      <section className={style.section}>
        <h2 className={style.sectionTitle}>Программы обучения и стоимость</h2>

        {/* Таблица 1 */}
        <h3 className={style.tableSubtitle}>Программы обучения по вопросам охраны труда (ПП № 2464)</h3>
        <div className={style.tableWrapper}>
          <table className={style.table}>
            <thead>
              <tr>
                <th>Программа</th>
                <th>Стоимость, руб.</th>
                <th>Объём (часов)</th>
                <th>Документ</th>
              </tr>
            </thead>
            <tbody>
              {standardPrograms.map((prog, i) => (
                <tr key={i}>
                  <td>{prog.name}</td>
                  <td className={style.priceCell}>{prog.price}</td>
                  <td>{prog.hours}</td>
                  <td>{prog.doc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Таблица 2 */}
        <h3 className={style.tableSubtitle}>Дополнительные профессиональные программы (ДПО)</h3>
        <div className={style.tableWrapper}>
          <table className={style.table}>
            <thead>
              <tr>
                <th>Программа</th>
                <th>Стоимость, руб.</th>
                <th>Объём (часов)</th>
                <th>Документ</th>
              </tr>
            </thead>
            <tbody>
              {professionalPrograms.map((prog, i) => (
                <tr key={i}>
                  <td>{prog.name}</td>
                  <td className={style.priceCell}>{prog.price}</td>
                  <td>{prog.hours}</td>
                  <td>{prog.doc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 6. Выдаваемые документы */}
      <section className={style.section}>
        <h2 className={style.sectionTitle}>Выдаваемые документы</h2>
        <div className={style.textContent}>
          <p>
            После курса по ПП № 2464 выдается <strong>протокол проверки знания требований охраны труда</strong>. Сведения передаются в реестр обученных лиц Минтруда России.
          </p>
          <p>
            По программам ДПО выдается удостоверение о повышении квалификации (или диплом о переподготовке), сведения вносятся в ФИС ФРДО.
          </p>
          <div className={style.licenseBox}>
            <p>
              ЧОУ ДПО «СПЕЦЦЕНТР» имеет лицензию на осуществление образовательной деятельности от 04.07.2016 № 4103 и аккредитацию на оказание услуг по обучению работодателей и работников вопросам охраны труда (№ 11012).
            </p>
          </div>
        </div>
      </section>

      {/* 7. CTA */}
      <section className={style.cta}>
        <div className={style.ctaContent}>
          <h2>Записаться на обучение</h2>
          <p>Оставьте заявку, и мы подберем подходящую программу для вас или ваших сотрудников.</p>
          <Link to="/contacts" className={style.btn}>Оставить заявку</Link>
        </div>
      </section>

    </main>
  );
};
