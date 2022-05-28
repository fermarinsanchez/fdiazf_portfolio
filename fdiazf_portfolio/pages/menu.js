import React from "react";
import NameWrapper from "../components/NameWrapper/NameWrapper";
import FatButton from "../components/FatButton/FatButton";
import styles from '../styles/menu.modules.scss'

const menu = (props) => {
    return (
        <div className={styles.mainContainer}>
            <NameWrapper />
            <FatButton />
            <FatButton />
            <FatButton />
        </div>
    )
}

export default menu