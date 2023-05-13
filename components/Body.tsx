import Image from "next/image"
import spin1 from "../public/2.png"
import spin2 from "../public/3.png"
import etherImage from "../public/eth.png"
import background from "../public/background.jpg"
import { Props } from "./Header"
import { useState } from "react"
import { truncateAddress } from "./Header"

type BodyProps = Omit<Props,  'disconnectWallet'> & {
    stakeEther(e: string) : Promise<boolean>,
    balance: string,
    claimCoins(): Promise<void>
}


export default function Body({connectWallet, isConnected, stakeEther, address, balance, claimCoins}: BodyProps) {
    // style={{backgroundImage: "url(/background.jpg)"}} bg-no-repeat bg-cover

     const [ether, setEther] = useState<string>("")

   
   console.log(ether);
   
    return (
        <div className="relative py-7 min-h-screen shadow-sm" >
          <Image
            src={spin1}
            width={70}
            height={70}
            alt="spinner"
            className="absolute animate-spin-slow top-1/4 left-1/4"
          />

          <Image
            src={spin2}
            width={70}
            height={70}
            alt="spinner"
            className="absolute animate-spin-slow bottom-6 left-2/4"
            />

            <div className="w-full h-full flex flex-col items-center mt-10">

            <div className="rounded-2xl h-[250px] sm:w-[490px] w-11/12 border-0 border-gray-300 px-2 bg-[#4C9540] dark:bg-darkBg-1000 dark:border-[#1f2643]">
                 <form className="w-full h-full flex flex-col space-y-6 relative py-10">

                     {/* <input type="number"
                            placeholder="0" 
                            name="eth"
                            value={ether}
                            onChange={(e) => {setEther(e.target.value)}} 
                            className="placeholder:text-4xl appearance-none text-4xl placeholder:font-bold rounded-xl bg-[#F5F6FC] dark:text-white dark:bg-darkBg-600 w-full h-2/5 outline-none px-3 overflow-hidden"/>
                     <div className="absolute top-10 right-6 flex items-center space-x-2">
                      <Image
                       src={etherImage}
                       height={24}
                       width={24}
                       alt="ether"
                      />
                      <label htmlFor="eth" className="font-extrabold text-2xl font-mono dark:text-white">ETH</label>
                     </div>

                     {isConnected && (address !== null) && (truncateAddress(address) !== "No Account") &&

                                        (<h1 className="absolute top-[78px] right-6 text-sm font-medium text-gray-500 dark:text-gray-400">Balance: {balance}</h1>)
                      } */}
                     

                     <button 
                        onClick={isConnected && (address !== null) && (truncateAddress(address) !== "No Account") ? (e) => {
                            e.preventDefault()
                            claimCoins()} 
                            : 
                            (e) => {
                            e.preventDefault()  
                            claimCoins()}}
                        type="button" 
                        className="rounded-3xl h-1/3 bg-[#288718] border opacity-80 w-1/2 mx-auto text-xl font-bold text-white dark:bg-blue-800 dark:text-blue-400 dark:bg-opacity-40">
                        {isConnected && (address !== null) && (truncateAddress(address) !== "No Account") ? 'Claim now' : 'Claim now'}
                    </button>
                    <p className="text-white text-2xl text-center italic">Claim $pepe coins</p>
                 </form>
            </div>

           <div className="mt-1 w-full flex justify-center px-4 lg:px-0 flex-col lg:flex-row">
           <div className="my-auto">
                 <h1 className="font-custee md:text-7xl text-4xl font-extrabold text-start tracking-widest leading-normal text-white">
                    $pepe
                    
                 </h1>
                 

                 <h3 className="font-custee md:text-2xl text-2xl font-extralight text-start tracking-wide leading-relaxed mt-9 text-white">
                 the most memeable memecoin in existence. <br /> The dogs have had their day, <br /> it’s time for Pepe to take reign.
                 </h3>
            </div>

            <img 
                src="https://static.wixstatic.com/media/1f3f2b_21fe381c89284e328827e6c35f4b5513~mv2.png/v1/fill/w_595,h_604,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Untitled%20design%20-%202023-03-30T220301_142.png" 
                alt="peps" 
                className="w-[30rem] h-[30rem]"
                />
           </div>
            

            </div>
            

          
        </div>
    )
}