import ProductCard from "../features/products/ProductCard";
import { useGetProductsQuery } from "../features/products/productsSlice";
import womenFashion from "../assets/images/women.jpg";
import menFashion from "../assets/images/men.jpg";
import electronic from "../assets/images/electronics.jpg";
import jewelry from "../assets/images/jewelry.jpg";
import ReviewCard from "../features/reviews/ReviewCard";
import Spinners from "./Spinners";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import MotionWrapper from "./MotionWrapper";

const ProductList = () => {
  const {
    data: products,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetProductsQuery();

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  let newArrival;
  let topSelling;
  if (isLoading) {
    newArrival = (
      <div className="flex items-center mx-auto justify-center">
        <Spinners />
      </div>
    );
    topSelling = (
      <div className="flex items-center mx-auto justify-center">
        <Spinners />
      </div>
    );
  } else if (isSuccess) {
    const firstFour = products.slice(0, 4);
    const topRated = products.filter((prod) => prod.rating.rate > 4.6);
    newArrival = firstFour.map((product) => {
      return <ProductCard key={product.id} product={product} />;
    });
    topSelling = topRated.map((product) => {
      return <ProductCard key={product.id} product={product} />;
    });
  } else if (isError) {
    newArrival = <p>{error}</p>;
  }

  return (
    <section className="px-4 sm:px-6 md:px-8 lg:px-16 flex flex-col justify-center">
      {/* New Arrival */}
      <MotionWrapper>
        <div className="flex flex-col items-center justify-center ">
          <div className="my-16">
            <motion.h2
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="font-montserrat font-extrabold text-5xl leading-tight"
            >
              NEW ARRIVALS
            </motion.h2>
          </div>
          <div className="w-full overflow-x-auto sm:overflow-x-visible">
            <div className="flex flex-nowrap sm:flex-wrap sm:justify-center items-center mb-12 gap-6 sm:gap-16">
              {newArrival}
            </div>
          </div>
          <div className="mt-4 w-full flex flex-col items-center justify-center">
            <Link
              to={"/category/NEW ARRIVALS"}
              className="w-full sm:w-auto px-16 py-3 font-satoshi rounded-full border border-gray-400 text-black text-xl transition-all duration-300 hover:bg-black hover:text-white hover:border-black"
            >
              View All
            </Link>
            <hr className="w-full sm:w-2/3 border-t-2 border-gray-300 my-16" />
          </div>
        </div>
      </MotionWrapper>

      {/* Top Selling */}
      <MotionWrapper>
        <div className="flex flex-col items-center justify-center">
          <div className=" mb-16">
            <motion.h2
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="font-montserrat font-extrabold text-5xl leading-tight"
            >
              TOP SELLING
            </motion.h2>
          </div>
          <div className="w-full overflow-x-auto sm:overflow-x-visible">
            <div className=" flex flex-nowrap sm:flex-wrap sm:justify-center items-center mb-12 gap-6 sm:gap-16">
              {topSelling}
            </div>
          </div>
          <div className="mt-4  w-full flex flex-col items-center justify-center">
            <Link
              to={"/category/TOP SELLING"}
              className="mb-8 w-full sm:w-auto px-16 py-3 font-satoshi rounded-full border border-gray-400 text-black text-xl transition-all duration-300 hover:bg-black hover:text-white hover:border-black"
            >
              View All
            </Link>
          </div>
        </div>
      </MotionWrapper>
      {/* Categories */}

      <div className="flex flex-col lg:w-full rounded-[3rem] xl w-full md:w-[70%] mx-auto gap-12 my-16 justify-center items-center bg-zinc-100 ">
        <div className="md:my-20 my-8 px-12 w-full">
          <motion.h2
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            className="text-center font-montserrat font-extrabold text-4xl sm:text-5xl leading-tight"
          >
            BROWSE BY CATEGORY
          </motion.h2>
        </div>
        <div className="w-[90%] flex flex-wrap justify-between gap-4 mx-auto mb-16">
          <Link
            to={"/category/electronics"}
            className="bg-white rounded-3xl  w-full lg:w-[37%] h-[190px] md:h-[289px] bg-cover bg-left transition-transform group hover:cursor-pointer hover:scale-105 hover:shadow-xl duration-300 ease-in-out"
            style={{ backgroundImage: `url(${electronic})` }}
          >
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="w-full lg:w-[37%]"
            >
              <h4 className="font-satoshi text-[#504c4c] font-bold sm:text-4xl text-2xl pl-6 pt-4 relative group">
                Electronic
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#504c4c] transition-all duration-300 group-hover:w-1/2"></span>
              </h4>
            </motion.div>
          </Link>

          <Link
            to={`/category/men's clothing`}
            className="bg-white rounded-3xl w-full lg:w-[60%] h-[190px] md:h-[289px] bg-cover bg-left transition-transform group hover:cursor-pointer hover:scale-105 hover:shadow-xl duration-300 ease-in-out"
            style={{ backgroundImage: `url(${menFashion})` }}
          >
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="w-full lg:w-[37%]"
            >
              <h4 className="font-satoshi text-[#504c4c] font-bold sm:text-4xl text-2xl pl-6 pt-4 relative group">
                Men's Fashion
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#504c4c] transition-all duration-300 group-hover:w-1/2"></span>
              </h4>
            </motion.div>
          </Link>

          <Link
            to={`/category/women's clothing`}
            className="bg-white rounded-3xl w-full lg:w-[60%] h-[190px] md:h-[289px] bg-cover bg-left transition-transform group hover:cursor-pointer hover:scale-105 hover:shadow-xl duration-300 ease-in-out"
            style={{ backgroundImage: `url(${womenFashion})` }}
          >
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="w-full lg:w-[37%]"
            >
              <h4 className="font-satoshi text-[#504c4c] font-bold sm:text-4xl text-2xl pl-6 pt-4 relative group">
                Ladies Fashion
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#504c4c] transition-all duration-300 group-hover:w-1/2"></span>
              </h4>
            </motion.div>
          </Link>

          <Link
            to={"/category/jewelery"}
            className="bg-white rounded-3xl w-full lg:w-[37%] h-[190px] md:h-[289px] bg-cover bg-left transition-transform group hover:cursor-pointer hover:scale-105 hover:shadow-xl duration-300 ease-in-out"
            style={{ backgroundImage: `url(${jewelry})` }}
          >
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="w-full lg:w-[37%]"
            >
              <h4 className="font-satoshi text-[#504c4c] font-bold sm:text-4xl text-2xl pl-6 pt-4 relative group">
                Jewelry
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#504c4c] transition-all duration-300 group-hover:w-1/2"></span>
              </h4>
            </motion.div>
          </Link>
        </div>
      </div>

      {/* Reviews */}
      <div className="flex flex-col md:gap-12 gap-6 mb-8">
        <div className="flex justify-between">
          <motion.h4
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-5xl font-extrabold font-montserrat leading-none"
          >
            OUR HAPPY CUSTOMERS
          </motion.h4>
        </div>
        <div>
          <ReviewCard />
        </div>
      </div>
    </section>
  );
};

export default ProductList;
