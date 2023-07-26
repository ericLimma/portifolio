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
                                    <a target="_blank" href=""><i className={`${styles.git} ${styles.social_media_icon} fa-brands fa-github`}></i></a>
                                </li>
                                <li>
                                    <a target="_blank" href=""><i className={`${styles.linkedin} ${styles.social_media_icon}  fa-brands fa-linkedin`}></i></a>
                                </li>
                                <li>
                                    <a target="_blank" href="https://api.whatsapp.com/send?phone=+5519996624496"><i className={`${styles.whatsapp} ${styles.social_media_icon} fa-brands fa-whatsapp`}></i></a>
                                </li>
                            </ul>
                        </div>
                        <ThemeToggle />

                    </nav>
                </menu>
            </div >
        </>
    )
}