// pages/_app.js
import { useState, useEffect } from 'react';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState('light');

  // On mount, read any saved preference:
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved) setTheme(saved);
  }, []);

  // Whenever theme changes, update <body> and persist:
  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <>
      {/* You can style this button anywhere you like (header, footer, etc.) */}
      <button
        onClick={() => setTheme(t => (t === 'light' ? 'dark' : 'light'))}
        style={{
          position: 'fixed',
          top: '1rem',
          right: '1rem',
          padding: '0.5rem',
          background: 'var(--card-bg)',
          border: 'none',
          borderRadius: '0.25rem',
          cursor: 'pointer',
        }}
        aria-label="Toggle dark mode"
      >
        {theme === 'light' ? '🌙' : '☀️'}
      </button>

      <Component {...pageProps} />
    </>
  );
}
