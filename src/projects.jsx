import { SiPython, SiReact, SiJavascript } from 'react-icons/si';

const Project = () => {
  const projects = [
    {
      name: "MODERN BANKING",
      synopsis: "A modern way to manage your money",
      description: "A sleek, secure platform for managing personal and group finances...",
      image1: "/modern bank1.png",
      image2: "/modern bank2.png",
      github: "https://github.com/enock-jufri/bank_ui",
      website: "https://bank-ui-delta.vercel.app/"
    },
    {
      name: "OSIEPE SAVINGS",
      synopsis: "A modern way for Chama group management",
      description: "A smart platform for managing personal and group savings. Track contributions, monitor group goals, and stay on top of your finances — all in one place.",
      image1: "",
      image2: "",
      github: "",
      website: ""
    },
    {
      name: "EKL NEWS",
      synopsis: "Read the latest news articles on the go",
      description: "Stay informed with the latest headlines, in-depth stories, and real-time updates from around the world. A modern news platform designed for clarity, speed, and reliability.",
      image1: "/ekl1.png",
      image2: "/ekl2.png",
      github: "https://github.com/enock-jufri/EKL-news",
      website: "https://ekl-news.vercel.app/"
    },
    {
      name: "MOVIE EXPLORER",
      synopsis: "Browse and download the latest movies",
      description: "Discover, stream, and download your favorite movies effortlessly. MovieExplorer offers a sleek, user-friendly interface to explore films by genre, rating, or release — all in one place.",
      image1: "/mv1.png",
      image2: "/mv2.png",
      github: "https://github.com/enock-jufri/movieExplorer",
      website: "https://movie-explorer-sepia.vercel.app/"
    },
  ];

  return (
    <main className="min-h-screen bg-[#0F172A] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-400 mb-10 text-center">Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-[#1E293B] rounded-2xl shadow-lg p-6 flex flex-col">
              <h2 className="text-xl font-bold mb-1 text-white">{project.name}</h2>
              <p className="text-blue-300 mb-3">{project.synopsis}</p>
              <div className="flex gap-3 mb-4">
                {project.image1 ? (
                  <img
                    src={project.image1}
                    alt={project.name + " screenshot 1"}
                    className="w-1/2 h-32 object-cover rounded-lg bg-gray-700"
                  />
                ) : (
                  <div className="w-1/2 h-32 rounded-lg bg-gray-700 flex items-center justify-center text-gray-500 text-sm">
                    No Image
                  </div>
                )}
                {project.image2 ? (
                  <img
                    src={project.image2}
                    alt={project.name + " screenshot 2"}
                    className="w-1/2 h-32 object-cover rounded-lg bg-gray-700"
                  />
                ) : (
                  <div className="w-1/2 h-32 rounded-lg bg-gray-700 flex items-center justify-center text-gray-500 text-sm">
                    No Image
                  </div>
                )}
              </div>
              <p className="text-gray-300 mb-6 flex-1">{project.description}</p>
              <div className="flex gap-3 mt-auto">
                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-black font-semibold rounded transition text-sm"
                  >
                    Website
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded transition text-sm"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Project;