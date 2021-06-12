import styles from './Footernav.module.css'
import Link from 'next/link'
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
import Badge from '@material-ui/core/Badge';
import React from "react"




export default function FooterNav({Home,Search,Cart,Profile,cartCount,startLoading}) {

  return (
      <div className={styles.footerBar}>
       <div className={styles.footerBarContainer}>
            <Link href="/" >
             <div className={styles.footerBarS}>
                {
                   Home ?
                   <div className={styles.linkContentHolder}> 
                     <LocalDiningIcon style={{ fontSize: 35,color:"orange" }}/>
                     <h6 style={{fontSize:18,color:"orange"}} className={styles.navNameText}>Home</h6>
                   </div>
                    :
                    <div className={styles.linkContentHolder} onClick={()=>startLoading()}> 
                     <LocalDiningIcon style={{ fontSize: 30 }}/>
                     <h4 className={styles.navNameText}>Home</h4>
                   </div>
              }
             </div>
            </Link>

           <Link href="/search" >
            <div className={styles.footerBarS}>
              {
                 Search ?
                <div className={styles.linkContentHolder}> 
                 <SearchIcon style={{ fontSize: 35,color:"orange" }}/>
                 <h6 style={{fontSize:18, color:"orange"}} className={styles.navNameText}>Search</h6>
                </div>
                 :
                <div className={styles.linkContentHolder} onClick={()=>startLoading()}> 
                 <SearchIcon style={{ fontSize: 30 }}/>
                 <h4 className={styles.navNameText}>Search</h4>
                </div>
              }
           </div>
          </Link>

           <Link href="/cart" >
            <div className={styles.footerBarS}>
               {
                 Cart ?
                 <div className={styles.linkContentHolder}> 
                  <Badge classes={{ badge: styles.customBadge}}
                        badgeContent={cartCount} showZero>
                    <ShoppingCartIcon style={{ fontSize: 35,color:"orange" }}/>
                   </Badge>
                   <h6 style={{fontSize:18, color:"orange"}} className={styles.navNameText}>Cart</h6>
                 </div>
                  :
                 <div className={styles.linkContentHolder} onClick={()=>startLoading()}>
                  <Badge classes={{ badge: styles.customBadge }} 
                          badgeContent={cartCount}
                         showZero>
                     <ShoppingCartIcon style={{ fontSize: 30 }}/>
                  </Badge>
                  <h4 className={styles.navNameText}>Cart</h4>
                 </div>
                }
             </div>
            </Link>
          
           <Link href="/profile">
             <div className={styles.footerBarS}>
               {
                 Profile ?
                 <div className={styles.linkContentHolder} onClick={()=>startLoading()}> 
                  <PersonIcon style={{ fontSize: 35,color:"orange" }}/>
                  <h6 style={{fontSize:18, color:"orange"}} className={styles.navNameText}>Profile</h6>
                 </div>
                  :
                  <div className={styles.linkContentHolder} onClick={()=>startLoading()}> 
                  <PersonIcon style={{ fontSize: 30 }}/>
                  <h4 className={styles.navNameText}>Profile</h4>
                 </div>
                }
                </div>
            </Link>
        </div>
     </div>
  )
}