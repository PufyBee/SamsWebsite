// components/AboutMe.js
import { motion } from 'framer-motion';
import Skills from './Skills';
import Hobbies from './Hobbies';
import styles from './AboutMe.module.css';

// react-icons imports
import {
  SiPython,
  SiArm,
  SiJavascript,
  SiCplusplus,
  SiTailwindcss,
} from 'react-icons/si';
import { GiTennisRacket } from 'react-icons/gi';
import { FaWalking, FaDumbbell, FaGamepad } from 'react-icons/fa';

export default function AboutMe() {
  const techStack = [
    { name: 'Python',       Icon: SiPython,       color: '#3776AB', proficiency: 90 },
    { name: 'Javascript',   Icon: SiJavascript,   color: '#F7DF1E', proficiency: 85 },                         
    { name: 'ARM Assembly', Icon: SiArm,          color: '#DD0031', proficiency: 70 },
    { name: 'C++',          Icon: SiCplusplus,    color: '#00599C', proficiency: 80 },
    { name: 'Tailwind CSS', Icon: SiTailwindcss,  color: '#06B6D4', proficiency: 85 },
  ];

  const hobbiesList = [
    { name: 'Playing tennis', Icon: GiTennisRacket },
    { name: 'Walking',        Icon: FaWalking },
    { name: 'Lifting weights',Icon: FaDumbbell },
    { name: 'Video games',    Icon: FaGamepad },
  ];

  return (
    <section className={styles.container} id="about">
      <motion.div
        className={styles.card}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        whileHover={{ scale: 1.03 }}
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
          <a href="https://github.com/PufyBee" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/samuelalanharrison" target="_blank" rel="noopener noreferrer">
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
            <Hobbies hobbies={hobbiesList} />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
