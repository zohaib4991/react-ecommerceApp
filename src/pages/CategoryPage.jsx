import { useState } from "react";
import { FaFilter } from "react-icons/fa";
import { useParams, useLocation } from "react-router-dom";
import { useGetProductsQuery } from "../features/products/productsSlice";
import ProductCard from "../features/products/ProductCard";
import Filter from "../components/Filter";
import Breadcrumb from "../components/Breadcrumb";
import Spinners from "../components/Spinners";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const CategoryPage = () => {
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const query = useQuery();
  const searchTerm = query.get("q")?.toLowerCase() || "";
  const { CategoryName } = useParams();
  const formatedCategory =
    CategoryName.charAt(0).toUpperCase() + CategoryName.slice(1);
  const [priceRange, setpriceRange] = useState([0, 1000]);
  const {
    data: product,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetProductsQuery();
  let content = "";

  if (isLoading) {
    content = (
      <div className="flex  md:ml-64 absolute items-center justify-center">
        <Spinners />
      </div>
    );
  } else if (isSuccess) {
    if (formatedCategory === "TOP SELLING") {
      const topSelling = product.filter((prod) => prod.rating.rate > 4.6);
      const listOfPorducts = topSelling.filter(
        (prod) => prod.price >= priceRange[0] && prod.price <= priceRange[1]
      );
      content = listOfPorducts.map((prod) => {
        return <ProductCard key={prod.id} product={prod} />;
      });
    } else if (formatedCategory === "NEW ARRIVALS") {
      const newArrival = product.slice(0, 4);
      const listOfPorducts = newArrival.filter(
        (prod) => prod.price >= priceRange[0] && prod.price <= priceRange[1]
      );
      content = listOfPorducts.map((prod) => {
        return <ProductCard key={prod.id} product={prod} />;
      });
    } else if (searchTerm) {
      const searchedProducts = product.filter((prod) => 
        prod.title.toLowerCase().includes(searchTerm)
      );
      content = searchedProducts.length > 0 ? searchedProducts.map((prod) => {
        return <ProductCard key={prod.id} product={prod} /> 
      }) : 'no product found!'
    } else {
      const productByCategory = product.filter(
        (prod) => prod.category == CategoryName
      );
      const listOfPorducts = productByCategory.filter(
        (prod) => (prod.price >= priceRange[0]) & (prod.price <= priceRange[1])
      );
      content = listOfPorducts.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      });
    }
  } else if (isError) {
    content = <p>Error: {error.message}</p>;
  }

  return (
    <section className="md:px-16 px-2 justify-center items-center py-10 font-satoshi">
      {/* Mobile Filter Overlay */}
      {showMobileFilters && (
        <Filter 
          showMobileFilters={showMobileFilters}
          setShowMobileFilters={setShowMobileFilters}
          priceRange={priceRange}
          setpriceRange={setpriceRange}
        />
      )}
      <div>
        <Breadcrumb />
      </div>
      <div className="mt-7 w-full gap-3  flex">
        {/* Filters */}
        <div className="hidden p-5 sm:flex flex-col gap-8 border rounded-3xl w-1/4 h-full">
          <Filter
            showMobileFilters={showMobileFilters}
            setShowMobileFilters={setShowMobileFilters}
            priceRange={priceRange}
            setpriceRange={setpriceRange}
          />
        </div>
        {/* Products by Category */}
        <div className="md:p-3 mx-auto  p-1 w-full  sm:w-3/4 h-auto">
          <div className="flex justify-between  items-center">
            <h3 className="font-satoshi text-2xl font-bold mb-3">
              {formatedCategory}
            </h3>
            <a
              href="#"
              className="sm:hidden"
              onClick={(e) => {
                e.preventDefault();
                setShowMobileFilters(true);
              }}
            >
              <FaFilter />
            </a>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">{content}</div>
        </div>
      </div>
    </section>
  );
};

export default CategoryPage;
