import styles from "./Header.module.css"
import NotificationsIcon from '@material-ui/icons/Notifications';

export default function Header({title,showNotif,position}) {
    return (
        
            showNotif ? 
              <div style={{position:position}} className={styles.container}>
                <div className={styles.logo}>
                  <h2 className={styles.logoText}>
                     {title}
                  </h2>
                </div> 
                 <div className={styles.notifs}>
                  <NotificationsIcon style={{ fontSize: 30 }} />
                 </div> 
              </div>
              :
              <div style={{position:position}} className={styles.container}>
                <div className={styles.logo}>
                  <h2 style={{paddingLeft: "0px"}} className={styles.logoText}>
                     {title}
                  </h2>
                </div> 
              </div>
        
    )
}

