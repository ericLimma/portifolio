import styles from './Card.module.css'

export function Card({img, alt, description, link}) {
    return (
        <>
            <div className={styles.card}>
                <img className={styles.card_img} src={img} alt={alt} />
                <p className={styles.card_description}>{description}</p>
                <div><a href="https://www.instagram.com/p/CutVeFRNMJm/?img_index=2">acordion</a></div>
            </div>
        </>
    )
}