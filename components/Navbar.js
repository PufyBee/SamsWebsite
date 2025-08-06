import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li><a href="/">Home</a></li>
        <li><a href="/projects">Projects</a></li>
      </ul>
    </nav>
  );
}
