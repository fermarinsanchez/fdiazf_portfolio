/* eslint-disable react-hooks/rules-of-hooks */
import React, {useRef, useEffect} from 'react'
import ProjectCard from '../components/ProjectCard/ProjectCard'
import SectionHeader from '../components/SectionHeader/SectionHeader'
import { gsap } from 'gsap'
import styles from '../styles/UXUI.module.scss'

const uxuiView = () => {

    const mainRef = useRef()
    const containerLeft = useRef()

    useEffect(() => {
        gsap.from(mainRef.current, {
            duration: 1,
            y: -776,
            ease: "power3.out",
        })
        gsap.to(mainRef.current, {
            duration: 1,
            y: 0,
            ease: "power3.out",
        })
        gsap.from(containerLeft.current, {
            duration: 1,
            x: -500,
            ease: "power3.out",
            })
        gsap.to(containerLeft.current, {
            duration: 1,
            x: 0,
            ease: "power3.out",
            })
    }, [])

    return (
        <main>
            <div className={styles.layoutContainer}>
                <div className={styles.layoutContainer__left} ref={containerLeft}>
                    <SectionHeader link={'/'} />
                    <div className={styles.layoutContainer__left__title}>
                        <div className={styles.name}>
                            <h1>Fernando Díaz</h1>
                            <p>UX/UI Designer - Ilustrador</p>
                        </div>
                    </div>
                    <div className={styles.layoutContainer__left__description}>
                        <p>
                            El bootcamp de diseño UX/UI en Iron Hack ha sido una forma increíble de iniciarme en el sector. He adquirido un gran número de habilidades tales como el uso de distintas herramientas y el trabajo con los clientes.  Asegurándome de que siempre estén contentos con el resultado final.
                        </p>
                        <p> He trabajando en varios temas que me han parecido muy interesantes.</p>
                        <p> Aquí muestro un breve resumen.</p>
                    </div>
                </div>
                <div className={styles.layoutContainer__right} ref={mainRef}>
                <div className={styles.right__title}>
                    <h1>Portfolio UX/UI</h1>
                </div>
                    <div className={styles.layoutContainer__right__projects}>
                    <div className={styles.layoutContainer__right__project}>
                        <ProjectCard
                            image={'/assets/images/canela.jpg'}
                            imgStyle={{width: '280px'}}
                            title={'Canela Party'}
                            description={'Proyecto enfocado en la creación de un microsite para un evento,  en el cual la interacción con el usuario dependerá de la etapa en la que se encuentre el festival.'}
                            anchor={'https://medium.com/@fdiazfr/iron-hack-ux-ui-proyecto-6-micrositio-de-un-evento-2468149d6758'}
                        />

                    </div>
                    <div className={styles.layoutContainer__right__project}>
                        <ProjectCard
                            image={'/assets/images/nutric.jpg'}
                            imgStyle={{width: '280px'}}
                            title={'Nutric'}
                            description={'Proyecto enfocado en la creación de una app relacionada con el bienestar, en la cual el usuario podrá comprobar su evolución a través de un sistema de traqueo.'}
                            anchor={'https://medium.com/@fdiazfr/iron-hack-ux-ui-proyecto-7-bienestar-c997a241f1d2'}
                        />
                        
                    </div>
                    <div className={styles.layoutContainer__right__project}>
                        <ProjectCard
                            image={'/assets/images/Group5.jpg'}
                            imgStyle={{width: '280px'}}
                            title={'Musa'}
                            description={'Proyecto Final. Musa es una herramienta para ayudar a los usuarios a tomar  decisiones creativas a través de la inteligencia artificial.'}
                            anchor={'https://medium.com/@fdiazfr/iron-hack-ux-ui-proyecto-final-musa-bbc9e72684c8'}
                        />
                        
                    </div>
                    </div>
                </div>

            </div>
        </main>
    )
}

export default uxuiView
