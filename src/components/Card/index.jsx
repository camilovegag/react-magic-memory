import styles from "./Card.module.css";

const Card = ({ src }) => (
  <div className={styles.card}>
    <div>
      <img className={styles.front} src={src} alt="Card front" />
      <img className={styles.back} src="/img/cover.png" alt="Card back" />
    </div>
  </div>
);

export default Card;
