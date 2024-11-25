import { useLocation, useNavigate } from "react-router-dom";

export const Navbar = () => {

  const navigate = useNavigate();
  const location = useLocation()

  const navigateToSection = async (sectionId: string) => {
    // Si no estamos en la página principal, navegamos a ella primero
    if (location.pathname !== '/') {
      //esperamos que el navigate llegue a la page principal
      await navigate('/', { state: { scrollTo: sectionId } });
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Si ya estamos en home, solo hacemos scroll
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav>
      <ul className="flex flex-col  md:flex-row  justify-center items-center gap-0 md:gap-2 bg-[rgba(0,0,0,0.5)] backdrop-blur-md shadow-md md:bg-transparent md:backdrop-blur-none md:shadow-none">
        <li className="flex justify-center border md:border-none w-full md:w-auto">
          <button
            onClick={() => navigateToSection('projects')}
            aria-label="go home"
            className="text-xl hover:text-slate-500 hover:scale-110 transition-all"
          >
            Project
          </button>
        </li>
        <li className="flex justify-center border md:border-none w-full md:w-auto">
        <button
            onClick={() => navigateToSection('contact')}
            aria-label="go home"
            className="text-xl hover:text-slate-500 hover:scale-110 transition-all"
          >
            Contact
          </button>
        </li>
        <li className="flex justify-center border md:border-none w-full md:w-auto">
        <button
            onClick={() => navigateToSection('About')}
            aria-label="go home"
            className="text-xl hover:text-slate-500 hover:scale-110 transition-all"
          >
            About
          </button>
        </li>
      </ul>
    </nav>
  );
};
