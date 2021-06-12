import Image from "next/image"
import styles from "./ProductCard.module.css"
import ProductModal from "../helper/ProductModal"
import ProductModalMobile from "../helper/ProductModalMobile"
import React from 'react';

export default function ProductCard({price,name,imageSrc,id}) {
  const [open, setOpen] = React.useState(false) 
  const handleClickOpen = () => {
    setOpen(true);
  };
  return (
    <>
         <div onClick={()=>handleClickOpen()} className={styles.container}>
          <div className={styles.containerInner}>
            <div className={styles.Product}>
              <div className={styles.ProductImage}>
              <Image src={imageSrc} alt="food" height={140} width={140} className={styles.foodImage} />
              </div>
              <div className={styles.ProductName}>
                <div className={styles.ProductNameInner}>
                   {name}
                </div>
              </div>
              <div className={styles.ProductPrice}>
                 ₦{price}.00
              </div>
           </div>
          </div>
        </div> 
        <div className={styles.ProductModalMobile}>
          <ProductModalMobile id={id} name={name} price={price} open={open} setOpen={setOpen} imageSrc={imageSrc}/>
        </div>
         <div className={styles.ProductModal}>
           <ProductModal id={id} name={name} price={price} open={open} setOpen={setOpen} imageSrc={imageSrc}/>
         </div>
        </>
    )
}
