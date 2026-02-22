import { PageTitle } from '../../shared/ui/PageTitle';
import style from './PeriodicCheckPage.module.scss';
import periodicCheckQuestions from "../../../public/ПЕРИОДИЧЕСКАЯ-ПРОВЕРКА-2023-4-6-разряд.pdf"

export const PeriodicCheckPage: React.FC = () => {
  // Данные для страницы
  const pageData = {
    title: 'Периодическая проверка частных охранников',
    description: 'На базе учебного центра ЧОУ ДПО «СПЕЦЦЕНТР» проводится периодическая проверка частных охранников 4-6 разрядов.',

    schedule: [
      '12 января 2026 г. — регистрация в 9-00',
      '19 января 2026 г. регистрация в 9-00',
      '26 января 2026 г. регистрация в 9-00',
      '2 февраля 2026 г. регистрация в 9-00',
      '9 февраля 2026 г. регистрация в 9-00',
      '16 февраля 2026 г. регистрация в 9-00'
    ],

    documents: [
      'паспорт',
      'удостоверение частного охранника',
      'личная карточка'
    ],

    pdfInfo: {
      title: 'Вопросы теоретической части',
      description: 'Скачайте список вопросов для подготовки к теоретической части экзамена',
      fileName: 'periodic-check-questions.pdf',
      displayName: 'Вопросы для периодической проверки.pdf'
    }
  };

  // Функция для скачивания PDF


  return (
    <>
      <PageTitle title="Периодическая проверка | СПЕЦЦЕНТР" />

      <main className={style.periodicCheckPage}>
        {/* Hero секция */}
        <section className={style.hero}>
          <h1 className={style.title}>{pageData.title}</h1>
          <p className={style.description}>{pageData.description}</p>
        </section>

        {/* График */}
        <section className={style.scheduleSection}>
          <h2 className={style.sectionTitle}>График проведения</h2>
          <div className={style.scheduleList}>
            {pageData.schedule.map((date, index) => (
              <div key={index} className={style.scheduleItem}>
                <span className={style.dateIcon}>📅</span>
                <span className={style.dateText}>{date}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Документы */}
        <section className={style.documentsSection}>
          <h2 className={style.sectionTitle}>При себе необходимо иметь оригиналы документов:</h2>
          <ul className={style.documentsList}>
            {pageData.documents.map((doc, index) => (
              <li key={index}>
                <span className={style.docIcon}>📄</span>
                {doc}
              </li>
            ))}
          </ul>
        </section>

        {/* PDF секция с вопросами */}
        <section className={style.pdfSection}>
          <h2 className={style.sectionTitle}>{pageData.pdfInfo.title}</h2>
          <p className={style.pdfDescription}>{pageData.pdfInfo.description}</p>

          <div className={style.pdfCard}>
            <div className={style.pdfIcon}>📘</div>
            <div className={style.pdfContent}>
              <h3>Вопросы для подготовки</h3>
              <p>Полный список вопросов для теоретической части проверки</p>
            </div>
            <a href={periodicCheckQuestions}>
              <button
                className={style.downloadButton}
              >
                Скачать вопросы
              </button>
            </a>
          </div>
        </section>

        {/* Дополнительная информация */}
        <section className={style.infoSection}>
          <div className={style.infoCard}>
            <h3>Форма проведения</h3>
            <p>Проверка проводится в форме тестирования и практических упражнений</p>
          </div>
          <div className={style.infoCard}>
            <h3>Результаты</h3>
            <p>Результаты объявляются в день проверки, выдается акт проверки</p>
          </div>
        </section>

        {/* Контакты */}
        <section className={style.contactsSection}>
          <h2 className={style.sectionTitle}>Запись и справки по телефону:</h2>
          <div className={style.contacts}>
            <a href="tel:+74832757545" className={style.phone}>
              <span className={style.phoneIcon}>📞</span>
              +7 (4832) 32-75-45
            </a>
            <a href="tel:+74832757546" className={style.phone}>
              <span className={style.phoneIcon}>📞</span>
              32-75-46
            </a>
          </div>
          <p className={style.address}>
            <span className={style.addressIcon}>📍</span>
            г. Брянск, ул. Институтская д. 15 к. 3 офис 232
          </p>
        </section>
      </main>
    </>
  );
};
