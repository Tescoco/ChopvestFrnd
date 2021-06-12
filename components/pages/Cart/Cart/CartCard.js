import React, { useContext } from 'react'
import styles from "./CartCard.module.css"
import Image from "next/image"
import CloseIcon from '@material-ui/icons/Close';
import { CartNumber } from '../../../context/CartNumber';

export default function CartCard({id,name,count}) {

    const [orderCount, setOrderCount] = React.useState(parseInt(count))
    const [removed, setRemoved] = React.useState(false)
    const {setCartCount,cartCount} = useContext(CartNumber)

    const updateOrder = (orderCount) => {
        if (localStorage.getItem(`${id}`) != undefined) {
          localStorage.setItem(id,orderCount)
        }
      }

    const minusOrder = () => {
        if (orderCount != 1) {
          setOrderCount(orderCount - 1)
          updateOrder(orderCount - 1)
        }
      }
    
      const plusOrder = () => {
        setOrderCount(orderCount + 1)
        updateOrder(orderCount + 1)
      }
   
      const removefromCart = () => {
       localStorage.removeItem(`${id}`)
       setRemoved(true)
       setCartCount(cartCount - 1)
     }
    return (
        !removed &&
        <div className={styles.container}>
         <div className={styles.containerInner}>
          <div onClick={removefromCart} className={styles.delete}>
            <div className={styles.deleteIcon}>
               <CloseIcon />
            </div>
          </div>
          <div className={styles.containerMain}>
            <div className={styles.image}>
                <Image src="/img/pepprsoup.jpg" className={styles.image} width={110} height={110} alt="foodcart" />
            </div>
            <div className={styles.row1}>
             <div className={styles.rowInner1}>
              <div className={styles.cartDetails}>
                {name}
              </div>
             <div className={styles.updateCart}>
              <div className={styles.updateCartInner}>
                <div onClick={minusOrder} className={styles.minus}>
                        -
                </div>
                <div className={styles.count}>
                       {orderCount}
                </div>
                <div onClick={plusOrder} className={styles.plus}>
                       +
                </div>
              </div>
             </div>
            </div>
            <div className={styles.rowInner2}>
               ₦3000.00  x {orderCount}
            </div>
           </div>
          </div>
         </div>
        </div>
    )
}