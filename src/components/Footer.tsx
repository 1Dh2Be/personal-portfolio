import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { AnimatedText } from "./ui/AnimatedText";

type FooterProps = {
  setFooterHeight: Dispatch<SetStateAction<number>>;
};

const socialLinkStyles = `
    relative
    text-bg-primary
    text-sm
    hover:opacity-70
    transition-opacity
    before:content-['']
    before:absolute
    before:-bottom-1
    before:left-0
    before:w-full
    before:h-0.5
    before:bg-bg-primary
    before:origin-left
    before:scale-x-0
    before:transition-transform
    before:duration-200
    hover:before:scale-x-100
  `;

export const Footer = ({ setFooterHeight }: FooterProps) => {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateFooterHeight = () => {
      if (footerRef.current) {
        setFooterHeight?.(footerRef.current.offsetHeight);
      }
    };

    // Initial height calculation
    updateFooterHeight();

    // Add resize event listener
    window.addEventListener("resize", updateFooterHeight);

    // Cleanup
    return () => {
      window.removeEventListener("resize", updateFooterHeight);
    };
  }, [setFooterHeight]);

  return (
    <footer ref={footerRef} className="h-fit flex flex-col justify-end">
      {/* First row */}
      <section className="flex flex-col lg:flex-row gap-5">
        {/* left section of first row*/}
        <div className="flex-1 flex flex-col lg:flex-row gap-5">
          <div className="flex-1 flex flex-col gap-2">
            <h4>Say "Hello":</h4>
            {/* Currently won't do anything but should open outlook */}
            <a
              href="mailto:mimounb1597@gmail.com"
              className="w-fit text-sm text-bg-primary font-bold hover:opacity-80"
            >
              mimounb1597@gmail.com
            </a>
          </div>

          <div className="flex-1 flex flex-col gap-3">
            <h4>Navigate:</h4>
            <ul className="flex flex-col gap-2">
              <li>
                <AnimatedText className="text-bg-primary" text="home" url="/" />
              </li>

              {/* Here bring back to the view of projects (Not a page) */}
              <li>
                <AnimatedText
                  className="text-bg-primary"
                  text="projects"
                  url="/projects"
                />
              </li>

              {/* Link to the about page (Create one) */}
              <li>
                <AnimatedText
                  className="text-bg-primary"
                  text="about"
                  url="/about"
                />
              </li>

              <li>
                <AnimatedText
                  className="text-bg-primary"
                  text="connect with me"
                  url="/contact"
                />
              </li>
            </ul>
          </div>
        </div>

        {/* right section of first row*/}
        <div className="flex-1 flex flex-col lg:flex-row gap-5">
          <div className="flex-1">
            <h2 className="text-bg-primary max-w-[280px] text-[22px]">
              Unconventional path, exceptional results. Full Stack Engineer with
              a knack for bringing complex ideas to life.
            </h2>
          </div>

          <div className="flex-1 flex flex-col gap-2">
            <h4>Links:</h4>
            <ul className="flex gap-5">
              <li>
                <h4 className={socialLinkStyles}>
                  <a
                    href="https://www.linkedin.com/in/mimoun-atmani/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </h4>
              </li>
              <li>
                <h4 className={socialLinkStyles}>
                  <a
                    href="https://github.com/1Dh2Be"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                </h4>
              </li>
              <li>
                <h4 className={socialLinkStyles}>
                  <a
                    href="/src/assets/resume/Mimoun-Atmani-FullStack-engineer-Resume.pdf"
                    download
                    rel="noopener noreferrer"
                  >
                    Resume
                  </a>
                </h4>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Second row  */}
      <section className="flex mt-8">
        <div className="flex-1">
          <a href="/">
            <h1 className="text-bg-primary xl:text-[102px]">M.</h1>
          </a>
        </div>

        <div className="flex-1">
          <a href="/">
            <h1 className="text-bg-primary xl:text-[102px]">A.</h1>
          </a>
        </div>
      </section>

      <hr className="border-border-secondary my-3" />

      <section className="flex flex-col md:flex-row items-center justify-between ">
        <span className="text-bg-primary">© 2025</span>
        <span className="text-bg-primary">Made with ❤️ by Mimoun Atmani</span>
      </section>
    </footer>
  );
};
