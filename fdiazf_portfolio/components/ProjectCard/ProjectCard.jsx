import React from 'react'
import FatButton from '../FatButton/FatButton'
import styles from './ProjectCard.module.scss'

const ProjectCard = (props) => {
  return (
    <div className={styles.mainContainer}>
        <img src={props.image} alt={props.title}/>
        <div className={styles.titleContainer}>
            <p>{props.title}</p>
        </div>
        <div className={styles.descriptionContainer}>
            <p>{props.description}</p>
        </div>
        <FatButton 
            text={'Ver más'}
            link={props.link}
        />
    </div>
  )
}

export default ProjectCard