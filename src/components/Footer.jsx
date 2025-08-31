import React from "react";
import Logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative  bg-[#f0f0f0] text-black mt-48">
      {/* Newsletter Section */}
      <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-[90%] max-w-5xl bg-black text-white rounded-2xl p-8 flex flex-col items-center shadow-lg z-10">
        <h2 className="text-2xl md:text-3xl font-extrabold font-montserrat text-center mb-6">
          STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full max-w-lg">
          <div className="relative w-full">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full rounded-full py-3 pl-10 pr-4 text-black font-satoshi"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              📧
            </span>
          </div>
          <button className="font-satoshi bg-white text-black font-semibold px-6 py-3 rounded-full whitespace-nowrap w-full md:w-auto">
            Subscribe to Newsletter
          </button>
        </div>
      </div>

      {/* Footer Content */}
      <div className="font-satoshi pt-40 pb-12 px-6 md:px-20 grid grid-cols-2 md:grid-cols-5 gap-10">
        {/* Shop Logo and Description */}
        <div className="md:mt-2 mt-14  md:col-span-1 col-span-2 space-y-3">
          <Link to={'/cart'} >
            <img src={Logo} alt="Logo" className="mt-[-24px] ml-[-25px] w-32 h-16 object-cover" />
          </Link>
          <p className="text-sm text-gray-600">
            We have clothes that suit your style and which you’re proud to wear.
            From women to men.
          </p>
          <div className="flex space-x-4 text-xl text-black">
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Footer Columns */}
        <div>
          <h3 className="font-bold mb-4">COMPANY</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Works</a>
            </li>
            <li>
              <a href="#">Career</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">HELP</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>
              <a href="#">Customer Support</a>
            </li>
            <li>
              <a href="#">Delivery Details</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">FAQ</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>
              <a href="#">Account</a>
            </li>
            <li>
              <a href="#">Manage Deliveries</a>
            </li>
            <li>
              <a href="#">Orders</a>
            </li>
            <li>
              <a href="#">Payments</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">RESOURCES</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>
              <a href="#">Free eBooks</a>
            </li>
            <li>
              <a href="#">Development Tutorial</a>
            </li>
            <li>
              <a href="#">How to - Blog</a>
            </li>
            <li>
              <a href="#">Youtube Playlist</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
