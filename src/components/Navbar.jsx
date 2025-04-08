import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(prev => !prev)
  }

  return (
    <nav className="w-full px-5 md:px-0">
      <div className="max-w-4xl flex flex-wrap items-center justify-between mx-auto my-6">
        <Link to="/">
          <span className="self-center text-xl font-semibold whitespace-nowrap text-accentColor">
            NarahPfolio
          </span>
        </Link>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            onClick={handleToggle}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } items-center justify-between w-full md:flex md:w-auto md:order-1 fixedtop-0 start-0`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <Link to="/" className="block py-2 px-3 text-white rounded-sm md:bg-transparent md:p-0 hover:text-accentColor" >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 px-3 text-white rounded-sm md:bg-transparent md:p-0 hover:text-accentColor"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="block py-2 px-3 text-white rounded-sm md:bg-transparent md:p-0 hover:text-accentColor"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2 px-3 text-white rounded-sm md:bg-transparent md:p-0 hover:text-accentColor"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
