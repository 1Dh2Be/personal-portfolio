import { AnimatedText } from "./ui/AnimatedText";
import { DownArrow } from "@/assets/icons/DownArrow";
import { Button } from "./ui/Button";
import { ThemeToggleIcon } from "@/assets/icons/ThemeToggleIcon";
import { MenuIcon } from "@/assets/icons/Menu";
import { Container } from "@/utils/Container";
import { Link } from "react-router";
import { motion } from "motion/react";
import { useVariant } from "@/utils/animations";

// Animation variants
const nameVariants = {
  initial: {
    y: -50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "linear",
      delay: 0.2,
    },
  },
};

const linkVariants = {
  initial: {
    y: 20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "linear",
      delay: 0.2,
    },
  },
};

const hrVariants = {
  initial: {
    scaleX: 0,
    opacity: 0,
  },
  animate: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export const Header = () => {
  return (
    <Container className="relative z-[2] bg-bg-primary theme-transition">
      <header className="relative bg-bg-primary theme-transition">
        <motion.section className="flex flex-col lg:flex-row xl:items-center">
          <motion.div
            {...useVariant(nameVariants)}
            className="flex-1 flex items-center"
          >
            <a href="/">
              <h1>MIMOUN</h1>
            </a>
          </motion.div>

          <motion.div
            {...useVariant(nameVariants)}
            className="flex-1 flex items-center"
          >
            <a href="/">
              <h1>ATMANI</h1>
            </a>
          </motion.div>
        </motion.section>

        <motion.hr
          {...useVariant(hrVariants)}
          className="border-border-primary mb-4 theme-transition"
        />

        <section className="flex items-center">
          <div className="flex-1 flex items-center">
            <motion.div
              {...useVariant(linkVariants)}
              className="flex-1 hidden md:block"
            >
              <AnimatedText text="projects" url="/projects" />
              <h4>More than 15</h4>
            </motion.div>

            <motion.div {...useVariant(linkVariants)} className="flex-1">
              <AnimatedText text="about" url="/about" />
              <h4>Since sep, 2024</h4>
            </motion.div>
          </div>

          <motion.nav
            {...useVariant(linkVariants)}
            className="flex items-center gap-2"
          >
            <MenuIcon />
            <ThemeToggleIcon />
          </motion.nav>

          <motion.div
            {...useVariant(linkVariants)}
            className="flex-1 hidden md:flex items-center justify-end gap-5"
          >
            <AnimatedText
              text={
                <span className="flex items-center gap-2">
                  download cv <DownArrow />
                </span>
              }
              url="/src/assets/resume/Mimoun-Atmani-FullStack-engineer-Resume.pdf"
              download={true}
            />
            <Button size="lg">
              <Link to="/contact">Contact me</Link>
            </Button>
          </motion.div>
        </section>
      </header>
    </Container>
  );
};
