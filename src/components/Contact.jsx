import React from 'react'
import styles from '../style'
import Navbartwo from '../components/Navbartwo'

const About = () => {
  return (
    <div className={`text-white h-screen bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbartwo />
<div className='py-40'><div className='text-white leading-tight pt-20 sm:pt-40 text-2xl pb-5 font-bold'>TERMS & CONDITIONS</div>
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
</div>

    </div>

</div>
  )
}

export default About;