// pages/projects.js
import Navbar from '../components/Navbar';
import styles from '../styles/Projects.module.css';

const projects = [
  {
    title: 'ShadeLight Website',
    description: 'The live site for ShadeLight (static HTML/CSS/JS)',
    url: 'https://pufybee.github.io/ShadelightSite/'
  },
  {
    title: 'ShadeLight Electron',
    description: 'Electron application for dynamic theming',
    url: 'https://github.com/PufyBee/Shadelight-electron'
  }
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
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>{p.title}</h2>
            <p>{p.description}</p>
          </a>
        ))}
      </main>
    </>
  );
}
