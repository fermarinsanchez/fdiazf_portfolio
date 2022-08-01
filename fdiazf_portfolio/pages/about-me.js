import React from 'react'
import SectionHeader from '../components/SectionHeader/SectionHeader'
import AboutSection from '../components/AboutSection/AboutSection'
import styles from '../styles/AboutMe.module.scss'
import FatButton from '../components/FatButton/FatButton'

const AboutMe = () => {

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
            'Dirección del proceso de preparación y revisión de proyectos para optimizar el proceso de impresión.'
        ]
    }

    const screenWidth = window.innerWidth
    return (
        <div className={styles.mainContaier}>
            <SectionHeader
                title={'Sobre mí'}
                link={screenWidth > 900 ? '/' : '/menu'}
            />
            <div className={styles.desktopRows}>
                <div className={styles.desktopFirstRow}>
                    <div className={styles.image}>
                        <img src="/assets/images/fernan.png" alt="Fernando Díaz Franco" />
                    </div>
                    <div className={styles.name}>
                        <h1>Fernando Díaz</h1>
                        <p>UX/UI Designer - Ilustrador</p>
                    </div>
                    <div className={styles.description}>
                        <p>
                            Después de varios años he decidido orientar mi carrera hacia el diseño de producto digital, lo cual me ha permitido entrar en un mundo que me apasiona: transformar problemas complejos en soluciones creativas.
                        </p>
                    </div>
                </div>
                <div className={styles.desktopSecondRow}>
                    <div className={styles.experienceContainer}>
                        <AboutSection
                            title={'IRON HACK'}
                            subtitle={'UX/UI (2021-2022)'}
                            description={textDescription.Ironhack}
                        />
                        <AboutSection
                            title={'ESUELA DE ARTE TOLEDO'}
                            subtitle={'Gráfica publicitaria (2005-2007)'}
                            description={textDescription.EAToledo}
                        />
                        <AboutSection
                            title={'ESUELA DE ARTE TALAVERA'}
                            subtitle={'Arte final (2003-2004)'}
                            description={textDescription.EATalavera}
                        />
                    </div>
                </div>
                <div className={styles.desktopThirdRow}>
                    <div className={styles.lists}>
                        <p
                            className={styles.listTitle}
                            style={{ marginTop: 0 }}
                        >HERRAMIENTAS</p>
                        <ul className={styles.herramientasList}>
                            <li>Suite Adobe</li>
                            <li>Figma</li>
                            <li>Miro</li>
                            <li>Slack</li>
                            <li>Trello</li>
                        </ul>
                        <p className={styles.listTitle}>IDIOMAS</p>
                        <ul>
                            <li><b>Español</b> Nativo</li>
                            <li><b>Inglés</b> Medio</li>
                        </ul>
                        <p className={styles.listTitle}>APTITUDES</p>
                        <div className={styles.containerAptitudes}>
                            <div className={styles.aptitudes}>
                                <p>Empatía</p>
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
                        <p className={styles.listTitle}>AFICIONES</p>
                        <AboutSection
                            title={'Música'}
                            subtitle={'Soy un melómano empedernido y además toco el bajo en varios grupos.'}
                            description={false}
                        />
                        <AboutSection
                            title={'Comics'}
                            subtitle={'Llevo leyendo comics y tebeos desde que tengo memoria. Me encanta sumergirme en sus historias.'}
                            description={false}
                        />

                    </div>
                    <div className={styles.hablamos}>
                        <p>¿Quieres saber más de mí?</p>
                        <FatButton
                            text={'¿Hablamos?'}
                            anchor={'mailto:fdiazfr@gmail.com'}
                        />


                    </div>
                </div>
            </div>

        </div>
    )
}

export default AboutMe