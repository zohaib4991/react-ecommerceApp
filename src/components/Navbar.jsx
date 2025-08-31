import Logo from "../assets/images/logo.svg";
import cart from "../assets/images/shopping-cart.png";
import user from "../assets/images/user.png";
import search from "../assets/images/search.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import NavLinks from "./NavLinks";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.cartIitems);
  const cartCount = cartItems.reduce(
    (total, prod) => total + prod.quantity,
    0
  );

  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const searchRef = useRef(null);
  const searchButtonRef = useRef(null);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  // Close menu on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target) &&
        searchButtonRef.current &&
        !searchButtonRef.current.contains(event.target)
      ) {
        setShowMobileSearch(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="w-full px-6 md:px-12 py-2 flex items-center justify-between bg-white shadow-sm relative">
      {/* Left - Logo & Hamburger */}
      <div className="flex items-center gap-4">
        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block md:hidden text-gray-800 focus:outline-none"
        >
          {isOpen ? (
            <FaTimes className="w-6 h-6" />
          ) : (
            <FaBars className="w-6 h-6" />
          )}
        </button>

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={Logo} alt="Logo" className="w-32 h-16 object-cover" />
        </Link>
      </div>

      {/* Center - Desktop Links */}
      <div className="hidden md:flex items-center gap-8 font-medium text-base font-montserrat">
        <NavLinks />
      </div>

      {/* Right - Search & Icons */}
      <div className="flex items-center gap-4">
        {/* Search bar for desktop */}
        <div className="hidden lg:block w-64">
          <SearchBar />
        </div>

        {/* Mobile search icon */}
        <button
          ref={searchButtonRef}
          className="block lg:hidden"
          onClick={() => setShowMobileSearch((prev) => !prev)}
        >
          <img src={search} className="w-5 h-5 opacity-70" alt="search_icon" />
        </button>

        {/* Icons */}
        <div className="flex items-center gap-4">
          {/* Optional mobile search icon */}

          <Link to="/cart" className="flex items-end">
            <img src={cart} alt="Cart" className="w-6 h-6" />
            {cartCount > 0 && (
              <span className="bg-red-500 text-white text-xs font-bold w-4 h-4 flex items-center justify-center rounded-full animate-bounce shadow-lg">
                {cartCount}
              </span>
            )}
          </Link>
          <Link to="/aboutus">
            <img src={user} alt="User" className="w-6 h-6" />
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-20 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        ref={navRef}
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-30 transform transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="pt-20 px-6 flex flex-col gap-6 text-lg font-montserrat">
          <NavLinks isMobile={true} onLinkClick={() => setIsOpen(false)} />
        </div>
      </div>

      {/* Mobile Search Dropdown */}
      <div
        ref={searchRef}
        className={`lg:hidden overflow-hidden absolute top-20 z-10 mx-20 w-56  transition-all duration-300 ease-in-out ${
          showMobileSearch ? "max-h-20 mt-2" : "max-h-0"
        }`}
      >
        <SearchBar className="w-full bg-white" />
      </div>
    </nav>
  );
};

export default Navbar;
