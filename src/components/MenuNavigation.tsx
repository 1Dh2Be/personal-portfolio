import { CloseIcon } from "@/assets/icons/CloseIcon";
import { Container } from "@/utils/Container";
import { Link } from "react-router";
import { Dispatch, MouseEvent, SetStateAction, useEffect } from "react";
import { motion } from "motion/react";

type MenuNavigationType = {
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
};

export const MenuNavigation = ({ setOpenMenu }: MenuNavigationType) => {
  const textStyles =
    "text-4xl md:text-6xl xl:text-[102px] transition-all duration-300 w-fit hover:translate-y-[-2px]";

  const comingSoonStyles =
    "text-xs tracking-widest text-text-primary/80 uppercase flex justify-center";

  const listItemStyles = "py-3 w-fit overflow-hidden";

  const socialLinkStyles = `
    relative
    text-text-primary
    text-sm
    hover:opacity-70
    transition-opacity
    before:content-['']
    before:absolute
    before:-bottom-1
    before:left-0
    before:w-full
    before:h-0.5
    before:bg-text-primary
    before:origin-left
    before:scale-x-0
    before:transition-transform
    before:duration-200
    hover:before:scale-x-100
  `;

  // Prevent scrolling when modal is open
  useEffect(() => {
    // Save the current overflow value
    const originalOverflow = document.body.style.overflow;

    // Disable scrolling on body
    document.body.style.overflow = "hidden";

    // Re-enable scrolling when component unmounts
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  const handleLinkClick = (e: MouseEvent, path: string) => {
    // Currently adding this check to avoid leading the users to /about and trigger an error
    if (path === "/about") {
      e.preventDefault();
      return;
    }
    setOpenMenu(false);
  };

  const menuVariants = {
    initial: {
      y: "100%",
    },
    animate: {
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      y: "100%",
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const textVariants = {
    initial: {
      opacity: 0,
      y: "calc(100% + 30px)",
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      opacity: 0,
      y: "calc(100% + 30px)",
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const spanVariants = (direction: "top" | "bottom") => ({
    initial: {
      opacity: 0,
      y: direction === "top" ? -1000 : 1000,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      opacity: 0,
      y: direction === "top" ? -200 : 200,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  });

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={menuVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="fixed inset-0 z-[9999] bg-bg-primary min-h-screen w-full"
    >
      <Container className="relative h-screen flex flex-col">
        <div className="flex justify-between items-center py-8">
          <motion.span
            variants={spanVariants("top")}
            initial="initial"
            animate="animate"
            exit="exit"
            className="text-text-primary text-sm hidden md:block w-1/3"
          >
            LOCAL/ 50°51'0.0000"N
          </motion.span>
          <div className="flex-1 md:flex-none flex justify-center">
            <CloseIcon setOpenMenu={setOpenMenu} />
          </div>
          <motion.span
            variants={spanVariants("top")}
            initial="initial"
            animate="animate"
            exit="exit"
            className="text-text-primary text-sm hidden md:block w-1/3 text-right"
          >
            CONTACT NOW
          </motion.span>
        </div>

        <motion.nav
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          exit="exit"
          className="flex-1 flex items-center"
        >
          <motion.ul className="flex flex-col w-full items-center">
            <li className={listItemStyles}>
              <Link to="/" onClick={(e) => handleLinkClick(e, "/")}>
                <motion.h2 variants={textVariants} className={textStyles}>
                  HOME
                </motion.h2>
              </Link>
            </li>
            <li className={listItemStyles}>
              <Link
                to="/projects"
                onClick={(e) => handleLinkClick(e, "/projects")}
              >
                <motion.h2 variants={textVariants} className={textStyles}>
                  PROJECTS
                </motion.h2>
              </Link>
            </li>
            <li className={listItemStyles}>
              <Link to="/about" onClick={(e) => handleLinkClick(e, "/about")}>
                <motion.h2 variants={textVariants} className={textStyles}>
                  ABOUT
                </motion.h2>
                <span className={comingSoonStyles}>Coming Soon</span>
              </Link>
            </li>
            <li className={listItemStyles}>
              <Link
                to="/contact"
                onClick={(e) => handleLinkClick(e, "/contact")}
              >
                <motion.h2 variants={textVariants} className={textStyles}>
                  CONTACT
                </motion.h2>
              </Link>
            </li>
          </motion.ul>
        </motion.nav>

        <div className="flex justify-between items-center py-8">
          <motion.span
            variants={spanVariants("bottom")}
            initial="initial"
            animate="animate"
            exit="exit"
            className="text-text-primary text-sm hidden md:block"
          >
            ©2025 ALL RIGHTS RESERVED
          </motion.span>

          <div className="flex gap-8">
            <motion.a
              variants={spanVariants("bottom")}
              initial="initial"
              animate="animate"
              exit="exit"
              href="https://www.linkedin.com/in/mimoun-atmani/"
              target="_blank"
              rel="noopener noreferrer"
              className={socialLinkStyles}
            >
              LINKEDIN
            </motion.a>
            <motion.a
              variants={spanVariants("bottom")}
              initial="initial"
              animate="animate"
              exit="exit"
              href="https://github.com/1Dh2Be"
              target="_blank"
              rel="noopener noreferrer"
              className={socialLinkStyles}
            >
              GITHUB
            </motion.a>
            <motion.a
              variants={spanVariants("bottom")}
              initial="initial"
              animate="animate"
              exit="exit"
              href="/src/assets/resume/Mimoun-Atmani-FullStack-engineer-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={socialLinkStyles}
            >
              MY RESUME
            </motion.a>
          </div>
        </div>
      </Container>
    </motion.div>
  );
};
