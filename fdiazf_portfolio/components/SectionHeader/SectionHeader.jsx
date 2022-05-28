import React from 'react'
import Link from 'next/link'
import styles from './SectionHeader.module.scss'

const SectionHeader = (props) => {
    return (
        <div className={styles.mainContainer}>
            <Link href={`${props.link}`}>
                <div className={styles.getBackArrow}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 12C24 12.8284 23.3284 13.5 22.5 13.5L5.745 13.5L13.065 20.82C13.6526 21.4076 13.6509 22.3607 13.0612 22.9462C12.4745 23.5288 11.5271 23.5271 10.9425 22.9425L1.04907e-06 12L10.942 1.05797C11.5263 0.473668 12.4737 0.47367 13.058 1.05797C13.6419 1.6419 13.6423 2.58852 13.0589 3.17297L5.745 10.5L22.5 10.5C23.3284 10.5 24 11.1716 24 12Z" fill="black" />
                    </svg>
                </div>
            </Link>
            <h2 className={styles.title}>{props.title}</h2>
        </div>
    )
}

export default SectionHeader