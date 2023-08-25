// import styles from '../style'


const Cardtwo = () => (
    <section className={` 
     grid sm:grid-cols-2 grid-cols-1 gap-4 `}>
      <div className=" bg-slate-900 rounded-[20px] box-shadow py-12 px-8">
        <h2 className='text-white font-bold text-3xl'>Build</h2>
        <p className='text-white text-lg'>
        Build your decentralised application in minutes on an asynchronous blockchain with a global use case application.</p>
          <div className="flex gap-2 ">
          <div className=" bg-cyan-500 rounded-lg px-5 py-3 mt-5 font-medium cursor-pointer hover:bg-cyan-600 hover:text-black text-white">
            Get Started
          </div>
          </div>
      </div>
      <div className=" bg-slate-900 rounded-[20px] box-shadow py-12 px-8">
        <h2 className='text-white font-bold text-3xl'>Use</h2>
        <p className='text-white text-lg'>
        Investing in diversified high yield projects to potentiate usability, scalability and mass-scale globally prolific usability within the business ecosystem</p>
          <div className="flex gap-2 ">
          <div className=" bg-cyan-500 rounded-lg px-5 py-3 mt-5 font-medium cursor-pointer hover:bg-cyan-600 hover:text-black text-white">
            Get Started
          </div>
          </div>
      </div>
      
      
      
      
    </section>
  )


export default Cardtwo