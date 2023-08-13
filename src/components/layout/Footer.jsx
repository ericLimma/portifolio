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
            </div>
        </footer>
    )
}