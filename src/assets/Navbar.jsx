import React, { useState, useEffect, useRef } from "react";
import { FaHome, FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null); // Create a ref for the menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close the menu if clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false); // Close menu
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav ref={menuRef} className="bg-gradient-to-r from-violet-800 to-yellow-600 w-full fixed top-0 z-50">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={menuOpen}
                onClick={toggleMenu}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                {menuOpen ? (
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-between">
              <Link to="/" className="flex flex-shrink-0 items-center">
                <img
                  className="w-10 h-10 rounded mr-3"
                  src="/iskcon_logo.jpg"
                  alt="Iskcon_logo"
                />
                <h3 className="text-white font-semibold text-nowrap text-xl">
                  ISKCON YANAM STORES
                </h3>
              </Link>
              <div className="hidden md:ml-6 md:block">
                <div className="flex space-x-4">
                  <Link
                    to="/"
                    className=" flex items-center gap-2 rounded-md px-3 py-2 text-md font-medium text-white hover:bg-gray-700 hover:text-white"
                    aria-current="page"
                  >
                    <FaHome />
                    Home
                  </Link>
                  <Link
                    to="/cart"
                    className=" flex items-center gap-2 rounded-md px-3 py-2 text-md font-medium text-white hover:bg-gray-700 hover:text-white"
                  >
                    <FaCartShopping />
                    Cart
                  </Link>
                  <Link
                    to="/search"
                    className=" flex items-center gap-2  rounded-md px-3 py-2 text-md font-medium text-white hover:bg-gray-700 hover:text-white"
                  >
                    <FaSearch />
                    Search
                  </Link>
                </div>
              </div>
              <div className="hidden md:ml-6 md:block">
                <div className="flex space-x-4">
                  <Link
                    to="/contact"
                    className=" flex items-center gap-2 rounded-md px-3 py-2 text-md font-medium text-white hover:bg-gray-700 hover:text-white text-nowrap"
                  >
                    <MdEmail />
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${menuOpen ? "block" : "hidden"}`} id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <Link
              to="/"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700 hover:text-white"
              aria-current="page"
            >
              <FaHome /> Home
            </Link>
            <Link
              to="/cart"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700 hover:text-white"
            >
              <FaCartShopping /> Cart
            </Link>
            <Link
              to="/search"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700 hover:text-white "
            >
              <FaSearch /> Search
            </Link>
            <Link
              to="/contact"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700 hover:text-white "
            >
              <MdEmail /> Contact Us
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
