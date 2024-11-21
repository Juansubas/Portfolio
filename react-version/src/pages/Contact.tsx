import Contact from "./Contact";

const ContactPage = () => {
  return (
    <section id="contact" className="section mx-auto py-12 bg-gray-900 rounded-lg">
      <div className="grid grid-cols-1 lg:grid-cols-[40%,60%] gap-8 px-5 md:px-16 lg:px-24 items-center">
        <div className="flex justify-center lg:justify-start">
          <img
            src="./public/contact.jpg"
            alt="Foto de contacto"
            className="h-64 w-64 sm:h-80 sm:w-80 lg:h-96 lg:w-96 rounded-full border-2 border-teal-500 shadow-lg hover:scale-105 transition-transform object-cover"
          />
        </div>

        <div className="text-center lg:text-left text-white space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-teal-100 via-teal-400 to-teal-700 text-transparent bg-clip-text">
            Contáctame
          </h1>
          <p className="text-lg md:text-xl leading-relaxed">
            ¡Hola! Soy Juansubas, y me encantaría ayudarte con tus proyectos.
            Si tienes alguna pregunta o necesitas asesoría en desarrollo
            web, tecnología, o cualquier otro tema, no dudes en ponerte en
            contacto conmigo. Aquí están algunas formas en las que puedes
            alcanzarme:
          </p>

          <Contact />

          <p className="text-lg italic font-light mt-4">
            "La tecnología puede ser el motor que impulse tus ideas, y yo
            quiero ser la fuerza detrás de tu proyecto. ¡Conectemos!"
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
