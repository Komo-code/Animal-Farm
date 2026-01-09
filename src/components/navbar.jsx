import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-green-600 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo / Brand */}
        <h1 className="text-xl font-bold tracking-wide">
          Komo<span className="text-yellow-300">App</span>
        </h1>

        {/* Links */}
        <ul className="flex gap-6 text-sm font-medium">
          <li>
            <Link to="/" className="hover:text-yellow-300 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-yellow-300 transition">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-yellow-300 transition">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
