import { useState } from "react";
import { Blog } from "./components/Blog";
import { DynamicSwitch } from "./components/DynamicSwitch";
import { Faq } from "./components/Faq";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Journey } from "./components/Journey";
import { Process } from "./components/Process";
import { Projects } from "./components/Projects";
import { Stats } from "./components/Stats";
import { Container } from "./utils/Container";

function App() {
  const [footerHeight, setFooterHeight] = useState<number>(0);

  console.log(footerHeight);

  return (
    <div className="bg-bg-secondary">
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

      <div style={{ height: footerHeight + 50 }} className=" bg-transparent" />

      <Container className="fixed bottom-0 bg-bg-secondary">
        <Footer setFooterHeight={setFooterHeight} />
      </Container>
    </div>
  );
}

export default App;
