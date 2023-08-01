import styles from './Footer.module.css'
import logo from '../../img/logo_low.png'

export function Footer() {
    return (
        <footer className={styles.footer_section}>
            <hr />
            <div className={styles.social_media}>
                <img className={styles.logo} src={logo} alt="logo de erick lima" />
                <div>
                    <p>Desenvolvido por Erick Lima</p>
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
            </div>
        </footer>
    )
}