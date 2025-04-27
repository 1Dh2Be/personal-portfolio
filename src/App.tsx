import { DynamicSwitch } from "./components/DynamicSwitch";
import { Hero } from "./components/Hero";
import { Journey } from "./components/Journey";
import { Process } from "./components/Process";
import { Projects } from "./components/Projects";
import { Container } from "./utils/Container";

function App() {
  return (
    <Container className="bg-bg-primary min-h-screen theme-transition">
      <Hero />
      <Projects />
      <Process />
      <DynamicSwitch />
      <Journey />
      <div className="h-screen"></div>
    </Container>
  );
}

export default App;
