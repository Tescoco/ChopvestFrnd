import AlternativeLayout from "../../components/layouts/AlternativeLayout";
import Header from "../../components/helper/Header";
import styles from "../../styles/createaccount.module.css"
import React from "react"
import LGAPicker from "../../components/helper/LgaPicker";
import { Link } from "react-scroll";
import CircularProgress from '@material-ui/core/CircularProgress';
import { orange } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import CheckIcon from '@material-ui/icons/Check';
import Head from "next/head";

const useStyles = makeStyles((theme) => ({
  fabProgress: {
    color: orange[500],
  },
  buttonSuccess: {
    backgroundColor: orange[500],
    '&:hover': {
      backgroundColor: orange[700],
    }
  },
}))

export default function address() {
    const classes = useStyles();
    const states = ["Ogun","Lagos","Abuja","Rivers","Ibadan","Ilorin"]
    const [LGA] = React.useState([[]])
    
    const stateObj = states.reduce((o, key) => ({ ...o, [key]: ""}), {})
    const LGAObj = LGA[0].reduce((o, key) => ({ ...o, [key]: ""}), {})
    const [pickState, setPickState] = React.useState(stateObj);

    const [pickLGA, setPickLGA] = React.useState(LGAObj);
    const [vh, setvh] = React.useState(0)
    const [address, setAddress] = React.useState("")

    const [showTextArea, setshowTextArea] = React.useState(false)
    const [submitted, setSubmitted] = React.useState(false)
    const [redirect, setRedirect] = React.useState(false)
    
    React.useEffect(() => {
      setvh( -window.innerHeight * 0.08 )
      }, [])

    const clickState = (i) => {
      LGAPicker(LGA,states[i])
      setPickState({ ...stateObj, [states[i]]: 'rgb(135, 222, 171)'})
      setPickLGA({ ...LGAObj})
      localStorage.setItem("State", states[i])
      setshowTextArea(false)
    }
    const clickLGA = (i) => {
      setPickLGA({ ...LGAObj, [LGA[0][i]]: 'rgb(135, 222, 171)'})
      localStorage.setItem("LGA", LGA[0][i])
      setshowTextArea(true)
    }
    const inputAddress = (value) => {
        setAddress(value)
    }
    const submitAddress = () => {
      //store in LS 
      //If account available,store in user data as well
      setSubmitted(true)
      setTimeout(() => {
        setRedirect(true)
        window.location.replace("/")
      }, 3000);
      if (typeof(Storage) !== "undefined") {
        localStorage.setItem("Address", address)
      } 
    }
    return (
       <AlternativeLayout>
           <Head>
             <title>ChopVest - Profile</title>
           </Head>
           <Header position={"fixed"} title={"Create address"} showNotif={false} />
           <div className={styles.container}>
             <div className={styles.containerInner}>
               <div className={styles.category}>
                   {
                       states.map((state,i) => 
                       <Link
                        to={"LGA"}
                        spy={true}
                        smooth={true}
                        duration={400}
                        key={i}
                        offset={vh}
                        >
                          <div onClick={() => clickState(i)}  className={styles.statesCon}>
                            <div style={{backgroundColor:pickState[Object.keys(pickState)[i]]}} className={styles.statesConInner}>
                              {state}
                           </div>
                         </div>
                        </Link>
                       )
                   }
                  
               </div>
               <div id={"LGA"} className={styles.category2}>
                  {
                   LGA[0] != undefined && LGA[0].map((LGA,i) => 
                       <Link
                        to={"Address"}
                        spy={true}
                        smooth={true}
                        duration={600}
                        key={i}
                        offset={vh}
                        >
                       <div  onClick={() => clickLGA(i)} key={i} className={styles.statesCon}>
                        <div style={{backgroundColor:pickLGA[Object.keys(pickLGA)[i]]}} className={styles.statesConInner}>
                           {LGA}
                        </div>
                      </div>
                     </Link>
                       )
                   }
                </div>
                
                <div id={"Address"} className={styles.category3}>
                 {
                  showTextArea &&
                    <textarea value={address} onChange={(e)=>inputAddress(e.target.value)} className={styles.placeHolder} placeholder={"Residential Address"} />
                 }
                </div>
                <div className={styles.category4}>
                {
                  address.length > 10 && !submitted &&
                  <div onClick={()=>submitAddress()} className={styles.button}>
                     Done!
                  </div>
                }
                {
                 submitted && !redirect &&
                <CircularProgress size={28} style={{color:"orange !important"}} />
                  
                }
                {
                  redirect &&
                  <Fab
                       aria-label="done"
                       color="primary"
                       className={classes.buttonSuccess}
                       size="small"
                     >
                          <CheckIcon />
                   </Fab>
                } 
                </div>
                <div className={styles.category5}>
                
                </div>
             </div>
           </div>
       </AlternativeLayout>
    )
}

