import React from 'react';
import { PageTitle } from '../../../shared/ui/PageTitle';
import { BackButton } from '../../../shared/ui/BackButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import style from './StandartsPage.module.scss';

export const StandardsPage: React.FC = () => {
  return (
    <>
      <PageTitle title="Образовательные стандарты | СПЕЦЦЕНТР" />

      <main className={style.standardsPage}>
        <div className={style.pageNavigation}>
          <BackButton />
        </div>

        <section className={style.section}>
          <div className={style.sectionHeader}>
            <h1 className={style.sectionTitle}>Образовательные стандарты</h1>
          </div>

          <div className={style.contentContainer}>
            <div className={style.infoCard}>
              <p className={style.text}>
                Обучение в ЧОУ ДПО «СПЕЦЦЕНТР» проводится по программам, разработанным в соответствии с
                федеральными государственными стандартами, касающимися профессионального образования.
              </p>

              <div className={style.linkCard}>
                <p className={style.linkText}>
                  Ознакомиться с официальным источником вы можете на сайте Министерства образования и науки РФ:
                </p>
                <a
                  href="https://fgos.ru/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={style.externalLink}
                >
                  <span>Перейти на сайт fgos.ru</span>
                  <FontAwesomeIcon icon={faExternalLinkAlt} className={style.linkIcon} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
