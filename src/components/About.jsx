import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-white text-black'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Fangyi Wang, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I am a full stack developer with a diverse set of skills. I am proficient in several programming languages,
                 including HTML, CSS, Tailwind CSS, C++, C, JavaScript, React.js, Redux Toolkit, Node.js, Express.js, and PostgreSQL.
                  I also have experience working with Kafka, and MVC architecture. With my expertise, I am able to handle both the 
                  front-end and back-end aspects of web development projects. I am constantly looking to learn new technologies and improve
                   my skills to provide the best solutions for my clients.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
