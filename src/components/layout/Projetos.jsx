import styles from './Projetos.module.css'
import { Card } from '../assets'

import img_indecor from './img/indecor_header.jpg'
import img_shopfree from './img/shopfree_header.jpg'


export function Projetos() {
    return (
        <>
            <section className={styles.projetos_section}>
                <h3>Projetos</h3>
                
                <div  className={styles.projetos_container}>
                    <Card
                        img={img_indecor}
                        alt='descrição rapida da imagem'
                        description='Landing page de um evento de decoração.'
                        link='https://ericlimma.github.io/indecor/' />
                    <Card
                        img={img_shopfree}
                        alt='descrição rapida da imagem'
                        description='Site de demonstração inspirado na landing page da ShopFy.'
                        link='https://ericlimma.github.io/shopfree/' />
                    <Card
                        img={img_indecor}
                        alt='descrição rapida da imagem'
                        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        link='#' />
                </div>
                <p className={styles.see_more}><a href="#">Ver mais ... </a></p>
            </section>
        </>
    )
}