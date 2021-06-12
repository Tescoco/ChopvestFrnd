import React from 'react'
import styles from "./Content.module.css"
import TopBar from './TopBar'

export default function Content() {
    return (
        <div className={styles.container}>
            <TopBar />
        </div>
    )
}
