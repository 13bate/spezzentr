// src/pages/EducationInfo/pages/InternationalPage.tsx
import React from 'react';
import { PageTitle } from '../../../shared/ui/PageTitle';
import { BackButton } from '../../../shared/ui/BackButton';
import style from './InternationalPage.module.scss';

export const InternationalPage: React.FC = () => {
  return (
    <>
      <PageTitle title="Международное сотрудничество | СПЕЦЦЕНТР" />

      <main className={style.internationalPage}>
        <div className={style.pageNavigation}>
          <BackButton />
        </div>

        <section className={style.section}>
          <div className={style.sectionHeader}>
            <span className={style.sectionIcon}>🌍</span>
            <h1 className={style.sectionTitle}>Международное сотрудничество</h1>
          </div>

          <div className={style.contentContainer}>
            <div className={style.infoMessage}>
              <div className={style.messageIcon}>ℹ️</div>
              <div className={style.messageContent}>
                <p className={style.messageText}>
                  На данный момент международное сотрудничество не осуществляется.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
