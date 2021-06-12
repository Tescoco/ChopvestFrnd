import Head from 'next/head'
import AddAddress from '../components/helper/AddAddress'
import MainPages from '../components/layouts/MainPages'
import Header from '../components/helper/Header'
import Content from '../components/pages/Search/Index'

export default function Search() {



  return (
   <MainPages Search>
      <Head >
        <title>ChopVest - Search</title>

      </Head>
      <AddAddress />
      <Header position={"fixed"} title={"Search"} showNotif={false} />
      <Content />
      </MainPages>

     
  )
}
