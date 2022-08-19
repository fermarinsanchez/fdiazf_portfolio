import React from 'react'
import styles from './NameWrapper.module.scss'

const NameWrapper = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.nameContainer}>
                <h2>Fernando Díaz</h2>
                <h5>UX/UI Designer - Ilustrador</h5>
            </div>
        </div>
    )
}

export default NameWrapper