/* eslint-disable @next/next/no-img-element */
import React, { useState, useRef, useEffect } from 'react'
import SectionHeader from '../components/SectionHeader/SectionHeader'
import AboutSection from '../components/AboutSection/AboutSection'
import styles from '../styles/AboutMe.module.scss'
import FatButton from '../components/FatButton/FatButton'
import { isMobile } from 'react-device-detect';
import { gsap, Power3 } from "gsap"
import Link from 'next/link'
import { AboutHeader } from '../components/AboutHeader/AboutHeader'
import PseudoFooter from '../components/PseudoFooter/PseudoFooter'
import { ScrollToTopButton } from '../components/ScrollToTopButton/ScrollToTopButton'

const AboutMe = () => {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [emailCopied, setEmailCopied] = useState(null)

    const ferRef = useRef()
    const messageItem = useRef()
    const mainRef = useRef()
    const containerLeft = useRef()

    const textDescription = {
        "Ironhack": [
            'Comprender las necesidades de los usuarios y aportar soluciones creativas para aumentar la experiencia de usuario.',
            'Creación de wireframes para mostrar el contenido y el flujo del proceso en el producto digital.',
            'Creación de prototipos visuales y funcionales para mostrar las funcionalidades y los flujos del producto digital.'
        ],
        "EAToledo": [
            'Proponer y realizar soluciones gráficas para transmitir mensajes publicitarios.',
            'Planificar el desarrollo del proyecto de imagen publicitaria desde la identificación del encargo comunicativo, la definición de los aspectos formales y estéticos, funcionales y técnicos.',
            'Organizar y llevar a cabo las diferentes fases del proyecto y los correspondientes controles de calidad que garanticen la expresión gráfica óptima del mensaje.'
        ],
        "EATalavera": [
            'Maquetación y diseño de publicaciones impresas.',
            'Dirección del proceso de impresión.',
            'Revisiónde proyectos para optimizar el proceso de impresión.'
        ],
        "FOODIZON": [
            'Foodizon es una herramienta para optimizar el desperdicio alimenticio en restaurantes.',
            'Funciones realizadas:',
            'Creación de Design System para la aplicación',
            'Creación de prototipo en alta resolución para su testeo'
        ],
        "BALAMBAM": [
            'Balambam Boo Fest es un evento en el cual se puede disfrutar del Rock & Roll en familia.',
            'Funciones realizadas:',
            'Creación de la imagen de marca a lo largo de todas sus ediciones, cartelería, web.'
        ],
        "EDELVIVES": [
            'Con motivo de la entrada de la LOMLOE en las aulas de los los colegios ha sido necesario actualizar los libros de texto para los tres ciclos de educación primaria.',
            'Funciones realizadas:',
            'Ilustración de las páginas centrales',
            'Creación de sistema de percusión corporal'
        ],
        "MIEDO": [
            'Como reto personal empece a diseñar un personaje al día durante un año, esto se materializo en una colección de libros infantiles, editados por descrito ediciones.',
            'Funciones realizadas:',
            'Ilustración de las páginas interiores y portada',
            'Diseño y maqueación de las páginas interiores',
        ],
        "PHANTOM_CREST": [
            'Esta es una muestra de los videos que realizo para el grupo Phantom Crest. En el que toco el bajo ademas de realizar la identidad visual.'
        ]

    }

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

    useEffect(() => {
        gsap.from(mainRef.current, {
            duration: 1,
            opacity: 0,
            y: -776,
            ease: "power3.out",
        })
        gsap.to(mainRef.current, {
            duration: 1,
            opacity: 1,
            y: 0,
            ease: "power3.out",
        })
        gsap.from(containerLeft.current, {
            duration: 1,
            opacity: 0,
            x: -500,
            ease: "power3.out",
        })
        gsap.to(containerLeft.current, {
            duration: 1,
            opacity: 1,
            x: 0,
            ease: "power3.out",
        })
    }, [])

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
        <div className={styles.mainContaier}>
            <SectionHeader
                // title={'Sobre mí'}
                title={''}
                link={isMobile ? '/menu' : '/'}
            />
            <div className={styles.desktopRows}>
                <div className={styles.desktopFirstRow} ref={containerLeft}>
                    <div className={styles.image}>
                        <img src="/assets/images/fernan.png" alt="Fernando Díaz Franco" />
                    </div>
                    <div className={styles.name}>
                        <h1>Fernando Díaz</h1>
                        <p>UX/UI Designer - Visual Designer - Ilustrador</p>
                    </div>
                    <div className={styles.description}>
                        <p>
                            Tras más de 15 años trabajando como diseñador gráfico e ilustrador, he orientado carrera profesional hacia el diseño de productos digitales. He descubierto un mundo que me apasiona: Transformar problemas complejos en soluciones creativas.
                        </p>
                    </div>
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
                    <div className={styles.herraminentasContainer}>
                        <p
                            className={styles.listTitle}
                        >HERRAMIENTAS</p>
                        <p className={styles.herramientasList}>
                            <p>Suite Adobe | Figma | Miro | Slack | Trello </p>
                        </p>
                        <p className={styles.listTitle}>IDIOMAS</p>
                        <p className={styles.idiomasList}><b>Español</b> - C1 <b>Inglés</b> - B1</p>
                    </div>
                    <div style={{ marginTop: -16 }}>
                        <p className={styles.listTitle}>APTITUDES</p>
                        <div className={styles.containerAptitudes}>
                            <div className={styles.desktopAptitudesByPairs}>
                                <div className={styles.aptitudes}>
                                    <p>Empatía</p>
                                </div>
                                <div className={styles.aptitudes}>
                                    <p>Empatía</p>
                                </div>
                            </div>
                            <div className={styles.desktopAptitudesByPairs}>
                                <div className={styles.aptitudes}>
                                    <p>Motivación</p>
                                </div>
                                <div className={styles.aptitudes}>
                                    <p>Curiosidad</p>
                                </div>
                            </div>
                            <div className={styles.desktopAptitudesByPairs}>
                                <div className={styles.aptitudes}>
                                    <p>Comunicación</p>
                                </div>
                                <div className={styles.aptitudes}>
                                    <p>Integración</p>
                                </div>
                            </div>
                        </div>

                        <div style={{ maxWidth: 365 }}>
                            <p className={styles.listTitle}>AFICIONES</p>
                            <p className={styles.idiomasList}>Soy un melómano empedernido y además toco el bajo en varios <b>bandas</b>.</p>

                        </div>
                        <div style={{ maxWidth: 365 }}>
                            <p className={styles.listTitle}>COMICS</p>
                            <p className={styles.idiomasList}>Llevo leyendo comics y tebeos desde que tengo memoria. Sumergirme en sus historias y me ha inspirado para muchos de mis <b><Link href='/ilustracion'>trabajos de ilustración</Link></b>.</p>
                        </div>

                    </div>
                </div>
                <div className={styles.desktopSecondRow} ref={mainRef}>
                    <div className={styles.experienceContainer} id='experienceContainer'>
                        <AboutHeader title={'EXPERIENCIA LABORAL'} />
                        <AboutSection
                            title={'FOODIZON'}
                            subtitle={''}
                            description={textDescription.FOODIZON}
                            image={'/assets/images/foodizon.jpg'}
                        />
                        <AboutSection
                            title={'BALAMBAM BOO FEST'}
                            subtitle={''}
                            description={textDescription.BALAMBAM}
                            image={'/assets/images/bbf.jpg'}
                        />
                        <AboutSection
                            title={'EDITORIAL EDELVIVES'}
                            subtitle={''}
                            description={textDescription.EDELVIVES}
                            image={'/assets/images/edelvives.jpg'}
                        />
                        <AboutSection
                            title={'NO TENGO MIEDO'}
                            subtitle={''}
                            description={textDescription.MIEDO}
                            image={'/assets/images/miedo.jpg'}

                        />
                        <AboutSection
                            title={'PHANTOM CREST'}
                            subtitle={''}
                            description={textDescription.PHANTOM_CREST}
                            image={'/assets/images/tele.png'}
                            video={true}

                        />
                    </div>
                    <div className={styles.experienceContainer}>
                        <AboutHeader title={'EXPERIENCIA ACADÉMICA'} />
                        <AboutSection
                            title={'IRON HACK'}
                            subtitle={'UX/UI (2021-2022)'}
                            description={textDescription.Ironhack}
                            image={'/assets/images/IHlogo.png'}
                        />
                        <AboutSection
                            title={'ESCUELA DE ARTE TOLEDO'}
                            subtitle={'Gráfica publicitaria (2005-2007)'}
                            description={textDescription.EAToledo}
                            image={'/assets/images/EAToledo.png'}
                        />
                        <AboutSection
                            title={'ESCUELA DE ARTE TALAVERA'}
                            subtitle={'Arte final (2003-2004)'}
                            description={textDescription.EATalavera}
                            image={'/assets/images/EATalavera.png'}
                        />
                    </div>
                </div>

                <div className={styles.desktopThirdRow}>


                </div>
            </div>
            {isMobile && <PseudoFooter />}
            <ScrollToTopButton />
        </div>
    )
}

export default AboutMe