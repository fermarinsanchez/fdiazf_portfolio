import React, { useState, useEffect, useRef } from 'react'
import styles from '../styles/Ilustracion.module.scss'
import SectionHeader from '../components/SectionHeader/SectionHeader'
import ProjectCard from '../components/ProjectCard/ProjectCard'
import { gsap } from 'gsap'


const ilustracionView = () => {

    const [editorial, setEditorial] = useState(false);
    const [carteleria, setCarteleria] = useState(false);
    const [portadas, setPortadas] = useState(false);

    const mainRef = useRef()
    const childrenRef = useRef()
    const projectCardsContainer = useRef()
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

    const handleClick = () => {
        setEditorial(false)
        setCarteleria(false)
        setPortadas(false)
        gsap.to(mainRef.current, {
            duration: 1,
            y: 0,
            ease: "power3.out",
        })
        gsap.to(projectCardsContainer.current, {
            duration: 1,
            opacity: 1,
            ease: "power3.out",
        })
    }


    useEffect(() => {
        if (editorial || carteleria || portadas) {
            gsap.from(childrenRef.current, {
                duration: 1,
                y: -300,
                opacity: 0,
                ease: "power3.out",
            })
            gsap.from(mainRef.current, {
                duration: 1,
                y: 0,
                ease: "power3.out",
            })
            gsap.to(mainRef.current, {
                duration: 1,
                y: -776,
                ease: "power3.out",
            })
            gsap.to(projectCardsContainer.current, {
                duration: 1,
                opacity: 0,
                ease: "power3.out",
            })
        }
    }, [editorial, carteleria, portadas])


    const handleAnimation = (state, setter) => {
        if (state) {
            gsap.to(childrenRef.current, {
                duration: 1,
                y: -1300,
                opacity: 1,
                ease: "power3.out",
            })
            setTimeout(() => {
                setter(false)
            }, 600)
        } else {
            setter(true)
        }
    }
    const handleSectionTitle = () => {
        if (editorial) {
            return 'Editorial'
        } else if (carteleria) {
            return 'Cartelería'
        } else if (portadas) {
            return 'Portadas'
        }
    }


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
                            Desde que era niño me encantaba dibujar. He tenido la suerte de poder dedicarme a este trabajo, dándome grandes satisfacciones en mi vida.
                        </p>
                        <p>Es importante conocer tus puntos fuertes y débiles. Saber qué te hace único como artista y cómo puedes utilizarlo en tu beneficio para crear un producto.</p>
                        <p>Principalmente he realizado ilustraciones para libros infantiles y  de texto, aunque también tengo experiencia en cartelería para conciertos y portadas de discos. </p>
                        <p>Aquí se puede ver una muestra.</p>
                    </div>
                </div>
                <div className={styles.layoutContainer__right} ref={mainRef} >
                    <div className={styles.right__title}>
                        <h1>Portfolio Ilustración</h1>
                    </div>
                    <div className={styles.layoutContainer__right__projects} ref={projectCardsContainer}>
                        <ProjectCard
                            image={'/assets/images/VampireCard.jpg'}
                            title={'Editorial'}
                            description={'Ilustraciones de libros de texto y narrativa para diversas editoriales.'}
                            setIsOpen={setEditorial}
                            isOpen={editorial}
                            handleAnimation={handleAnimation}
                            cardChildren={
                                null
                            }
                        />
                        <ProjectCard
                            image={'/assets/images/piedraCardMobile.jpg'}
                            title={'Cartelería'}
                            description={'Ilustración de carteles y flyers para distintos eventos musicales.'}
                            setIsOpen={setCarteleria}
                            isOpen={carteleria}
                            handleAnimation={handleAnimation}
                            cardChildren={
                                null
                            }
                        />
                        <ProjectCard
                            image={'/assets/images/portadaLPCard.jpg'}
                            title={'Discos'}
                            description={'Ilustración de portadas e interiores para discos de vinilo, cd y digital.'}
                            setIsOpen={setPortadas}
                            isOpen={portadas}
                            handleAnimation={handleAnimation}
                            cardChildren={
                                null
                            }
                        />
                    </div>
                    {editorial && (
                        <div className={styles.containerOpen}>
                            <div
                                className={styles.closeIcon}
                                onClick={handleClick}
                            >
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.3536 12.344L10 11.9904L9.64645 12.344L2.90264 19.0878C2.35301 19.6374 1.46187 19.6374 0.91223 19.0878C0.362592 18.5381 0.362592 17.647 0.912229 17.0974L7.65603 10.3536L8.00959 10L7.65603 9.64645L0.912228 2.90264C0.36259 2.353 0.362591 1.46187 0.912229 0.912229C1.46187 0.362591 2.353 0.362591 2.90264 0.912228L9.64645 7.65603L10 8.00959L10.3536 7.65603L17.0974 0.912228C17.647 0.36259 18.5381 0.362591 19.0878 0.912229C19.6374 1.46187 19.6374 2.353 19.0878 2.90264L12.344 9.64645L11.9904 10L12.344 10.3536L19.0878 17.0974C19.6374 17.647 19.6374 18.5381 19.0878 19.0878C18.5381 19.6374 17.647 19.6374 17.0974 19.0878L10.3536 12.344Z" fill="black" stroke="black" />
                                </svg>
                            </div>
                            <div className={styles.right__title}>
                                <h1>{handleSectionTitle()}</h1>
                            </div>
                            <div className={styles.containerEdiciones} ref={childrenRef}>
                                <img src={'/assets/images/ojo_vago.jpg'} alt='El Ojo Vago Descrito ediciones' />
                                <img src={'/assets/images/no_tengo_miedo.jpg'} alt='No Tengo Miedo Descrito ediciones' />
                                <img src={'/assets/images/carrusel_de_canciones.jpg'} alt='Carrusel de Canciones Libro' />
                                <img src={'/assets/images/colorissimo.jpg'} alt='Colorissimo Libro' />
                                <img src={'/assets/images/descrito.jpg'} alt='Descrito Libro' />
                            </div>
                        </div>
                    )}
                    {carteleria && (
                        <div className={styles.containerOpen}>
                            <div
                                className={styles.closeIcon}
                                onClick={handleClick}
                            >
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.3536 12.344L10 11.9904L9.64645 12.344L2.90264 19.0878C2.35301 19.6374 1.46187 19.6374 0.91223 19.0878C0.362592 18.5381 0.362592 17.647 0.912229 17.0974L7.65603 10.3536L8.00959 10L7.65603 9.64645L0.912228 2.90264C0.36259 2.353 0.362591 1.46187 0.912229 0.912229C1.46187 0.362591 2.353 0.362591 2.90264 0.912228L9.64645 7.65603L10 8.00959L10.3536 7.65603L17.0974 0.912228C17.647 0.36259 18.5381 0.362591 19.0878 0.912229C19.6374 1.46187 19.6374 2.353 19.0878 2.90264L12.344 9.64645L11.9904 10L12.344 10.3536L19.0878 17.0974C19.6374 17.647 19.6374 18.5381 19.0878 19.0878C18.5381 19.6374 17.647 19.6374 17.0974 19.0878L10.3536 12.344Z" fill="black" stroke="black" />
                                </svg>
                            </div>
                            <div className={styles.right__title}>
                                <h1>{handleSectionTitle()}</h1>
                            </div>
                            <div className={styles.containerEdiciones} ref={childrenRef}>
                                <div className={styles.comboImg} style={{ paddingTop: 32 }}>
                                    <img src={'/assets/images/scifi.jpg'} alt='Cartel Auditorio Felipe VI 2017' />
                                    <img src={'/assets/images/micro_t.jpg'} alt='Cartel Auditorio Felipe VI Microteatro' />
                                </div>
                                <div className={styles.comboImg}>
                                    <img src={'/assets/images/Balam_18.jpg'} alt='Cartel Balambam Boo Fest 2018' />
                                    <img src={'/assets/images/Balam_19.jpg'} alt='Cartel Balambam Boo Fest 2018' />
                                </div>
                                <div className={styles.comboImg}>
                                    <img src={'/assets/images/fred_de_mercedes.jpg'} alt='Cartel Fred de Mercedes' />
                                    <img src={'/assets/images/mdc_7.jpg'} alt='Cartel Monasterio de cultura 7 edición' />
                                </div>
                                <div className={styles.comboImg}>
                                    <img src={'/assets/images/nooirax_piedra.jpg'} alt='Cartel Fiesta 
                        Nooirax'/>
                                    <img src={'/assets/images/nooirax_piedra_2.jpg'} alt='Cartel Fiesta 
                        Nooirax'/>
                                </div>
                            </div>
                        </div>
                    )}
                    {portadas && (
                        <div className={styles.containerOpen}>
                            <div
                                className={styles.closeIcon}
                                onClick={handleClick}
                            >
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.3536 12.344L10 11.9904L9.64645 12.344L2.90264 19.0878C2.35301 19.6374 1.46187 19.6374 0.91223 19.0878C0.362592 18.5381 0.362592 17.647 0.912229 17.0974L7.65603 10.3536L8.00959 10L7.65603 9.64645L0.912228 2.90264C0.36259 2.353 0.362591 1.46187 0.912229 0.912229C1.46187 0.362591 2.353 0.362591 2.90264 0.912228L9.64645 7.65603L10 8.00959L10.3536 7.65603L17.0974 0.912228C17.647 0.36259 18.5381 0.362591 19.0878 0.912229C19.6374 1.46187 19.6374 2.353 19.0878 2.90264L12.344 9.64645L11.9904 10L12.344 10.3536L19.0878 17.0974C19.6374 17.647 19.6374 18.5381 19.0878 19.0878C18.5381 19.6374 17.647 19.6374 17.0974 19.0878L10.3536 12.344Z" fill="black" stroke="black" />
                                </svg>
                            </div>
                            <div className={styles.right__title}>
                                <h1>{handleSectionTitle()}</h1>
                            </div>
                            <div className={styles.containerPortadas} ref={childrenRef}>
                                <div className={styles.portadaTitulo} style={{ paddingTop: 36 }}>
                                    <img src={'/assets/images/emilia_pardo_bazan_la_herida.jpg'} alt='Portada de Emilia, Pardo y Bazán de su disco "La herida"' />
                                    <p>Emilia, Pardo y Bazán, "La herida"</p>
                                </div>
                                <div className={styles.portadaTitulo}>
                                    <img src={'/assets/images/phantom_crst_marvel_&_blood_II.jpg'} alt='Portada Phantom Crest de su disco "Marvel and Blood II"' />
                                    <p>Phantom Crest, "Marvel & Blood II"</p>
                                </div>
                                <div className={styles.portadaTitulo}>
                                    <img src={'/assets/images/tage_heritage.jpg'} alt='Portada Tage de su disco "Heritage"' />
                                    <p>Tage, "Heritage"</p>
                                </div>
                                <div className={styles.portadaTitulo}>
                                    <img src={'/assets/images/del_cafe_a_los_helenistas_contenido_sugerido.jpg'} alt='Portada Del café de los Helenistas de su disco "Contenido Sugerido"' />
                                    <p>Del café de los Helenistas, "Contenido Sugerido"</p>
                                </div>

                            </div>
                        </div>
                    )}
                </div>

            </div>
        </main>
    )
}

export default ilustracionView
