import React, {useState} from 'react'
import styles from "./CreateAccount.module.css"
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
 textField: {
  '& label.Mui-focused': {
    color: 'black',
  },
  '& .MuiOutlinedInput-root': {
    '&:hover fieldset': {
      borderColor: 'orange',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'orange',
    }
  }
}
}));

export default function CreateAccount({setStage,stage,phoneNumber,setPhoneNumber}) {
  const classes = useStyles();

  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")

  const [lastName, setLastName] = useState("")
  const [done, setDone] = useState(false)
  const [loading, setLoading] = useState(false)

  const UpadatephoneNumber = (event)=>{
    setPhoneNumber(event.target.value.replace(/[^0-9]/g, ''));
   }

  const firstNameFunc = (event) => {
    if (event.target.value != " ") {
      setFirstName(event.target.value);
    }
  };

  const lastNameFunc = (event) => {
    if (event.target.value != " ") {
      setLastName(event.target.value);
    }
  };

  const emailFunc = (event) => {
    if (event.target.value != " ") {
      setEmail(event.target.value);
    }
  };

  const completed = () => {
    setLoading(true)
    //send phone number token
    //after move to stage 2
    setTimeout(() => {
      setStage(2)
    }, 2000);
  }
  React.useEffect(() => {
    setLoading(false)
  }, [stage])

  React.useEffect(() => {
    const validEmail = email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    setLoading(false)
    if (validEmail && firstName.length > 1 && lastName.length > 1 && phoneNumber.length >= 10) {
      setDone(true)
    }
    else {
      setDone(false)
    }
  }, [email,firstName,lastName,phoneNumber])

    return (
      stage == 1 &&
        <div className={styles.container}>
           <div className={styles.name}>
            <div className={styles.Fname}>
              <TextField onChange={firstNameFunc} value={firstName} className={classes.textField + ' ' + styles.nameTI}  id="outlined-basic" label="First Name" variant="outlined" />
            </div>
            <div className={styles.Lname}>
              <TextField onChange={lastNameFunc} value={lastName} className={classes.textField + ' ' + styles.nameTI} id="outlined-basic2" label="Last Name" variant="outlined" />
            </div>
           </div>
           <div className={styles.email}>
              <TextField onChange={emailFunc} value={email} className={classes.textField + ' ' + styles.emailTI} id="outlined-basic3" label="Email" variant="outlined" />
           </div> 
           <div className={styles.phoneNumber}>
            <div className={styles.CCode}>
              🇳🇬 +234
            </div>
            <div className={styles.number}>
              <TextField inputProps={{ maxLength: 11 }} onChange={UpadatephoneNumber} value={phoneNumber} className={classes.textField + ' ' + styles.numberTI} id="outlined-basic4" label="Phone Number" variant="outlined" />
            </div>
           </div>
           <div className={styles.CTA}>
           {
                done ? 
                    <>
                    {
                     loading ?
                      <div className={styles.CTAInnerLoading}>
                        <CircularProgress style={{ fontSize: 20 }}  />
                      </div>
                      :
                     <div onClick={completed} className={styles.CTAInner}>
                      <div className={styles.CTAInnerText}>
                        Done
                      </div>
                     </div>
                   }
                  </>
                 :
                <div className={styles.CTAInnerDisabled}>
                 <div className={styles.CTAInnerText}>
                      Done
                </div>
               </div>
          }
           </div>
        </div>
    )
}