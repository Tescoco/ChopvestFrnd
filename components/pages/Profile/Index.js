import { LocationOn } from '@material-ui/icons';
import React from 'react'
import styles from "./Indexfile.module.css";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import PaymentIcon from '@material-ui/icons/Payment';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function Index() {
    return (
        <div className={styles.container}>
          <div className={styles.row1}>

           </div>
           <div className={styles.row2}>
             <div className={styles.row2Icon}>
              <div className={styles.row2IconInner}>
                <LocationOn style={{fontSize:35,color:"orange"}} />
              </div>
             </div>
            <div className={styles.row2Inner}>
             <div className={styles.row2Header}>
              <div className={styles.row2Header1}>
                 Delivery Address
              </div>
              <div className={styles.row2Header2}>
                 <ChevronRightIcon style={{color:"orange",fontSize:30}}/>
              </div>
             </div>
             <div className={styles.row2Content}>
                54 Edo Street Kabal west <br/> Kaduna South, Kaduna.
             </div>
            </div>
           </div>
           <div className={styles.row3}>
            <div className={styles.row3Icon}>
             <div className={styles.row3IconInner}>
                  <PaymentIcon style={{color:"orange",fontSize:30}}/>
             </div>
            </div>
            <div className={styles.row3Inner}>
              <div className={styles.row3InnerMain}>
                My Refunds
              </div>
              <div className={styles.row2Header2}>
                 <ChevronRightIcon style={{color:"orange",fontSize:30}}/>
              </div>
            </div>
           </div>
           <div className={styles.row3}>
             <div className={styles.row3Icon}>
              <div className={styles.row3IconInner}>
                  <MenuBookIcon style={{color:"orange",fontSize:30}}/>
              </div>
             </div>
             <div className={styles.row3Inner}>
              <div className={styles.row3InnerMain}>
                Terms and Conditions
              </div>
              <div className={styles.row2Header2}>
                 <ChevronRightIcon style={{color:"orange",fontSize:30}}/>
              </div>
             </div>
            </div>
           <div className={styles.row3}>
            <div className={styles.row3Icon}>
             <div className={styles.row3IconInner}>
                  <EmojiEventsIcon style={{color:"orange",fontSize:30}}/>
             </div>
            </div>
            <div className={styles.row3Inner}>
             <div style={{width:"100%"}} className={styles.row3InnerMain}>
               I'm a Vendor
              </div>
            </div>
            </div>
           <div className={styles.row3}>
            <div className={styles.row3Icon}>
             <div className={styles.row3IconInner}>
                  <ExitToAppIcon style={{color:"red",fontSize:30}}/>
             </div>
            </div>
            <div className={styles.row3Inner}>
             <div style={{width:"100%"}} className={styles.row3InnerMain}>
              Logout
              </div>
            </div>
            </div>
           <div className={styles.row4}>
               Oladevs
           </div>
        </div>
    )
}

export default Index
