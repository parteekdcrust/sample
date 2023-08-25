// import React from 'react'
import styles from '../style'
import Navbartwo from '../components/Navbartwo'

const About = () => {
  return (
    <div className={`text-white h-full  bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      
      <div className={`${styles.boxWidth}`}>
        <Navbartwo />
        <div className='py-40'>
<div className='text-gradient leading-tight text-4xl font-bold'>WELCOME TO Sriverse <div className='text-lg'>Your All-in-One Cross Platform App!</div></div>
<div className='text-justify'>At Sriverse, we believe in making your financial transactions and daily activities simple, secure, and convenient. Our innovative app provides you with a seamless experience, allowing you to transfer funds, access various services, and enjoy a hassle-free digital lifestyle.

With Sriverse, you can effortlessly transfer funds from one wallet to another with just a few taps. Whether you need to send money to your family, friends, or colleagues, our wallet-to-wallet fund transfer feature ensures that your transactions are quick, reliable, and secure. Say goodbye to the complexities of traditional banking and embrace the ease of digital payments.

But thats not all - Sriverse goes beyond wallet-to-wallet transfers. Our app also allows you to transfer funds from your wallet to third-party apps. Whether you need to pay your utility bills, recharge your mobile phone, book tickets for your favorite events, or shop for the latest trends, Sriverse has got you covered. We have partnered with a wide range of service providers to offer you a comprehensive suite of services, all accessible from a single platform.

Security is our utmost priority at Sriverse. We have implemented state-of-the-art encryption and security measures to safeguard your personal and financial information. You can trust that your transactions and data are protected at all times.

Sriverse is designed with simplicity in mind. Our user-friendly interface ensures that even those new to digital payments can navigate the app with ease. We strive to provide a seamless experience that empowers you to take control of your finances and enjoy the benefits of a cashless society.

Join the growing community of Sriverse users and experience the future of digital payments. Download the app today and embark on a journey towards a more convenient and secure financial lifestyle. Say goodbye to long queues, complex transactions, and limited options. With Sriverse, your wallet is now your gateway to endless possibilities.

Welcome to Sriverse - where convenience meets innovation!

<div className='text-gradient leading-tight text-4xl pt-40 pb-10 font-bold'>COMPANY</div>

<div className='text-sm'>
<div className="overflow-x-auto">
  <table className="min-w-full divide-y divide-gray-200 bg-transparent">
    <thead className="bg-transparent">
      {/* Table header */}
    </thead>
    <tbody className="bg-transparent divide-y divide-gray-200">
      <tr>
        <td className="px-6 py-4 whitespace-nowrap text-white font-bold sm:text-sm md:text-base lg:w-1/4 xl:w-1/6">
          Trade Name
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-white font-bold sm:text-sm md:text-base">
          Sriverse
        </td>
      </tr>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap text-white font-bold sm:text-sm md:text-base lg:w-1/4 xl:w-1/6">
          Address of Principal Place of Business
        </td>
        <td className="px-6 py-4 text-white font-bold sm:text-sm md:text-base">
          ----
        </td>
      </tr>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap text-white font-bold sm:text-sm md:text-base lg:w-1/4 xl:w-1/6">
          Registration Number
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-white font-bold sm:text-sm md:text-base">
          ----
        </td>
      </tr>
      {/* Add more rows as needed */}
    </tbody>
  </table>
</div>

</div>

    <div className='text-gradient leading-tight text-4xl pt-40 pb-10 font-bold'>CONTACT</div>

    <div className="overflow-x-auto">
  <div className="text-sm">
    <table className="min-w-full divide-y divide-gray-200 bg-transparent">
      <thead className="bg-transparent">
        {/* Table header */}
      </thead>
      <tbody className="bg-transparent divide-y divide-gray-200">
        <tr>
          <td className="px-6 py-4 whitespace-nowrap text-white font-bold sm:text-sm md:text-base lg:w-1/4 xl:w-1/6">
            Email
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-white font-bold sm:text-sm md:text-base">
            contact@sriverse.com
          </td>
        </tr>
        <tr>
          <td className="px-6 py-4 whitespace-nowrap text-white font-bold sm:text-sm md:text-base lg:w-1/4 xl:w-1/6">
            Support
          </td>
          <td className="px-6 py-4 text-white font-bold sm:text-sm md:text-base">
            support@sriverse.com
          </td>
        </tr>
        {/* Add more rows as needed */}
      </tbody>
    </table>
  </div>
</div>


    
</div></div></div>



</div>
  )
}

export default About;