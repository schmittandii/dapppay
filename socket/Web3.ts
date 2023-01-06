import Web3Modal from 'web3modal'
import { useTheme } from 'next-themes'
import { useState, useRef, useEffect } from 'react'
import { ethers } from 'ethers'

import { providerOptions } from '../constants/ProviderOptions'



export default function useWeb3 () {

    const [provider, setProvider] = useState<ethers.providers.Web3Provider>()

    const [isConnected, setIsConnected] = useState<boolean>(false)

    const { theme } = useTheme()

    const [address, setAddress] = useState<string | null>(null)


    const web3Modal = useRef<Web3Modal>()

    const getProviderOrSigner = async (needSigner = false) => {
        try {

            const provider = await web3Modal.current?.connect()
            const web3Provider = new ethers.providers.Web3Provider(provider)
            
            const accounts = await web3Provider.listAccounts()
            setProvider(web3Provider)
            setAddress(accounts[0])

            if (needSigner) {
                const signer = web3Provider.getSigner()
                return signer
            }

            return web3Provider
            
        } catch (error) {
            console.error(error);
            
        }
        
      }
    
      const connectWallet = async (): Promise<void> => {
        try {
                await getProviderOrSigner()
                setIsConnected(true)
                
        } catch (error) {
            console.error(error);
            
        }
         
      }

      const disconnectWallet = () => {
         web3Modal.current?.clearCachedProvider()
         setAddress("")
         setIsConnected(false)
      }

      useEffect(() => {
        web3Modal.current = new Web3Modal({
            cacheProvider: true,
            disableInjectedProvider: false,
            providerOptions: providerOptions,
            theme: theme
        })

        if (web3Modal.current.cachedProvider) connectWallet()
        
      },[])

      return {
        isConnected,
        address,
        getProviderOrSigner,
        connectWallet,
        disconnectWallet
      }

}