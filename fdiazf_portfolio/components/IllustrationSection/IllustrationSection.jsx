import React from 'react'
import ProjectCard from '../ProjectCard/ProjectCard';
import styles from './IllustrationSection.module.scss'

const IllustrationSection = () => {

    const [editorial, setEditorial] = React.useState(false);

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
                        <>
                        <h1>Contenido Extra</h1>
                        </>
                     }
            />
            </div>
        </div>
    )
}

export default IllustrationSection