import { Link } from "react-router-dom";

const Brand = () => {
  return (
    <div className="flex justify-center">
      <a href="#hero" className="text-xl hover:text-slate-500">
        <Link to={"/"}>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-400 via-blue-900 to-blue-950 text-transparent bg-clip-text hover:scale-110 transition-all">
            Juansubas
          </h1>
        </Link>
      </a>
    </div>
  );
};

export default Brand;
