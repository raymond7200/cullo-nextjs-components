import styles from "../styles/SkillsList.module.css";

export default function SkillsList() {
  return (
    <section className={styles.rxSkWrap}>
      <h3 className={styles.rxSkTitle}>Skills</h3>
      <ul className={styles.rxSkList}>
        <li className={styles.rxSkItem}>React</li>
        <li className={styles.rxSkItem}>Next.js</li>
        <li className={styles.rxSkItem}>JavaScript</li>
      </ul>
    </section>
  );
}
