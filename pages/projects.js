// pages/projects.js
import Navbar from '../components/Navbar';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '../styles/Projects.module.css';

const projects = [
  {
    title: 'ShadeLight Website',
    description:
      'Static site showcasing frontend & backend repos, with a downloadable executable.',
    url: 'https://pufybee.github.io/ShadelightSite/',
    thumb: '/images/shadelight-site.png',
    comingSoon: false,
  },
  {
    title: 'ShadeLight Electron',
    description:
      'Electron app with port-scanning and malware-scanning capabilities.',
    url: 'https://github.com/PufyBee/Shadelight-electron',
    thumb: '/images/shadelight-app.png',
    comingSoon: false,
  },
  {
    title: 'Security Jeopardy Quiz',
    description:
      'Interactive cybersecurity quiz game with category-based questions and timed scoring.',
    url: 'https://security-jeopardy.vercel.app/',
    thumb: '/images/jeopardy-thumb.png',  // ← put your screenshot here
    comingSoon: false,
  },
  {
    title: `Grandfather's Campaign Site`,
    description: 'A simple “Coming Soon” campaign site for my grandfather.',
    url: '#',
    thumb: '/images/placeholder-campaign.png',
    comingSoon: true,
  },
  {
    title: 'CyberMonitor (Placeholder)',
    description:
      'Network intrusion detection & logging dashboard (coming soon).',
    url: '#',
    thumb: '/images/placeholder-cyber.png',
    comingSoon: true,
  },
];

export default function Projects() {
  return (
    <>
      <Navbar />
      <main className={styles.grid}>
        {projects.map((p, idx) => (
          <motion.a
            key={p.title}
            href={p.url}
            className={`${styles.card} ${p.comingSoon ? styles.soon : ''}`}
            target={p.comingSoon ? '_self' : '_blank'}
            rel={p.comingSoon ? undefined : 'noopener noreferrer'}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
          >
            <div className={styles.thumb}>
              <div className={styles.imageWrapper}>
                <Image
                  src={p.thumb}
                  alt={p.title}
                  layout="fill"
                  objectFit="cover"
                  priority={idx === 0}
                />
              </div>
              {p.comingSoon && (
                <span className={styles.badge}>Coming Soon</span>
              )}
            </div>
            <h2 className={styles.title}>{p.title}</h2>
            <p className={styles.desc}>{p.description}</p>
          </motion.a>
        ))}
      </main>
    </>
  );
}
