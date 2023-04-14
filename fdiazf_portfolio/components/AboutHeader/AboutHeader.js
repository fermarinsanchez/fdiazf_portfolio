import styles from './AboutHeader.module.scss'
export const AboutHeader = (props) => {
    return <div className={styles.container}>
        <h3>{props.title}</h3>
    </div>
}