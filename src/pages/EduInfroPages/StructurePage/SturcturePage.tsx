import React from 'react';
import { Link } from 'react-router-dom';
import { PageTitle } from '../../../shared/ui/PageTitle';
import style from './StructurePage.module.scss';
import pedSovetPdf from "../../../../public/eduOrgInfoPdf/положение-педсовет (1).pdf";
import sobrRabPdf from "../../../../public/eduOrgInfoPdf/положение-собрание-работников.pdf";


export const StructurePage: React.FC = () => {
  return (
    <>
      <PageTitle title="Структура и органы управления | СПЕЦЦЕНТР" />

      <main className={style.educationInfoPage}>
        <div className={style.pageNavigation}>
          <Link to="/education" className={style.backLink}>
            ← К списку разделов
          </Link>
        </div>

        <section className={style.categorySection}>
          <div className={style.categoryHeader}>
            <span className={style.categoryIcon}>🏛️</span>
            <div>
              <h2 className={style.categoryTitle}>Структура и органы управления</h2>
            </div>
          </div>

          <div className={style.contentContainer}>
            <div className={style.infoCard} style={{ marginBottom: '20px' }}>
              <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#555' }}>
                ЧОУ ДПО «СПЕЦЦЕНТР» занимается профессиональной подготовкой кадров в сфере охраны.
                Опыт и продуманная организационная структура позволяют нам поддерживать высокий
                уровень образовательных услуг.
              </p>
            </div>

            <div className={style.infoGrid}>
              <div className={style.infoCard}>
                <span className={style.infoLabel}>Высший орган управления</span>
                <div className={style.infoValue}>Учредитель</div>
                <p style={{ marginTop: '10px', fontSize: '14px', color: '#666' }}>
                  Высшим органом управления Учреждением является Учредитель.
                </p>
              </div>

              <div className={style.infoCard}>
                <span className={style.infoLabel}>Исполнительный орган</span>
                <div className={style.infoValue}>Директор</div>
                <p style={{ marginTop: '10px', fontSize: '14px', color: '#666' }}>
                  Исполнительным органом управления Учреждением является Директор, назначаемый
                  Учредителем сроком на 5 лет. Директор осуществляет руководство текущей
                  деятельностью Учреждения, за исключением вопросов, отнесенных к компетенции
                  Учредителя. Он также выполняет обязанности главного бухгалтера.
                </p>
              </div>

              <div className={style.infoCard}>
                <span className={style.infoLabel}>Заместитель директора</span>
                <p style={{ fontSize: '14px', color: '#666' }}>
                  В подчинении у директора находится заместитель директора. В сфере его
                  ответственности – текущее управление, а также исполнение обязанностей директора
                  в случае его отсутствия. Данным лицам подчиняются остальные специалисты и преподаватели.
                </p>
              </div>

              <div className={style.infoCard}>
                <span className={style.infoLabel}>Коллегиальные органы управления</span>
                <div className={style.infoList}>
                  <div>• Педагогический совет</div>
                  <div>• Общее собрание работников</div>
                </div>
                <p style={{ marginTop: '10px', fontSize: '14px', color: '#666' }}>
                  Полномочия директора и коллегиальных органов управления разграничиваются согласно
                  уставу и локальным нормативным актам Учреждения.
                </p>
              </div>
            </div>

            <div className={style.infoCard} style={{ marginTop: '20px' }}>
              <span className={style.infoLabel}>Директор</span>
              <div className={style.infoValue} style={{ fontSize: '20px' }}>
                Першукевич Андрей Викторович
              </div>
            </div>

            <h3 style={{ fontFamily: 'Oswald', margin: '30px 0 20px', fontSize: '22px' }}>
              Документы
            </h3>
            <div className={style.documentsList}>
              <div className={style.documentItem}>
                <span className={style.documentIcon}>📄</span>
                <div className={style.documentInfo}>
                  <div className={style.documentName}>Положение о Педагогическом совете организации</div>
                </div>
                <a href={pedSovetPdf}>
                  <button className={style.downloadButton}>Скачать</button>
                </a>
              </div>
              <div className={style.documentItem}>
                <span className={style.documentIcon}>📄</span>
                <div className={style.documentInfo}>
                  <div className={style.documentName}>Положение о Собрании работников</div>
                </div>
                <a href={sobrRabPdf}>
                  <button className={style.downloadButton}>Скачать</button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
