import { Link } from "react-router-dom";

const Brand = () => {
  return (
    <div className="flex justify-center">
      <Link to={'/'} className="hover:text-slate-500">
        <h1>Juansubas</h1>
      </Link>
    </div>
  );
};

export default Brand;
