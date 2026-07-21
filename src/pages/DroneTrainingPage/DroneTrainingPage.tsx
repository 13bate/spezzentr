import React from 'react';
import { PageTitle } from '../../shared/ui/PageTitle';
import style from './DroneTrainingPage.module.scss';
import { ReachUs } from '../../shared/ui/ReachUs';

export const DroneTrainingPage: React.FC = () => {
  // Данные для страницы
  const pageData = {
    title: 'Обучение по направлению БПЛА',
    description: 'Пилотирование, противодействие и техническое обслуживание беспилотными летательными аппаратами',

    mainText: 'Обучение по направлению пилотирования, противодействия и технического обслуживания беспилотными летательными аппаратами (БПЛА).',

    programs: [
      {
        title: 'Специалист по защите от угроз, связанных с применением беспилотных авиационных систем',
        type: 'программа профессионального обучения',
        hours: '72 часа',
        price: '9 000 ₽',
        description: 'Подготовка специалистов по противодействию беспилотным авиационным системам'
      },
      {
        title: 'Оператор наземных средств управления беспилотным летательным аппаратом',
        type: 'программа профессионального обучения',
        hours: '100 часов',
        price: '22 000 ₽',
        description: 'Базовое обучение управлению БПЛА'
      },
      {
        title: 'Оператор наземных средств управления беспилотным летательным аппаратом',
        type: 'программа профессионального образования — повышение квалификации',
        hours: '180 часов',
        price: '30 000 ₽',
        description: 'Углубленный курс для действующих операторов'
      },
      {
        title: 'Оператор наземных средств управления беспилотным летательным аппаратом',
        type: 'программа профессиональной переподготовки',
        hours: '250 часов',
        price: '50 000 ₽',
        description: 'Полная профессиональная переподготовка'
      }
    ],

    legalInfo: {
      text: 'Данные программы разработаны на основании Профессионального стандарта «Специалист по эксплуатации беспилотных авиационных систем, включающих в себя одно или несколько беспилотных воздушных судов с максимальной взлетной массой 30 кг и менее»',
      document: '(утвержденный приказом Министерства труда и социальной защиты РФ от 14 сентября 2022 г. № 526н)'
    },

    registryInfo: 'Документы об образовании, выдаваемые выпускникам по завершении обучения и сдачи итоговой аттестации, заносятся в «Государственный Федеральный реестр сведений документов об образовании и (или) о квалификации, документах об обучении».',

    advantages: {
      title: 'Преимущества обучения',
      items: [
        'Современное оборудование',
        'Обширная материальная база',
        'Высококвалифицированные преподаватели',
        'Глубокие технические знания',
        'Практический опыт работы с БПЛА'
      ]
    }
  };

  return (
    <>
      <PageTitle title="Обучение БПЛА | СПЕЦЦЕНТР" />

      <main className={style.droneTrainingPage}>
        {/* Hero секция */}
        <section className={style.hero}>
          <h1 className={style.title}>{pageData.title}</h1>
          <p className={style.description}>{pageData.description}</p>
        </section>

        {/* Основной текст */}
        <p className={style.mainText}>{pageData.mainText}</p>

        {/* Программы обучения */}
        <section className={style.programsSection}>
          <h2 className={style.sectionTitle}>Программы обучения</h2>

          <div className={style.programsGrid}>
            {pageData.programs.map((program, index) => (
              <div key={index} className={style.programCard}>
                <div className={style.programHeader}>
                  <span className={style.programBadge}>Программа {index + 1}</span>
                  <span className={style.programHours}>{program.hours}</span>
                </div>

                <h3 className={style.programTitle}>{program.title}</h3>
                <p className={style.programType}>{program.type}</p>
                <p className={style.programDescription}>{program.description}</p>

                <div className={style.programFooter}>
                  <span className={style.programPrice}>{program.price}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Правовая информация */}
        <section className={style.legalSection}>
          <div className={style.legalIcon}>📋</div>
          <div className={style.legalContent}>
            <p className={style.legalText}>{pageData.legalInfo.text}</p>
            <p className={style.legalDocument}>{pageData.legalInfo.document}</p>
          </div>
        </section>

        {/* Информация о реестре */}
        <section className={style.registrySection}>
          <div className={style.registryIcon}>📜</div>
          <p className={style.registryText}>{pageData.registryInfo}</p>
        </section>

        {/* Преимущества */}
        <section className={style.advantagesSection}>
          <h2 className={style.sectionTitle}>{pageData.advantages.title}</h2>

          <div className={style.advantagesGrid}>
            {pageData.advantages.items.map((item, index) => (
              <div key={index} className={style.advantageItem}>
                <span className={style.advantageIcon}>✓</span>
                <span className={style.advantageText}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Контакты */}
        <ReachUs />
      </main>
    </>
  );
};
