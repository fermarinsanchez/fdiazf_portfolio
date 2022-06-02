import React from 'react'
import ProjectCard from '../ProjectCard/ProjectCard';
import styles from './IllustrationSection.module.scss'

const IllustrationSection = () => {

    const [editorial, setEditorial] = React.useState(false);
    const [carteleria, setCarteleria] = React.useState(false);
    


    return (
        <div className={styles.mainContainer}>
            <div className={styles.descriptionContainer}>
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
                <ProjectCard 
                    image={'/assets/images/VampireCard.jpg'}
                    title={'Editorial'}
                    description={'Ilustraciones de libros de texto y narrativa para diversas editoriales.'}
                    setIsOpen={setEditorial}
                    isOpen={editorial}
                    cardChildren={
                        <div className={styles.containerEdiciones}>
                        <img src={'/assets/images/ojo_vago.jpg'} alt='El Ojo Vago Descrito ediciones'/>
                        <img src={'/assets/images/no_tengo_miedo.jpg'} alt='No Tengo Miedo Descrito ediciones'/>
                        <img src={'/assets/images/carrusel_de_canciones.jpg'} alt='Carrusel de Canciones Libro'/>
                        <img src={'/assets/images/colorissimo.jpg'} alt='Colorissimo Libro'/>
                        <img src={'/assets/images/descrito.jpg'} alt='Descrito Libro'/>
                        </div>
                     }
                />
                <ProjectCard 
                    image={'/assets/images/piedraCardMobile.jpg'}
                    title={'Cartelería'}
                    description={'Ilustración de carteles y flyers para distintos eventos musicales.'}
                    setIsOpen={setCarteleria}
                    isOpen={carteleria}
                    cardChildren={
                        <div className={styles.containerCarteleria}>
                        <img src={'/assets/images/micro_treatro.jpg'} alt='Cartel Micdro Teatro'/>
                        <img src={'/assets/images/balambamboo.jpg'} alt='Carteles Balambamboo Fest'/>
                         <div className={styles.comboImg}>
                        <img src={'/assets/images/fred_de_mercedes.jpg'} alt='Cartel Fred de Mercedes'/>
                        <img src={'/assets/images/mdc_7.jpg'} alt='Cartel Monasterio de cultura 7 edición'/>
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
                    image={'/assets/images/VampireCard.jpg'}
                    title={'Editorial'}
                    description={'Ilustraciones de libros de texto y narrativa para diversas editoriales.'}
                    setIsOpen={setEditorial}
                    isOpen={editorial}
                    cardChildren={
                        <div className={styles.containerEdiciones}>
                        <img src={'/assets/images/ojo_vago.jpg'} alt='El Ojo Vago Descrito ediciones'/>
                        <img src={'/assets/images/no_tengo_miedo.jpg'} alt='No Tengo Miedo Descrito ediciones'/>
                        <img src={'/assets/images/carrusel_de_canciones.jpg'} alt='Carrusel de Canciones Libro'/>
                        <img src={'/assets/images/colorissimo.jpg'} alt='Colorissimo Libro'/>
                        <img src={'/assets/images/descrito.jpg'} alt='Descrito Libro'/>
                        </div>
                     }
                />
            </div>
        </div>
    )
}

export default IllustrationSection