import React, { useRef, useState, useEffect } from 'react'
import { gsap } from 'gsap'
import ProjectCard from '../ProjectCard/ProjectCard';
import styles from './IllustrationSection.module.scss'
import PseudoFooter from '../PseudoFooter/PseudoFooter';

const IllustrationSection = () => {

    const [editorial, setEditorial] = useState(false);
    const [carteleria, setCarteleria] = useState(false);
    const [portadas, setPortadas] = useState(false);

    const mainRef = useRef()
    const childrenRef = useRef()

    useEffect(() => {
        gsap.from(mainRef.current, {
            duration: 1,
            x: 500,
            ease: "power3.out",
        })
    }, [])


    useEffect(() => {
        if (editorial) {
            gsap.from(childrenRef.current, {
                duration: 1,
                y: -300,
                opacity: 0,
                ease: "power3.out",
            })
        } else if (carteleria) {
            gsap.from(childrenRef.current, {
                duration: 1,
                y: -300,
                opacity: 0,
                ease: "power3.out",
            })
        } else if (portadas) {
            gsap.from(childrenRef.current, {
                duration: 1,
                y: -300,
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



    return (
        <>
            <div className={styles.mainContainer} >
                <div className={styles.descriptionContainer} ref={mainRef}>
                    <p>
                        Desde que era niño me encantaba dibujar. He tenido la suerte de poder dedicarme a este trabajo, dándome grandes satisfacciones en mi vida.
                    </p>
                    <p>
                        Es importante conocer tus puntos fuertes y débiles. Saber qué te hace único como artista y cómo puedes utilizarlo en tu beneficio para crear un producto.
                    </p>
                    <p>
                        Principalmente he realizado ilustraciones para libros infantiles y  de texto, aunque también tengo experiencia en cartelería para conciertos y portadas de discos.
                    </p>
                    <p>
                        Aquí se puede ver una muestra.
                    </p>
                    
                </div>
                <ProjectCard
                        image={'/assets/images/VampireCard.jpg'}
                        title={'Editorial'}
                        description={'Ilustraciones de libros de texto y narrativa para diversas editoriales.'}
                        setIsOpen={setEditorial}
                        isOpen={editorial}
                        handleAnimation={handleAnimation}
                        cardChildren={
                            <div className={styles.containerEdiciones} ref={childrenRef}>
                                <img src={'/assets/images/ojo_vago.jpg'} alt='El Ojo Vago Descrito ediciones' />
                                <img src={'/assets/images/no_tengo_miedo.jpg'} alt='No Tengo Miedo Descrito ediciones' />
                                <img src={'/assets/images/carrusel_de_canciones.jpg'} alt='Carrusel de Canciones Libro' />
                                <img src={'/assets/images/colorissimo.jpg'} alt='Colorissimo Libro' />
                                <img src={'/assets/images/descrito.jpg'} alt='Descrito Libro' />
                            </div>
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
                        <div className={styles.containerCarteleria} ref={childrenRef}>
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
                        <div className={styles.containerEdiciones} ref={childrenRef}>
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
                    }
                />
            </div>
            <PseudoFooter />
        </>
    )
}

export default IllustrationSection