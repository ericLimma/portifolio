import React, { useEffect, useState } from 'react';
import styles from './AnimatedTitle.module.css';

export function AnimatedTitle({ children }) {
  const [animatedText, setAnimatedText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index === children.length) {
        clearInterval(interval);
      } else {
        setAnimatedText((prevText) => prevText + children.charAt(index));
        index++;
      }
    }, 100); // Ajuste o tempo de digitação aqui (em milissegundos)

    return () => {
      clearInterval(interval); // Limpa o intervalo quando o componente é desmontado
    };
  }, [children]);

  return (
    <h1>
      {animatedText}
      <span className={styles.cursor}>|</span>
    </h1>
  );
}