import { Link } from "react-router-dom";

const Brand = () => {
  return (
    <div className="flex justify-center">
      <Link to={"/"} className="text-xl hover:text-slate-500">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-400 via-blue-900 to-blue-950 text-transparent bg-clip-text">
          Juansubas
        </h1>
      </Link>
    </div>
  );
};

export default Brand;
