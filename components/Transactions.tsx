import useTransactions from "../socket"
import eth from "../public/eth.png"
import { useState, useEffect } from "react"
import { Itrans } from "../socket"

function Paginate(transactions: Itrans[] | null) {
    const itemsPerPage = 30

    if (transactions) {
        const trans = [...transactions]
        const pages = Math.ceil(trans.length / itemsPerPage)

        const paginatedTrans = Array.from({length: pages}, (_, index) => {
           const start: number = index * itemsPerPage

           return trans.reverse().slice(start, start + itemsPerPage )
        })

        return paginatedTrans
    }else {
        return null
    }
}

export default function Transactions() {

    const headers = ['Sent', 'Received']

    const {transactions} = useTransactions() 

    const [pageTrans, setPageTrans] = useState<Itrans[][] | null>()

    const [page, setPage] = useState<number>(0)


    const trans = Paginate(transactions)

    const handlePageShow = (type: string, index?: number) => {
        if (type === 'number') {
            setPage(index!)
        }else if (type === 'next') {
            setPage((prev) => {
                let nextPage = prev + 1
                if (nextPage > pageTrans!.length - 1) {
                    nextPage = 0
                }
                return nextPage
            })
        }else {
            setPage((prev) => {
                let prevPage = prev - 1
                if (prevPage < 0) {
                    prevPage = pageTrans!.length -1
                }
                return prevPage
            })
        }
    }

    
    

    useEffect(() => {
        setPageTrans(trans)
    }, [transactions])
    



     return (
        <div className="mx-5 pb-12 pt-4">
           
           <div className="flex border shadow-sm my-6 lg:ml-16 ml-0 w-32 p-2 space-x-2 rounded-md bg-white dark:bg-darkBg-800 dark:border-[#1f2643]">
            <h1 className="text-sm font-semibold text-neutral-400 dark:text-white">
                    Transactions
            </h1>
            
            <span className="relative rounded-full h-3 w-3 bg-sky-500">
                <span className="animate-ping absolute h-3 w-3 rounded-full bg-sky-400 opacity-75"></span>
            </span>
           </div>
           

            <div className="flex justify-center">
                <div className="overflow-x-auto shadow-sm rounded-xl">

                <table className="lg:w-[1200px] w-[990px] bg-white dark:bg-darkBg-800 dark:border-darkBg-400 table-auto border">

                    <thead>
                        <tr className="border-b dark:border-b-darkBg-400">
                           <th className="h-12 w-2/5 text-start px-7 font-normal text-sm text-gray-600 dark:text-gray-400">
                                Sender
                            </th>
                            {headers.map((head, index) => (
                                
                                
                                <th className="h-12 w-1/4 text-end px-5 font-normal text-sm text-gray-600 dark:text-gray-400" key={index}>
                                    {head}
                                </th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                         {pageTrans ? (pageTrans![page].map((trans, index) => (
                            <tr key={index}>
                                <td className="text-start px-4 h-20 font-semibold dark:text-slate-50">
                                   {trans.sender}
                                </td>
                                <td className="text-end space-x-6 px-4 h-20 dark:text-slate-50">
                                   {trans.sent} <span>{'     '}   ETH</span> 
                                </td>
                                <td className="text-end space-x-6 px-4 h-20 dark:text-slate-50">
                                   {trans.received} <span>{'    '}  ETH</span> 
                                </td>
                            </tr>
                         ))
                              
                           ) : (
                            Array.from({length: 5}).map((_, index) => {
                                return ( 
                                    <tr className="animate-pulse" key={index}>
                                        <td className="px-4 h-20">
                                            <div className="h-1/2 w-3/4 bg-gray-200 rounded-md dark:bg-darkBg-400"></div>
                                            </td>
                                            <td className="px-4 h-20 relative">
                                            <div className="h-1/2 w-2/3 bg-gray-200 rounded-md absolute right-0 bottom-5 dark:bg-darkBg-400"></div>
                                            </td>
                                            <td className="px-4 h-20 relative">
                                            <div className="h-1/2 w-2/3 bg-gray-200 rounded-md absolute right-3 bottom-5 dark:bg-darkBg-400"></div>
                                        </td>
                                    </tr>
                                    )
                                })
                         )}
                    </tbody>

                </table>

                </div>

                

            </div>
            {pageTrans && pageTrans.length > 0 && (
               <div className="mt-5 flex justify-center">
                    <div className="flex justify-center space-x-1 w-48">
                        <button className="border p-1 shadow-lg"
                          onClick={() => handlePageShow('back')}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 dark:stroke-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                          </button>

                            {pageTrans.map((_, index) => (
                                <button className={`border p-2 shadow-lg ${page === index && "bg-gray-500 text-white w-8"}`} 
                                  key={index}
                                  onClick={() => handlePageShow('number', index)}
                                >
                                   {index + 1}
                                </button>
                            ))}

                        <button className="border p-1 shadow-lg"
                          onClick={() => handlePageShow('next')}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 dark:stroke-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>

                         </button>    
                        
                    </div>
           
               </div>
            )}
            
            
        </div>
     )
}
