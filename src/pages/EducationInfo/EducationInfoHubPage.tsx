import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PageTitle } from '../../shared/ui/PageTitle';
import { educationSectionsData } from './educationSectionsData';
import style from './EducationInfoHubPage.module.scss';

export const EducationInfoHubPage: React.FC = () => {
  return (
    <>
      <PageTitle title="Сведения об образовательной организации | СПЕЦЦЕНТР" />

      <main className={style.educationInfoPage}>
        {/* Hero секция */}
        <section className={style.hero}>
          <h1 className={style.title}>
            Сведения об <span>образовательной организации</span>
          </h1>
          <p className={style.description}>
            Официальная информация о Частном образовательном учреждении
            дополнительного профессионального образования «СПЕЦЦЕНТР»
          </p>
        </section>

        {/* Сетка карточек */}
        <div className={style.cardsGrid}>
          {educationSectionsData.map((section) => (
            <Link
              key={section.id}
              to={`/education/${section.id}`}
              className={style.card}
            >
              <div className={style.cardIcon}>
                <FontAwesomeIcon icon={section.icon} />
              </div>
              <h3 className={style.cardTitle}>{section.title}</h3>
              <p className={style.cardSubtitle}>{section.subtitle}</p>
              <span className={style.cardArrow}>Подробнее</span>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
};
