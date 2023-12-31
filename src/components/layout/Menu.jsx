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
                                    <a target="_blank" href="https://web.whatsapp.com/send?phone=5519996624496
                                    "><i className={`${styles.web_whatsapp} ${styles.social_media_icon} fa-brands fa-whatsapp`}></i></a>
                                </li>
                                <li>
                                    <a target="_blank" href="http://api.whatsapp.com/send?1=pt_BR&phone=5519996624496
                                    "><i className={`${styles.whatsapp} ${styles.social_media_icon} fa-brands fa-whatsapp`}></i></a>
                                </li>

                            </ul>
                        </div>


                    </nav>
                </menu>
            </div >
        </>
    )
}