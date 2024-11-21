import Card from "../components/Card";
import { projects } from "../data/projectsData";

const Projects = () => {
  return (
    <section id="projects" className="section py-12">
      <h1 className="text-4xl font-bold text-center text-white mb-10">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {projects.map((project, index) => {
          return (
            <Card
              key={index}
              img={project.img}
              title={project.title}
              description={project.description}
              link={project.link}
              repo={project.repo}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
