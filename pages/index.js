import Head from 'next/head'
import MainPages from '../components/layouts/MainPages'
import Content from '../components/pages/Index/Content'
import Header from '../components/helper/Header'
import styles from '../styles/Index.module.css'

export default function Home() {
  return (
     <MainPages Home> 
       <div className={styles.container}>
         <Head>
          <title>ChopVest - Order Food Online</title>
         </Head>
         <Header position={"fixed"} title={"ChopVest"} showNotif={true} />
         <Content />
      </div>
    </MainPages>

  )
}
