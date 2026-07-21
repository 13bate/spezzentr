
import styles from "./ProgrammsSection.module.scss";
import { useEffect, useRef, useState } from "react";
import { InfoCard } from "../../shared/ui/InfoCard/InfoCard";

interface CardData {
  id: number;
  title: string;
  route: string;
  description: string;
  features: string[];
  price: string;
  duration: string;
}

const cardsData: CardData[] = [
  {
    id: 1,
    title: "СТРЕЛКОВЫЕ ПРОГРАММЫ",
    route: "/shooting/programs",
    description:
      "Комплексные программы обучения стрельбе из различных видов оружия. Подходят как для новичков, так и для опытных стрелков, желающих систематизировать знания и повысить классность.",
    features: [
      "Обучение с нуля и повышение мастерства",
      "Работа с пистолетом, винтовкой, карабином",
      "Подготовка к соревнованиям и нормативам",
      "Гибкий график занятий",
    ],
    price: "25 000 ₽",
    duration: "16 часов",
  },
  {
    id: 2,
    title: "Индивидуальные и групповые тренировки",
    route: "/shooting/training",
    description:
      "Персональные или командные занятия с инструктором. Программа строится с учётом ваших целей: от базовой техники до отработки сложных упражнений и соревновательных сценариев.",
    features: [
      "Индивидуальный план тренировок",
      "Отработка технических элементов",
      "Анализ и разбор ошибок",
      "Групповые тактические игры",
    ],
    price: "5 600 ₽",
    duration: "1 час",
  },
  {
    id: 3,
    title: "Программы для детей и подростков",
    route: "/shooting/kids",
    description:
      "Специализированные курсы по стрельбе для детей и подростков. Акцент на безопасность, дисциплину, развитие координации и ответственности. Занятия проходят в игровой и адаптированной форме.",
    features: [
      "Безопасность на первом месте",
      "Развитие моторики и координации",
      "Групповые и индивидуальные занятия",
      "Участие в детских турнирах",
    ],
    price: "4 000 ₽",
    duration: "1.5 часа",
  },
  {
    id: 4,
    title: "Клубные матчи",
    route: "/shooting/competitions",
    description:
      "Регулярные соревнования внутри клуба для всех уровней подготовки. Отличная возможность проверить свои навыки в условиях, приближённых к реальным матчам, и получить соревновательный опыт.",
    features: [
      "Регулярные турниры",
      "Разнообразные упражнения",
      "Оценка результатов и рейтинг",
      "Призы и награды для победителей",
    ],
    price: "2 500 ₽",
    duration: "3 часа",
  },
];

export const ProgrammsSection = () => {
  const [visible, setVisible] = useState<Record<number, boolean>>({});
  const cardElsRef = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const id = Number((entry.target as HTMLElement).dataset.cardId);
          if (!Number.isFinite(id)) continue;
          setVisible((prev) => ({ ...prev, [id]: true }));
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.18,
        rootMargin: "60px 0px -10px 0px",
      }
    );

    for (const el of cardElsRef.current) {
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.bgArt} aria-hidden="true">
        <div className={styles.bgGrid} />
        <div className={styles.bgBlob1} />
        <div className={styles.bgBlob2} />
        <div className={styles.bgNoise} />
      </div>

      <div className={styles.content}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            <span className={styles.titleGradient}>ПРОГРАММЫ ОБУЧЕНИЯ</span>
          </h2>
          <div className={styles.headerUnderline} />
        </div>

        {/* Cards Grid */}
        <div className={styles.grid}>
          {cardsData.map((card, idx) => (
            <div
              key={card.id}
              ref={(el) => {
                cardElsRef.current[idx] = el;
              }}
              data-card-id={card.id}
              className={`${styles.cardWrapper} ${visible[card.id] ? styles.visible : ""}`}
            >
              <InfoCard
                title={card.title}
                description={card.description}
                features={card.features}
                price={card.price}
                duration={card.duration}
                buttonText="Подробнее"
                buttonLink={card.route}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
