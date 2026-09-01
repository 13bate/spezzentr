import { PageTitle } from '../../shared/ui/PageTitle';
import { BackButton } from '../../shared/ui/BackButton';
import style from './PeriodicCheckPage.module.scss';
import { InfoPagesTitle } from '../../shared/ui/InfoPagesTitle';
import { ReachUs } from '../../shared/ui/ReachUs';
import { TestBlock } from '../../shared/ui/TestBlock';
import { ScheduleViewer } from '../../features/ScheduleViewer';
import { DocumentViewer } from '../../features/DocumentViewer/ui/DocumentViewer';

export const PeriodicCheckPage: React.FC = () => {
  const pageData = {
    title: 'Периодическая проверка частных охранников',
    description: 'На базе учебного центра ЧОУ ДПО «СПЕЦЦЕНТР» проводится периодическая проверка частных охранников 4-6 разрядов.',

    documents: [
      'паспорт',
      'удостоверение частного охранника',
      'личная карточка'
    ],
  };

  return (
    <>
      <PageTitle title="Периодическая проверка | СПЕЦЦЕНТР" />

      <main className={style.periodicCheckPage}>
        <div className={style.pageNavigation}>
          <BackButton />
        </div>

        {/* ─── HERO ────────────────────────────────────────── */}
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
              testUrl="https://test.tgrant.ru/category/grade4"
              description="Проверьте свои знания в формате онлайн-теста. Тест состоит из 10 вопросов, допускается 1 ошибка."
            />
          </div>
        </section>

        {/* ─── Расписание ────────────────────────────────────── */}
        <section className={style.scheduleSection}>
          <h2 className={style.sectionTitle}>Расписание периодической проверки</h2>
          <ScheduleViewer scheduleId="periodic-check-schedule" />
        </section>

        {/* ─── Документ с вопросами ──────────────────────────── */}
        <section className={style.documentSection}>
          <h2 className={style.sectionTitle}>Вопросы для подготовки</h2>
          <p className={style.sectionDescription}>
            Скачайте список вопросов для подготовки к теоретической части экзамена
          </p>
          <DocumentViewer documentId="periodic-questions" category="security" />
        </section>

        {/* ─── Документы ──────────────────────────────────────── */}
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

        {/* ─── Информация ────────────────────────────────────── */}
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
