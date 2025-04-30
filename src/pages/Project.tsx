import { Container } from "@/utils/Container";
import { useParams } from "react-router";
import ProjectsData from "@/data/Projects.json";
import { useTheme } from "@/context/ThemeContext";
import m19ChatBlack from "@/assets/Images/m19ChatBlack.png";
import m19ChatWhite from "@/assets/Images/m19ChatWhite.png";
import websiteThumbnailBlack from "@/assets/Images/WebsiteThumbnailBlack.png";
import websiteThumbnailWhite from "@/assets/Images/WebsiteThumbnailWhite.png";
import { Button } from "@/components/ui/Button";

const imageMap = {
  light: {
    "/src/assets/images/m19Chat.png": m19ChatBlack,
    "/src/assets/images/WebsiteThumbnail.png": websiteThumbnailBlack,
  },
  dark: {
    "/src/assets/images/m19Chat.png": m19ChatWhite,
    "/src/assets/images/WebsiteThumbnail.png": websiteThumbnailWhite,
  },
};

export const Project = () => {
  const { projectSlug } = useParams();
  const { theme } = useTheme();
  const currentTheme = theme === "dark" ? "dark" : "light";

  const project = ProjectsData.find((p) => p.slug === projectSlug);

  if (!project) {
    return (
      <Container className="relative z-[5] min-h-screen bg-bg-primary theme-transition rounded-b-4xl">
        <section className="flex flex-col gap-5 mt-24">
          <h1 className="text-4xl font-bold">Project not found</h1>
        </section>
      </Container>
    );
  }

  return (
    <Container className="relative z-[5] min-h-screen py-10 bg-bg-primary theme-transition rounded-b-4xl">
      <div className="flex flex-col gap-16 mt-24">
        {/* Project Header - Full Width */}
        <div className="w-full">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3 text-text-secondary">
                <span className="text-lg">{project.projectType}</span>
                <span>•</span>
                <span className="text-lg">{project.date}</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary">
                {project.title}
              </h1>
            </div>
            <p className="text-text-secondary text-xl max-w-2xl">
              {project.subTitle}
            </p>
            {project.link && (
              <Button size="lg" variant="outline" className="mt-6 w-fit">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  View Live Project
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                  >
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </Button>
            )}
          </div>
        </div>

        {/* Project Image */}
        <div className="w-full">
          <img
            src={
              imageMap[currentTheme][
                project.image as keyof typeof imageMap.light
              ]
            }
            alt={project.alt}
            className="w-full rounded-2xl h-auto object-cover"
          />
        </div>

        {/* Main Content - Keep existing content with max-width */}
        <div className="max-w-4xl mx-auto w-full flex flex-col gap-16 px-4">
          {/* Project Overview */}
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-text-primary">
              Project Overview
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-4">
                <div>
                  <h3 className="text-lg font-medium text-text-primary">
                    Client
                  </h3>
                  <p className="text-text-secondary">{project.client}</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-text-primary">
                    Services
                  </h3>
                  <p className="text-text-secondary">{project.services}</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-text-primary">
                    Industries
                  </h3>
                  <p className="text-text-secondary">{project.industries}</p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-medium text-text-primary">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Project Description */}
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-text-primary">
              About the Project
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Project Journey */}
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-text-primary">
              The Journey
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed whitespace-pre-line">
              {project.journey}
            </p>
          </div>

          {/* Challenges */}
          {project.challenges && project.challenges.length > 0 && (
            <div className="flex flex-col gap-8">
              <h2 className="text-2xl font-semibold text-text-primary">
                {project.challangeIntro}
              </h2>
              <div className="flex flex-col gap-12">
                {project.challenges.map((challenge, index) => (
                  <div key={index} className="flex flex-col gap-4">
                    <h3 className="text-xl font-medium text-text-primary">
                      {challenge.title}
                    </h3>
                    <p className="text-text-secondary text-lg leading-relaxed">
                      {challenge.description}
                    </p>
                    <div className="flex flex-col gap-2">
                      <h4 className="text-lg font-medium text-text-primary">
                        {challenge.solutionTitle}
                      </h4>
                      <p className="text-text-secondary text-lg leading-relaxed">
                        {challenge.solutionDescription}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Final Thoughts */}
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-text-primary">
              Final Thoughts
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              {project.finalThoughts}
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};
