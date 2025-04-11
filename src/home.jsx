import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaXTwitter,FaGithub,FaLinkedin } from 'react-icons/fa6'; // X (Twitter) logo


const Home = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-row w-full items-center justify-center gap-[72px] ">
        {/* Profile Image */}
        <div className="w-[840px] h-[840px] rounded-xl flex justify-center items-center bg-gray-800">
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww"
            alt="Enock Jufri"
            className="rounded-2xl w-full h-full object-cover"
          />
        </div>

        {/* Info Section */}
        <div className="w-1/2 flex flex-col justify-between h-[840px]">
          <div className="flex flex-col justify-center items-start my-auto">
            <p className="text-[24px] mb-2">hello!</p>
            <h1 className="text-[48px] font-semibold mb-2">
              I'm{' '}
              <TypeAnimation
                sequence={[
                  'ENOCK JUFRI',
                  2000,
                  " ",
                  1
                  
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400"
              />
            </h1>
            <p className="text-gray-300 mb-6 text-[32px]">A full stack software developer</p>
            <button className="mt-10 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-black rounded-md font-black">
              MY WORK
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mb-2 text-gray-400">
            <a href="#" className="hover:text-[#2563EB]"><FaXTwitter size={40} /></a>
            <a href="#" className="hover:text-[#2563EB]"><FaGithub size={40} /></a>
            <a href="#" className="hover:text-[#2563EB]"><FaLinkedin size={40} /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
