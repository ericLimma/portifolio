import styles from './Projetos.module.css'
import { Card } from '../assets'

import img from '../../img/placehodler_car.jpg'


export function Projetos() {
    return (
        <>
            <section className={styles.projetos_container}>
                <h3>Projetos</h3>
                <Card
                    img={img} 
                    alt='descrição rapida da imagem'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'/>
            </section>
        </>
    )
}