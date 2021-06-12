import React from 'react'
import styles from "./CartEmpty.module.css"
import Link from "next/link"

export default function CartEmpty() {
    return (
        <div className={styles.container}>
         <div className={styles.containerInner}>
             Your Cart is dry like the sand of a desert 
             <Link href="/">
               <div className={styles.CTA}>
                  Start Shoping
               </div>
             </Link>
         </div>
        </div>
    )
}

