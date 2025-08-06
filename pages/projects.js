// pages/projects.js
import Navbar from '../components/Navbar';
import Image from 'next/image';
import styles from '../styles/Projects.module.css';

const projects = [
  {
    title: 'ShadeLight Website',
    description:
      'Static site showcasing frontend & backend repos, with a downloadable executable.',
    url: 'https://pufybee.github.io/ShadelightSite/',
    thumb: '/images/shadelight-site.png',
  },
  {
    title: 'ShadeLight Electron',
    description:
      'Electron app with port-scanning and malware-scanning capabilities.',
    url: 'https://github.com/PufyBee/Shadelight-electron',
    thumb: '/images/shadelight-app.png',
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
          <a
            key={p.title}
            href={p.url}
            className={`${styles.card} ${p.comingSoon ? styles.soon : ''}`}
            target={p.comingSoon ? '_self' : '_blank'}
            rel={p.comingSoon ? undefined : 'noopener noreferrer'}
          >
            <div className={styles.thumb}>
              <div className={styles.imageWrapper}>
                <Image
                  src={p.thumb}
                  alt={p.title}
                  fill
                  style={{ objectFit: 'contain', objectPosition: 'center' }}
                  priority={idx === 0}
                />
              </div>
              {p.comingSoon && <span className={styles.badge}>Coming Soon</span>}
            </div>
            <h2>{p.title}</h2>
            <p>{p.description}</p>
          </a>
        ))}
      </main>
    </>
  );
}
