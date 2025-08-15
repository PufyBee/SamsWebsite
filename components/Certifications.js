// components/Certifications.js
import { MdVerified } from 'react-icons/md';
import styles from './Certifications.module.css';

export default function Certifications({ certs = [] }) {
  return (
    <div className={styles.container}>
      {certs.map((c) => (
        <div key={c.text} className={styles.item}>
          <MdVerified size={20} className={styles.icon} />
          <span className={styles.text}>{c.text}</span>
        </div>
      ))}
    </div>
  );
}
