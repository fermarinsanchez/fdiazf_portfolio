// import { useEffect, useState } from 'react'
// import styles from './GlitchText.module.scss'

// export const GlitchText = ({ text, text2, subtitle }) => {
//     const [wordState, setWordState] = useState(0)
//     const textArray = ['FER', 'PhAnToM', 'PreSEntA', 'IVOrY', 'TOweR']

//     const handleWords = (arr) => {
//         setTimeout(() => setWordState(textArray[0]), 2000)
//         setTimeout(() => setWordState(textArray[1]), 4000)
//         setTimeout(() => setWordState(textArray[2]), 6000)
//         setTimeout(() => setWordState(textArray[3]), 7000)
//         setTimeout(() => setWordState(textArray[4]), 9000)
//     }
//     useEffect(() => {
//         handleWords(textArray)
//     }, [])



//     return (<div>
//         <div className={styles.container}>
//             <div className={styles.glitch} data-text={wordState
//             }>{wordState
//                 }</div>
//             <div className={styles.glow}>{wordState
//             }</div>
//             <div className={styles.glitch} data-text={text2}>{text2}</div>
//             <div className={styles.glow}>{text2}</div>
//             <marquee scrollamount='30' className={styles.subtitle}>{subtitle}</marquee>
//         </div>
//         <div className={styles.scanlines}></div>
//     </div>)
// }