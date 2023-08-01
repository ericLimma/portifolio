import styles from './Projetos.module.css'
import { Card } from '../assets'

import img from '../../img/placehodler_car.jpg'


export function Projetos() {
    return (
        <>
            <section className={styles.projetos_section}>
                <h3>Projetos</h3>
                
                <div  className={styles.projetos_container}>
                    <Card
                        img={img}
                        alt='descrição rapida da imagem'
                        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        link='#' />
                    <Card
                        img={img}
                        alt='descrição rapida da imagem'
                        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        link='#' />
                    <Card
                        img={img}
                        alt='descrição rapida da imagem'
                        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        link='#' />
                </div>
            </section>
        </>
    )
}