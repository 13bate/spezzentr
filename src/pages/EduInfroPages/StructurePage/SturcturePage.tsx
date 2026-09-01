import React from 'react';
import { PageTitle } from '../../../shared/ui/PageTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faDownload, faUsers, faUserTie, faUsersGear, faBuilding } from '@fortawesome/free-solid-svg-icons';
import style from './StructurePage.module.scss';

export const StructurePage: React.FC = () => {
  return (
    <>
      <PageTitle title="Структура и органы управления | СПЕЦЦЕНТР" />

      <main className={style.educationInfoPage}>
        <div className={style.pageNavigation}>
        </div>

        <section className={style.categorySection}>
          <div className={style.categoryHeader}>
            <div className={style.categoryIcon}>
              <FontAwesomeIcon icon={faBuilding} />
            </div>
            <div>
              <h2 className={style.categoryTitle}>Структура и органы управления</h2>
            </div>
          </div>

          <div className={style.contentContainer}>
            {/* Описание */}
            <div className={style.introCard}>
              <p>
                Управление образовательной организацией осуществляется в соответствии с законодательством
                Российской Федерации, Уставом и локальными нормативными актами ЧОУ ДПО «СПЕЦЦЕНТР».
              </p>
            </div>

            {/* Сетка карточек органов управления */}
            <div className={style.infoGrid}>
              <div className={style.infoCard}>
                <div className={style.infoCardIcon}>
                  <FontAwesomeIcon icon={faUsers} />
                </div>
                <span className={style.infoLabel}>Высший орган управления</span>
                <div className={style.infoValue}>Учредитель</div>
                <p className={style.infoDesc}>
                  Высшим органом управления Учреждением является Учредитель.
                </p>
              </div>

              <div className={style.infoCard}>
                <div className={style.infoCardIcon}>
                  <FontAwesomeIcon icon={faUserTie} />
                </div>
                <span className={style.infoLabel}>Исполнительный орган</span>
                <div className={style.infoValue}>Директор</div>
                <p className={style.infoDesc}>
                  Исполнительным органом управления Учреждением является Директор, назначаемый
                  Учредителем сроком на 5 лет. Директор осуществляет руководство текущей
                  деятельностью Учреждения, за исключением вопросов, отнесенных к компетенции
                  Учредителя. Он также выполняет обязанности главного бухгалтера.
                </p>
              </div>

              <div className={style.infoCard}>
                <div className={style.infoCardIcon}>
                  <FontAwesomeIcon icon={faUsersGear} />
                </div>
                <span className={style.infoLabel}>Заместитель директора</span>
                <p className={style.infoDesc}>
                  В подчинении у директора находится заместитель директора. В сфере его
                  ответственности – текущее управление, а также исполнение обязанностей директора
                  в случае его отсутствия. Данным лицам подчиняются остальные специалисты и преподаватели.
                </p>
              </div>

              <div className={style.infoCard}>
                <div className={style.infoCardIcon}>
                  <FontAwesomeIcon icon={faUsers} />
                </div>
                <span className={style.infoLabel}>Коллегиальные органы управления</span>
                <div className={style.infoList}>
                  <div>• Педагогический совет</div>
                  <div>• Общее собрание работников</div>
                </div>
                <p className={style.infoDesc}>
                  Полномочия директора и коллегиальных органов управления разграничиваются согласно
                  уставу и локальным нормативным актам Учреждения.
                </p>
              </div>
            </div>

            {/* Информация о директоре */}
            <div className={style.directorCard}>
              <span className={style.infoLabel}>Директор</span>
              <div className={style.directorName}>
                Першукевич Андрей Викторович
              </div>
            </div>

            {/* Документы */}
            <div className={style.documentsBlock}>
              <h3 className={style.documentsTitle}>
                <FontAwesomeIcon icon={faFilePdf} />
                Документы
              </h3>

              <div className={style.documentsList}>
                <div className={style.documentItem}>
                  <div className={style.documentIcon}>
                    <FontAwesomeIcon icon={faFilePdf} />
                  </div>
                  <div className={style.documentInfo}>
                    <div className={style.documentName}>
                      Положение о Педагогическом совете организации
                    </div>
                  </div>
                  <a
                    href="/eduOrgInfoPdf/положение-педсовет (1).pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={style.downloadButton}
                  >
                    <FontAwesomeIcon icon={faDownload} />
                    Скачать
                  </a>
                </div>

                <div className={style.documentItem}>
                  <div className={style.documentIcon}>
                    <FontAwesomeIcon icon={faFilePdf} />
                  </div>
                  <div className={style.documentInfo}>
                    <div className={style.documentName}>
                      Положение о Собрании работников
                    </div>
                  </div>
                  <a
                    href="/eduOrgInfoPdf/положение-собрание-работников.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={style.downloadButton}
                  >
                    <FontAwesomeIcon icon={faDownload} />
                    Скачать
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
