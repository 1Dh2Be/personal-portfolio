import { ProjectCards } from "@/components/ui/ProjectCards";
import { Container } from "@/utils/Container";
import m19ChatBlack from "../assets/Images/m19ChatBlack.png";
import m19ChatWhite from "../assets/Images/m19ChatWhite.png";
import websiteThumbnailBlack from "../assets/Images/WebsiteThumbnailBlack.png";
import websiteThumbnailWhite from "../assets/Images/WebsiteThumbnailWhite.png";
import { useTheme } from "@/context/ThemeContext";
import ProjectsData from "../data/Projects.json";

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
    <Container className="relative z-[5] min-h-screen bg-bg-primary theme-transition rounded-b-4xl">
      <section className="flex flex-col gap-5 mt-24">
        <h2 className="">Projects.</h2>
        <div className="flex flex-col md:flex-row gap-4 lg:gap-8 mt-14">
          {ProjectsData.map((project, i) => (
            <div key={i}>
              <ProjectCards
                src={imageMap[currentTheme][project.image]}
                projectName={project.title}
                projectType={project.projectType}
                projectDate={project.date}
                slug={project.slug}
              />
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
};
