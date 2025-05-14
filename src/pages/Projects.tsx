import { ProjectCards } from "@/components/ui/ProjectCards";
import { Container } from "@/utils/Container";
import m19ChatBlack from "../assets/png/m19ChatBlack.png";
import m19ChatWhite from "../assets/png/m19ChatWhite.png";
import websiteThumbnailBlack from "../assets/png/WebsiteThumbnailBlack.png";
import websiteThumbnailWhite from "../assets/png/WebsiteThumbnailWhite.png";
import { useTheme } from "@/context/ThemeContext";
import ProjectsData from "../data/Projects.json";
import { motion } from "motion/react";

type ThemeImages = {
  [key: string]: {
    [key: string]: string;
  };
};

// Create a mapping between image paths and imported images for both themes
const imageMap: ThemeImages = {
  light: {
    "/src/assets/png/m19Chat.png": m19ChatBlack,
    "/src/assets/png/WebsiteThumbnail.png": websiteThumbnailBlack,
  },
  dark: {
    "/src/assets/png/m19Chat.png": m19ChatWhite,
    "/src/assets/png/WebsiteThumbnail.png": websiteThumbnailWhite,
  },
};

// Animation variants
const titleVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const Projects = () => {
  const { theme } = useTheme();
  const currentTheme = theme === "dark" ? "dark" : "light";

  return (
    <Container className="relative z-[5] min-h-screen bg-bg-primary theme-transition rounded-b-4xl">
      <section className="flex flex-col gap-5 mt-24">
        <motion.h2
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          className=""
        >
          Projects.
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col md:flex-row gap-4 lg:gap-8 mt-14"
        >
          {ProjectsData.map((project, i) => (
            <motion.div key={i} variants={cardVariants}>
              <ProjectCards
                src={imageMap[currentTheme][project.image]}
                projectName={project.title}
                projectType={project.projectType}
                projectDate={project.date}
                slug={project.slug}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </Container>
  );
};
