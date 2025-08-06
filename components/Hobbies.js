// components/Hobbies.js
import { motion } from 'framer-motion';
import styles from './Hobbies.module.css';

export default function Hobbies({ hobbies }) {
  return (
    <div className={styles.grid}>
      {hobbies.map(({ name, Icon }) => (
        <motion.div
          key={name}
          className={styles.item}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* hobby icon tinted your link-blue */}
          <Icon size={32} color="#0070f3" />
          <span>{name}</span>
        </motion.div>
      ))}
    </div>
  );
}
