import React from 'react'
import styles from "./DeliveryAddress.module.css"
import EditIcon from '@material-ui/icons/Edit';
import Link from 'next/link'

export default function DeliveryAddress() {
    return (
        <div className={styles.container}>
          <div className={styles.containerInner}>
           <div className={styles.row1}>
             +234 9039659073
           </div>
           <div className={styles.row2}>
            <div className={styles.row2Inner1}>
              {localStorage.Address},
            </div>
            <div className={styles.row2Inner2}>
               <Link href="/profile/create-address">
                  <EditIcon style={{color:"orange"}}/>
               </Link>
            </div>
           </div>
           <div className={styles.row3}>
             {localStorage.LGA}, {localStorage.State}
           </div>
         </div>
        </div>
    )
}