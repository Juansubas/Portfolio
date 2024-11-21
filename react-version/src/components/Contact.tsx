import { FaEnvelope, FaGithub, FaLinkedin, FaGitlab } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 mt-4">
      <div className="flex items-center space-x-3">
        <FaEnvelope className="text-blue-900 text-3xl" />
        <p className="text-lg">juansubas@example.com</p>
      </div>
      <div className="flex items-center space-x-3">
        <FaGithub className="text-blue-900 text-3xl" />
        <a
          href="https://github.com/juansubas"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg hover:underline"
        >
          GitHub
        </a>
      </div>
      <div className="flex items-center space-x-3">
        <FaGitlab className="text-blue-900 text-3xl" />
        <a
          href="https://gitlab.com/juansubas"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg hover:underline"
        >
          GitLab
        </a>
      </div>
      <div className="flex items-center space-x-3">
        <FaLinkedin className="text-blue-900 text-3xl" />
        <a
          href="https://linkedin.com/in/juansubas"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg hover:underline"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default Contact;
