import React from "react";

const projects = [
  {
    id: 1,
    name: "Inupgro",
    image: "Project 2.png",
    description:
      "A powerful EdTech platform supporting institutions with AI-driven marketing, student acquisition, and administration tools tailored for schools and universities.",
    link: "https://inupgro.com/",
  },
  {
    id: 2,
    name: "The Venture Project",
    image: "Project 1.png",
    description:
      "A startup incubator and coworking space providing mentorship, business support, and flexible office solutions to entrepreneurs and growing businesses.",
    link: "https://venture.org.in/",
  },

  {
    id: 3,
    name: "Coming Soon..",
    image: "comingsoonjpg.jpg",
  },
];

const MyProject = () => {
  return (
    <section id="my-projects" className="pt-24 pb-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 hover:translate-1">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-contain p-6 bg-gray-50 rounded-t-2xl"
                />
              </a>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyProject;
