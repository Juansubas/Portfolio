const Hero = () => {
  return (
    <section id="hero" className="section mt-5 md:mt-16 mx-auto self-center">
      <div className="grid grid-cols-1 md:grid-cols-[60%,40%] px-5 md:px-16 items-start">
        <div className="flex flex-col m-4 text-black">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white">Hola Mundo</h1>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white">
            Soy{" "}
            <span className="font-bold bg-gradient-to-r from-gray-400 via-blue-900 to-blue-950 text-transparent bg-clip-text">
              Juansubas
            </span>
          </h2>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mt-2">
            YouTuber | Ingeniero Industrial | Desarrollador de Software
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-white pt-5 text-justify pr-3">
            Soy un apasionado desarrollador con experiencia en React, Next.js,
            NestJS, Express y .NET. Me encanta crear soluciones innovadoras y
            compartir mi viaje como YouTuber, emprendedor y líder en el
            crecimiento personal. ¡Vamos a romperla juntos!
          </p>
        </div>

        <div className="text-black flex justify-center mt-5 md:mt-0">
          <img
            src="./juansubas.png"
            alt="foto perfil"
            className="h-48 w-48 sm:h-64 sm:w-64 md:h-96 md:w-96 cursor-pointer rounded-full shadow-xl shadow-slate-700 hover:scale-105 hover:shadow-2xl hover:shadow-slate-900 object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
