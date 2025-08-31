import CountUp from "react-countup";
import HeroImg from "../assets/images/mainImage.png";
import { motion } from "framer-motion";

const Hero = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };
  return (
    <div className="w-full h-auto xl:h-screen bg-zinc-100 flex flex-col lg:flex-row  justify-between px-6 lg:px-20 py-10 relative overflow-hidden">
      {/* Left Section - Text Content */}
      <div className="z-10 flex flex-col items-start text-left w-full lg:w-1/2 mb-10 lg:mb-0">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full text-5xl sm:text-6xl font-extrabold leading-tight text-black"
        >
          FIND CLOTHES <br />
          THAT MATCHES <br />
          YOUR STYLE
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-4 text-gray-600 max-w-md"
        >
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </motion.p>
        <button className="mt-4 w-full sm:w-auto bg-black text-white px-6 py-4 sm:py-3 rounded-full hover:bg-gray-800 transition-all">
          Shop Now
        </button>

        {/* Stats Section */}
        <div className="mt-8 flex justify-center flex-wrap gap-6 text-center">
          <div>
            <h2 className="text-4xl font-bold font-satoshi text-black">
              <CountUp end={200} duration={3} />+
            </h2>
            <p className="text-sm text-gray-600">International Brands</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold font-satoshi text-black">
              <CountUp end={2000} duration={3} />+
            </h2>
            <p className="text-sm text-gray-600">High-Quality Products</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold font-satoshi text-black">
              <CountUp end={30000} duration={3} separator="," />+
            </h2>
            <p className="text-sm text-gray-600">Happy Customers</p>
          </div>
        </div>
      </div>

      {/* Right Section - Static Image */}
      <div
        className="absolute z-30 hidden lg:inline-block right-[1%] top-1/2  transform -translate-y-1/2 w-full h-[663px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HeroImg})` }}
      ></div>
    </div>
  );
};

export default Hero;
