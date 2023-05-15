import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b-[#c1c1c1]">
      <Link to="/" className="flex items-center">
        <img src="src\assets\logo.svg" alt="" className="w-12 object-contain" />
        <h1 className="font-semibold text-4xl text-sky-400 ml-2">CreativAI</h1>
      </Link>
      <Link
        to="/create-post"
        className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
      >
        Create
      </Link>
    </header>
  );
};

export default Header;
