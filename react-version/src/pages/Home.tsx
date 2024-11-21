import Hero from "../components/Hero";
import Layout from "../components/Layout";
import About from "./About";
import ContactPage from "./ContactPage";
import Projects from "./Projects";

const Home = () => {
  return (
    <Layout > 
      <Hero />
      <About />
      <Projects />
      <ContactPage />
    </Layout> 
  );
};

export default Home;
