import styles from './Main.module.css';

//imagens
import avatar from '../../img/avatar_azul.png'
import js from '../../img/js.png'
import css from '../../img/css.png'
import html from '../../img/html.png'
import bootstrap from '../../img/bootstrap.png'
import react from '../../img/react.png'
import python from '../../img/python.png'

export function Main() {
    return (
        <main className={styles.main} id='main'>
            <div className={styles.about_me}>
                <h2>Desenvolvedor Front-End</h2>
                <p>
                    Olá mundo! Eu sou o Erick, tenho 28 anos e trabalho há 7 anos como designer gráfico. Atualmente, possuo conhecimento nas tecnologias HTML5, CSS3, JavaScript e React. Estou sempre buscando expandir meu conhecimento e aprender novas tecnologias.
                </p>
                <div className={styles.tech_icon_container}>
                    <img src={html} alt="html 5 logo" />
                    <img src={css} alt="css 3 logo" />
                    <img src={js} alt="java script logo" />
                    <img src={bootstrap} alt="bootstrap logo" />
                    <img src={react} alt="react javaScript logo" />
                    <img src={python} alt="python logo" />
                </div>
            </div>
            <img className={styles.avatar} src={avatar} alt="ilustração de um homem em aquarela, na tematica cyberpunk" />
        </main>
    )
}