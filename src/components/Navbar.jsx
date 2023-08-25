import { useState } from 'react';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';
import { Link } from 'react-router-dom';
import pdfFile from '../assets/SRIVERSEWP.pdf';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <div></div>
      <img src={logo} alt='hoobank' className='w-auto h-[28px]' />

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
            } text-white`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
        <li className='font-poppins font-normal cursor-pointer text-[16px] bg-cyan-500 px-10 py-2 rounded-md text-white ml-10'>
        <Link to={pdfFile} target="_blank" rel="noopener noreferrer">
    Whitepaper
  </Link>
        </li>
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center  z-50'>
        <img
          src={toggle ? close : menu}
          alt='menu'
          className='w-[28px] h-[28px] object-contain'
          onClick={() => setToggle((prev) => !prev)}
        />
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? 'mr-0' : 'mb-10'
                } text-white`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
            <li className='font-poppins font-normal cursor-pointer text-[16px] text-white mt-10 mb-10 bg-cyan-500 px-10 py-2 rounded-md'>
            <Link to={pdfFile} target="_blank" rel="noopener noreferrer">
    Whitepaper
  </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
