import React, { useRef, useEffect } from 'react'
import { gsap } from "gsap";
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Mirror from '../components/Mirror/Mirror'
import NameWrapper from '../components/NameWrapper/NameWrapper'
import FatButton from '../components/FatButton/FatButton'

export default function Home() {

  const homeButtonRef = useRef(null)
  const [isClicked, setIsClicked] = React.useState(false)

  useEffect(() => {
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

  const hadleAnimation = () => {
    setIsClicked(!isClicked)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Fernando Díaz Franco Portfolio" />
        <meta http-equiv="ScreenOrientation" content="autoRotate:disabled"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
    <div className={styles.mirrorContainer}>
    <Mirror 
          isClicked={isClicked}
        />
    </div>
       
        <NameWrapper />
        <div ref={homeButtonRef} onClick={hadleAnimation}>
          <FatButton
            text={'Empezar'}
            link={'/menu'}
            timeOut={1000}
          />
        </div>
      </main>
{/* 
      <footer className={styles.footer}>
       
      </footer> */}
    </div>
  )
}
