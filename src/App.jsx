// import React from 'react';
import styles from './style';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Navbartwo from './components/Navbartwo';
import Home from './components/Home';
import About from './components/About';
import Terms from './components/Terms';
import Privacy from './components/Privacy';
import Contact from './components/Contact';
import Refund from './components/Refund';
// import Timeline from './components/Timeline'

const App = () => {
  return (
    <Router>
      <div className='bg-primary w-full overflow-hidden'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            {/* <Navbar />
            <Navbartwo /> */}
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/refund" element={<Refund />} />
        </Routes>
      </div>
      {/* <Timeline/> */}
    </Router>
  );
};

export default App;
