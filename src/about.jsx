const About = () => {
    return (
        <div className="mt-20 flex justify-center gap-[130px]">
            <div className=" w-[512px] h-[712px]">
                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww"
                    alt="enock jufri image"
                    className="rounded-2xl w-full h-full object-cover"
                />
            </div>
            <div className="">
                <h1 className="mb-5 flex justify-center text-[48px] font-black underline">About Me</h1>
                <div className="w-[1000px] text-[32px]">
                    <p>Hi, I'm Enock Jufri Kipkorir Koech — a full-stack developer who thrives at the intersection of design and logic.
                        I specialize in building responsive, scalable web applications using React.js, Python, and Flask.</p>

                    <p>Currently, I’m diving into Rust to explore the power of AI in Quant Trading and Web3.
                        I love working on projects that push boundaries and connect smart systems with modern UI.</p>

                    <p>Outside of coding, I’m a gamer at heart — always down for a good challenge,
                        whether it’s on the keyboard or the controller.</p>
                </div>
                <div className="flex gap-4 mt-10 mb-12 ">
                    <img src="/src/assets/Tech Stack Logos (1).png" alt="" />
                    <img src="/src/assets/Tech Stack Logos (2).png" alt="" />
                    <img src="/src/assets/Tech Stack Logos (3).png" alt="" />
                    <img src="/src/assets/Tech Stack Logos (4).png" alt="" />
                    <img src="/src/assets/Tech Stack Logos (5).png" alt="" />
                </div>
                <a
                    href="/Enock cv.pdf"
                    download
                    className="bg-blue-600 text-black font-bold px-4 py-2 rounded hover:bg-blue-700"
                >
                    Download CV
                </a>


            </div>
        </div>
    )
}

export default About