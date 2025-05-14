//Image(s) imported here
import m19ChatBlack from "../assets/png/m19ChatBlack.png";
import m19ChatWhite from "../assets/png/m19ChatWhite.png";
import websiteThumbnailBlack from "../assets/png/WebsiteThumbnailBlack.png";
import websiteThumbnailWhite from "../assets/png/WebsiteThumbnailWhite.png";

//Project Data imported here
import ProjectsData from "../data/Projects.json";

//Components Imported here
import { Button } from "./ui/Button";
import { Link } from "react-router";
import { ProjectCards } from "./ui/ProjectCards";
import { useTheme } from "@/context/ThemeContext";
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

const textVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      delay: 0.2,
    },
  },
};

const buttonVariants = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
      delay: 0.3,
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
      delayChildren: 0.4,
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

export const ProjectsThumbnail = () => {
  const { theme } = useTheme();
  const currentTheme = theme === "dark" ? "dark" : "light";

  // Viewport options for animation triggers
  const viewportOptions = {
    once: true,
    amount: 0.2,
    margin: "100px 0px",
  };

  return (
    <section id="projects" className="pt-8 lg:pt-20 pb-15 md:pb-30">
      <div className="gap-4 lg:gap-8 flex flex-col md:flex-row justify-between items-start mb-8">
        <motion.h2
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="text-text-primary text-3xl md:text-4xl lg:text-[64px] font-bold flex-1"
        >
          Recent works
        </motion.h2>

        <div className="flex-1 mt-4 md:mt-0">
          <motion.p
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="text-gray-700 dark:text-gray-300 mb-4"
          >
            Every project here is a step in my journey as a self taught
            developer. I love turning ideas into real, working products whether
            it's a tool to solve a problem, a website to share a story, or just
            something cool I wanted to build. I'm always learning,
            experimenting, and pushing myself to create things that matter.
          </motion.p>
          <motion.div
            variants={buttonVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            <Button size="lg" variant="outline">
              <Link to="/projects">All projects</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
        className="flex flex-col md:flex-row gap-4 lg:gap-8"
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
  );
};
