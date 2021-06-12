import { CircularProgress } from '@material-ui/core'
import React from 'react'
import styles from "./Loading.module.css"

function Loading({load}) {
    return (
        <>
        {
        load &&
        <div className={styles.container}>
            <CircularProgress  />
        </div>
        }

        </>
    )
}

export default Loading
