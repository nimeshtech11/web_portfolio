import React from "react";

const skillsImage = [
  { id: 1, imgUrl: "Javascript_Logo.png", skillName: "JavaScript" },
  { id: 2, imgUrl: "React.png", skillName: "React" },
  { id: 3, imgUrl: "Typescript_logo_2020.svg.png", skillName: "TypeScript" },
  { id: 4, imgUrl: "nextjs-icon-icon-sm.png", skillName: "Next.js" },
  { id: 5, imgUrl: "node.png", skillName: "Node.js" },
  { id: 6, imgUrl: "express-js.png", skillName: "Express.js" },
  { id: 7, imgUrl: "git.png", skillName: "Git" },
  { id: 8, imgUrl: "tailwind.png", skillName: "Tailwind CSS" },
  { id: 9, imgUrl: "mongo.png", skillName: "MongoDB" },
  { id: 10, imgUrl: "sass.webp", skillName: "Sass" },
  { id: 11, imgUrl: "redux.png", skillName: "Redux" },
  { id: 12, imgUrl: "CSS.png", skillName: "CSS" },
  { id: 13, imgUrl: "Html.jpeg", skillName: "HTML" },
  { id: 14, imgUrl: "bootstrap.png", skillName: "Bootstrap" },
  { id: 15, imgUrl: "python.webp", skillName: "Python" },
];

const Skills = () => {
  return (
    <section className="pt-24 pb-10 mt-16 bg-gray-50" id="skills">
      {/* Heading */}
      <div className="w-full flex flex-col items-center justify-center gap-3 mb-10">
        <h1 className="bg-gray-200 py-2 px-6 rounded-lg text-3xl font-bold text-gray-800">
          Skills
        </h1>
        <p className="text-center text-gray-600 text-lg max-w-xl">
          The skills, tools, and technologies I’m proficient in:
        </p>
      </div>

      {/* Grid of Skills */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {skillsImage.map((img) => (
          <div
            key={img.id}
            className="flex flex-col items-center justify-center gap-2 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300 hover:translate-2 ">
            <img
              src={img.imgUrl}
              alt={img.skillName}
              className="w-16 h-16 object-contain"
            />
            <span className="text-sm font-medium text-gray-800">
              {img.skillName}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
