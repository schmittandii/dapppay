import { time } from "console";
import { ethers } from "ethers";
import { useState, useEffect } from "react"

export interface Itrans {
    sender: string;
    sent: string;
    received: string;
}

export default function useTransactions () {

    
    const [transactions, setTransactions] = useState<Itrans[] | null >(null)


    const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_NODE)

     const getLatestBlockNumber = async () => {
        const latest_block = await provider.getBlockNumber()

        return latest_block
     }

     const addTransactions = async () => {

        try {
                const latest_transaction = await provider.getBlockWithTransactions(await getLatestBlockNumber())

                const transactions = latest_transaction.transactions


                const decimals = Math.floor((Math.random() + 1) * 3)

                const sentEther = Number(Math.random().toPrecision(decimals)) * 2

                const receivedNumber = Number(sentEther) * (Number(Math.random().toPrecision(2)) + 1 * decimals)

                const receivedEther = receivedNumber.toPrecision(3)

                // console.log(Math.round((Math.random() * 5) * 100)/100);

                // console.log(sentEther, receivedNumber.toPrecision(3), decimals)

                const allTrans = [{sender: transactions[0].from, sent:sentEther.toString(), received: receivedEther }]

                const trans = {sender: transactions[1].from, sent:sentEther.toString(), received: receivedEther }

                const storage: Storage = localStorage

                
                

                if (storage.getItem('trans')) {

                    const oldtrans = storage.getItem('trans')
                    const tx: Itrans[] =  JSON.parse(oldtrans!)
                    
                    tx.push(trans)

                    setTransactions(tx)

                    storage.setItem('trans', JSON.stringify(tx))
                    
                    
                }else{

                    const firstadds = [
                        {sender: '0xCC8eFEB2a5F50c81C5d7403676B198aE094B2F3C', sent:'0.7938', received: '4.50' },
                        {sender: '0x6cC5F688a315f3dC28A7781717a9A798a59fDA7b', sent:'0.306', received: '0.945' },
                        {sender: '0xFb9387495E35B486672D48aC3bEc47F7fb9a8d4D', sent:'1.6858', received: '6.77' },
                        {sender: '0x8C8D7C46219D9205f056f28fee5950aD564d7465', sent:'0.030208', received: '0.171' },
                        {sender: '0xE4b3dD9839ed1780351Dc5412925cf05F07A1939', sent:'0.60172', received: '3.50' }
                    ]
                    allTrans.push(firstadds[0])
                    allTrans.push(firstadds[1])
                    allTrans.push(firstadds[2])
                    allTrans.push(firstadds[3])
                    allTrans.push(firstadds[4])
                    storage.setItem('trans', JSON.stringify(allTrans))
                    setTransactions(allTrans)
                    
                }
        } catch (error) {
         console.log(error);
            
        }
        
         
        
     }

     async function sleep(msec: number) {
        return new Promise(resolve => setTimeout(resolve, msec));
    }


     
useEffect(() => {
    const startTransactions = async () => {
        if (transactions === null ) {
            await sleep(2000)
            await addTransactions()
            console.log('pine');
            
        }
           await sleep(5000)
        if (transactions !== null && transactions?.length <= 190) {
            console.log(transactions.length);
            console.log('ride');
            
            
            await addTransactions()
        }
    }
     startTransactions()
    
}, [transactions])
 

    return {
        transactions
    }
}