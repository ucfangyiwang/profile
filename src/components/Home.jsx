import React, { useState } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import background from '../assets/background.jpg'
import { Link } from 'react-scroll';
const Home = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () =>{ setNav(!nav);}
  return (
    <div name='home' className='w-full h-screen bg-white'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
         Fangyi Wang
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Full Stack Developer.
        </h2>
        <div>
          <button className='text-black group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact me
          </Link>
            
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
