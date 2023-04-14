/* eslint-disable @next/next/no-img-element */
import { useState, useRef, useEffect } from 'react'
import FatButton from '../FatButton/FatButton'
import { gsap, Power3 } from "gsap"
import styles from './PseudoFooter.module.scss'

const PseudoFooter = () => {
    const [emailCopied, setEmailCopied] = useState(null)
    const ferRef = useRef()
    const messageItem = useRef()

    useEffect(() => {
        if (emailCopied === 'show') {

            gsap.to(ferRef.current, {
                duration: 1,
                opacity: 1,
                y: 0,
                css: { display: 'block', height: 190, bottom: 0 },
                ease: Power3.easeInOut,
                stagger: {
                    amount: 0.3
                }

            })
            gsap.from(messageItem.current, {
                delay: 1,
                opacity: 0
            })
            gsap.to(messageItem.current, {
                delay: 1,
                duration: .7,
                opacity: 1
            })
        } else if (emailCopied === 'hide') {

            gsap.to(ferRef.current, {
                duration: 1,
                opacity: 0,
                y: -100,
                css: { display: 'none', height: 0 },
                ease: Power3.easeInOut,
                stagger: {
                    amount: 0.3
                }
            })
            gsap.from(messageItem.current, {
                opacity: 1,
                ease: Power3.easeInOut,

            })
            gsap.to(messageItem.current, {
                duration: 1,
                opacity: 0,
                ease: Power3.easeInOut,

            })
        }
    }, [emailCopied])

    const handleCopyToClipboard = () => {
        if (!emailCopied || emailCopied === 'hide') {
            setEmailCopied('show')
            navigator.clipboard.writeText('fdiazfr@gmail.com')
            setTimeout(() => {
                setEmailCopied('hide')
            }, 2000);
        }
    }
    return (
        <div className={styles.mainContainer}>
            <div className={styles.hablamos}>
                <p>¿Hablamos? Mándame un mail</p>

                <div className={styles.emailButtonDesktop}>
                    <div className={styles.ferEmailCopied} ref={ferRef} onClick={() => setIsModalOpen(!isModalOpen)} >
                        <img src='/assets/svg/FerSvgDeskTtop.svg'
                            alt='fer' />
                        <div className={styles.copiedMessage} ref={messageItem}>
                            <span>Copiado!</span>
                        </div>
                    </div>
                    <FatButton
                        color={'white'}
                        text={'fdiazfr@gmail.com'}
                        callback={handleCopyToClipboard}
                    />

                </div>
            </div>
        </div>

    )
}

export default PseudoFooter