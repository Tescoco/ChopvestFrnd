import Head from 'next/head'
import styles from './MainPages.module.css'
import FooterNav from '../helper/FooterNav'
import React from "react"
import { CartNumber } from '../context/CartNumber'
import Loading from '../utils/Loading'

export default function MainPages({ children,Home,Search,Cart,Profile}) {

  const editCartCount = (lScontent) => {
    setCartCount(Object.keys(lScontent).length)
  }

  React.useEffect(() => {
    const lScontent = {...localStorage}

    Object.keys(lScontent).map(function(key) {
      //if its not a number
       if (!key.match(/^\d+$/)) {
         delete lScontent[`${key}`]
       }
     })
     editCartCount(lScontent)
  }, [])

  const [cartCount, setCartCount] = React.useState(0)
  const [load, setLoad] = React.useState(false)

  const startLoading = () => {
    setLoad(true)
    setTimeout(() => {
      setLoad(false)
    }, 5000);
  }



  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <meta
          name="description"
          content="ChopVest is a platform where you can buy food and sell food to people around you!"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            "ChopVest"
          )}.png?theme=light&md=0&fontSize=75px&images=https://i.ibb.co/y4G8FP0/7a3ec529632909-55fc107b84b8c-removebg-preview.png`}
        />
        <meta name="og:title" content="ChopVest" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:description" name="og:description" content="ChopVest is a platform where you can buy food and sell food to people around you!"/>
        <meta name="twitter:description"
        content="ChopVest is a platform where you can buy food and sell food to people around you!"/>
        <meta property="og:image" name="og:image" 
        content="https://i.ibb.co/y4G8FP0/7a3ec529632909-55fc107b84b8c-removebg-preview.png"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Nova+Mono&family=Indie+Flower&family=PT+Sans+Narrow&family=Squada+One&family=Ubuntu:ital@1&display=swap" rel="stylesheet"></link>
        <meta name="theme-color" content="rgb(252, 250, 227)" />
      </Head>
       <CartNumber.Provider value={{setCartCount,cartCount}}>
        {children}
       </CartNumber.Provider>
      <FooterNav startLoading={startLoading} cartCount={cartCount} Home={Home} Search={Search} Cart={Cart} Profile={Profile} />
      <Loading load={load} />
    </div>
  )
}