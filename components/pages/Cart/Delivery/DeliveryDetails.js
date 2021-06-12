import React from 'react'
import style from "./DeliveryDetails.module.css"
import CartSummary from "./CartSummary";
import DeliveryAddress from "./DeliveryAddress";
import CheckOut from './CheckOut';

export default function DeliveryDetails({stage}) {
    return (
      stage == 3 &&
        <div className={style.container}>
             <CartSummary />
             <DeliveryAddress />
             <CheckOut />
        </div>
    )
}