const About = () => {
    return (
        <div className="mt-0 md:mt-20 flex flex-col md:flex-row justify-center gap-8 md:gap-[130px] px-4">
            {/* Profile Image */}
            <div className="w-full h-[300px] md:h-[712px] mx-auto">
                <img
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww"
                    alt="enock jufri image"
                    className="rounded-2xl w-full h-full object-cover"
                />
            </div>

            {/* About Section */}
            <div className="w-full md:w-auto">
                <h1 className="mb-5 text-center md:text-left text-[32px] md:text-[48px] font-black underline">
                    About Me
                </h1>
                <div className="text-[18px] md:text-[32px] leading-relaxed">
                    <p className="mb-4">
                        Hi, I'm Enock Jufri Kipkorir Koech — a full-stack developer who thrives at the intersection of design and logic.
                        I specialize in building responsive, scalable web applications using React.js, Python, and Flask.
                    </p>
                    <p className="mb-4">
                        Currently, I’m diving into Rust to explore the power of AI in Quant Trading and Web3.
                        I love working on projects that push boundaries and connect smart systems with modern UI.
                    </p>
                    <p>
                        Outside of coding, I’m a gamer at heart — always down for a good challenge,
                        whether it’s on the keyboard or the controller.
                    </p>
                </div>

                {/* Tech Stack Logos */}
                <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-10 mb-12">
                    <img src="/Tech Stack Logos (1).png" alt="Tech Stack 1" className="w-16 h-16 md:w-20 md:h-20" />
                    <img src="/Tech Stack Logos (2).png" alt="Tech Stack 2" className="w-16 h-16 md:w-20 md:h-20" />
                    <img src="/Tech Stack Logos (3).png" alt="Tech Stack 3" className="w-16 h-16 md:w-20 md:h-20" />
                    <img src="/Tech Stack Logos (4).png" alt="Tech Stack 4" className="w-16 h-16 md:w-20 md:h-20" />
                    <img src="/Tech Stack Logos (5).png" alt="Tech Stack 5" className="w-16 h-16 md:w-20 md:h-20" />
                </div>

                {/* Download CV Button */}
                <div className="flex justify-center md:justify-start mb-5">
                    <a
                        href="/Enock cv.pdf"
                        download
                        className="bg-blue-600 text-black font-bold px-4 py-2 rounded hover:bg-blue-700"
                    >
                        Download CV
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;