import Head from 'next/head';
import React from 'react'
import PaymentModal from '../../../helper/PaymentModal';
import styles from "./CheckOut.module.css";

export default function CheckOut() {
  const [open, setopen] = React.useState(false)

  const handleClose = () => {
    setopen(false)
  }

  const handleOpen = () => {
    setopen(true)
  }

    return (
       <>
        <div onClick={handleOpen} className={styles.container}>
         <div className={styles.containerInner}>
              Check Out
         </div>
        </div>
        <PaymentModal open={open} handleClose={handleClose} name={"Tescoco"} showPWL={true} email={"teslimakinremi01@gmail.com"} total={100} phoneNumber={"09039659073"} />
       </>
    )
}
