import React from 'react'
import ProjectCard from '../ProjectCard/ProjectCard'
import PseudoFooter from '../PseudoFooter/PseudoFooter'
import styles from './UXUISection.module.scss'

const UXUISection = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.descriptionContainer}>
                <p>
                    El bootcamp de diseño UX/UI en Iron Hack ha sido una forma increíble de iniciarme en el sector. He adquirido un gran número de habilidades tales como el uso de distintas herramientas y el trabajo con los clientes. Asegurándome de que siempre estén contentos con el resultado final.
                </p>
                <p>
                    He trabajando en varios temas que me han parecido muy interesantes.
                </p>
                <p>
                    Aquí muestro un breve resumen.
                </p>
            </div>
            <ProjectCard 
                image={'/assets/images/canela.jpg'}
                title={'Canela Party'}
                description={'Proyecto enfocado en la creación de un microsite para un evento,  en el cual la interacción con el usuario dependerá de la etapa en la que se encuentre el festival.'}
                link={'https://medium.com/@fdiazfr/iron-hack-ux-ui-proyecto-6-micrositio-de-un-evento-2468149d6758'}
            />
            {/* 
            <ProjectCard 
                image={'/assets/images/nutric.jpg'}
                title={'Nutric'}
                description={'Proyecto enfocado en la creación de una app relacionada con el bienestar, en la cual el usuario podrá comprobar su evolución a través de un sistema de traqueo.'}
                link={'https://medium.com/@fdiazfr/iron-hack-ux-ui-proyecto-7-bienestar-c997a241f1d2'}
            />
            <ProjectCard 
                image={'/assets/images/Group5.jpg'}
                title={'Musa'}
                    description={'Proyecto Final.Musa es una herramienta para ayudar a los usuarios a tomar  decisiones creativas a través de la inteligencia artificial.'}
                link={'https://medium.com/@fdiazfr/iron-hack-ux-ui-proyecto-final-musa-bbc9e72684c8'}
            /> */}
            {/* <PseudoFooter /> */}
        </div>
    )
}

export default UXUISection
