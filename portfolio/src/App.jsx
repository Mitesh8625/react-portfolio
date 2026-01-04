import { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";

const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));
const Resume = lazy(() => import("./components/Resume"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  return (
    <Suspense fallback={<div style={{textAlign:'center', marginTop:'50px'}}>Loading...</div>}>
      <Navbar />
      <div className="container">
        <About />
        <Projects />
        <Skills />
        <Resume />
        <Contact />
      </div>
    </Suspense>
  );
}

export default App;

