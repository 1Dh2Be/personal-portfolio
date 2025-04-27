import { ProjectCards } from "./ui/ProjectCards";

import m19Chat from "../assets/Images/m19Chat.png";

export const Projects = () => {
  return (
    <section className="my-15 md:my-30 py-2">
      <div className="gap-4 lg:gap-8 flex flex-col md:flex-row justify-between items-start mb-8">
        <h2 className="text-3xl md:text-4xl font-bold flex-1">My projects</h2>

        <div className="flex-1 mt-4 md:mt-0">
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            We bring ideas to life with precision and creativity. From sleek
            websites to seamless user experiences, our projects reflect a
            commitment to quality and innovation. Whether it's a brand refresh,
            a bold new digital product, or a high-converting landing page, we
            craft designs that make an impact. Explore our work and see how we
            turn vision into reality.
          </p>
          <button className="bg-white text-black border border-gray-300 px-4 py-2 rounded-full hover:bg-gray-100 transition-colors ml-auto block md:ml-0">
            All projects
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 lg:gap-8">
        <div className="">
          <ProjectCards
            src={m19Chat}
            projectName="M19 Chat"
            projectType="Full stack llm web app"
            projectDate="March, 2025"
          />
        </div>

        <div className="">
          <ProjectCards
            src={m19Chat}
            projectName="Personal website"
            projectType="Increasing social presence"
            projectDate="April, 2025"
          />
        </div>
      </div>
    </section>
  );
};
