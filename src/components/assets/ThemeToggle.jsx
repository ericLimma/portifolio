import React, { useState, useEffect } from 'react';
import styles from './ThemeToggle.module.css';

export function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const html = document.querySelector('html');
    if (darkMode) {
      html.classList.add('dark_mode');
    } else {
      html.classList.remove('dark_mode');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={styles.theme_toggle_container}>
      <input
        className={styles.checkbox}
        id="checkbox"
        type="checkbox"
        checked={darkMode}
        onChange={toggleTheme}
      />
      <label htmlFor="checkbox" className={styles.label}>
        <i className="fa-solid fa-sun"></i>
        <i className="fa-solid fa-moon"></i>
        <div className={styles.ball}></div>
      </label>
    </div>
  );
}
