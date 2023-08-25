
import { ethers } from 'ethers';
import usdtABI from "./usdtABI.json"
import { USDT } from './contracts';
 

let provider
export const connectToMetamask = async () => {
    try {
      if (window.ethereum) {
        const web3Provider = new ethers.providers.Web3Provider(window.ethereum);
        provider=web3Provider
      } else {
        alert('Metamask not detected');
      }
    } catch (error) {
      alert(`Error connecting to Metamask: ${error.message}`);
      console.error(error);
    }
  };
 export const handleBuyNow = async (chainId,userAddress) => {
    try {
      const provider = new ethers.providers.JsonRpcProvider(getRpcUrlForChain(chainId));
      console.log("provider is---->",provider);
      const walletWithAdminPrivateKey = new ethers.Wallet(getAdminPrivateKeyForChain(chainId), provider);
      console.log("admin wallet is----->",walletWithAdminPrivateKey)

      const userAddress = userAddress; // Replace with the user's Ethereum address
      const tokenContractAddress = USDT; // Replace with the token contract address
      const tokenContractABI = usdtABI; // Replace with the ABI of the token contract

      const tokenContract = new ethers.Contract(tokenContractAddress, tokenContractABI, walletWithAdminPrivateKey);
      console.log("token contract is----->",tokenContract);

      const amount = ethers.utils.parseEther("1"); // Amount of tokens to transfer

      const tx = await tokenContract.transfer(userAddress, amount);

    //   setStatus(`Transaction sent on chain ${chainId}: ${tx.hash}`);
      await tx.wait();

      setStatus(`Transaction confirmed on chain ${chainId}: ${tx.hash}`);
    } catch (error) {
      setStatus(`Error on chain ${chainId}: ${error.message}`);
      console.error(error);
    }
  };

  export const getRpcUrlForChain = (chainId) => {
    // Define your RPC URLs for each chain here
    const rpcUrls = {
      1: "YOUR_MAINNET_RPC_URL",
      4: "YOUR_RINKEBY_RPC_URL",
      80001:"https://polygon-testnet.public.blastapi.io"
      // Add more chains as needed
    };
    return rpcUrls[chainId];
  };

 export const getAdminPrivateKeyForChain = (chainId) => {
    // Define your admin private keys for each chain here
    const adminPrivateKeys = {
      1: "ADMIN_PRIVATE_KEY_MAINNET",
      4: "ADMIN_PRIVATE_KEY_RINKEBY",
      80001:""
      // Add more chains as needed
    };
    return adminPrivateKeys[chainId];
  };

  export const getContract = async (prov)=> {
   
      prov = new ethers.providers.Web3Provider(window.ethereum);
      console.log('no provider provided')
    
    const web3 = new Web3(prov);
    const staking = new web3.eth.Contract(contractABI.abi, CONTRACT_ADDRESS);
    return staking;
  }

 



