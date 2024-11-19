import { Navbar } from "./Navbar"

const Header = () => {
  return (
    <header className="flex flex-row justify-between w-full bg-gray-800 px-5 py-3 shadow-md" aria-label="Header">
      <h1>Juansubas</h1>
      <Navbar />
    </header>
  )
}

export default Header