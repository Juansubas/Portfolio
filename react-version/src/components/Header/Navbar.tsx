export const Navbar = () => {
  return (
    <nav>
      <ul className="flex justify-center gap-2">
        <li>
          <a href="#projects" className="hover:text-slate-500">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-slate-500">
            Contact
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-slate-500">
            About
          </a>
        </li>
      </ul>
    </nav>
  );
};
