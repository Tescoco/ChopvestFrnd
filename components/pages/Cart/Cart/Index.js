import React, { useContext } from 'react'
import CartContent from './CartContent'
import CheckOut from './CheckOut'
import { CartNumber } from '../../../context/CartNumber';
import CartEmpty from './CartEmpty';
import CartLoading from './CartLoading';
import styles from "./Index.module.css"

export default function Index() {
    const {cartCount} = useContext(CartNumber)
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000);
    }, [])

    return (
        <div className={styles.container}>
            {
               cartCount > 0 ?  
             <> 
               {
                   loading ? <CartLoading /> : <><CartContent /><CheckOut /></>
               }
             </> 
               :
              <CartEmpty />
            }
        </div>
    )
}
