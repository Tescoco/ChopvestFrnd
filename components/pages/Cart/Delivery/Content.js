import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import CreateAccount from './CreateAccount'
import DeliveryDetails from './DeliveryDetails'
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core/styles';
import styles from "./Content.module.css"
import CloseIcon from '@material-ui/icons/Close';
import NumberAuth from './NumberAuth';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const useStyles = makeStyles((theme) => ({
    paper: { 
      minWidth: "100%",
      minHeight:'100vh',
      paddingBottom:"10vh",
      display:'flex',
      alignItems:"center",
      backgroundColor:"rgb(255, 251, 235)",
    }
  }));

export default function Content({open,handleClose}) {
   
  const classes = useStyles();
  const [stage, setStage] = React.useState(3)
  const numberToken = Math.floor(1000 + Math.random() * 9000);
  const [phoneNumber, setPhoneNumber] = React.useState("")

  return (
    <Dialog aria-labelledby="payment and delivery" 
    open={open} 
    TransitionComponent={Transition}
    keepMounted
    classes={{ paper: classes.paper}}
    style={{maxWidth:"500px",bottom:0,position:"fixed"}}
    onClose={handleClose}
    >
    <div className={styles.dialogContent} >
      <div className={styles.row1}>
       <div onClick={handleClose} className={styles.row1Inner}>
       <CloseIcon style={{ fontSize: 40,color:"rgb(221, 221, 221)" }}/>
       </div>
      </div>
              <NumberAuth numberToken={numberToken} phoneNumber={phoneNumber} stage={stage} setStage={setStage} />
              <CreateAccount  phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} stage={stage} setStage={setStage} />
              <DeliveryDetails stage={stage} />
    </div>
    </Dialog>
  );
}