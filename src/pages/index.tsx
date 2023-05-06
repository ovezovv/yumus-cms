import Header from '../components/Header'
import Head from 'next/head'
import TopCards from '../components/TopCards'
import RecentOredrs from '../components/RecentOrders'


export default function Home() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name='description' content='Jasmine Beauty Dashboard' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={'bg-gray-100 min-h-screen'}>
        <Header />
        <TopCards />
        <RecentOredrs />

      </main>
    </>
  )
}
