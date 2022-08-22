import React from 'react'
import FatButton from '../components/FatButton/FatButton'
import MirrorContacto from '../components/MirrorContacto/MirrorContacto'
import NameWrapper from '../components/NameWrapper/NameWrapper'
import SectionHeader from '../components/SectionHeader/SectionHeader'
import styles from '../styles/Contacto.module.scss'

const contacto = () => {
  return (
    <div className={styles.mainContainer}>
      <SectionHeader
        title={'Contacto'}
        link={'/menu'}
      />
      <NameWrapper />
      <div className={styles.containerButtonMail}>
        <FatButton
          text={'Mail'}
          anchor={'mailto:fdiazfr@gmail.com'}
          target={'_blank'}
          upperText={'Cuéntame algo'}
        />
      </div>
      <div className={styles.containerButtonLinkedin}>
        <FatButton
          text={'Linkedin'}
          anchor={'https://linkedin.com/in/fdiazfr'}
          target={'_blank'}
        />
      </div>
      <div className={styles.containerMirror}>
        <div className={styles.mirror}>
          <MirrorContacto />
        </div>
      </div>


    </div>
  )
}

export default contacto