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
    <header className=" w-full" aria-label="Header">
      <div className="hidden md:grid grid-cols-3  w-full bg-transparent pt-6 shadow-md">
        <Brand />
        <Navbar />
        <SocialLinks />
      </div>

      <div className="md:hidden grid grid-cols-[95%,05%] items-center w-full bg-transparent pt-6 shadow-md">
        <Brand />
        {!isOpen ? (
          <GiHamburgerMenu onClick={menuOpen} size={30} />
        ) : (
          <MdClose onClick={menuOpen} size={30} />
        )}
      </div>
    </header>
  );
};

export default Header;
