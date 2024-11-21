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
    <section className="bg-slate-800 rounded-lg px-3 py-3 flex flex-col justify-between h-full">
      <img src={img} alt="image" className="h-[200px] w-[380px] object-cover rounded-lg mb-2" />
      <h1 className="text-xl font-bold">{title}</h1>
      <p className="text-white overflow-hidden text-ellipsis  h-[70px]">{description}</p> 
      <div className="flex flex-row justify-between mt-2">
        <a
          className="bg-slate-500 text-white px-4 py-2 rounded-md hover:bg-slate-700"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Preview
        </a>
        <a
          className="bg-slate-500 text-white px-4 py-2 rounded-md hover:bg-slate-700"
          href={repo}
          target="_blank"
          rel="noopener noreferrer"
        >
          Repository
        </a>
      </div>
    </section>
  );
};

export default Card;
