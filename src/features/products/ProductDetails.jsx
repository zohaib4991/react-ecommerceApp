import { useState, useEffect } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import { Link, useParams } from "react-router-dom";
import { useGetProductsQuery } from "./productsSlice";
import star_1 from "../../assets/icons/Star 1.png";
import { FaCheck, FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../cart/cartSlice";
import ReviewCard from "../reviews/ReviewCard";
import ProductCard from "./ProductCard";
import RippleButton from "../../components/RippleButton";
import Spinners from "../../components/Spinners";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const [check, setCheck] = useState(0);
  const [btncheck, setbtncheck] = useState([false, false, false, false]);
  const btntext = ["Small", "Medium", "Large", "X-Large"];
  const [productCount, setproductCount] = useState(1);
  const [displayedReviews, setDisplayedReviews] = useState(6);
  const [totalReviews, setTotalReviews] = useState(0);
  const [mobileReviews, setmobileReviews] = useState(3);
  const [desktopReviews, setdesktopReviews] = useState(6);
  const [showPopup, setShowPopup] = useState(false);

  const handleBtnCheck = (index) => {
    const newChecked = [false, false, false, false];
    newChecked[index] = true;
    setbtncheck(newChecked);
  };

  // ✅ Responsive logic: 3 reviews on mobile, 6 on desktop
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const handleChange = (e) => {
      setDisplayedReviews(e.matches ? mobileReviews : desktopReviews);
    };

    handleChange(mediaQuery); // Initial check
    mediaQuery.addEventListener("change", handleChange);
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 2000);
      return () => clearTimeout(timer);
    }

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [mobileReviews, desktopReviews, showPopup]);

  

  // Reset count and selections whenever a new product is loaded
  useEffect(() => {
    setproductCount(1); // or 1 if you want default 1
    setCheck(0);
    setbtncheck([false, false, false, false]);
  }, [productId]);

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
      <div className="flex items-center justify-center">
        <Spinners />
      </div>
    );
  } else if (isSuccess) {
    const fetchedProduct = product.find((prod) => prod.id == productId);
    const handleAddToCart = () => {
      if (!fetchedProduct) return;
      const quantityToAdd = productCount > 0 ? productCount : 1;
      const item = {
        id: fetchedProduct.id,
        title: fetchedProduct.title,
        price: fetchedProduct.price,
        image: fetchedProduct.image,
        quantity: quantityToAdd,
      };
      dispatch(addToCart(item));
      toast.success(
        <div>
          Product Addded To{" "}
          <Link to={"/cart"} className="text-[#0ea5e9] underline">
            Cart
          </Link>
        </div>
      );
    };
    const productCategory = fetchedProduct.category;
    const productsByCategory = product.filter(
      (prod) => prod.category == productCategory && prod.id != fetchedProduct.id
    );
    if (!fetchedProduct) {
      content = <p>Product not Found!</p>;
    } else {
      const stars = Array.from(
        { length: fetchedProduct.rating.rate },
        (_, i) => (
          <img
            key={i}
            src={star_1}
            alt="star"
            className="w-6 h-6 inline-block"
          />
        )
      );
      content = (
        <div className="mt-4 h-auto">
          <div className="gap-4 w-full flex-col flex md:flex-row">
            <div className="md:w-[50%] w-full overflow-hidden ">
              <img
                src={fetchedProduct.image}
                className="w-full object-cover"
                alt="product_image"
              />
            </div>
            <div className="space-y-5 ml-2 md:w-[50%] h-auto w-full">
              <h1 className="text-4xl font-extrabold leading-tight font-montserrat">
                {fetchedProduct.title.toUpperCase()}
              </h1>
              <div className="flex items-center gap-2">
                {stars}
                <div className="font-satoshi ml-2 text-xl">
                  <span>{fetchedProduct.rating.rate}</span>
                  <span className="text-neutral-500">/5</span>
                </div>
              </div>

              <div className="flex gap-4 items-center font-satoshi ">
                <span className="sm:text-3xl text-xl font-bold text-black">
                  ${fetchedProduct.price}
                </span>
                <span className="text-neutral-400 font-bold line-through sm:text-3xl text-xl">
                  $540
                </span>
                <span className="bg-red-200 w-20 h-11 rounded-full flex justify-center items-center">
                  <p className="text-lg text-red-600 font-medium">
                    -{Math.round((fetchedProduct.price / 540) * 100)}%
                  </p>
                </span>
              </div>
              <p className="font-satoshi text-sm pr-12 text-neutral-500 leading-6 tracking-wider">
                {" "}
                {fetchedProduct.description}{" "}
              </p>

              <div>
                <h3 className="font-satoshi text-neutral-600 text-xl ">
                  Select Colors
                </h3>
                <div className="flex gap-4 mt-2">
                  <button
                    className="w-10 h-10 bg-slate-700 rounded-full items-center justify-center flex"
                    onClick={() => {
                      setCheck(1);
                    }}
                  >
                    {check == 1 && <FaCheck className="text-white" />}
                  </button>
                  <button
                    className="w-10 h-10 bg-teal-900 rounded-full items-center justify-center flex"
                    onClick={() => {
                      setCheck(2);
                    }}
                  >
                    {check == 2 && <FaCheck className="text-white" />}
                  </button>
                  <button
                    className="w-10 h-10 bg-stone-700 rounded-full items-center justify-center flex"
                    onClick={() => {
                      setCheck(3);
                    }}
                  >
                    {check == 3 && <FaCheck className="text-white" />}
                  </button>
                </div>
              </div>
              <div className="border"></div>
              <div>
                <h3 className="font-satoshi text-neutral-600 text-xl ">
                  Choose Size
                </h3>
                <div className="flex gap-4 mt-2 font-satoshi text-neutral-600">
                  {[0, 1, 2, 3].map((i) => (
                    <button
                      key={i}
                      className={`w-24 h-12  rounded-3xl items-center justify-center flex
                    ${btncheck[i] ? "bg-black text-white" : "bg-[#F0F0F0]"}`}
                      onClick={() => {
                        handleBtnCheck(i);
                      }}
                    >
                      {btntext[i]}
                    </button>
                  ))}
                </div>
              </div>
              <div className="border"></div>
              <div className="flex gap-2 font-satoshi px-2">
                <div className="flex w-[55%] md:w-2/5 rounded-3xl items-center justify-between px-4 h-12 bg-[#F0F0F0]">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      if (productCount > 0) {
                        setproductCount(productCount - 1);
                      }
                    }}
                  >
                    <FaMinus />
                  </button>
                  <p>{productCount}</p>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setproductCount(productCount + 1);
                    }}
                  >
                    <FaPlus />
                  </button>
                </div>
                <RippleButton
                  className="w-full h-12 bg-black rounded-3xl text-white transition-all duration-300 hover:bg-gray-800 hover:scale-[1.02]"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </RippleButton>
              </div>
            </div>
          </div>
          <div className="mt-20 font-satoshi">
            <div className="flex flex-col gap-2  items-center">
              <h3 className="text-black text-2xl font-medium">
                Rating & Reviews
              </h3>
              <div className="border w-full"></div>
            </div>

            <div className="mt-6">
              <div className="mb-3 flex items-center gap-1">
                <p className="text-black text-2xl font-semibold">All Reviews</p>
                <span className="mt-2">({totalReviews})</span>
              </div>
              <div className="flex flex-col gap-4">
                <ReviewCard
                  noScroll={true}
                  onTotalReviews={setTotalReviews}
                  displayedReviews={displayedReviews}
                />
                {showPopup && (
                  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white rounded-xl shadow-lg p-6 text-center max-w-sm">
                      <h3 className="text-xl font-semibold mb-2">
                        No More Reviews
                      </h3>
                      <p className="text-gray-600">
                        You’ve reached the end of the reviews.
                      </p>
                      <button
                        className="mt-4 px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800"
                        onClick={() => setShowPopup(false)}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                )}

                <button
                  className="w-fit self-center border border-gray-300 bg-white rounded-full 
             text-black px-6 py-2 font-medium transition-all duration-300 
             hover:bg-black hover:text-white hover:shadow-lg hover:scale-105"
                  onClick={(e) => {
                    e.preventDefault();

                    const newMobileCount = mobileReviews + 3;
                    const newDesktopCount = desktopReviews + 6;

                    // If next click exceeds total reviews, show popup
                    if (newDesktopCount >= totalReviews) {
                      setShowPopup(true);
                    }

                    // Increment counts
                    setmobileReviews(newMobileCount);
                    setdesktopReviews(newDesktopCount);
                  }}
                >
                  Load more Reviews
                </button>
              </div>
              <div className="flex-col flex justify-center items-center gap-7 mt-6">
                <h3 className="text-4xl font-extrabold tracking-wide leading-tight px-4 text-center font-montserrat text-black uppercase mb-4">
                  YOU MIGT ALSO LIKE
                </h3>
                <div className="w-full overflow-x-auto sm:overflow-x-visible">
                  <div className="flex flex-nowrap sm:flex-wrap sm:justify-center items-center mb-12 gap-6 sm:gap-16">
                    {productsByCategory.map((prod) => {
                      return <ProductCard key={prod.id} product={prod} />;
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  } else if (isError) {
    content = <p>Error: {error.message}</p>;
  }

  return (
    <section className="sm:px-16 px-3 py-8">
      <div>
        <Breadcrumb />
      </div>
      {content}
    </section>
  );
};

export default ProductDetails;
