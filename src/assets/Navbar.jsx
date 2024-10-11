import { useContext, useEffect, useRef, useState } from "react";
import { FaHome, FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Handle clicks outside of dropdown or mobile menu
  useEffect(() => {
    function handleClickOutside(event) {
      // Check if dropdownRef and mobileMenuRef are not null and if the click was outside both
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        c;
        setDropdownOpen(false);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setMobileMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef, mobileMenuRef, dropdownOpen, mobileMenuOpen]);

  return (
    <nav className="bg-gradient-to-r from-indigo-700 to-yellow-500 w-full fixed top-0 z-50">
      <div className="mx-auto max-w-7xl px-2 sm:px-7 lg:px-7">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}

            {mobileMenuOpen ? (
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            ) : (
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={mobileMenuOpen}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="h-6 w-6"
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
              </button>
            )}
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
            <div className="flex  items-center">
              <img
                src="/iskcon_logo.jpg"
                alt="logo"
                className="w-10 h-10 rounded mr-3"
              />
              <h3 className="text-white font-semibold text-nowrap text-xl">
                ISKCON YANAM STORES
              </h3>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <>
                  <Link
                    to="/"
                    className=" flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white"
                    aria-current="page"
                  >
                    <FaHome />
                    Home
                  </Link>
                  <Link
                    to="/cart"
                    className=" flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white"
                  >
                    <FaCartShopping />
                    Cart
                  </Link>
                  <Link
                    to="/search"
                    className=" flex items-center gap-1  rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white"
                  >
                    <FaSearch />
                    Search
                  </Link>
                </>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <>
                  <Link
                    to="/contact"
                    className=" flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-white text-nowrap"
                  >
                    <MdEmail />
                    Contact Us
                  </Link>
                </>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {mobileMenuOpen && (
        <div className="sm:hidden" id="mobile-menu" ref={mobileMenuRef}>
          <div className="space-y-1 px-2 pb-3 pt-2">
            <Link
              to="/"
              className="flex items-center gap-1 rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700 hover:text-white"
              aria-current="page"
            >
             <FaHome/> Home
            </Link>
            <Link
              to="/cart"
              className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700 hover:text-white"
            >
              Cart
            </Link>

            <Link
              to="/contact"
              className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700 hover:text-white "
            >
              Contact Us
            </Link>

            <Link
              to="/search"
              className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700 hover:text-white "
            >
              Search
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
