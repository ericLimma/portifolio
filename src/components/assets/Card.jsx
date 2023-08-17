import styles from './Card.module.css'

export function Card({img, alt, description, link}) {
    return (
        <>
            <div className={styles.card}>
                <img className={styles.card_img} src={img} alt={alt} />
                <p className={styles.card_description}>{description}</p>
                <div className={styles.link}><a target='_blank' href={link}>visitar</a></div>
            </div>
        </>
    )
}