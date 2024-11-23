import {
  FaYoutube,
  FaLinkedin,
  FaSquareGitlab,
  FaGithub,
} from "react-icons/fa6";

const SocialLinks = () => {
  return (
    <nav>
      <ul className="flex justify-center gap-4">
        <li>
          <a href="https://www.youtube.com/Juansubas" target="_blank">
            <FaYoutube size={30} className="hover:text-slate-500 hover:scale-110 transition-all"/>
          </a>
        </li>
        <li>
          <a href="https://www.github.com/juansubas" target="_blank">
            <FaGithub size={30} className="hover:text-slate-500 hover:scale-110 transition-all"/>
          </a>
        </li>
        <li>
          <a href="https://www.gitlab.com/Juansubas" target="_blank">
            <FaSquareGitlab size={30} className="hover:text-slate-500 hover:scale-110 transition-all"/>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/juansubass/" target="_blank">
            <FaLinkedin size={30} className="hover:text-slate-500 hover:scale-110 transition-all"/>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SocialLinks;
