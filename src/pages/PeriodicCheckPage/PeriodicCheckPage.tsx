import { PageTitle } from '../../shared/ui/PageTitle';
import style from './PeriodicCheckPage.module.scss';
import periodicCheckQuestions from "../../../public/ПЕРИОДИЧЕСКАЯ-ПРОВЕРКА-2023-4-6-разряд.pdf"
import { InfoPagesTitle } from '../../shared/ui/InfoPagesTitle';
import { ReachUs } from '../../shared/ui/ReachUs';
import { TestBlock } from '../../shared/ui/TestBlock';

export const PeriodicCheckPage: React.FC = () => {
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

  return (
    <>
      <PageTitle title="Периодическая проверка | СПЕЦЦЕНТР" />

      <main className={style.periodicCheckPage}>
        {/* ─── HERO (светлый, с анимацией и тестом) ──────────────── */}
        <section className={style.heroSection}>
          <div className={style.heroBg}>
            <div className={style.heroGrid} />
            <div className={style.heroBlob1} />
            <div className={style.heroBlob2} />
          </div>
          <div className={style.heroContainer}>
            <div className={style.heroContent}>
              <div className={style.heroHeader}>
                <span className={style.eyebrow}>
                  <span className={style.eyebrowLine} />
                  Периодическая проверка
                </span>
                <InfoPagesTitle title={pageData.title} description={pageData.description} />
              </div>
              <div className={style.heroNote}>
                <div>
                  <strong>Важно:</strong> проверка включает теоретическую и практическую части.
                </div>
              </div>
            </div>

            <TestBlock
              title="Пройти тестирование онлайн"
              testUrl="https://test.tgrant.ru/category/grade4"  // ← замени на реальную ссылку теста для периодической проверки
              description="Проверьте свои знания в формате онлайн-теста. Тест состоит из 10 вопросов, допускается 1 ошибка."
            />
          </div>
        </section>

        {/* Остальные секции без изменений */}
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
              <button className={style.downloadButton}>
                Скачать вопросы
              </button>
            </a>
          </div>
        </section>

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

        <ReachUs />
      </main>
    </>
  );
};
