import React from 'react'
import styles from "./PaidContent.module.css"
import PaidCardContainer from "./PaidCardContainer"

function PaidContent({content}) {

    const [localStorageContent, setLocalStorageContent] = React.useState({})

    React.useEffect(() => {
       setLocalStorageContent({...localStorage})
    }, [])

    return (
        <div className={styles.container}>
         <div className={styles.containerInner}>
             {/* sort by date */}
             {Object.keys(localStorageContent).slice(0).reverse().map(function(key) {
               return key > 0 &&<PaidCardContainer key={key} id={key} date={`${key} - june - 2021`} />
             })}
         </div>
        </div>
    )
}

export default PaidContent
