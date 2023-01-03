import Head from 'next/head'
import { useEffect } from 'react'
import { Header, Body, Sponsor, Transactions } from '../components'

export default function Home() {


  return (
    <>
      <Head>
        <title>Ethereum</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='bg-[#FFF3FB] dark:bg-darkBg-800 transition ease-linear duration-300'>
        <Header/>
          <Body/>
          <Sponsor/>
        <Transactions/>
      </div>
    
    </>
  )
}
