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
    thumb: 'https://via.placeholder.com/320x180?text=Campaign+Site',
    comingSoon: true,
  },
  {
    title: 'CyberMonitor (Placeholder)',
    description:
      'Network intrusion detection & logging dashboard (coming soon).',
    url: '#',
    thumb: 'https://via.placeholder.com/320x180?text=CyberMonitor',
    comingSoon: true,
  },
];

export default function Projects() {
  return (
    <>
      <Navbar />
      <main className={styles.grid}>
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.url}
            className={`${styles.card} ${p.comingSoon ? styles.soon : ''}`}
            target={p.comingSoon ? '_self' : '_blank'}
            rel={p.comingSoon ? undefined : 'noopener noreferrer'}
          >
            <div className={styles.thumb}>
              <Image
                src={p.thumb}
                width={320}
                height={180}
                alt={p.title}
                className={styles.image}
              />
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
