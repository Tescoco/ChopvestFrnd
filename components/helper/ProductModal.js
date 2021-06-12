import React,{ useContext } from 'react';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import styles from "./ProductModal.module.css";
import Image from "next/image"
import Carousel from 'react-elastic-carousel';
import { CartNumber } from '../context/CartNumber';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ProductModal({open,setOpen,imageSrc,price,name,id}) {

  const handleClose = () => {
    setOpen(false);
  };
  
  const images = [
    {imageSrc: imageSrc},
    {imageSrc: "/img/foodImage.JPG"},
    {imageSrc: "/img/spagandturkey.JPG"},
    {imageSrc: "/img/rice-and-stew.JPG"},
    {imageSrc: "/img/Ewa-agoyin.JPG"}
  ]

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 350, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ];
  
  const [orderCount, setOrderCount] = React.useState(1)
  const [inCart, setInCart] = React.useState(false)
  const {setCartCount,cartCount} = useContext(CartNumber)


  React.useEffect(() => {
   if (localStorage.getItem(`${id}`) != undefined) {
    setInCart(true)
    setOrderCount(JSON.parse(localStorage.getItem(`${id}`)))
   }
  }, [])

  const updateOrder = (orderCount) => {
    if (localStorage.getItem(`${id}`) != undefined) {
      localStorage.setItem(id,orderCount)
    }
  }
  
  const minusOrder = () => {
    if (orderCount != 1) {
      setOrderCount(orderCount - 1)
    }
    updateOrder(orderCount - 1)
  }

  const plusOrder = () => {
    setOrderCount(orderCount + 1)
    updateOrder(orderCount + 1)
  }

  const addToCart = () => {
    setInCart(!inCart)
    localStorage.setItem(id,orderCount)
    setCartCount(cartCount + 1)
  }

  const removefromCart = () => {
    setInCart(!inCart)
    localStorage.removeItem(`${id}`)
    setCartCount(cartCount - 1)
  }

  return (
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        className={styles.container}
        fullWidth
        maxWidth={'sm'}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <div className={styles.containerInner}>
         <div className={styles.ProductDetails}>
          <div className={styles.ProductImages}>
          <Carousel  itemsToScroll={1} breakPoints={breakPoints}>
                 { images.map((image,i) => 
                   <Image key={i} src={image.imageSrc} alt="food" height={220} width={220} className={styles.foodImage} />
                 )}
           </Carousel>
          </div>
          <div className={styles.ProductQuantity}>
            <div className={styles.ProductQuantityInner}>
              <div onClick={minusOrder} className={styles.ProductQuantityS1}>
                 -
               </div>
               <div className={styles.ProductQuantityS2}>
                 {orderCount}
               </div>
               <div onClick={plusOrder} className={styles.ProductQuantityS3}>
                 +
               </div>
              </div>
            </div>
          <div className={styles.ProductNameandPrice}>
             <div className={styles.ProductName}>
                {name} 
             </div>
             <div className={styles.ProductPrice}>
               ₦{price}.00
             </div>
          </div>
          <div className={styles.ProductStoreNameandRating}>
            <div className={styles.ProductStoreName}>
               Yakoyo{"  "}🏠
             </div>
             <div className={styles.StoreRating}>
               ⭐ 4.8
             </div>
            </div>
          <div className={styles.ProductAddCart}>
               {
                inCart ? 
                  <div onClick={removefromCart} className={styles.ProductAddCartInnerIn}>
                    In Cart
                 </div>
                   :
                 <div onClick={addToCart} className={styles.ProductAddCartInner}>
                   Add to Cart
                 </div>
              }
          </div>
        </div>
       </div>
      </Dialog>
  );
}
