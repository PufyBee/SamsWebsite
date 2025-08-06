// components/Skills.js
import { motion } from 'framer-motion';
import styles from './Skills.module.css';

export default function Skills({ tech }) {
  return (
    <div className={styles.grid}>
      {tech.map(({ name, Icon, color, proficiency }) => (
        <div key={name} className={styles.item}>
          {/* icon at consistent size & brand color */}
          <Icon size={40} color={color} />
          <span className={styles.label}>{name}</span>
          <div className={styles.barBackground}>
            <motion.div
              className={styles.bar}
              initial={{ width: 0 }}
              whileInView={{ width: `${proficiency}%` }}
              transition={{ duration: 0.8 }}
              style={{ backgroundColor: color }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
