import React, {useState, useRef} from 'react'
import { gsap } from "gsap";
import SectionHeader from '../components/SectionHeader/SectionHeader'
import NameWrapper from '../components/NameWrapper/NameWrapper'
import UXUISection from '../components/UXUISection/UXUISection';
import IllustrationSection from '../components/IllustrationSection/IllustrationSection';
import styles from '../styles/Portfolio.module.scss'

const portfolio = () => {

    const buttonRef = useRef();
    const arrowRef = useRef();

    const [category, setCategory] = useState('UX/UI');

    const handleClick = () => {
        if (category === 'UX/UI') {
            gsap.to(buttonRef.current, {
                duration: 0.5,
                x: -138,
                ease: "power3.inOut"
            });
            gsap.to(arrowRef.current, {
                duration: 0.5,
                x: 90,
                rotate: 180,
                ease: "power3.inOut"
            });
            setCategory('Ilustration');
        } else {
            gsap.to(buttonRef.current, {
                duration: 0.5,
                x: 0,
                ease: "power3.inOut"
            });
            gsap.to(arrowRef.current, {
                duration: 0.5,
                x: 0,
                rotate: 0,
                ease: "power3.inOut"
            });
            setCategory('UX/UI');
        }
    }

    return (
        <>
        <div className={styles.mainContainer}>
            <SectionHeader
                title={'Portfolio'}
                link={'/menu'}
            />  
            <NameWrapper />
            <div className={styles.switchContainer}>
                <p>UX/UI</p>
                <p>Ilustración</p>
                <div className={styles.yellowButton} ref={buttonRef} onClick={handleClick}>
                    <div className={styles.arrow} ref={arrowRef}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 12C24 12.8284 23.3284 13.5 22.5 13.5L5.745 13.5L13.065 20.82C13.6526 21.4076 13.6509 22.3607 13.0612 22.9462C12.4745 23.5288 11.5271 23.5271 10.9425 22.9425L1.04907e-06 12L10.942 1.05797C11.5263 0.473668 12.4737 0.47367 13.058 1.05797C13.6419 1.6419 13.6423 2.58852 13.0589 3.17297L5.745 10.5L22.5 10.5C23.3284 10.5 24 11.1716 24 12Z" fill="black" />
                        </svg>
                    </div>
                </div>
            </div>
           
        </div>
        {category === 'UX/UI'  
        ? 
        <div className={styles.portfolioContainer}>
            <UXUISection />
        </div>
        :
        <div className={styles.illustationContainer}>
            <IllustrationSection />
        </div>}
        </>
    )
}

export default portfolio