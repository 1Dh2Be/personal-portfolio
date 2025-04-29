//Image(s) imported here
import m19ChatBlack from "../assets/Images/m19ChatBlack.png";
import m19ChatWhite from "../assets/Images/m19ChatWhite.png";
import websiteThumbnailBlack from "../assets/Images/WebsiteThumbnailBlack.png";
import websiteThumbnailWhite from "../assets/Images/WebsiteThumbnailWhite.png";

//Project Data imported here
import ProjectsData from "../data/Projects.json";

//Components Imported here
import { Button } from "./ui/Button";
import { Link } from "react-router";
import { ProjectCards } from "./ui/ProjectCards";
import { useTheme } from "@/context/ThemeContext";

type ThemeImages = {
  [key: string]: {
    [key: string]: string;
  };
};

// Create a mapping between image paths and imported images for both themes
const imageMap: ThemeImages = {
  light: {
    "/src/assets/images/m19Chat.png": m19ChatBlack,
    "/src/assets/images/WebsiteThumbnail.png": websiteThumbnailBlack,
  },
  dark: {
    "/src/assets/images/m19Chat.png": m19ChatWhite,
    "/src/assets/images/WebsiteThumbnail.png": websiteThumbnailWhite,
  },
};

export const Projects = () => {
  const { theme } = useTheme();
  const currentTheme = theme === "dark" ? "dark" : "light";

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
            it's a tool to solve a problem, a website to share a story, or just
            something cool I wanted to build. I'm always learning,
            experimenting, and pushing myself to create things that matter.
          </p>
          <Button size="lg" variant="outline">
            <Link
              to="/projects"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              All projects
            </Link>
          </Button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 lg:gap-8">
        {ProjectsData.map((project, i) => (
          <ProjectCards
            key={i}
            src={imageMap[currentTheme][project.image]}
            projectName={project.title}
            projectType={project.projectType}
            projectDate={project.date}
          />
        ))}
      </div>
    </section>
  );
};
