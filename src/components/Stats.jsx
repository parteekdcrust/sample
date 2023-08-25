// import { stats } from '../constants'
import styles from "../style";
import icon1 from "../assets/icon1.png";

const Stats = () => (
  <section
    className={` flex-row flex-wrap sm:mb-20 mb-6  text-white text-left`}
  >
    <div className="grid grid-cols-4 gap-4 relative z-50 mt-[115px] lg:mt-[0]">
      <div className="bg-slate-900 pr-20 pl-2 rounded-lg col-span-2 flex py-3 px-2 align-middle items-center">
        <div>
          <button
            className="mr-4 rounded-lg items-center align-middle bg-blue-500 py-1 px-2 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            data-ripple-light="true"
          >
            New
          </button>
        </div>
        <div className="flex-shrink truncate">
          <span className="">Transactions per second 100,000+</span>
        </div>
      </div>

      <div className="bg-slate-900 pr-20 pl-2 rounded-lg  flex py-3 px-2 align-middle items-center">
        <div>
          <button
            className="mr-4 rounded-lg items-center align-middle bg-green-600 py-1 px-2 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            data-ripple-light="true"
          >
            Live
          </button>
        </div>
        <div className="flex-shrink truncate">
          <span className="">Layer 0 blockchain</span>
        </div>
      </div>

      <div className="bg-slate-900 pr-20 pl-2 rounded-lg flex py-3 px-2 align-middle items-center">
        <div className="mr-2">
          <img src={icon1} alt="Icon" className="mr-4 w-6 h-6 text-white" />
        </div>
        <div className="flex-shrink truncate">
          <span className="">HyperGrid Marketplace</span>
        </div>
      </div>

      <div className="bg-slate-900 pr-20 pl-2 rounded-lg flex py-3 px-2 align-middle items-center">
        <div className="mr-2">
          <img src={icon1} alt="Icon" className="mr-4 w-6 h-6 text-white" />
        </div>
        <div className="flex-shrink truncate">
          <span className="">integrated webstores</span>
        </div>
      </div>

      <div className="bg-slate-900 pr-20 pl-2 rounded-lg flex py-3 px-2 align-middle items-center col-span-2">
        <div className="mr-2">
          <img src={icon1} alt="Icon" className="mr-4 w-6 h-6 text-white" />
        </div>
        <div className="flex-shrink truncate">
          <span className="">Meta Robotics</span>
        </div>
      </div>

      <div className="bg-slate-900 pr-20 pl-2 rounded-lg flex py-3 px-2 align-middle items-center">
        <div className="mr-2">
          <img src={icon1} alt="Icon" className="mr-4 w-6 h-6 text-white" />
        </div>
        <div className="flex-shrink truncate">
          <span className="">hyperimmune quantum</span>
        </div>
      </div>

      <div className="bg-slate-900 pr-20 pl-2 rounded-lg flex py-3 px-2 align-middle items-center">
        <div className="mr-2">
          <img src={icon1} alt="Icon" className="mr-4 w-6 h-6 text-white" />
        </div>
        <div className="flex-shrink truncate">
          <span className="">robotics</span>
        </div>
      </div>

      <div className="bg-slate-900 pr-20 pl-2 rounded-lg flex py-3 px-2 align-middle items-center col-span-2">
        <div className="mr-2">
          <img src={icon1} alt="Icon" className="mr-4 w-6 h-6 text-white" />
        </div>
        <div className="flex-shrink truncate">
          <span className="">metaverse shopping spree</span>
        </div>
      </div>

      <div className="bg-slate-900 pr-20 pl-2 rounded-lg flex py-3 px-2 align-middle items-center">
        <div className="mr-2">
          <img src={icon1} alt="Icon" className="mr-4 w-6 h-6 text-white" />
        </div>
        <div className="flex-shrink truncate">
          <span className="">Meta Cosmonauts</span>
        </div>
      </div>

      <div className="bg-slate-900 pr-20 pl-2 rounded-lg flex py-3 px-2 align-middle items-center col-span-2">
        <div className="mr-2">
          <img src={icon1} alt="Icon" className="mr-4 w-6 h-6 text-white" />
        </div>
        <div className="flex-shrink truncate">
          <span className="">sensory immersive</span>
        </div>
      </div>

      <div className="bg-slate-900 pr-20 pl-2 rounded-lg flex py-3 px-2 align-middle items-center col-span-2">
        <div className="mr-2">
          <img src={icon1} alt="Icon" className="mr-4 w-6 h-6 text-white" />
        </div>
        <div className="flex-shrink truncate">
          <span className="">Cryptomonetary</span>
        </div>
      </div>
    </div>
  </section>
);

export default Stats;
