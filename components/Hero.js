// components/Hero.js
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.container}>
      <motion.div
        className={styles.card}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        whileHover={{ scale: 1.03 }}       // ← add this
      >
        <div className={styles.avatar}>
          <Image
            src="https://github.com/PufyBee.png?size=200"
            width={120}
            height={120}
            alt="Sam Harrison"
          />
        </div>

        <motion.h1
          className={styles.title}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Sam Harrison
        </motion.h1>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.4 }}
        >
          CS Student · Cybersecurity Enthusiast · Full-Stack Developer
        </motion.p>

        <div className={styles.ctaGroup}>
          <Link href="/projects" passHref>
            <motion.a
              className={styles.cta}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Projects
            </motion.a>
          </Link>
          <motion.a
            href="/resume.pdf"
            download
            className={styles.cta}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download My Resume
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
