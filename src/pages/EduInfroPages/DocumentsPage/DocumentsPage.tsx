import React from 'react';
import { PageTitle } from '../../../shared/ui/PageTitle';
import { BackButton } from '../../../shared/ui/BackButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faDownload } from '@fortawesome/free-solid-svg-icons';
import style from './DocumentsPage.module.scss';

export const DocumentsPage: React.FC = () => {
  const documents = [
    { name: 'Устав образовательной организации', file: '/eduOrgInfoPdf/УСТАВ-СПЕЦЦЕНТР-2025.pdf' },
    { name: 'Лицензия на осуществление образовательной деятельности', file: '/eduOrgInfoPdf/лицензия.pdf' },
    { name: 'Свидетельство о государственной регистрации', file: '/eduOrgInfoPdf/свидетельство-о-регистрации.pdf' },
    { name: 'План финансово-хозяйственной деятельности', file: '/eduOrgInfoPdf/план-фин-хоз-деят-2018.pdf' },
    { name: 'Правила приема обучающихся', file: '/eduOrgInfoPdf/приказ-4-1-правила-приема.pdf' },
    { name: 'Правила внутреннего распорядка обучающихся', file: '/eduOrgInfoPdf/приказ-1-18-правила-распорядка.pdf' },
    { name: 'Режим занятий обучающихся', file: '/eduOrgInfoPdf/приказ-1-5-режим-занятий.pdf' },
    {
      name: 'Положение о формах, периодичности и порядке текущего контроля успеваемости и промежуточной аттестации обучающихся',
      file: '/eduOrgInfoPdf/положение-аттестация.pdf'
    },
    {
      name: 'Порядок оформления возникновения, приостановления, изменения и прекращения отношений между ЧОУ ДПО «СПЕЦЦЕНТР» и обучающимися',
      file: '/eduOrgInfoPdf/порядок-отношений.pdf'
    },
    {
      name: 'Положение о порядке и основаниях перевода, отчисления и восстановления обучающихся',
      file: '/eduOrgInfoPdf/порядок-перевода-отчисления.pdf'
    },
    { name: 'Положение о педсовете', file: '/eduOrgInfoPdf/положение-педсовет (1).pdf' },
    { name: 'Положение об Общем собрании', file: '/eduOrgInfoPdf/положение-собрание-работников.pdf' },
    { name: 'Отчет о результатах самообследования', file: '/eduOrgInfoPdf/Самообследование-2023.pdf' },
    {
      name: 'Положение о порядке оказания платных образовательных услуг',
      file: '/eduOrgInfoPdf/приказ-1-7-оказание-платных-услуг.pdf'
    },
    { name: 'Договор на оказание платных образовательных услуг', file: '/eduOrgInfoPdf/договор-обучение.pdf' },
    { name: 'Стоимость обучения', file: '/eduOrgInfoPdf/Стоимость-обучения.pdf' },
  ];

  return (
    <>
      <PageTitle title="Документы | СПЕЦЦЕНТР" />

      <main className={style.documentsPage}>
        <div className={style.pageNavigation}>
          <BackButton />
        </div>

        <section className={style.section}>
          <div className={style.sectionHeader}>
            <div className={style.sectionIcon}>
              <FontAwesomeIcon icon={faFilePdf} />
            </div>
            <div>
              <h1 className={style.sectionTitle}>Документы</h1>
            </div>
          </div>

          <div className={style.contentContainer}>
            <div className={style.documentsList}>
              {documents.map((doc, index) => (
                <a
                  key={index}
                  href={doc.file}
                  className={style.documentItem}
                  download
                  style={{ '--index': index } as React.CSSProperties}
                >
                  <div className={style.documentIcon}>
                    <FontAwesomeIcon icon={faFilePdf} />
                  </div>
                  <span className={style.documentName}>{doc.name}</span>
                  <div className={style.downloadButton}>
                    <FontAwesomeIcon icon={faDownload} />
                    <span>Скачать</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
