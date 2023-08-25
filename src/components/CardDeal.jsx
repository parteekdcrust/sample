import { card, transaction } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better Deal <br className="sm:block hidden" />
        across many.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        SRIVERSE regulated & IBANized Crypto Exchange focuses fractional
        purchasing, 24x7 trading, instant settling, crypto ledger,
        crypto-registry and POS clearing.
      </p>
      <Button styles="mt-10" />
    </div>

    <div className={layout.sectionImg}>
      <img src={transaction} alt="card" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
