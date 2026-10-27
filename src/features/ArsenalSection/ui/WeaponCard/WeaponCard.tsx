import styles from './WeaponCard.module.scss';

interface Props {
  title: string;
  count: number;
  image: string;
}

export const WeaponCard = ({ title, count }: Props) => {

  return (
    <article className={styles.card}>

      <div className={styles.cardContent}>
        <h3>{title}</h3>
        <span>{count} {"моделей"}</span>
        <div className={styles.line} />
      </div>
    </article>
  );
};
