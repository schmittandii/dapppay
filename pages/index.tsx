import Head from 'next/head'
import { useEffect } from 'react'
import { Header, Body, Sponsor, Transactions } from '../components'
import useWeb3 from '../socket/Web3'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Home() {
 const {isConnected, address, connectWallet, disconnectWallet, stakeEther, balance, claimCoins} = useWeb3()


  return (
    <>
      <Head>
        <title>Ethereum</title>
        <meta name="description" content="Siting" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://static.wixstatic.com/media/1f3f2b_b3f21b7f5c154daa84e020e5e2b5dc6f%7Emv2.png/v1/fill/w_32%2Ch_32%2Clg_1%2Cusm_0.66_1.00_0.01/1f3f2b_b3f21b7f5c154daa84e020e5e2b5dc6f%7Emv2.png" />
      </Head>
      <div className='bg-[#4C9540] dark:bg-darkBg-800 transition ease-linear duration-300'>
        <Header connectWallet={connectWallet}
                isConnected={isConnected} 
                address={address} 
                disconnectWallet={disconnectWallet}/>

          <Body connectWallet={connectWallet} 
                isConnected={isConnected}
                stakeEther={stakeEther}
                address={address}
                balance={balance}
                claimCoins={claimCoins} 
                />
          {/* <Sponsor/> */}
        <Transactions/>
        <ToastContainer/>
      </div>
    
    </>
  )
}
