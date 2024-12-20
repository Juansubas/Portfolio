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
      <img src={img} alt="image" className="w-full h-56 object-cover" />
      <div className="p-5 flex flex-col justify-between h-56">
        <div>
          <h1 className="text-2xl font-semibold text-white mb-3">{title}</h1>
          <p className="text-sm text-gray-300 line-clamp-3 mb-4">
            {description}
          </p>
        </div>

        <div className="flex justify-between items-center">
          <a
            className="bg-transparent backdrop-blur-md py-3 px-6 shadow-white rounded-xl shadow-sm text-white font-medium hover:text-gray-600 transition duration-300 ease-in-out hover:scale-105"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Preview
          </a>
          <a
            className="bg-transparent backdrop-blur-md py-3 px-6 shadow-white rounded-xl shadow-sm text-white font-medium hover:text-gray-600 transition duration-300 ease-in-out hover:scale-105"
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
