import React from 'react'
import FatButton from '../FatButton/FatButton'
import styles from './ProjectCard.module.scss'

const ProjectCard = (props) => {

  const handleClick = () => {
    if(!props.setIsOpen) return;
    props.setIsOpen(!props.isOpen);
  };

  return (
    <div className={styles.mainContainer}>
        <img src={props.image} alt={props.title}/>
        <div className={styles.titleContainer}>
            <p>{props.title}</p>
        </div>
        <div className={styles.descriptionContainer}>
            <p>{props.description}</p>
        </div>
        <div onClick={handleClick}>
        {!props.isOpen ? 
        <FatButton 
            text={'Ver más'}
            link={props.link}
        />
        :
        props.cardChildren}
        </div>
    </div>
  )
}

export default ProjectCard