import React from 'react'
import styles from "./SearchBox.module.css";
import SearchSharpIcon from '@material-ui/icons/SearchSharp';

function SearchBox() {
    return (
        <div  className={styles.container}>
         <div className={styles.containerInner}>
          <div className={styles.searchBox}>
           <div className={styles.searchBoxInner}>
            <input placeholder="Food or Store" type="input" className={styles.input} />
           </div>
          </div>
          <div className={styles.CTA}>
           <div className={styles.CTAInner}>
                <SearchSharpIcon  />
           </div>
          </div>
         </div>
        </div>
    )
}

export default SearchBox
