import { CloseIcon } from "@/assets/icons/CloseIcon";
import { Container } from "@/utils/Container";
import { Link } from "react-router";
import { Dispatch, SetStateAction } from "react";

type MenuNavigationType = {
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
};

export const MenuNavigation = ({ setOpenMenu }: MenuNavigationType) => {
  const textStyles =
    "text-4xl md:text-6xl xl:text-[102px] hover:opacity-70 transition-opacity duration-300 w-fit";

  const comingSoonStyles =
    "text-xs tracking-widest text-text-primary/80 uppercase flex justify-center";

  const listItemStyles = "py-3 w-fit";

  const handleLinkClick = (e: React.MouseEvent, path: string) => {
    // Currently adding this check to avoid leading the users to /about and trigger an error
    if (path === "/about") {
      e.preventDefault();
      return;
    }
    setOpenMenu(false);
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-bg-primary min-h-screen w-full">
      <Container className="relative h-screen flex flex-col">
        <div className="flex justify-between items-center py-8">
          <span className="text-text-primary text-sm hidden md:block w-1/3">
            LOCAL/ 46°28'58.6272"N
          </span>
          <div className="flex-1 md:flex-none flex justify-center">
            <CloseIcon setOpenMenu={setOpenMenu} />
          </div>
          <span className="text-text-primary text-sm hidden md:block w-1/3 text-right">
            CONTACT NOW
          </span>
        </div>

        <nav className="flex-1 flex items-center">
          <ul className="flex flex-col w-full items-center">
            <li className={listItemStyles}>
              <Link to="/" onClick={(e) => handleLinkClick(e, "/")}>
                <h2 className={textStyles}>HOME</h2>
              </Link>
            </li>
            <li className={listItemStyles}>
              <Link
                to="/projects"
                onClick={(e) => handleLinkClick(e, "/projects")}
              >
                <h2 className={textStyles}>PROJECTS</h2>
              </Link>
            </li>
            <li className={listItemStyles}>
              <Link to="/about" onClick={(e) => handleLinkClick(e, "/about")}>
                <h2 className={textStyles}>ABOUT</h2>
                <span className={comingSoonStyles}>Coming Soon</span>
              </Link>
            </li>
            <li className={listItemStyles}>
              <Link
                to="/contact"
                onClick={(e) => handleLinkClick(e, "/contact")}
              >
                <h2 className={textStyles}>CONTACT</h2>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex justify-between items-center py-8">
          <span className="text-text-primary text-sm hidden md:block">
            ©2025 ALL RIGHTS RESERVED
          </span>
          <div className="flex gap-8">
            <a
              href="https://www.linkedin.com/in/mimoun-atmani/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-primary text-sm hover:opacity-70 transition-opacity"
            >
              LINKEDIN
            </a>
            <a
              href="https://github.com/1Dh2Be"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-primary text-sm hover:opacity-70 transition-opacity"
            >
              GITHUB
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};
