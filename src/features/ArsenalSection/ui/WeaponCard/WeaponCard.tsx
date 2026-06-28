import styles from './WeaponCard.module.scss';

interface Props {
  title: string;
  count: number;
  image: string;
}

export const WeaponCard = ({ title, count, image }: Props) => {

  let typesLabel: string;
  if (count == 2 || count == 3 || count == 4) {
    typesLabel = "вида"
  }
  else {
    typesLabel = "видов"
  }

  return (
    <article className={styles.card}>
      <img src={image} alt={title} className={styles.weapon} />
      <div className={styles.cardContent}>
        <h3>{title}</h3>
        <span>{count} {typesLabel}</span>
        <div className={styles.line} />
      </div>
    </article>
  );
};
