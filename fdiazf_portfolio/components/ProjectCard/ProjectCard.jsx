import React, { useCallback } from 'react'
import FatButton from '../FatButton/FatButton'
import styles from './ProjectCard.module.scss'

const ProjectCard = (props) => {

  const handleClick = () => {
    if (!props.setIsOpen) return;
    props.setIsOpen(!props.isOpen);
  };

  return (
    <div className={styles.mainContainer} id={`${props.id}`}>
      <img src={props.image} alt={props.title} />
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
            link={false}
          />
          :
          <div className={styles.containerChildren}>
            <div 
              className={styles.closeIcon}
              onClick={handleClick}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.3536 12.344L10 11.9904L9.64645 12.344L2.90264 19.0878C2.35301 19.6374 1.46187 19.6374 0.91223 19.0878C0.362592 18.5381 0.362592 17.647 0.912229 17.0974L7.65603 10.3536L8.00959 10L7.65603 9.64645L0.912228 2.90264C0.36259 2.353 0.362591 1.46187 0.912229 0.912229C1.46187 0.362591 2.353 0.362591 2.90264 0.912228L9.64645 7.65603L10 8.00959L10.3536 7.65603L17.0974 0.912228C17.647 0.36259 18.5381 0.362591 19.0878 0.912229C19.6374 1.46187 19.6374 2.353 19.0878 2.90264L12.344 9.64645L11.9904 10L12.344 10.3536L19.0878 17.0974C19.6374 17.647 19.6374 18.5381 19.0878 19.0878C18.5381 19.6374 17.647 19.6374 17.0974 19.0878L10.3536 12.344Z" fill="black" stroke="black" />
              </svg>
            </div>
            {props.cardChildren}
          </div>
        }
      </div>
    </div>
  )
}

export default ProjectCard