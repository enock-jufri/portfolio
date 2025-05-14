import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import { FaXTwitter, FaGithub, FaLinkedin } from 'react-icons/fa6';

const Home = () => {
  const navigate = useNavigate();

  return (
    <main className="bg-[#0F172A] text-white min-h-screen flex flex-col items-center px-4 py-8 overflow-x-hidden">
      {/* Hero Section */}
      <section className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-center gap-10 py-12">
        {/* Profile Image */}
        <div className="flex-shrink-0 flex justify-center w-full md:w-auto">
          <img
            src="/enock.jpg"
            alt="Enock Jufri"
            className="rounded-full w-40 h-40 md:w-56 md:h-56 object-cover border-4 border-blue-600 shadow-lg"
          />
        </div>
        {/* Info */}
        <div className="flex flex-col items-center text-center w-full max-w-xl">
          <h1 className="text-3xl sm:text-5xl font-bold mb-2">
            Hi, I'm{' '}
            <span className="inline-block">
              <TypeAnimation
                sequence={['ENOCK JUFRI', 2000, '', 500]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400"
              />
            </span>
          </h1>
          <p className="text-lg sm:text-2xl text-gray-300 mb-4 font-medium">
            Full-Stack Software Developer
          </p>
          <div className="flex gap-4 mt-2 mb-4">
            <a
              href="https://x.com/JufriEnock"
              className="hover:text-[#2563EB] transition"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaXTwitter size={28} />
            </a>
            <a
              href="https://github.com/enock-jufri"
              className="hover:text-[#2563EB] transition"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/enock-koech-651181208"
              className="hover:text-[#2563EB] transition"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={28} />
            </a>
          </div>
          <button
            className="mt-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-bold shadow transition"
            onClick={() => navigate('/projects')}
          >
            View My Work
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full max-w-4xl bg-[#1E293B] rounded-xl shadow-lg p-8 mt-6 mb-10 flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4 text-blue-400 underline underline-offset-4">
            About Me
          </h2>
          <div className="text-base md:text-lg leading-relaxed text-gray-200">
            <p className="mb-3">
              Hi, I'm Enock Jufri Kipkorir Koech — a full-stack developer who thrives at the intersection of design and logic. I specialize in building responsive, scalable web applications using React.js, Python, and Flask.
            </p>
            <p className="mb-3">
              Currently, I’m diving into Rust to explore the power of AI in Quant Trading and Web3. I love working on projects that push boundaries and connect smart systems with modern UI.
            </p>
            <p>
              Outside of coding, I’m a gamer at heart — always down for a good challenge, whether it’s on the keyboard or the controller.
            </p>
          </div>
          <div className="mt-6">
            <a
              href="/Enock cv.pdf"
              download
              className="inline-block bg-blue-600 text-white font-bold px-5 py-2 rounded hover:bg-blue-700 transition"
            >
              Download CV
            </a>
          </div>
        </div>
        {/* Tech Stack */}
        <div className="flex flex-col items-center md:items-start justify-center">
          <h3 className="text-xl font-bold mb-4 text-cyan-400">Tech Stack</h3>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <img src="/Tech Stack Logos (1).png" alt="Tech 1" className="w-12 h-12 md:w-16 md:h-16" />
            <img src="/Tech Stack Logos (2).png" alt="Tech 2" className="w-12 h-12 md:w-16 md:h-16" />
            <img src="/Tech Stack Logos (3).png" alt="Tech 3" className="w-12 h-12 md:w-16 md:h-16" />
            <img src="/Tech Stack Logos (4).png" alt="Tech 4" className="w-12 h-12 md:w-16 md:h-16" />
            <img src="/Tech Stack Logos (5).png" alt="Tech 5" className="w-12 h-12 md:w-16 md:h-16" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
