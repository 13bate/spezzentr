import styles from './WeaponCard.module.scss';

interface Props {
  title: string;
  count: number;
  image: string;
}

export const WeaponCard = ({ title, count, image }: Props) => {
  return (
    <article className={styles.card}>
      <img src={image} alt={title} className={styles.weapon} />
      <div className={styles.cardContent}>
        <h3>{title}</h3>
        <span>{count} видов</span>
        <div className={styles.line} />
      </div>
    </article>
  );
};
