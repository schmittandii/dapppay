import Image from "next/image"
import spin1 from "../public/2.png"
import spin2 from "../public/3.png"
import ether from "../public/eth.png"
import background from "../public/background.jpg"

export default function Body() {
    // style={{backgroundImage: "url(/background.jpg)"}} bg-no-repeat bg-cover
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

            <div className="rounded-2xl h-[300px] sm:w-[490px] w-11/12 border px-3 shadow-sm bg-white dark:bg-darkBg-900 dark:border-[#1f2643]">
                 <form className="w-full h-full flex flex-col space-y-6 relative py-10">
                     <input type="number" placeholder="0" name="eth" className="placeholder:text-3xl appearance-none text-3xl placeholder:font-bold rounded-xl bg-[#F5F6FC] dark:text-white dark:bg-darkBg-600 w-full h-2/5 outline-none px-3 overflow-hidden"/>
                     <div className="absolute top-10 right-6 flex items-center space-x-2">
                      <Image
                       src={ether}
                       height={24}
                       width={24}
                       alt="ether"
                      />
                      <label htmlFor="eth" className="font-extrabold text-2xl font-mono dark:text-white">ETH</label>
                     </div>
                     

                     <button type="submit" className="rounded-3xl h-1/3 bg-pink-300 opacity-80 w-full text-xl font-bold text-pink-600 dark:bg-blue-800 dark:text-blue-400 dark:bg-opacity-40">
                        Connect Wallet
                    </button>
                 </form>
            </div>

            <div className="mt-8 w-11/12">
                 <h1 className="font-[fantasy] md:text-7xl text-4xl font-extrabold text-center tracking-widest leading-normal dark:text-slate-100">
                     Stake your Ether <br/> into pool.
                 </h1>
                 

                 <h3 className="font-[lato] md:text-2xl text-xl font-extraligh text-center tracking-wide leading-relaxed mt-9 dark:text-slate-100">
                     Receive up to 6x of initial stake determined by reserve policy.
                 </h3>
            </div>

            </div>
            

          
        </div>
    )
}