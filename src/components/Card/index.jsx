import styles from "./Card.module.css";

const Card = ({ card, handleChoice, flipped }) => {
  const handleClick = () => {
    handleChoice(card);
  };

  return (
    <div className={styles.card}>
      <div className={flipped ? styles.flipped : ""}>
        <img className={styles.front} src={card.src} alt="Card front" />
        <img className={styles.back} src="/img/cover.png" alt="Card back" onClick={handleClick} />
      </div>
    </div>
  );
};

export default Card;
