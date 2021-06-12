import React from 'react'
import SearchBox from './SearchBox'
import ProductContentSkeleton from '../Index/ProductContentSkeleton';
import ProductContent from '../Index/Productcontent';
import Filter from '../Index/Filter';
import styles from "./Indexfile.module.css";
import ProductEmpty from './ProductEmpty';
import SnackBar from '../../utils/SnackBar';

function Index() {

    const [showSnack, setShowSnack] = React.useState(false)
    const [test, settest] = React.useState(true)

    React.useEffect(() => {
        setTimeout(() => {
            settest(false)
        }, 4000);
    }, [showSnack])

    return (
        <div className={styles.container}>
         <div className={styles.containerInner}>
            <SearchBox/> 
            <SnackBar showSnack={showSnack} setShowSnack={setShowSnack} variant={"warning"} content={"Couldn't find any match,Try searching something else"} />
            { test ? <> <ProductContentSkeleton /><Filter display={"none"}  /></> : <ProductEmpty /> /*<ProductContent /> */ } 
         </div>
        </div>
    )
}

export default Index
