import React from 'react'
import styles from "./ProductEmpty.module.css";
import Image from "next/image";

function ProductEmpty() {
    return (
        <div className={styles.container}>
         <div className={styles.containerInner}>
             <Image className={styles.image} width={100} height={100} alt="chef hat" src="/img/PEmpty.png" />
         </div>
        </div>
    )
}

export default ProductEmpty
