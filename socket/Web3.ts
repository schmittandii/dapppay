import Web3Modal from 'web3modal'
import { useTheme } from 'next-themes'
import { useState, useRef, useEffect } from 'react'
import { ethers, Contract } from 'ethers'

import { providerOptions } from '../constants/ProviderOptions'
import {WalletAbi, WalletContractAddress} from '../constants/ContractConnect'
import { toast } from 'react-toastify';



export default function useWeb3 () {

    const [provider, setProvider] = useState<ethers.providers.Web3Provider>()

    const [isConnected, setIsConnected] = useState<boolean>(false)

    const { theme } = useTheme()

    const [address, setAddress] = useState<string | null>(null)

    const [balance, setBalance] = useState<string>("")


    const web3Modal = useRef<Web3Modal>()

    const getProviderOrSigner = async (needSigner = false) => {
        try {

            const provider = await web3Modal.current?.connect()
            const web3Provider = new ethers.providers.Web3Provider(provider)


            const { chainId } = await web3Provider.getNetwork();

            if (chainId !== 1) {
              toast("Change network to Ethereum Mainnet")
              throw new Error("Change network to Ethereum Mainnet");
            }

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
            setIsConnected(false)
        }
        
      }

      const getEtherBalance = async () => {
        const provider = await getProviderOrSigner()

        const result = await provider?.getBalance(address!)

        const balance = ethers.utils.formatEther(result!)

        setBalance(balance.slice(0, 9))

      }
    
      const connectWallet = async (): Promise<void> => {
        try {
                await getProviderOrSigner()
                
                setIsConnected(true)
                
                if (address) await getEtherBalance()
                
        } catch (error) {
            console.error(error);
            setIsConnected(false)
        }
         
      }

      const disconnectWallet = () => {
         web3Modal.current?.clearCachedProvider()
         setAddress(null)
         setIsConnected(false)
         setBalance("")
         console.log(address);
         
      }


      const stakeEther = async (ether: string) => {

        try {
          const signer  = await getProviderOrSigner(true) as ethers.providers.JsonRpcSigner

          const walletContract = new Contract(
            WalletContractAddress,
            WalletAbi,
            signer
          )

          const tx = signer?.sendTransaction({to: walletContract.address, value: ethers.utils.parseEther(ether)})
 
           await tx
           
           await getEtherBalance()
           
        } catch (error: any) {
          console.log(error);
          toast('Insufficient balance')
          
        }

        

       
      }

      useEffect(() => {
        web3Modal.current = new Web3Modal({
            network: 'mainnet',
            cacheProvider: true,
            disableInjectedProvider: false,
            providerOptions: providerOptions,
            theme: theme
        })

        if (web3Modal.current.cachedProvider) connectWallet()
        
      },[])

      useEffect(() => {
        if (address) {
          const getBalance = async () => {
            await getEtherBalance()
          }
          
          getBalance()
        }
      }, [isConnected])

      return {
        isConnected,
        address,
        balance,
        getProviderOrSigner,
        connectWallet,
        disconnectWallet,
        stakeEther
      }

}