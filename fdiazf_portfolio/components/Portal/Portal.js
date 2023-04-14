import { useRef, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import styles from "./Overlay.module.scss"



export const Portal = (props) => {
    const ref = useRef(null)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        ref.current = document.querySelector < HTMLElement > ("#portal")
        setMounted(true)
    }, [])

    return (mounted && ref.current) ? createPortal(<div className={styles.overlay}>{props.children}</div>, ref.current) : null
}