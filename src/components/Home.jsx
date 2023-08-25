import styles from '../style'
import { Navbar, Hero, Stats, Business, Billing, CardDeal, Testimonials, CTA, Footer } from '../components'
import Cardtwo from './Cardtwo';
import Timeline from './Timeline'
import Buycard from './Buycard';



const Home = () => (
  <div className='bg-primary w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar /></div></div>

    <div className={`bg-primary ${styles.flexStart}`}>

      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />

        <Business />
        <Timeline />
        <Buycard />
        <Cardtwo />
        <Billing />
        <CardDeal />
        <Testimonials />
        {/* <Clients/> */}
       
        <CTA />
        <Footer />
      </div>
    </div>

  </div>
);


export default Home
