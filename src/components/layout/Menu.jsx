import { useRef, useState } from 'react'
import { ThemeToggle } from "../assets"
import styles from './Menu.module.css'


export function Menu() {
    const dropDownRef = useRef(null)
    const [isActive, setIsActive] = useState(false)
    const onClick = () => setIsActive(!isActive)

    return (
        <>
            <div className={styles.menu_container} >
                <button className={styles.btn} onClick={onClick}>
                    <i className="fa-solid fa-bars" />
                </button>
                <menu className={styles.dropdown}>

                    <nav ref={dropDownRef} className={`${styles.menu} ${isActive ? styles.active : styles.inactive}`}>
                        <li>
                            <ThemeToggle />
                        </li>
                        <li>
                            <a className={styles.nav_link} href="#">Formação</a>
                        </li>
                        <li>
                            <a className={styles.nav_link} href="#">Experiência</a>
                        </li>
                        <li>
                            <a className={styles.nav_link} href="#">Sobre</a>
                        </li>

                        <div className={styles.social_media}>
                            <ul>
                                <li>
                                    <a target="_blank" href="https://github.com/ericLimma"><i className={`${styles.git} ${styles.social_media_icon} fa-brands fa-github`}></i></a>
                                </li>
                                <li>
                                    <a target="_blank" href="https://www.linkedin.com/in/erick-r-a-lima-6a0321253"><i className={`${styles.linkedin} ${styles.social_media_icon}  fa-brands fa-linkedin`}></i></a>
                                </li>
                                <li>
                                    <a target="_blank" href="https://wa.me/?text=Olá!%20Estou%20buscando%20um%20desenvolvedor%20front-end%20e%20gostaria%20de%20conversar%20sobre%20suas%20experiências%20e%20trabalhos.%20Podemos%20falar?"><i className={`${styles.whatsapp} ${styles.social_media_icon} fa-brands fa-whatsapp`}></i></a>
                                </li>
                            </ul>
                        </div>


                    </nav>
                </menu>
            </div >
        </>
    )
}