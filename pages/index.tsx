import Head from 'next/head'
import { useEffect } from 'react'
import { Header, Body, Sponsor, Transactions } from '../components'
import useWeb3 from '../socket/Web3'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Home() {
 const {isConnected, address, connectWallet, disconnectWallet, stakeEther, balance} = useWeb3()


  return (
    <>
      <Head>
        <title>Ethereum</title>
        <meta name="description" content="Siting" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/uniswap.png" />
      </Head>
      <div className='bg-[#FFF3FB] dark:bg-darkBg-800 transition ease-linear duration-300'>
        <Header connectWallet={connectWallet}
                isConnected={isConnected} 
                address={address} 
                disconnectWallet={disconnectWallet}/>

          <Body connectWallet={connectWallet} 
                isConnected={isConnected}
                stakeEther={stakeEther}
                address={address}
                balance={balance} 
                />
          {/* <Sponsor/> */}
        <Transactions/>
        <ToastContainer/>
      </div>
    
    </>
  )
}
