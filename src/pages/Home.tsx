import { Blog } from "@/components/Blog";
import { DynamicSwitch } from "@/components/DynamicSwitch";
import { Faq } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { Journey } from "@/components/Journey";
import { Process } from "@/components/Process";
import { Projects } from "@/components/Projects";
import { Stats } from "@/components/Stats";
import { Container } from "@/utils/Container";

export const Home = () => {
  return (
    <Container className="relative z-[5] bg-bg-primary min-h-screen theme-transition rounded-b-4xl">
      <Hero />
      <Projects />
      <Process />
      <DynamicSwitch />
      <Journey />
      <Stats />
      <Blog />
      <Faq />
    </Container>
  );
};
