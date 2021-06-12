import React from 'react'
import styles from "./CheckOut.module.css"
import Content from '../Delivery/Content';
import { ModalCloser } from '../../../context/ModalCloser'

export default function CheckOut() {

    const [openModal, setOpenModal] = React.useState(false)

    const paymentanddelivery = () => {
      setOpenModal(true)
    } 

    const handleClose = () => {
      setOpenModal(false)
    }

    return (
      <ModalCloser.Provider value={handleClose}>
        <div onClick={paymentanddelivery} className={styles.container}>
          <div className={styles.containerInner}>
            Payment and Delivery
          </div> 
        </div>  
        <Content open={openModal} handleClose={handleClose} />
    </ModalCloser.Provider>
    )
}