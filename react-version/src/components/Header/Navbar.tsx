import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <ul className="flex justify-center gap-2">
        <li>
          <a href="#projects" className="hover:text-slate-950">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-slate-950">
            Contact
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-slate-950">
            About
          </a>
        </li>
      </ul>
    </nav>
  );
};
