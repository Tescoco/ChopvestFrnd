import React,{useState} from 'react'
import CartIndex from './Cart/Index'
import PaidIndex from './Paid/Index'
import styles from "./TopBar.module.css"

export default function TopBar() {
    const [position, setPosition] = useState("cart")
    
    const changePosition = (newPosition) => {
        if (position != newPosition) {
            setPosition(newPosition)
        }
    }

    return (
        <>
        <div className={styles.container}>
         <div className={styles.containerInner}>
            <div onClick={()=>{changePosition("cart")}} className={styles.cart}>
             <div className={styles.cartInner}>
                Cart
             </div>
             {
                 position == "cart" && 
                 <div className={styles.indicator}>
                </div>
             }
            </div>
            <div onClick={()=>{changePosition("paid")}} className={styles.paid}>
              <div className={styles.paidInner}>
                Paid
               </div>
               {
                 position == "paid" && 
                 <div className={styles.indicator}>
                </div>
               }
            </div>
         </div>
        </div>
        {
            position == "cart" ?  <CartIndex /> :  <PaidIndex />
        }
        
        </>
    )
}