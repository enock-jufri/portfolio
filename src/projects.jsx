import { SiPython, SiReact, SiJavascript } from 'react-icons/si'
const Project = () => {
    let projects = [
        {
            name: "MODERN BANKING",
            synopsis: "A modern way to manage your money",
            description: "A sleek, secure platform for managing personal and group finances. " +
                "Users can check balances, transfer funds, apply for loans, and track savings — all in one place. " +
                "Designed for simplicity, speed, and mobile-first access.",
            image1: "/src/assets/modern bank1.png",
            image2: "/src/assets/modern bank2.png",
            github: "https://github.com/enock-jufri/bank_ui",
            website: "https://bank-ui-delta.vercel.app/"
        },
        {
            name: "OSIEPE SAVINGS",
            synopsis: "A modern way for Chama group management",
            description: "A smart platform for managing personal and group savings." +
                " Track contributions, monitor group goals, and stay on top of your finances — all in one place.",
            image1: "",
            image2: " ",
            github: "",
            website: ""
        },
        {
            name: "EKL NEWS",
            synopsis: "Read the latest news articles on the go",
            description: "Stay informed with the latest headlines, in-depth stories, and real-time updates from around the world." +
                "A modern news platform designed for clarity, speed, and reliability.",
            image1: "/src/assets/ekl1.png",
            image2: "/src/assets/ekl2.png ",
            github: "https://github.com/enock-jufri/EKL-news",
            website: "https://ekl-news.vercel.app/"
        },
        {
            name: "MOVIE EXPLORER",
            synopsis: "Browse and download the latest movies",
            description: "Discover, stream, and download your favorite movies effortlessly. " +
                "MovieExplorer offers a sleek, user-friendly interface to explore films by genre, rating, or release — all in one place.",
            image1: "/src/assets/mv1.png ",
            image2: "/src/assets/mv2.png",
            github: "https://github.com/enock-jufri/movieExplorer",
            website: "https://movie-explorer-sepia.vercel.app/"
        },


    ]
    return (

        <div className=" grid grid-cols-2 gap-5">
            {
                projects.map((Project, index) => (
                    <div key={index} className="p-4 rounded-2xl bg-gray-800 shadow-md">
                        <div className="h-5 text-xl rounded w-1/2 mb-1 font-bold">
                            {Project.name}
                        </div>
                        <div className="h-4 text-lg rounded w-1/2 mb-3">{Project.synopsis}</div>
                        <div className="flex h-48 rounded-xl mb-4 gap-5">
                            <div className="bg-gray-700 w-1/2 rounded-xl" >
                                <img
                                    className="object-cover rounded-xl w-full h-full"
                                    src={Project.image1}
                                    alt="" />
                            </div>
                            <div className="bg-gray-700 w-1/2 rounded-xl" >
                                <img
                                    className="object-cover rounded-xl w-full h-full"
                                    src={Project.image2}
                                    alt="" />
                            </div>

                        </div>
                        <div className="flex gap-2 h-10 rounded mb-2">
                            <div><SiPython className="text-[#3776AB] text-4xl" size={30} /></div>
                            <div><SiReact className="animate-spin text-[#61DAFB] text-5xl"
                                style={{ animationDuration: "3s" }} size={30} /></div>
                            <div><SiJavascript className="text-[#F7DF1E] text-4xl" size={30} /></div>

                        </div>
                        <div className="h-10 text-gray-300 rounded mb-4">
                            {Project.description}
                        </div>
                        <div className="flex rounded w-1/2 mb-0 gap-5 text-sm">
                            <a className="text-blue-500 hover:text-blue-600" href={Project.website}>Website</a>
                            <a className="text-blue-500 hover:text-blue-600" href={Project.github}>Github repo</a>
                        </div>
                    </div>

                ))
            }
        </div>


    )
}

export default Project