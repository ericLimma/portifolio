import { AnimatedTitle } from "../assets"
import { Menu } from "./Menu"
import styles from './Header.module.css'


export function Header() {
    return (
        <div className={styles.header_container}>
            <div className={styles.brand}>
                <AnimatedTitle >hii, I'm Erick </AnimatedTitle>
            </div>
            <Menu />
        </div>
    )
}