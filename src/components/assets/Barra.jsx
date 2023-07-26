import { useEffect, useState } from 'react';
import styles from './Barra.module.css'

export function Barra({ tech, percent }) {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const intersectionObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {

                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                }
            });
        }, { threshold: 0.5 });

        const sentinelElement = document.querySelector('#barra');
        if (sentinelElement) {
            intersectionObserver.observe(sentinelElement);
        }

        return () => intersectionObserver.disconnect();
    }, [isVisible]);
    const vazia = {
        width: 0,
        transition : 'width .2s'
    }
    const preenchida = {
        width: `${percent}%`,
        transition: 'width 1s'
    }

    return (
        <>
            <div id='barra' className={styles.barra_container}>
                <div className={styles.barra_description}>
                    <p>{tech}</p>
                    <p>{percent}%</p>
                </div>
                <div className={`${styles.barra_vazia} ${styles.barra}`}>
                    <div className={`${styles.barra_cheia} ${styles.barra}`} style={isVisible ? preenchida : vazia}></div>
                </div>

            </div>
        </>

    )
}