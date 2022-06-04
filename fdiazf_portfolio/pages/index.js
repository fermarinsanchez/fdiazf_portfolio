import React, { useRef, useEffect } from 'react'
import { gsap } from "gsap";
import Head from 'next/head'
import Image from 'next/image'
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
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Mirror 
          isClicked={isClicked}
        />
        <NameWrapper />
        <div ref={homeButtonRef} onClick={hadleAnimation}>
          <FatButton
            text={'Empezar'}
            link={'/menu'}
            timeOut={1000}
          />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
