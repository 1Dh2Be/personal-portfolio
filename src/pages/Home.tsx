import { Blog } from "@/components/Blog";
import { DynamicSwitch } from "@/components/DynamicSwitch";
import { Faq } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { Journey } from "@/components/Journey";
import { Process } from "@/components/Process";
import { ProjectsThumbnail } from "@/components/ProjectsThumbnail";
import { Stats } from "@/components/Stats";
import { Container } from "@/utils/Container";

export const Home = () => {
  return (
    <div className="relative bg-bg-primary min-h-screen theme-transition">
      <div className="hero-height relative">
        <Container>
          <Hero />
        </Container>
      </div>

      <Container>
        <ProjectsThumbnail />
        <Process />
        <DynamicSwitch />
        <Journey />
        <Stats />
        <Blog />
        <Faq />
      </Container>
    </div>
  );
};
