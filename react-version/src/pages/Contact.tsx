import { FaEnvelope, FaGithub, FaLinkedin, FaGitlab } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="section mx-auto py-12 bg-gray-900 rounded">
      <div className="grid grid-cols-1 lg:grid-cols-[40%,60%] gap-8 px-5 md:px-16 lg:px-24 items-center">
        <div className="flex justify-center lg:justify-start">
          <img
            src="./public/contact.jpg"
            alt="Foto de contacto"
            className="h-64 w-64 sm:h-80 sm:w-80 lg:h-96 lg:w-96 rounded-full border-2 border-blue-900 shadow-lg hover:scale-105 transition-transform object-fit"
          />
        </div>

        <div className="text-center lg:text-left text-white space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-400 via-blue-900 to-blue-950 text-transparent bg-clip-text">
            Contáctame
          </h1>
          <p className="text-lg md:text-xl leading-relaxed">
            ¡Hola! Soy Juansubas, y me encantaría ayudarte con tus proyectos.
            Si tienes alguna pregunta o necesitas asesoría en desarrollo
            web, tecnología, o cualquier otro tema, no dudes en ponerte en
            contacto conmigo. Aquí están algunas formas en las que puedes
            alcanzarme:
          </p>

          {/* Información de contacto */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 mt-4">
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-blue-900 text-3xl" />
              <p className="text-lg">juansubas@example.com</p>
            </div>
            <div className="flex items-center space-x-3">
              <FaGithub className="text-blue-900 text-3xl" />
              <a
                href="https://github.com/juansubas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:underline"
              >
                GitHub
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <FaGitlab className="text-blue-900 text-3xl" />
              <a
                href="https://gitlab.com/juansubas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:underline"
              >
                GitLab
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <FaLinkedin className="text-blue-900 text-3xl" />
              <a
                href="https://linkedin.com/in/juansubas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:underline"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Frase inspiracional */}
          <p className="text-lg italic font-light mt-4">
            "La tecnología puede ser el motor que impulse tus ideas, y yo
            quiero ser la fuerza detrás de tu proyecto. ¡Conectemos!"
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
