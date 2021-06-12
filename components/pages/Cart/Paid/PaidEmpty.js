import React from 'react'
import styles from "./PaidEmpty.module.css"

function PaidEmpty() {
    return (
        <div className={styles.container}>
         <div className={styles.containerInner}>
           Your Paid Orders will appear here!
        </div>
       </div>
    )
}

export default PaidEmpty
