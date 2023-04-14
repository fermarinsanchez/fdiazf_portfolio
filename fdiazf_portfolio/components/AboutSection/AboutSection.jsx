import React from 'react'
import styles from './AboutSection.module.scss'

const AboutSection = (props) => {
    return (
        <div className={styles.container}>

            <div className={styles.mainContainer}>
                <div className={styles.titleContainer}>
                    <p>{props.title}</p>
                </div>
                <div className={styles.descriptionContainer}>
                    {props.subtitle && <p>{props.subtitle}</p>}
                </div>
                <div className={styles.description}>
                    {props.description && props.description.map((paragraph, id) => {
                        return <p key={id}>{paragraph}</p>
                    })}
                </div>
            </div>
            {props.video ?
                <div className={styles.iframeContainer}>

                    <iframe width="560" height="315" src="https://www.youtube.com/embed/C0kjrB-UrT0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                :
                <div className={styles.imageContainer} style={{ backgroundImage: `url(${props.image})` }}>


                </div>}

        </div>
    )
}

export default AboutSection
