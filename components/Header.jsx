import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.rxHdWrap}>
      <h1 className={styles.rxHdTitle}>My Profile</h1>
      <h2 className={styles.rxHdSub}>Raymond Cullo</h2>
    </header>
  );
}
