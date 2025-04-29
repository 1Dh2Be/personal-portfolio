import { ProjectCards } from "./ui/ProjectCards";

import m19Chat from "../assets/Images/m19Chat.png";
import { Button } from "./ui/Button";

export const Projects = () => {
  return (
    <section className="my-15 md:my-30 py-2">
      <div className="gap-4 lg:gap-8 flex flex-col md:flex-row justify-between items-start mb-8">
        <h2 className="text-text-primary text-3xl md:text-4xl lg:text-[64px] font-bold flex-1">
          Recent works
        </h2>

        <div className="flex-1 mt-4 md:mt-0">
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Every project here is a step in my journey as a self taught
            developer. I love turning ideas into real, working products whether
            it’s a tool to solve a problem, a website to share a story, or just
            something cool I wanted to build. I’m always learning,
            experimenting, and pushing myself to create things that matter.
          </p>
          <Button size="lg" variant="outline">
            All projects
          </Button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 lg:gap-8">
        <div>
          <ProjectCards
            src={m19Chat}
            projectName="M19 Chat"
            projectType="Full stack llm web app"
            projectDate="March, 2025"
          />
        </div>

        <div>
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
