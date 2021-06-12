import React, { useContext } from 'react'
import styles from "./PaidCard.module.css"
import Image from "next/image"
import HourglassEmptyRoundedIcon from '@material-ui/icons/HourglassEmptyRounded';
import LocalShippingRoundedIcon from '@material-ui/icons/LocalShippingRounded';
import CheckRoundedIcon from '@material-ui/icons/CheckRounded';

export default function PaidCard({id,name}) {
    const [state, setState] = React.useState("Pending")

    return (
        <div className={styles.container}>
         <div className={styles.containerInner}>
          <div className={styles.containerMain}>
            <div className={styles.image}>
                <Image src="/img/pepprsoup.jpg" className={styles.image} width={100} height={100} alt="foodcart" />
            </div>
            <div className={styles.row1}>
             <div className={styles.rowInner1}>
              <div className={styles.cartDetails}>
                {name}
              </div>
             <div className={styles.totalAmount}>
              <div className={styles.totalAmountInner}>
                   ₦7000.00 {/* here we actually multiply */}
              </div>
             </div>
            </div>
            <div className={styles.rowInner2}>
              <div className={styles.rowInner2Inner}>
               <div className={styles.box1}>
                 {
                   state == "Pending" ? 
                   <div className={styles.circularOutlineActive}>
                    <HourglassEmptyRoundedIcon style={{fontSize:20,color:"white"}} />
                  </div>
                  :
                  <div className={styles.circularOutlineDisabled}>
                    <HourglassEmptyRoundedIcon style={{fontSize:20,color:"rgb(204, 204, 204)"}} />
                  </div> 
                }
               </div> 
               <div className={styles.box2}>
                 <div className={styles.hrLine}>
                 </div>
               </div>
               <div className={styles.box3}>
                 {
                   state == "Delivering" ? 
                   <div className={styles.circularOutlineActive}>
                      <LocalShippingRoundedIcon style={{fontSize:20,color:"white"}} />
                  </div>
                  :
                  <div className={styles.circularOutlineDisabled}>
                      <LocalShippingRoundedIcon style={{fontSize:20,color:"rgb(204, 204, 204)"}} />

                  </div> 
                }
               </div>
               <div className={styles.box4}>
                <div className={styles.hrLine}>
                 
                 </div>
               </div>
               <div className={styles.box5}>
                {
                   state == "Completed" ? 
                   <div className={styles.circularOutlineActive}>
                      <CheckRoundedIcon style={{fontSize:20,color:"white"}} />
                  </div>
                  :
                  <div className={styles.circularOutlineDisabled}>
                      <CheckRoundedIcon style={{fontSize:20,color:"rgb(204, 204, 204)"}} />
                  </div> 
                }
               </div>
             </div>
            </div>
           </div>
          </div>
         </div>
        </div>
    )
}