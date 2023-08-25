import { apple, bill, google,wallets } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={wallets}
        alt="billing"
        className="w-[70%] h-[50%] relative z-[5]"
      />
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>About Us</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        SRI Token is a pioneering project that aims to redefine the landscape of
        decentralized technologies and empower individuals around the world. We
        believe in the potential of blockchain to drive positive change and
        foster financial inclusion. Our mission is to create a global ecosystem
        where digital assets can be utilized as powerful tools for empowerment,
        collaboration, and innovation. Through our innovative platform and
        cutting-edge technologies, we strive to bridge the gap between
        traditional financial systems and the emerging world of
        cryptocurrencies. At SRI Token, we are dedicated to building a
        sustainable and equitable future, where technology serves as a catalyst
        for social impact and progress. Join us in our quest to shape a more
        connected and decentralized world.
      </p>
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img
          src={apple}
          alt="apple_store"
          className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
          onClick={() => alert("Sriverse is coming soon")}
        />
        <img
          src={google}
          alt="google_play"
          className="w-[128px] h-[42px] object-contain cursor-pointer"
          onClick={() => alert("Sriverse is coming soon")}
        />
      </div>
    </div>
  </section>
);

export default Billing;
