const About = () => {
  return (
    <section className="p-5 pt-24 mt-16 bg-gray-50" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="w-full flex flex-col items-center justify-center gap-3 mb-10">
          <h1 className="bg-gray-200 py-2 px-6 rounded-lg text-3xl font-bold text-gray-800">
            Who i am
          </h1>
        </div>
        <div className="text-lg text-gray-700 leading-8 text-justify space-y-6">
          <p>
            I'm{" "}
            <span className="font-semibold text-blue-600">Nimesh Thakur</span>,
            a passionate and performance-focused{" "}
            <strong>Front-End Developer</strong> with{" "}
            <strong>3 years of professional experience</strong> crafting
            engaging, responsive, and accessible web applications. My journey
            into tech started with a deep curiosity about how websites work —
            and today, I specialize in turning design visions into reality using{" "}
            <strong>React.js</strong>, <strong>Redux Toolkit</strong>,{" "}
            <strong>Tailwind CSS</strong>, and modern JavaScript (ES6+).
          </p>

          <p>
            I’ve worked extensively in the <strong>EdTech sector</strong>, where
            I built and maintained scalable, high-performance frontends for
            learning platforms. My typical day involves collaborating with UI/UX
            designers, integrating <strong>RESTful APIs</strong>, optimizing
            performance through lazy loading and code splitting, and ensuring{" "}
            <strong>pixel-perfect and accessible</strong> experiences across all
            screen sizes.
          </p>

          <p>
            Beyond front-end, I also have working knowledge of{" "}
            <strong>Node.js</strong>, <strong>Express.js</strong>, and{" "}
            <strong>MongoDB</strong>, which enables me to better understand
            full-stack flows and troubleshoot more effectively. I’m confident
            with tools like Git, npm, Webpack, and CI/CD pipelines and sound
            knowledge of testable code using <strong>Jest</strong> and{" "}
            <strong>React Testing Library</strong>.
          </p>

          <p>
            My career didn’t start in code — I previously held roles in{" "}
            <strong>content management</strong> and <strong>operations</strong>,
            where I led documentation workflows, streamlined review processes,
            and developed a strong sense of organization and communication. This
            unique background makes me not just a developer — but someone who
            understands business processes, team collaboration, and client needs
            holistically.
          </p>

          <p>
            I'm currently based in <strong>Bhopal, Madhya Pradesh</strong>, and
            open to both <strong>full-time roles</strong> and{" "}
            <strong>freelance opportunities</strong>. I’m driven by clean code,
            great user experience, and continuous learning. Whether I’m
            debugging a tricky UI issue or collaborating with a team on a
            product launch — I thrive in dynamic environments that challenge me
            to grow.
          </p>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              🎓 Education
            </h3>
            <p className="text-gray-700 leading-7">
              <strong>
                Bachelor of Engineering (Electronics and Communication)
              </strong>{" "}
              – 2013
              <br />
              Rajiv Gandhi Technical University, Bhopal (M.P.)
            </p>
          </div>

          <p className="mt-6 text-center text-xl text-blue-700 font-semibold">
            Let's build something great together. 🚀
          </p>
        </div>
        ;
      </div>
    </section>
  );
};

export default About;

<div className="mb-6">
  <h3 className="text-xl font-semibold text-gray-800 mb-2">🎓 Education</h3>
  <p className="text-gray-700 leading-7">
    <strong>Bachelor of Engineering (Electronics and Communication)</strong> –
    2013
    <br />
    Rajiv Gandhi Technical University, Bhopal (M.P.)
  </p>
</div>;
