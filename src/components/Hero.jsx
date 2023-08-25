import styles from "../style";
import { robot,bitcoin } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <>
      <div className=" ">
        <section
          id="home"
          className={`text-center items-center flex md:flex-row flex-col flex-col-reverse md:flex-row ${styles.paddingY}`}
        >
          <div className={`flex-1 absolute top-[105px] md:static flex-col xl:px-0 sm:px-16 px-[0px] md:px-6 z-50`}>
            {/* <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
      <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
      <p className={`${styles.paragraph} ml-2`}>
        <span className="text-white">20%</span> Discount For{" "}
        <span className="text-white">1 Month</span> Account
      </p>
    </div> */}

            <div className="grid grid-row justify-between items-center w-full">
              <div className="flex-1 font-poppins font-semibold ss:text-[52px] text-[30px] md:text-[52px] text-white leading-tight ">
                UNIVERSAL CRYPTOMONETARY
                <div className="text-gradient leading-tight">
                  ASSET MANAGEMENT
                </div>{" "}
              </div>
              <div className="font-poppins font-semibold ss:text-[52px] text-[30px] md:text-[52px] text-white w-full leading-tight">
                PLATFORM.
              </div>
              {/* <div className="ss:flex hidden md:mr-4 mr-0">
      <GetStarted />
    </div> */}
   
            </div>

            <p className={`${styles.paragraph} max-w-[570px] mt-5`}>
              SRIVERSE solves the problem by innovating multi-asset{" "}
              <span className="text-gradient font-extrabold">SRITOKEN</span> as
              valid universal medium for legitimate global exchange of fiscal
              value.
            </p>
            <div className="flex gap-2 justify-center">
              <div className=" bg-cyan-500 rounded-lg  py-3 mt-5 cursor-pointer hover:bg-cyan-600 hover:text-black text-white">
                Explore Ecosystem
              </div>
              <div className="border border-cyan-500 rounded-lg px-10 py-3 mt-5 text-cyan-400 cursor-pointer hover:bg-cyan-600 hover:text-cyan-200">
                Start Building
              </div>
            </div>
      
          </div>
          <div className="w-[50%] m-[auto]">
    <img className="w-[100%]" src={bitcoin} alt="#" />
    </div>
          <div
            className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
          >
            {/* <img src={robot} alt="billing" className="w-full h-auto max-w-full absolute" /> */}

            {/* gradient start */}
            <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
            <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
            <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
            {/* gradient end */}
          </div>

          {/* <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted />
    </div> */}
        </section>
      </div>
    </>
  );
};

export default Hero;
