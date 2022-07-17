import React, { useRef, useEffect, useState } from 'react'
import { gsap } from "gsap";
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Mirror from '../components/Mirror/Mirror'
import NameWrapper from '../components/NameWrapper/NameWrapper'
import FatButton from '../components/FatButton/FatButton'

export default function Home() {

  const homeButtonRef = useRef(null)
  const holaRef = useRef(null)
  const soyYoRef = useRef(null)
  const isAboutRef = useRef(null)
  const isPortfolioRef = useRef(null)
  const isContactRef = useRef(null)
  const DesktopSidebarRef = useRef(null)
  const leftContainerRef = useRef(null)

  const [isClicked, setIsClicked] = useState(false)
  const [isNameEnter, setIsNameEnter] = useState(false)
  const [isAboutMeEnter, setIsAboutMeEnter] = useState(false)
  const [isPortfolioEnter, setIsPortfolioEnter] = useState(false)
  const [isContactEnter, setIsContactEnter] = useState(false)
  const [handleSidebar, setHandleSidebar] = useState(false)

  useEffect(() => {
    gsap.from(holaRef.current, {
      delay: 1,
      duration: 1,
      opacity: 0,
      ease: "power3.out",

    })
    gsap.to(holaRef.current, {
      duration: 1,
      opacity: 1,
      ease: "power3.out",
      delay: 1,
    })
    gsap.to(holaRef.current, {
      duration: 1,
      opacity: 0,
      ease: "power3.out",
      delay: 2,
    })
    gsap.from(homeButtonRef.current, {
      delay: 3,
      duration: 1,
      y: 400,
      opacity: 0,
      ease: "power3.out",
      stagger: {
        amount: 0.5
      }
    })
  }, [])

  useEffect(() => {
  }, [handleSidebar])



  const hadleAnimation = () => {
    setIsClicked(!isClicked)
  }

  const handleNameWrapperEnter = () => {
    if (!isNameEnter) {
      setIsNameEnter(true)
      gsap.from(soyYoRef.current, {
        duration: 1,
        opacity: 0,
        ease: "power3.out",
      })
      gsap.to(soyYoRef.current, {
        duration: 1,
        opacity: 1,
        ease: "power3.out",
        delay: 1,
      })
    }
  }

  const handleNameWrapperLeave = () => {
    gsap.from(soyYoRef.current, {
      duration: 0.1,
      opacity: 1,
      ease: "power3.out",
    })
    gsap.to(soyYoRef.current, {
      duration: 0.1,
      opacity: 0,
      ease: "power3.out",
      delay: 0.1,
    })
    setTimeout(() => {
      setIsNameEnter(false)
    }, 100)
  }

  const handleAboutWrapperEnter = () => {
    if (!isAboutMeEnter) {
      setIsAboutMeEnter(true)
      gsap.from(isAboutRef.current, {
        duration: 1,
        opacity: 0,
        ease: "power3.out",
      })
      gsap.to(isAboutRef.current, {
        duration: 1,
        opacity: 1,
        ease: "power3.out",
        delay: 1,
      })
    }
  }

  const handleAboutWrapperLeave = () => {
    gsap.from(isAboutRef.current, {
      duration: 0.1,
      opacity: 1,
      ease: "power3.out",
    })
    gsap.to(isAboutRef.current, {
      duration: 0.1,
      opacity: 0,
      ease: "power3.out",
      delay: 0.1,
    })
    setTimeout(() => {
      setIsAboutMeEnter(false)
    }, 100)
  }

  const handlePortfolioWrapperEnter = () => {
    if (!isPortfolioEnter) {
      setIsPortfolioEnter(true)
      gsap.from(isPortfolioRef.current, {
        duration: 1,
        opacity: 0,
        ease: "power3.out",
      })
      gsap.to(isPortfolioRef.current, {
        duration: 1,
        opacity: 1,
        ease: "power3.out",
        delay: 1,
      })
    }
  }

  const handlePortfolioWrapperLeave = () => {
    gsap.from(isPortfolioRef.current, {
      duration: 0.1,
      opacity: 1,
      ease: "power3.out",
    })
    gsap.to(isPortfolioRef.current, {
      duration: 0.1,
      opacity: 0,
      ease: "power3.out",
      delay: 0.1,
    })
    setTimeout(() => {
      setIsPortfolioEnter(false)
    }, 100)
  }

  const handleContactWrapperEnter = () => {
    if (!isContactEnter) {
      setIsContactEnter(true)
      gsap.from(isContactRef.current, {
        duration: 1,
        opacity: 0,
        ease: "power3.out",
      })
      gsap.to(isContactRef.current, {
        duration: 1,
        opacity: 1,
        ease: "power3.out",
        delay: 1,
      })
    }
  }

  const handleContactWrapperLeave = () => {
    gsap.from(isContactRef.current, {
      duration: 0.1,
      opacity: 1,
      ease: "power3.out",
    })
    gsap.to(isContactRef.current, {
      duration: 0.1,
      opacity: 0,
      ease: "power3.out",
      delay: 0.1,
    })
    setTimeout(() => {
      setIsContactEnter(false)
    }, 100)
  }

  useEffect(() => {
    
  
  }, [handleSidebar])



  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio Fernando Díaz Franco</title>
        <meta name="description" content="Fernando Díaz Franco Portfolio" />
        <meta http-equiv="ScreenOrientation" content="autoRotate:disabled"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.leftContainer} ref={leftContainerRef}>

          <div className={styles.containerGlobo} ref={holaRef}>
            <div className={styles.bocadillo}>
              <svg width="218" height="101" viewBox="0 0 218 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M213.277 51.471H181.37L192.105 96.0625L148.929 51.471H5V5.20508" stroke="black" stroke-width="9.1752" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <div className={styles.globoMessage}>
                <h1 className={styles.hola}>
                  ¡Hola!
                </h1>
              </div>
            </div>
          </div>
          <div
            onMouseEnter={handleNameWrapperEnter}
            onMouseLeave={handleNameWrapperLeave}
          >
            <NameWrapper />
          </div>
        </div>
        <div className={styles.mirrorContainer}>
          {isNameEnter &&
            <div className={styles.containerGloboSoyYo} ref={soyYoRef}>
              <div className={styles.bocadillo}>
                <svg width="218" height="101" viewBox="0 0 218 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M213.277 51.471H181.37L192.105 96.0625L148.929 51.471H5V5.20508" stroke="black" stroke-width="9.1752" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <div className={styles.globoMessage}>
                  <h1 className={styles.soyYo}>
                    ¡Ese soy yo!
                  </h1>
                </div>
              </div>
            </div>
          }
          {isAboutMeEnter &&
            <div className={styles.containerGloboSoyYo} ref={isAboutRef}>
              <div className={styles.bocadillo}>
                <svg width="218" height="101" viewBox="0 0 218 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M213.277 51.471H181.37L192.105 96.0625L148.929 51.471H5V5.20508" stroke="black" stroke-width="9.1752" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <div className={styles.globoMessage}>
                  <p className={styles.aboutBocadillo}>
                    Toda la info sobre quién soy, de dónde vengo y a dónde voy
                  </p>
                </div>
              </div>
            </div>
          }
          {isPortfolioEnter &&
            <div className={styles.containerGloboSoyYo} ref={isPortfolioRef}>
              <div className={styles.bocadillo}>
                <svg width="218" height="101" viewBox="0 0 218 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M213.277 51.471H181.37L192.105 96.0625L148.929 51.471H5V5.20508" stroke="black" stroke-width="9.1752" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <div className={styles.globoMessage}>
                  <p className={styles.portfolioBocadillo}>
                    Mis proyectos de UX/UI e Ilustración
                  </p>
                </div>
              </div>
            </div>
          }
          {isContactEnter &&
            <div className={styles.containerGloboSoyYo} ref={isContactRef}>
              <div className={styles.bocadillo}>
                <svg width="218" height="101" viewBox="0 0 218 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M213.277 51.471H181.37L192.105 96.0625L148.929 51.471H5V5.20508" stroke="black" stroke-width="9.1752" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <div className={styles.globoMessage}>
                  <p className={styles.contactoBocadillo}>
                    ¿Hablamos?
                  </p>
                </div>
              </div>
            </div>
          }
          <Mirror
            isClicked={isClicked}
            isNameEnter={isNameEnter}
            isAboutMeEnter={isAboutMeEnter}
            isPortfolioEnter={isPortfolioEnter}
            isContactEnter={isContactEnter}
          />


          <div className={styles.mobileElements}>
            <NameWrapper />
            <div ref={homeButtonRef} onClick={hadleAnimation}>
              <FatButton
                text={'Empezar'}
                link={'/menu'}
                timeOut={1000}
              />
            </div>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <div
            onMouseEnter={handleAboutWrapperEnter}
            onMouseLeave={handleAboutWrapperLeave}
            onClick={() => setHandleSidebar(!handleSidebar)}
            className={styles.rightButtons}
          >
            <FatButton
              text={'Sobre mí'}
            />
          </div>
          <div
            onMouseEnter={handlePortfolioWrapperEnter}
            onMouseLeave={handlePortfolioWrapperLeave}
            onClick={() => setHandleSidebar(!handleSidebar)}
            className={styles.rightButtons}
          >
            <FatButton
              text={'Portfolio'}
            />
          </div>
          <div
            onMouseEnter={handleContactWrapperEnter}
            onMouseLeave={handleContactWrapperLeave}
            onClick={() => setHandleSidebar(!handleSidebar)}
            className={styles.rightButtons}
          >
            <FatButton
              text={'Contacto'}
            />
          </div>
        </div>

      </main>
      {handleSidebar && 
        <div className={styles.DesktopSidebar} ref={DesktopSidebarRef}>
 HEloasdfasdfasdfasd
 fasdf
 asd
 falsesdf
 asdf
 asdfa
 DesktopSidebarRefasd
 f
      </div>
      }
     
      {/* 
      <footer className={styles.footer}>
       
      </footer> */}
    </div>
  )
}
