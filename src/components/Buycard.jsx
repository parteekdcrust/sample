import React,{useState} from 'react'
import './Buycard.css';
import { handleBuyNow,connectToMetamask } from '../config/wallet';


const Buycard = () => {

    const [amount,setAmount]=useState(1)
    

    return (
        <div className='pt-[50px]'>
            <h1 className='main_hd'>Node <span className='pack'>Packages</span></h1>
            <p className='para_B'>To bulid a solid digital stake, you need to know where you're investing. Find our node<br></br> system that best suits your financial intersts.</p>
            <div className='flex justify-around pb-[80px] gap-[20px] lg:gap-[0] flex-col lg:flex-row'>
                <div className='card_A text-[white] w-[100%] lg:w-[40%]'>
                    <h2 className='main_hadding'>NODE 10-4990</h2>
                    <p className='para'>Get 0 SRI</p>
                    <hr></hr>
                    <p className='para'>Return (Invest Amount *3/900) USD Every Day</p>
                    <hr></hr>
                    <p className='para'>900* Day Contract</p>
                    <hr></hr>
                    <p className='para'>Earn Total (Inverst Amonut *3) USD</p>
                    <hr />
                    <p className='para'>value<span className='text-[red]'>*</span></p>
                    <div className='text-left'><input className='input w-[75%] lg:w-[82%]' type="text" />
                    <button className='btn_10'>x10 =0</button></div>
                   <div className='mt-[12px]'><button className='btn_buy'>Buy Now</button></div> 
                </div>
                <div className='card_A text-[white] w-[100%] lg:w-[40%]'>
                    <h2 className='main_hadding'>NODE 5000-100000</h2>
                    <p className='para'>Get 0 SRI</p>
                    <hr></hr>
                    <p className='para'>Return (Invest Amount *3/600) USD Every Day</p>
                    <hr></hr>
                    <p className='para'>600* Day Contract</p>
                    <hr></hr>
                    <p className='para'>Earn Total (Invest Amount *3) USD</p>
                    <hr />
                    <p className='para'>value<span className='text-[red]'>*</span></p>
                    <div className='text-left'><input className='input' type="text" />
                    <button className='btn_10'>x10 =0</button></div>
                    <div className='mt-[12px]'><button className='btn_buy'>Buy Now</button></div> 
                </div>
            </div>
        </div>
    )
}

export default Buycard