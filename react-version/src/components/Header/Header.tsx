import { Navbar } from "./Navbar"
import Brand from "./Brand"
import SocialLinks from "./SocialLinks"

const Header = () => {
  return (
    <header className="grid grid-flow-row grid-cols-3 w-full bg-transparent px-5 pt-10 shadow-md" aria-label="Header">
      <Brand />
      <Navbar />
      <SocialLinks />
    </header>
  )
}

export default Header