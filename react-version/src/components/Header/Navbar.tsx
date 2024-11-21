export const Navbar = () => {
  return (
    <nav>
      <ul className="flex flex-col  md:flex-row  justify-center items-center gap-0 md:gap-2 bg-[rgba(0,0,0,0.5)] backdrop-blur-md shadow-md">
        <li className="flex justify-center border md:border-none w-full md:w-auto">
          <a href="#projects" className="text-xl hover:text-slate-500">
            Projects
          </a>
        </li>
        <li className="flex justify-center border md:border-none w-full md:w-auto">
          <a href="#contact" className="text-xl hover:text-slate-500">
            Contact
          </a>
        </li>
        <li className="flex justify-center border md:border-none w-full md:w-auto">
          <a href="#about" className="text-xl hover:text-slate-500">
            About
          </a>
        </li>
      </ul>
    </nav>
  );
};
