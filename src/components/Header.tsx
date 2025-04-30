import { AnimatedText } from "./ui/AnimatedText";
import { DownArrow } from "@/assets/icons/DownArrow";
import { Button } from "./ui/Button";
import { ThemeToggleIcon } from "@/assets/icons/ThemeToggleIcon";
import { MenuIcon } from "@/assets/icons/Menu";
import { Container } from "@/utils/Container";
import { Link } from "react-router";

export const Header = () => {
  return (
    <Container className="relative z-[5] bg-bg-primary theme-transition">
      <header className="relative z-[5] bg-bg-primary theme-transition">
        <section className="flex flex-col xl:flex-row xl:items-center">
          <div className="flex-1 flex items-center">
            <a href="/">
              <h1>MIMOUN</h1>
            </a>
          </div>

          <div className="flex-1 flex items-center">
            <a href="/">
              <h1>ATMANI</h1>
            </a>
          </div>
        </section>

        <hr className="border-border-primary mb-4 theme-transition" />

        <section className="flex items-center">
          <div className="flex-1 flex items-center">
            <div className="flex-1 hidden md:block">
              <AnimatedText text="projects" url="/projects" />
              <h4>More than 15</h4>
            </div>

            <div className="flex-1">
              <AnimatedText text="about" url="/about" />
              <h4>Since sep, 2024</h4>
            </div>
          </div>

          <nav className="flex items-center gap-2">
            <MenuIcon />
            <ThemeToggleIcon />
          </nav>

          <div className="flex-1 hidden md:flex items-center justify-end gap-5">
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
          </div>
        </section>
      </header>
    </Container>
  );
};
