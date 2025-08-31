import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import arrow from "../assets/images/arrow.png";

const NavLinks = ({ isMobile = false, onLinkClick }) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropDown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* Shop Dropdown */}
      <div className="relative" ref={dropdownRef}>
        <button
          className={`flex items-center gap-1 hover:text-gray-600 transition font-medium ${
            isMobile ? "text-lg w-full justify-between" : ""
          }`}
          onClick={() => setShowDropDown(!showDropDown)}
        >
          Shop
          <img
            src={arrow}
            alt="Arrow"
            className={`transition-transform duration-300 ${
              showDropDown ? "rotate-180" : ""
            }`}
          />
        </button>

        {showDropDown && (
          <div
            className={`${
              isMobile
                ? "mt-2 flex flex-col gap-2 pl-4"
                : "absolute flex flex-col top-full mt-2 w-48 bg-white shadow-lg rounded-lg z-50 animate-dropdown origin-top"
            }`}
          >
            <Link
              to={`/category/men's clothing`}
              className="px-4 py-2 hover:bg-gray-100"
              onClick={onLinkClick}
            >
              Men's Fashion
            </Link>
            <Link
              to={`/category/women's clothing`}
              className="px-4 py-2 hover:bg-gray-100"
              onClick={onLinkClick}
            >
              Women's Fashion
            </Link>
            <Link
              to="/category/jewelery"
              className="px-4 py-2 hover:bg-gray-100"
              onClick={onLinkClick}
            >
              Jewelry
            </Link>
            <Link
              to="/category/electronics"
              className="px-4 py-2 hover:bg-gray-100"
              onClick={onLinkClick}
            >
              Electronics
            </Link>
          </div>
        )}
      </div>

      {/* Static Links */}
      <Link
        to="/category/NEW ARRIVALS"
        className="hover:text-gray-600 transition"
        onClick={onLinkClick}
      >
        New Arrival
      </Link>
      <Link
        to="/aboutus"
        className="hover:text-gray-600 transition"
        onClick={onLinkClick}
      >
        About
      </Link>
    </>
  );
};

export default NavLinks;
