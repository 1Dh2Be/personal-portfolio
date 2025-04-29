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
  return (
    <div className="bg-bg-secondary">
      <Container className="bg-bg-primary min-h-screen theme-transition rounded-b-4xl">
        <Hero />
        <Projects />
        <Process />
        <DynamicSwitch />
        <Journey />
        <Stats />
        <Blog />
        <Faq />
      </Container>
      <Container>
        <Footer />
        {/* <div className="h-screen z-0 w-full bg-text-primary">
          <h1 className="text-bg-primary">Hello thanks</h1>
        </div> */}
      </Container>
    </div>
  );
}

export default App;
