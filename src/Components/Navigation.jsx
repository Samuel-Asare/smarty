import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex justify-center items-center">
            <a className="text-[#05095D]  text-2xl font-bold ">smarty</a>
          </div>

          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex justify-center space-x-4">
              <a
                to="/"
                className="text-black  hover:text-[#05095D] px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </a>
              <a
                to="/about"
                className="text-black hover:text-[#05095D]  px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </a>
              {/* Add more as as needed */}
            </div>
          </div>

          <div className="flex items-center">
            <a
              to="/signup"
              className="text-gray-300 bg-[#05095D] hover:text-white px-3 py-2 rounded-3xl text-sm font-medium hidden md:block"
            >
              Sign Up
            </a>
            <a
              to="/signin"
              className="text-[#05095D] px-3 py-2 rounded-md text-sm font-medium hidden md:block"
            >
              Sign In
            </a>

            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-[#05095D] focus:outline-none   md:hidden"
            >
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            to="/"
            className="text-black hover:bg-[#05095D] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </a>
          <a
            to="/about"
            className="text-black hover:bg-[#05095D] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </a>
          {/* Add more as as needed */}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
