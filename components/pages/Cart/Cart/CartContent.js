import React from 'react'
import CartCard from './CartCard'
import styles from "./CartContent.module.css"

export default function CartContent() {

    const [localStorageContent, setLocalStorageContent] = React.useState({})

    React.useEffect(() => {
       setLocalStorageContent({...localStorage})
    }, [])

    return (
        <div className={styles.container}>
         <div className={styles.containerInner}>
             {Object.keys(localStorageContent).slice(0).reverse().map(function(key) {
               return key > 0 && <CartCard key={key} id={key}  count={localStorageContent[key]} name={"Chicken Pepper Soup"} />
             })}
         </div>
        </div>
    )
}