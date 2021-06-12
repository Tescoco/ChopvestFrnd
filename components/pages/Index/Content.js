import AddAddress from "../../helper/AddAddress"
import styles from "./Content.module.css"
import Filter from "./Filter"
import ProductContent from "./Productcontent"
import ProductContentSkeleton from "./ProductContentSkeleton"
import {useState,useEffect} from "react"
import ProductEmpty from "../Search/ProductEmpty"
import SnackBar from "../../utils/SnackBar"
import React from "react";

export default function Content() {
    const [test, settest] = useState(true)
    const [showSnack, setShowSnack] = React.useState(false)

    useEffect(() => {
        
       setTimeout(() => {
          settest(false)
          setShowSnack(true)
       }, 4000);
      //setShowSnack(true)
    }, [])
    return (
        <div className={styles.container}>
          <div className={styles.containerInner}>
              <AddAddress />
            {/*   <ProductEmpty />*/}
              <SnackBar showSnack={showSnack} setShowSnack={setShowSnack} variant={"warning"} content={"Couldn't find any vendor around your location"} />
              { test ? <> <ProductContentSkeleton /><Filter display={"inline-block"}  /></> : <ProductEmpty /> /*<ProductContent /> */ } 
              
          </div>
        </div>
    )
}

