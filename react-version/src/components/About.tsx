import { FaReact, FaNodeJs, FaAws, FaDatabase } from "react-icons/fa";
import { SiNestjs, SiDotnet, SiTailwindcss, SiNextdotjs } from "react-icons/si";

const About = () => {
  return (
    <section id="about" className="section mx-auto py-12 bg-gray-900 rounded-lg">
      <div className="grid grid-cols-1 lg:grid-cols-[40%,60%] gap-8 px-5 md:px-16 lg:px-24 items-center">
        <div className="flex justify-center lg:justify-start">
          <img
            src="../assets/Cracks.jpg"
            alt="Foto de Cracks"
            className="h-64 w-64 sm:h-80 sm:w-80 lg:h-96 lg:w-96 rounded border-2 border-blue-700 shadow-lg hover:scale-105 transition-transform object-cover"
          />
        </div>

        <div className="text-center lg:text-left text-white space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-400 via-blue-900 to-blue-950 text-transparent bg-clip-text">
            Acerca de mí
          </h1>
          <p className="text-lg md:text-xl leading-relaxed">
            Soy Juansubas, un apasionado desarrollador y YouTuber con una
            formación en ingeniería industrial. Me especializo en crear
            soluciones tecnológicas innovadoras, ayudando a empresas a mejorar
            sus procesos y llevar sus negocios al siguiente nivel con
            tecnología. Me encanta ayudar a emprendedores y empresas a
            transformar sus ideas en soluciones digitales que realmente marcan
            la diferencia.
          </p>

          <div>
            <h2 className="text-xl font-semibold text-blue-900">
              Tecnologías que uso:
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4">
              <div className="flex flex-col text-center justify-center items-center">
                <FaReact className="text-blue-500 text-5xl" />
                <p>React</p>
              </div>
              <div className="flex flex-col text-center justify-center items-center">
                <FaNodeJs className="text-green-500 text-5xl" />
                <p>Node.js</p>
              </div>
              <div className="flex flex-col text-center justify-center items-center">
                <SiNestjs className="text-red-500 text-5xl" />
                <p>NestJS</p>
              </div>
              <div className="flex flex-col text-center justify-center items-center">
                <SiNextdotjs className="text-gray-800 text-5xl" />
                <p>Next.js</p>
              </div>
              <div className="flex flex-col text-center justify-center items-center">
                <SiDotnet className="text-indigo-600 text-5xl" />
                <p>.NET C#</p>
              </div>
              <div className="flex flex-col text-center justify-center items-center">
                <FaDatabase className="text-yellow-600 text-5xl" />
                <p>SQL Server / PostgreSQL</p>
              </div>
              <div className="flex flex-col text-center justify-center items-center">
                <FaAws className="text-orange-500 text-5xl" />
                <p>AWS</p>
              </div>
              <div className="flex flex-col text-center justify-center items-center">
                <SiTailwindcss className="text-teal-400 text-5xl" />
                <p>TailwindCSS</p>
              </div>
            </div>
          </div>

          <p className="text-lg italic font-light mt-4">
            "Tu idea, mi código. Juntos transformamos tus desafíos en soluciones
            digitales poderosas que impulsan tu negocio al siguiente nivel."
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
