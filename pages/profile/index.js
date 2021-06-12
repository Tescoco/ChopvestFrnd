import Head from 'next/head'
import MainPages from '../../components/layouts/MainPages'
import Content from '../../components/pages/Profile/Index'

export default function Profile() {
  return (
   <MainPages Profile>
      <Head >
        <title>ChopVest - Profile</title>
      </Head>
        <Content />
      </MainPages>
  )
}
