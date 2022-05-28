import React from 'react'
import Link from 'next/link'
import styles from './FatButton.module.scss'

const FatButton = (props) => {
    return (
        <div className={styles.mainContainer}>
            <Link href={`${props.link}`}>
                <div className={styles.buttonShadow}>
                    <div className={styles.fatButtonContainer}>
                        <p className={styles.buttonText}>{props.text}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default FatButton;