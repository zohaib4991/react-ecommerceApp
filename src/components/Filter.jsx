import { FaTimes, FaFilter } from "react-icons/fa";
import { Link } from "react-router-dom";
import greaterThanArrow from "../assets/icons/greaterThan.png";
import PriceFilter from "../components/PriceFilter";

const Filter = ({
  showMobileFilters,
  setShowMobileFilters,
  priceRange,
  setpriceRange,
}) => {
  return (
    <div>
      {showMobileFilters ? (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 sm:hidden"
          onClick={() => setShowMobileFilters(false)}
        >
          <div
            className="fixed top-16 right-0 w-3/4 rounded-3xl h-full bg-white shadow-lg z-50 transform transition-transform duration-300 translate-x-0"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            <div className="p-5 flex flex-col gap-8">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Filters</h3>
                <button onClick={() => setShowMobileFilters(false)}>
                  {showMobileFilters ? <FaTimes /> : <FaFilter />}
                </button>
              </div>

              <div className="border rounded-full"></div>

              {/* Categories */}
              <div className="space-y-4">
                <Link
                  to="/category/electronics"
                  className="flex justify-between items-center"
                >
                  <p>Electronic</p>
                  <img className="w-5 h-5" src={greaterThanArrow} alt="" />
                </Link>
                <Link
                  to={`/category/men's clothing`}
                  className="flex justify-between items-center"
                >
                  <p>Men's Fashion</p>
                  <img className="w-5 h-5" src={greaterThanArrow} alt="" />
                </Link>
                <Link
                  to={`/category/women's clothing`}
                  className="flex justify-between items-center"
                >
                  <p>Ladies Fashion</p>
                  <img className="w-5 h-5" src={greaterThanArrow} alt="" />
                </Link>
                <Link
                  to="/category/jewelery"
                  className="flex justify-between items-center"
                >
                  <p>Jewelry</p>
                  <img className="w-5 h-5" src={greaterThanArrow} alt="" />
                </Link>
              </div>

              <PriceFilter values={priceRange} setValues={setpriceRange} />
            </div>
          </div>
        </div>
      ) : (
        <div className="p-5 sm:flex flex-col gap-8">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Filters</h3>
            <a href="#">
              {" "}
              <FaFilter />
            </a>
          </div>
          <div className="border rounded-full"></div>
          {/* Categories */}
          <div className="space-y-4">
            <Link
              to={"/category/electronics"}
              className="flex justify-between items-center"
            >
              <p>Electronic</p>
              <img className="w-5 h-5" src={greaterThanArrow} alt="" />
            </Link>
            <Link
              to={`/category/men's clothing`}
              className="flex justify-between items-center"
            >
              <p>Men's Fashion</p>
              <img className="w-5 h-5" src={greaterThanArrow} alt="" />
            </Link>
            <Link
              to={`/category/women's clothing`}
              className="flex justify-between items-center"
            >
              <p>Ladies Fashion</p>
              <img className="w-5 h-5" src={greaterThanArrow} alt="" />
            </Link>
            <Link
              to={"/category/jewelery"}
              className="flex justify-between items-center"
            >
              <p>Jewelry</p>
              <img className="w-5 h-5" src={greaterThanArrow} alt="" />
            </Link>
          </div>
          <div>
            <PriceFilter values={priceRange} setValues={setpriceRange} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
