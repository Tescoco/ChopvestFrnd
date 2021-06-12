import React from 'react'
import PaidCard from './PaidCard'
import styles from "./PaidCardContainer.module.css" 

function PaidCardContainer({id,date}) {
    return (
        <div className={styles.container}>
          <div className={styles.containerInner}>
              <div className={styles.date}>
                  {date}
              </div>
             <PaidCard key={id} id={id} name={"pepper soups"} /> 
             <PaidCard key={id} id={id} name={"fish and okra soup"} /> 
          </div>
        </div>
    )
}

export default PaidCardContainer
