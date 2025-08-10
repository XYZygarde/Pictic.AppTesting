import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/navbar.css';
import '../assets/font-fam.css';


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav>
      <div className="container w-screen max-w-none top-0  mx-auto flex justify-between items-center fixed left-0 right-0 z-50 px-6 py-4 md:px-8 md:py-6 width-full md:bg-white md:shadow-lg">
        <Link to="/" className="text-black text-5xl font-bold font-rg md:text-4xl hover:text-[#8B4513] transition duration-300">
          Pictic
        </Link>


        <div className="md:hidden py-4 mr-4 ">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none focus:text-black "
            aria-label="Toggle navigation"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                // Close icon (X)
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                // Hamburger icon
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>


        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-black hover:text-[#8B4513] transition duration-300 px-3 py-2 text-bs font-medium font-ar">
            Home
          </Link>
          <Link to="/About" className="text-black hover:text-[#8B4513] transition duration-300 px-3 py-2 text-bs font-medium font-ar">
            About
          </Link>
          <Link to="/Guide" className="text-black hover:text-[#8B4513] transition duration-300 px-3 py-2 text-bs font-medium font-ar">
            Guide
          </Link>
          <Link to="/Contact" className="text-black hover:text-[#8B4513] transition duration-300 px-3 py-2 text-bs font-medium font-ar">
            Contact
          </Link>
        </div>
      </div>


      {isOpen && (
        <div className="md:hidden rounded-md shadow-lg bg-white fixed left-0 right-0 z-45 rounded-none top-0 overflow-hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 mt-25">
            <Link
              to="/"
              className="block text-black hover:underline underline-offset-1 px-3 py-2 rounded-md text-base font-medium font-ar"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/About"
              className="block text-black hover:underline underline-offset-1 px-3 py-2 rounded-md text-base font-medium font-ar"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/Guide"
              className="block text-black hover:underline underline-offset-1 px-3 py-2 rounded-md text-base font-medium font-ar"
              onClick={() => setIsOpen(false)}
            >
              Guide
            </Link>
            <Link
              to="/Contact"
              className="block text-black hover:underline underline-offset-1 px-3 py-2 rounded-md text-base font-medium font-ar"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>

  );
}

export default Navbar;
