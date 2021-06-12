import Head from 'next/head'
import MainPages from '../../components/layouts/MainPages'
import Header from '../../components/helper/Header'
import Content from '../../components/pages/Cart/Content'
import styles from '../../styles/Index.module.css'

export default function Profile() {
  return (
    <MainPages Cart>
      <div className={styles.container}>
        <Head>
          <title>ChopVest - Cart</title>
         </Head>
         <Header position={"fixed"} title={"Cart"} showNotif={false} />
         <Content />
       </div>
      </MainPages>

     
  )
}
