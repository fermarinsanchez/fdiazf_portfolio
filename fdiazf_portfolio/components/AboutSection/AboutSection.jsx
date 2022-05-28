import React from 'react'
import styles from './AboutSection.module.scss'

const AboutSection = (props) => {
  return (
    <div className={styles.mainContainer}>
        <div className={styles.titleContainer}>
            <p>{props.title}</p>
            <span className={styles.yellowBar}/>
        </div>
        <div className={styles.descriptionContainer}>
            <p>{props.subtitle && props.subtitle}</p>
        </div>
        <div className={styles.description}>
            {props.description.map((paragraph, id) => {
                return <p key={id}>{paragraph}</p>
            })}
        </div>
    </div>
  )
}

export default AboutSection
