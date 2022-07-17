import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import styles from './FatButton.module.scss'

const FatButton = ({upperText, link, color, anchor, target, text}) => {

    return (
        <div className={styles.mainContainer}>
            {upperText && <p>{upperText}</p>}
            {link
                ? <Link href={`${link}`}>
                    <div className={styles.buttonShadow}>
                        <div className={styles.fatButtonContainer} style={color && { backgroundColor: color }}>
                            <p className={styles.buttonText}>{text}</p>
                        </div>
                    </div>
                </Link>
                : anchor
                    ?   <a href={`${anchor}`} target={`${target}`}>
                            <div className={styles.buttonShadow}>
                                <div className={styles.fatButtonContainer} style={color && { backgroundColor: color }}>
                                    <p className={styles.buttonText}>{text}</p>
                                </div>
                            </div>
                        </a>
                    : <div className={styles.buttonShadow}>
                        <div className={styles.fatButtonContainer} style={color && { backgroundColor: color }}>
                            <p className={styles.buttonText}>{text}</p>
                        </div>
                    </div>
            }
        </div>
    )
}

export default FatButton;