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
    title: "ФПСР/Практическая стрельба",
    route: "/shooting/practice",
    description:
      "Практическая стрельба — зрелищный и азартный спорт, требующий непрерывного совершенствования навыков. Организуем индивидуальные и групповые тренировки, клубные матчи для спортсменов с различным уровнем подготовки. Работаем в дисциплинах «ПИСТОЛЕТ» и «КАРАБИН ПИСТОЛЕТНОГО КАЛИБРА». Возможность тренироваться как с арендованным оружием клуба, так с личным оружием.",
    features: [
      "Вступление в ФПСР",
      "Индивидуальные и групповые тренировки",
      "Участие в соревнованиях",
      "Спортивная секция для подростков с 14 лет",
      "Присвоение спортивных разрядов и званий",
    ],
    price: "от 2 500 ₽",
    duration: "от 1 часа",
  },
  {
    id: 2,
    title: "Стрелковые программы",
    route: "/shooting/programs",
    description:
      "Комплексные программы обучения стрельбе из различных видов оружия. Подходят как для новичков, так и для опытных стрелков, желающих систематизировать знания, улучшить навыки и повысить уровень владения оружием. Программы адаптированы как для гражданских стрелков, так и для сотрудников силовых структур.",
    features: [
      "Обучение с нуля и повышение мастерства",
      "Работа с пистолетом, винтовкой, карабином",
      "Подготовка к соревнованиям и нормативам",
      "Индивидуальный график занятий",
    ],
    price: "от 5 000 ₽",
    duration: "от 1 – до 16 часов",
  },
  {
    id: 3,
    title: "Программы для детей и подростков",
    route: "/shooting/practice", // → страница «Практическая стрельба», подраздел «Детская секция»
    description:
      "Специализированные курсы по стрельбе для детей и подростков. Акцент на безопасность, дисциплину, развитие координации и ответственности. Занятия проводят квалифицированные тренеры, имеющие большой опыт работы с детьми.",
    features: [
      "Безопасность на первом месте",
      "Развитие моторики и координации",
      "Групповые и индивидуальные занятия",
      "Участие в соревнованиях",
    ],
    price: "от 5 000 ₽",
    duration: "1.5 часа",
  },
  {
    id: 4,
    title: "Клубные матчи",
    route: "/shooting/practice", // → страница «Практическая стрельба», подраздел «Соревнования»
    description:
      "Регулярные соревнования внутри клуба для всех уровней подготовки. Отличная возможность проверить свои навыки в условиях, приближённых к реальным матчам, и получить соревновательный опыт.",
    features: [
      "Регулярные турниры",
      "Разнообразные упражнения",
      "Оценка результатов и рейтинг",
      "Призы и награды для победителей",
    ],
    price: "от 2 500 ₽",
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
      <div className={styles.content}>
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
