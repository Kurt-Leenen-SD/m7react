import styles from './Card.module.css'

export function Card(props) {
    return (
        <div className={styles.card}>
            <h2>{props.name}</h2>
            <p>{props.name} is cool</p>
        </div>
    )
}