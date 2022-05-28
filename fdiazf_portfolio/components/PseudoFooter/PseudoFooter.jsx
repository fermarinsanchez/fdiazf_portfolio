import React from 'react'
import FatButton from '../FatButton/FatButton'
import styles from './PseudoFooter.module.scss'

const PseudoFooter = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.elementContainer}>
                <FatButton
                    text={'¿Hablamos?'}
                    link={'mailto:fdiazfr@gmail.com'}
                    color={'#FFFFFF'}
                    upperText={'¿Quieres saber más de mí?'}
                />
            </div>
        </div>
    )
}

export default PseudoFooter