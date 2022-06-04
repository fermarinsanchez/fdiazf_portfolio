import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import styles from './FatButton.module.scss'

const FatButton = (props) => {

    return (
        <div className={styles.mainContainer}>
            {props.upperText && <p>{props.upperText}</p>}
            {props.link
                ? <Link href={`${props.link}`}>
                    <div className={styles.buttonShadow}>
                        <div className={styles.fatButtonContainer} style={props.color && { backgroundColor: props.color }}>
                            <p className={styles.buttonText}>{props.text}</p>
                        </div>
                    </div>
                </Link>
                : props.anchor
                    ?   <a href={`${props.anchor}`} target={`${props.target}`}>
                            <div className={styles.buttonShadow}>
                                <div className={styles.fatButtonContainer} style={props.color && { backgroundColor: props.color }}>
                                    <p className={styles.buttonText}>{props.text}</p>
                                </div>
                            </div>
                        </a>
                    : <div className={styles.buttonShadow}>
                        <div className={styles.fatButtonContainer} style={props.color && { backgroundColor: props.color }}>
                            <p className={styles.buttonText}>{props.text}</p>
                        </div>
                    </div>
            }
        </div>
    )
}

export default FatButton;