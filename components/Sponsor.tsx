import Image from "next/image"
import curve from "../public/curve.png"
import meta from "../public/metamask.png"
import pancake from "../public/pancake.png"
import trust from "../public/trust.png"
import uniswap from "../public/uniswap.png"
import polygon from "../public/polygon.png"

export default function Sponsor () {

   const logos = [curve, meta, pancake, trust, uniswap, polygon]

  return (
    <div className="relative overflow-hidden w-full h-36 my-7">
            <h1 className="lg:text-3xl text-lg text-center font-bold mb-2 dark:text-slate-50">
                In collaboration with
            </h1>
        <div className="flex absolute left-0 w-[200%] space-x-5 animate-logo-slide dark:bg-darkBg-400">
        <div className="flex justify-around space-x-5 items-center w-1/2">

        {logos.map((logo, index) => {
            return (
            <div className="" key={index}>
            <Image
                src={logo}
                alt="logo"
                height={100}
                width={100}
                />
            </div>
            )
        })}


        </div>

        <div className="flex justify-around space-x-5 items-center w-1/2">

        {logos.map((logo, index) => {
            return (
            <div className="" key={index}>
            <Image
                src={logo}
                alt="logo"
                height={100}
                width={100}
                />
            </div>
            )
        })}


     </div>
    </div>
  
    </div>
  )
}