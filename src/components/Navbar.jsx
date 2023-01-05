import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,

} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () =>{ setNav(!nav);}
  const handleClick_Linkedin =()=>{
    window.open('https://www.linkedin.com/in/fangyiwang001', '_blank');
  }
  const handleClick_Github =()=>{
    window.open('https://github.com/ucfangyiwang?tab=repositories', '_blank');
  }
  const handleClick_Resume =()=>{
    window.open('https://docs.google.com/document/d/1eJI-3Cwl2w-TKBmZFLSa13j-EzeSLfu4eCL6pPF_zOI/edit?usp=sharing', '_blank');
  }
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-6 bg-white text-black
'>
     

      {/* menu */}
      <ul className='hidden md:flex'>
        <li className='hover:border-2 hover:border-solid hover:border-sky-600 rounded-lg'>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='hover:border-2 hover:border-solid hover:border-sky-600 rounded-lg'>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='hover:border-2 hover:border-solid hover:border-sky-600 rounded-lg'>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='hover:border-2 hover:border-solid hover:border-sky-600 rounded-lg'>
          <Link to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='hover:border-2 hover:border-solid hover:border-sky-600 rounded-lg'>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen  flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
            <button
              className='flex justify-between items-center w-full text-gray-300'
              onClick={handleClick_Linkedin}
            >
              Linkedin <FaLinkedin size={30} />
            </button>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <button
              className='flex justify-between items-center w-full text-gray-300'
              onClick={handleClick_Github}
            >
              Github <FaGithub size={30} />
            </button>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href="mailto:wangfangyid1502@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <button
              className='flex justify-between items-center w-full text-gray-300'
              onClick={handleClick_Resume}
            >
              Resume <BsFillPersonLinesFill size={30} />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
