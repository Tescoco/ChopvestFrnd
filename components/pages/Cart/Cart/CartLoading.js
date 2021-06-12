import React from 'react'
import styles from "./CartLoading.module.css"
import { CircularProgress } from '@material-ui/core';

export default function CartEmpty() {
    return (
        <div className={styles.container}>
         <div className={styles.containerInner}>
           <CircularProgress />
         </div>
        </div>
    )
}

