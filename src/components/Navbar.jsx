import logo from "../assets/sathviklogo.png";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-20" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/sathvikmalkam/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-800"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Nolexx07"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-700"
        >
          <FaGithub />
        </a>
        <a
          href="https://x.com/SathvikMalkam"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-700"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.instagram.com/nolexx_07?igsh=eW5pdWx0ZGttN21z"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-700"
        >
          <FaInstagram />  
        </a>
        <a 
          href="https://m.facebook.com/profile.php?id=100014153205700"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-700"
        >
          <FaFacebookF />
        </a>  
      </div>
    </nav>
  );
};

export default Navbar;
