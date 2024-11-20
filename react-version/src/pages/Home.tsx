import Hero from "../components/Hero";
import Layout from "../components/Layout";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";

const Home = () => {
  return (
    <Layout > 
      <Hero />
      <About />
      <Projects />
      <Contact />
    </Layout> 
  );
};

export default Home;
