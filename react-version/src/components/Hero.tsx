const Hero = () => {
  return (
    <section className="section mt-16">
      <div className="grid md:grid-cols-[60%,40%] px-16 items-center"> 
        <div className="flex flex-col m-4 text-black">
          <h1 className="text-7xl font-bold text-white">Hola Mundo</h1>
          <h2 className="text-7xl font-bold text-white">
            Soy{" "}
            <span className="font-bold bg-gradient-to-r from-gray-400 via-blue-900 to-blue-950 text-transparent bg-clip-text">
              Juansubas
            </span>
          </h2>
          <h3 className="text-2xl font-bold text-white mt-2">
            YouTuber | Ingeniero Industrial | Desarrollador de Software
          </h3>
          <p className="text-xl text-white pt-5 text-justify ">
            Soy un apasionado desarrollador con experiencia en React, Next.js,
            NestJS, Express y .NET. Me encanta crear soluciones innovadoras y
            compartir mi viaje como YouTuber, emprendedor y líder en el
            crecimiento personal. ¡Vamos a romperla juntos!
          </p>
        </div>

        <div className=" text-black flex justify-center">
          <img src="./juansubas.png" alt="foto perfil" className="h-96 object-cover object-center" /> 
        </div>
      </div>
    </section>
  );
};

export default Hero;
