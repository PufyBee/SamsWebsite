// components/Certifications.js
import { MdVerified } from 'react-icons/md';
import styles from './Certifications.module.css';

export default function Certifications() {
  return (
    <div className={styles.container}>
      <MdVerified size={24} color="#28a745" />
      <span className={styles.text}>
        CompTIA Security+ (SY0-701) — Passed May 2025
        Google Cybersecurity - Passed August 2025
      </span>
    </div>
  );
}
