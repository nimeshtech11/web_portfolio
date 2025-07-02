import { MapPin } from "lucide-react";

const experienceData = [
  {
    id: 1,
    companyName: "Inupgro Pvt. Ltd.",
    city: "Jaipur, RJ",
    role: "Front-End Developer",
    startDate: "July 2023",
    endDate: "Feb 2025",
    responsibility: [
      "Developed and maintained highly interactive and responsive user interfaces using React, Redux Toolkit, Tailwind CSS, and SCSS.",
      "Collaborated with UI/UX designers and back-end developers to ensure seamless API integration.",
      "Optimized performance using code splitting, lazy loading, and efficient rendering.",
      "Implemented pixel-perfect responsive designs and ensured accessibility (A11y).",
      "Contributed to CI/CD pipeline, reducing deployment time by 25%.",
      "Wrote unit tests using Jest and React Testing Library.",
      "Resolved front-end bugs and performance issues to improve stability.",
    ],
  },
  {
    id: 2,
    companyName: "Renlight Education Pvt. Ltd.",
    city: "Hyderabad, TS",
    role: "Jr. Front-End Developer",
    startDate: "Jan 2022",
    endDate: "Mar 2023",
    responsibility: [
      "Assisted in developing front-end components for learning modules using React.",
      "Styled components using SCSS and CSS for consistency with design guidelines.",
      "Contributed to bug fixes, enhancements, and agile sprint planning.",
      "Collaborated using Git and participated in Agile development process.",
    ],
  },
  {
    id: 3,
    companyName: "Renlight Education Pvt. Ltd.",
    city: "Hyderabad, TS",
    role: "Content Management Lead",
    startDate: "Jan 2019",
    endDate: "Dec 2021",
    responsibility: [
      "Led content review and management processes for educational material.",
      "Collaborated with content creators and educators for streamlined workflows.",
      "Maintained CMS and ensured timely content updates.",
    ],
  },
  {
    id: 4,
    companyName: "Teleperformance",
    city: "Indore, MP",
    role: "Operation Executive",
    startDate: "Feb 2018",
    endDate: "Sep 2018",
    responsibility: [
      "Reviewed and processed documents ensuring compliance.",
      "Collaborated with team to improve document handling processes.",
      "Used CMS tools for efficient content tracking and updates.",
    ],
  },
];

const Experience = () => {
  return (
    <section className="pt-24 pb-16 mt-16 bg-gray-100" id="experience">
      {/* Header */}
      <div className="flex flex-col items-center justify-center text-center mb-10">
        <h1 className="bg-gray-200 py-2 px-6 rounded-lg text-3xl font-bold text-gray-800 shadow">
          Experience
        </h1>
        <p className="text-[18px] text-gray-600 mt-2 font-medium">
          Here is a quick summary of my most recent experience
        </p>
      </div>

      {/* Experience List */}
      <div className="space-y-6 max-w-6xl mx-auto">
        {experienceData.map((exp) => (
          <div
            key={exp.id}
            className="bg-white rounded-xl p-6 shadow hover:shadow-md transition duration-300">
            {/* Top Row */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              {/* Left: Company Info */}
              <div className="md:w-1/4">
                <h2 className="text-xl font-bold text-green-700">
                  {exp.companyName}
                </h2>
                <p className="flex items-center gap-2 text-gray-600 mt-1">
                  <MapPin className="text-red-500 w-4 h-4" />
                  {exp.city}
                </p>
              </div>

              {/* Center: Role and Responsibilities */}
              <div className="md:w-2/4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {exp.role}
                </h3>
                <ul className="list-disc pl-5 mt-2 text-gray-700 text-sm space-y-1">
                  {exp.responsibility.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Right: Dates */}
              <div className="md:w-1/4 flex md:justify-end">
                <div className="text-gray-500 text-sm text-center md:text-right">
                  <span>{exp.startDate}</span>{" "}
                  <br className="block md:hidden" /> to{" "}
                  <br className="block md:hidden" />
                  <span>{exp.endDate}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
