const Card = ({
  img,
  title,
  description,
  link,
  repo,
}: {
  img: string;
  title: string;
  description: string;
  link: string;
  repo: string;
}) => {
  return (
    <section className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      {/* Imagen del proyecto */}
      <img
        src={img}
        alt="image"
        className="w-full h-56 object-cover"
      />
      <div className="p-5">
        {/* Título del proyecto */}
        <h1 className="text-2xl font-semibold text-white mb-3">{title}</h1>
        
        {/* Descripción del proyecto */}
        <p className="text-sm text-gray-300 line-clamp-3 mb-4">{description}</p>
        
        {/* Controles de enlace */}
        <div className="flex justify-between items-center">
          <a
            className="text-teal-400 hover:text-teal-600 font-medium transition duration-300"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Preview
          </a>
          <a
            className="text-teal-400 hover:text-teal-600 font-medium transition duration-300"
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
          >
            Repository
          </a>
        </div>
      </div>
    </section>
  );
};

export default Card;
