import React from "react";
import NameWrapper from "../components/NameWrapper/NameWrapper";
import FatButton from "../components/FatButton/FatButton";
import styles from '../styles/menu.module.scss'

const menu = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <div className={styles.nameContainer}>
                    <NameWrapper />
                </div>
                <FatButton
                    text={'Sobre mí'}
                    link={'/about-me'}
                />
                <FatButton
                    text={'Portfolio'}
                    link={'/portfolio'}
                />
                <FatButton
                    text={'Contacto'}
                    link={'/contact'}
                />
            </div>
        </div>

    )
}

export default menu