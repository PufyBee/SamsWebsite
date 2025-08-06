// components/AboutMe.js
import { motion } from 'framer-motion';
import Skills from './Skills';
import styles from './AboutMe.module.css';

export default function AboutMe() {
  const techStack = [
    { name: 'Python',       logo: '/logos/python.svg',   proficiency: 90 },
    { name: 'ARM Assembly', logo: '/logos/arm.svg',      proficiency: 70 },
    { name: 'C++',          logo: '/logos/cpp.svg',      proficiency: 80 },
    { name: 'Tailwind CSS', logo: '/logos/tailwind.svg', proficiency: 85 },
  ];

  return (
    <section className={styles.container} id="about">
      <motion.div
        className={styles.card}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        whileHover={{ rotateX: 5, rotateY: -5, scale: 1.02 }}
      >
        <h2 className={styles.heading}>About Me</h2>

        <p className={styles.bio}>
          Hi, I’m Sam Harrison—a computer science student passionate about coding, with a focus on Python and cybersecurity. I love uncovering and addressing vulnerabilities to build more secure systems. Outside of tech, I enjoy walking, playing tennis, lifting weights, and exploring nature.
        </p>

        <div className={styles.buttons}>
          <a href="/resume.pdf" download className={styles.button}>
            Download My Resume
          </a>
        </div>

        <div className={styles.links}>
          <a
            href="https://github.com/PufyBee"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/samuelalanharrison"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>

        <div className={styles.lists}>
          <div>
            <h3 className={styles.listHeading}>Technical Skills</h3>
            <Skills tech={techStack} />
          </div>
          <div>
            <h3 className={styles.listHeading}>Hobbies &amp; Interests</h3>
            <ul className={styles.hobbyList}>
              <li>Playing tennis</li>
              <li>Walking</li>
              <li>Lifting weights</li>
              <li>Video games</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
