// components/Skills.js
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './Skills.module.css';

export default function Skills({ tech }) {
  return (
    <div className={styles.grid}>
      {tech.map(({ name, logo, proficiency }) => (
        <div key={name} className={styles.item}>
          <Image src={logo} alt={name} width={40} height={40} />
          <span className={styles.label}>{name}</span>
          <div className={styles.barBackground}>
            <motion.div
              className={styles.bar}
              initial={{ width: 0 }}
              whileInView={{ width: `${proficiency}%` }}
              transition={{ duration: 0.8 }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
