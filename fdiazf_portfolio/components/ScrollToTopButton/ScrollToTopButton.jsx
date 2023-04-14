/* eslint-disable @next/next/no-img-element */

import { useRef, useState, useEffect } from 'react'
import styles from './ScrollToTopButton.module.scss'
import { gsap } from 'gsap'

export const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false)
    const y = typeof window !== "undefined" && window.scrollY
    const arrowRef = useRef()
    const mainRef = useRef()
    const arrowTimeline = gsap.timeline({ repeat: 3 });


    useEffect(() => {
        if (typeof window !== "undefined") {
            window?.addEventListener('scroll', () => handleScroll())
            return () => {
                window?.removeEventListener('scroll', () => handleScroll())
            }
        }
    }, [y])

    useEffect(() => {
        if (isVisible) {
            gsap.from(mainRef.current, {
                duration: 0.5,
                opacity: 0,
                zIndex: 100
            })
            gsap.to(mainRef.current, {
                duration: 0.5,
                opacity: 1,
                zIndex: 100
            })
            gsap.to(arrowRef.current, {
                y: '+=3',
                ease: 'power1.inOut',
                yoyo: true,
                repeat: 3,
                duration: 0.5
            });
            gsap.to(arrowRef.current, {
                y: '13%',
            });
        } else {
            gsap.to(mainRef.current, {
                duration: 0.5,
                opacity: 0,
                zIndex: -1
            })
        }

    }, [isVisible, arrowTimeline])

    const handleScroll = () => {

        if (typeof window !== "undefined") {
            if (window?.scrollY > 938) { setIsVisible(true) } else { setIsVisible(false) }
        }
    }

    const handleClick = () => {
        if (typeof window !== "undefined") {
            window?.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
            mainRef.current.blur()
        }
    }

    return (
        <div className={styles.main_container} ref={mainRef} onClick={() => handleClick()}>
            <div className={styles.arrow} ref={arrowRef}>
                <img src='assets/svg/arrow_up.svg' alt='arrow up' />
            </div>
            <div className={styles.face}>
                <img src='assets/svg/careto.svg' alt='Fer Face Button scroll to top' />
            </div>
        </div>
    )
}