import React,{useState} from 'react'
import styles from "./NumberAuth.module.css";
import ReactInputVerificationCode from 'react-input-verification-code';
import { useCountdownTimer } from 'use-countdown-timer';



export default function NumberAuth({setStage,stage,phoneNumber,numberToken}) {
    
    const [disabled, setDisabled] = useState(true)
    const [value, setValue] = React.useState("");



      const { countdown, start, isRunning } = useCountdownTimer({
        timer: 1000 * 59,
      })

      React.useEffect(() => {
        parseInt(value) == numberToken ? setDisabled(false) : setDisabled(true)
      }, [value])

      React.useEffect(() => {
        start()
      }, [])

      const resentMssg = () => {
        !isRunning && start() //send mssg api here
      }

    return (
     stage == 2 &&
        <div className={styles.container}>
           <div className={styles.row1}>Enter the token sent to<span style={{visibility:"hidden"}}>i</span><span style={{color:"orange"}}>{phoneNumber}</span></div>
           <div className={styles.row2}>
            <div className="custom-styles">
               <ReactInputVerificationCode onChange={setValue} value={value} />
            </div>
           </div>
           <div className={styles.row3}>
             <div onClick={resentMssg} className={styles.row3Inner1}>
                 Resend  {" "}
                 {isRunning && <>0:{countdown/1000}</>}
             </div>
             <div onClick={() => setStage(1)} className={styles.row3Inner2}>
                     Change Number
             </div>
           </div>
           <div className={styles.row4}>
               {
                   disabled ? 
                   <div className={styles.row4InnerDisabled}>
                     Next
                   </div>
                   :
                   <div onClick={() => setStage(3)} className={styles.row4Inner}>
                    Next
                  </div>
               }
               
            
           </div>
        </div>
    )
}