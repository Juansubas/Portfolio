const Footer = () => {
  return (
    <footer className="flex flex-col sm:flex-row justify-center items-center py-3 px-3 bg-transparent backdrop-blur-md shadow-lg mt-6 rounded-lg w-full">
      <div className="text-center text-white">
        <p className="text-lg sm:text-xl font-medium">
          Made with ❤️ by{" "}
          <span className="font-bold text-blue-300 hover:text-blue-800 transition duration-300">
            Juansubas
          </span>
        </p>
        <p className="text-sm text-gray-400 mt-2">
          Powered by code, coffee, and a little bit of magic
        </p>
        <p className="text-xs text-gray-500 mt-2">
          &copy; {new Date().getFullYear()} Juansubas. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
