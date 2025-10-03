import styles from "../styles/ProfileCard.module.css";

export default function ProfileCard() {
  return (
    <div className={styles.rxPfCard}>
      <img
        src="https://picsum.photos/250"
        alt="profile"
        className={styles.rxPfImg}
      />
      <h2 className={styles.rxPfName}>Raymond Cullo</h2>
      <p className={styles.rxPfAge}>Age: 19</p>
      <p className={styles.rxPfDesc}>Just a college student want to learn</p>
    </div>
  );
}
