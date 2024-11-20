import { Navbar } from "./Navbar"
import Brand from "./Brand"
import SocialLinks from "./SocialLinks"

const Header = () => {
  return (
    <header className="grid grid-flow-row grid-cols-3 w-full bg-gray-800 px-5 py-3 shadow-md" aria-label="Header">
      <Brand />
      <Navbar />
      <SocialLinks />
    </header>
  )
}

export default Header