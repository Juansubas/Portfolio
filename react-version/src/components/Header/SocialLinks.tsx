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
            <FaYoutube size={25} className="hover:text-slate-950"/>
          </a>
        </li>
        <li>
          <a href="https://github.com/juansubas" target="_blank">
            <FaGithub size={25} className="hover:text-slate-950"/>
          </a>
        </li>
        <li>
          <a href="https://gitlab.com/Juansubas" target="_blank">
            <FaSquareGitlab size={25} className="hover:text-slate-950"/>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/juansubass/" target="_blank">
            <FaLinkedin size={25} className="hover:text-slate-950"/>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SocialLinks;
