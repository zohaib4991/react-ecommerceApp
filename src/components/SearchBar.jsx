// components/SearchBar.jsx
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import search from "../assets/images/search.png";

const SearchBar = ({ className }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState(
    new URLSearchParams(location.search).get("q") || ""
  );

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    navigate(`/category/search?q=${encodeURIComponent(value)}`);
  };

  return (
    <div className={`flex items-center bg-gray-100 rounded-full px-4 py-2 w-full ${className}`}>
      <img src={search} alt="Search" className="w-4 h-4 opacity-60" />
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="bg-transparent ml-2 outline-none text-sm w-full"
      />
    </div>
  );
};

export default SearchBar;
