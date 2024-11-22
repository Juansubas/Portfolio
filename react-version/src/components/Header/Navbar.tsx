export const Navbar = () => {
  return (
    <nav>
      <ul className="flex flex-col  md:flex-row  justify-center items-center gap-0 md:gap-2 bg-[rgba(0,0,0,0.5)] backdrop-blur-md shadow-md md:bg-transparent md:backdrop-blur-none md:shadow-none">
        <li className="flex justify-center border md:border-none w-full md:w-auto">
          <a href="#projects" className="text-xl hover:text-slate-500 hover:scale-110 transition-all">
            Projects
          </a>
        </li>
        <li className="flex justify-center border md:border-none w-full md:w-auto">
          <a href="#contact" className="text-xl hover:text-slate-500 hover:scale-110 transition-all">
            Contact
          </a>
        </li>
        <li className="flex justify-center border md:border-none w-full md:w-auto">
          <a href="#about" className="text-xl hover:text-slate-500 hover:scale-110 transition-all">
            About
          </a>
        </li>
      </ul>
    </nav>
  );
};
