import React from 'react'
import { Dialog, Tooltip } from '@material-ui/core';
import styles from "./PaymentModal.module.css"
import Image from "next/image"
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import { makeStyles } from '@material-ui/core/styles';
import ShareIcon from '@material-ui/icons/Share';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import { ModalCloser } from '../context/ModalCloser';



const useStyles = makeStyles((theme) => ({
    paper: { 
      backgroundColor:"transparent",
    }
  }));



export default function PaymentModal({total,open,handleClose,name,showPWL,email,phoneNumber}) {
  const classes = useStyles();

  const handleClose2 =  React.useContext(ModalCloser)
  
  const config = {
    public_key: 'FLWPUBK_TEST-ddf19ee66f9907026dcd6c3865d376d9-X',
    tx_ref: Date.now(),
    amount: 100,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
        email: email,
        phone_number: phoneNumber,
        name: name,
    },
    customizations: {
      title: 'ChopVest',
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const handleFlutterPayment = useFlutterwave(config)

  

    return (
        <Dialog 
         aria-labelledby="payment and delivery" 
         open={open} 
         keepMounted
         classes={{ paper: classes.paper}}
         onClose={handleClose}
         >
             <div className={styles.container}>
              <div className={styles.containerInner}>
                <div className={styles.flutterWave}>
                   <div
                   onClick={() => {
                    handleClose()
                    handleClose2()
                    handleFlutterPayment({
                      callback: (response) => {
                         console.log(response.status);
                         //create a fuction here and semd response.status through it 
                          closePaymentModal()
                      }
                    });
                  }}
                    className={styles.flutterWaveInner}>
                     <div className={styles.flutterWaveLogo}>
                       <Image src={"/img/flwlogo.svg"} alt="flwlogo" height={40} width={40} className={styles.foodImage} />
                     </div>
                     <div className={styles.hrline}>
                      <div className={styles.hrlineInner}>

                      </div>
                     </div>
                     <div className={styles.flwdescription}>
                           Pay with <span className={styles.flwText}>Flutter</span><span className={styles.flwText2}>wave</span>
                     </div>
                   </div>
                </div>
                {
                    showPWL && 
                <div className={styles.payWithLink}>
                 <Accordion className={styles.payWithLinkAccordion}>
                   <AccordionSummary
                     aria-controls="let a friend Pay"
                     id="panel1a-header"
                     className={styles.payWithLinkAccordionSummary}
                   > 
                     <div className={styles.pwllogo}>
                       <ShareIcon style={{fontSize: 40}} className={styles.icon}/>
                     </div>
                      <div className={styles.hrline}>
                       <div className={styles.hrlineInner}>
                       </div>
                      </div>
                     <div className={styles.pwldsc}>
                         Let a friend Pay ✌️
                     </div>
                    </AccordionSummary>
                    <AccordionDetails className={styles.accordionDetails}>
                         <div className={styles.generatorButton}>
                          <div className={styles.GBInner}>
                               Generate Link
                          </div>
                         </div>
                         <div className={styles.info}>
                             <Tooltip title="Share the link with a friend" aria-label="info">
                               <InfoOutlinedIcon style={{color:"orange"}} />  
                             </Tooltip>
                         </div>
                    </AccordionDetails>
                 </Accordion>
                </div>
                }
              </div>
             </div>
         </Dialog>
    )
}

