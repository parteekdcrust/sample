import { useState } from 'react';
import { close, logo, menu } from '../assets';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar '>
      <div></div>
      <img src={logo} alt='sriverse' className='w-auto h-[41px]' />

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        
          <li
            
            className= 'font-poppins font-normal mr-10 text-white cursor-pointer text-[16px]' 
          >
            <Link to='/home'>Home</Link>
          </li>
          <li className='font-poppins font-normal cursor-pointer text-[16px] text-white mr-10 '>
          <Link to='/about'>About</Link>
        </li>
          <li
            
            className= 'font-poppins font-normal  text-white cursor-pointer text-[16px]' 
          >
            <Link to='/contact'>Contact</Link>
          </li>
       
       
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center '>
        <img
          src={toggle ? close : menu}
          alt='menu'
          className='w-[28px] h-[28px] object-contain'
          onClick={() => setToggle((prev) => !prev)}
        />
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            
              <li
             
                className='font-poppins font-normal cursor-pointer text-[16px] '
              >
                <Link to='/home'>Home</Link>
              </li>

              <li
             
             className='font-poppins pt-10 font-normal cursor-pointer text-[16px] '
           >
             <Link to='/contact'>Contact</Link>
           </li>
           
            <li className='font-poppins font-normal cursor-pointer text-[16px] text-white pt-10 mb-10'>
              <Link to='/about'>About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
