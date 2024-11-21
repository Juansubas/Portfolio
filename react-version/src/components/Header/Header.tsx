import { Navbar } from "./Navbar";
import Brand from "./Brand";
import SocialLinks from "./SocialLinks";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full fixed top-0 left-0 z-50" aria-label="Header">
      <div className="hidden md:grid grid-cols-3 w-full bg-[rgba(0,0,0,0.5)] backdrop-blur-md py-3 shadow-md">
        <Brand />
        <Navbar />
        <SocialLinks />
      </div>

      <div className="md:hidden px-10 flex flex-row justify-between items-center w-full bg-[rgba(0,0,0,0.5)] backdrop-blur-md py-3 shadow-md">
        <Brand />
        {!isOpen ? (
          <GiHamburgerMenu onClick={menuOpen} size={30} />
        ) : (
          <MdClose onClick={menuOpen} size={30} />
        )}
      </div>

      <div className="fixed md:hidden mt-0 md:mt-14 w-full">{isOpen && <Navbar />}</div>
    </header>
  );
};

export default Header;
