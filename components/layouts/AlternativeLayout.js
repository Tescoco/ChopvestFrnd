import Head from 'next/head'
import styles from './MainPages.module.css'


export default function ProfileLayout({ children}) {
   
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
        <link href="https://fonts.googleapis.com/css2?family=Nova+Mono&display=swap" rel="stylesheet"></link>
        <meta name="theme-color" content="rgb(252, 250, 227)" />
      </Head>
     {children}
    </div>
  )
}