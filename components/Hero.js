import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>Welcome to My Portfolio</h1>
      <p className={styles.subtitle}>CS student & cybersecurity enthusiast</p>
    </section>
  );
}
