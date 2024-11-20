import { Link } from "react-router-dom";

const NotFoundComponent = () => {
  return (
    <div>
      <p>Esta pagina no existe</p>
      <p>Por Favor regresa al inicio</p>
      <ol>
        <li>
          <Link to="/" className="underline text-blue-400 hover:text-blue-600">
            Inicio
          </Link>
        </li>
      </ol>
    </div>
  );
};

export default NotFoundComponent;
