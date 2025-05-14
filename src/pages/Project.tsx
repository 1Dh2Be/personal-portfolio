import { Container } from "@/utils/Container";
import { useParams } from "react-router-dom";
import ProjectsData from "@/data/Projects.json";
import { useTheme } from "@/context/ThemeContext";
import m19ChatBlack from "@/assets/png/m19ChatBlack.png";
import m19ChatWhite from "@/assets/png/m19ChatWhite.png";
import websiteThumbnailBlack from "@/assets/png/WebsiteThumbnailBlack.png";
import websiteThumbnailWhite from "@/assets/png/WebsiteThumbnailWhite.png";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { useState } from "react";
import React from "react";
import ScrollToTop from "@/utils/ScrollToTop";
import { motion } from "motion/react";

const imageMap: any = {
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
const headerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

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

const subtitleVariants = {
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
    },
  },
};

const imageVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const contentVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export const Project = () => {
  const { projectSlug } = useParams();
  const { theme } = useTheme();
  const currentTheme = theme === "dark" ? "dark" : "light";

  // Viewport options for scroll animations
  const viewportOptions = {
    once: true,
    amount: 0.2,
    margin: "50px 0px",
  };

  const project = ProjectsData.find((p) => p.slug === projectSlug);

  const [showWarningModal, setShowWarningModal] = useState(false);
  const [redirect, setRedirect] = useState(false);

  // Handle redirect after modal confirmation
  React.useEffect(() => {
    if (redirect && project?.link) {
      window.open(project.link, "_blank", "noopener,noreferrer");
      setRedirect(false);
    }
  }, [redirect, project]);

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
      <ScrollToTop />
      <div className="flex flex-col gap-16 mt-24">
        {/* Project Header - Full Width */}
        <motion.div
          className="w-full"
          variants={headerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-col gap-4">
            <motion.div
              className="flex flex-col gap-2"
              variants={titleVariants}
            >
              <div className="flex items-center gap-3 text-text-secondary">
                <span className="text-lg">{project.projectType}</span>
                <span>•</span>
                <span className="text-lg">{project.date}</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary">
                {project.title}
              </h1>
            </motion.div>
            <motion.p
              className="text-text-secondary text-xl max-w-2xl"
              variants={subtitleVariants}
            >
              {project.subTitle}
            </motion.p>
            {project.link && (
              <motion.div variants={buttonVariants}>
                <Button
                  size="lg"
                  variant="outline"
                  className="mt-6 w-fit"
                  onClick={() => setShowWarningModal(true)}
                >
                  <span className="inline-flex items-center gap-2">
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
                  </span>
                </Button>
              </motion.div>
            )}
            {showWarningModal && (
              <Modal
                title="m19 Chat Access Information"
                onClose={() => setShowWarningModal(false)}
                showContactButton={true}
              >
                <div>
                  Good news! The m19 Chat backend is now live and fully
                  functional.
                  <br />
                  <br />
                  <strong>Free Account Access:</strong>
                  <br />
                  You can use the following credentials to access the full
                  features of m19 Chat:
                  <div className="mt-2 p-4 bg-gray-100 dark:bg-gray-800 rounded-md">
                    <p>
                      <strong>Email:</strong> guestuser@gmail.com
                    </p>
                    <p>
                      <strong>Password:</strong> Testaccount@#
                    </p>
                  </div>
                  <br />
                  <strong>Pro Account Features:</strong>
                  <br />
                  If you'd like to test the Pro account features or have any
                  questions about the project, please feel free to contact me
                  using the button below.
                  <br />
                  <br />
                  You can visit the live project by clicking here:{" "}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    Go to m19 Chat
                  </a>
                </div>
              </Modal>
            )}
          </div>
        </motion.div>

        {/* Project Image */}
        <motion.div
          className="w-full"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <img
            src={
              imageMap[currentTheme][
                project.image as keyof typeof imageMap.light
              ]
            }
            alt={project.alt}
            className="w-full rounded-2xl h-auto object-cover"
          />
        </motion.div>

        {/* Main Content - Content with scroll-triggered animations */}
        <div className="max-w-4xl mx-auto w-full flex flex-col gap-16 px-4">
          {/* Project Overview */}
          <motion.div
            className="flex flex-col gap-6"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
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
                      className="px-3 py-1 bg-bg-secondary text-bg-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project Description */}
          <motion.div
            className="flex flex-col gap-6"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            <h2 className="text-2xl font-semibold text-text-primary">
              About the Project
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              {project.longDescription}
            </p>
          </motion.div>

          {/* Project Journey */}
          <motion.div
            className="flex flex-col gap-6"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            <h2 className="text-2xl font-semibold text-text-primary">
              The Journey
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed whitespace-pre-line">
              {project.journey}
            </p>
          </motion.div>

          {/* Challenges */}
          {project.challenges && project.challenges.length > 0 && (
            <motion.div
              className="flex flex-col gap-8"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
            >
              <h2 className="text-2xl font-semibold text-text-primary">
                {project.challangeIntro}
              </h2>
              <div className="flex flex-col gap-12">
                {project.challenges.map((challenge, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col gap-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOptions}
                    variants={sectionVariants}
                    transition={{ delay: index * 0.1 }}
                  >
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
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Final Thoughts */}
          <motion.div
            className="flex flex-col gap-6"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            <h2 className="text-2xl font-semibold text-text-primary">
              Final Thoughts
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              {project.finalThoughts}
            </p>
          </motion.div>
        </div>
      </div>
    </Container>
  );
};
