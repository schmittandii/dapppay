import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import WalletConnect from "@walletconnect/web3-provider";

export const providerOptions = {
    coinbasewallet: {
        package: CoinbaseWalletSDK, 
        options: {
          appName: "Web 3",
          infuraId: process.env.INFURA_ID 
        }
      },
    walletconnect: {
        package: WalletConnect,
        options: {
          infuraId: process.env.INFURA_ID
        }
    }
    
}