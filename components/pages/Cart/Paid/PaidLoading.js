import React from 'react'
import styles from "./PaidLoading.module.css"
import { CircularProgress } from '@material-ui/core';

function PaidLoading() {
    return (
        <div className={styles.container}>
         <div className={styles.containerInner}>
          <CircularProgress />
        </div>
       </div>
    )
}

export default PaidLoading
