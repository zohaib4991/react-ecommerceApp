import Breadcrumb from "../components/Breadcrumb";
import { FaTrashCan, FaMinus, FaPlus } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToCart, removeItem } from "../features/cart/cartSlice";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartIitems);
  const subTotal = cartItems.reduce((total, prod) => {
    return total + prod.price * prod.quantity;
  }, 0);
  const discount = (20 * subTotal) / 100;
  const amountToPay = 25 + subTotal - (20 * subTotal) / 100;

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="md:px-14 px-6 justify-center items-center py-10 font-satoshi">
      <div>
        <Breadcrumb />
      </div>
      <div className="flex flex-col gap-4">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-montserrat font-extrabold leading-tight text-black mt-6"
        >
          YOUR CART
        </motion.h1>
        {cartItems.length === 0 ? (
          <p className="mt-4 text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="flex flex-col md:flex-row gap-6">
            {/* Product Summary */}
            <div className="md:w-3/5 max-h-[500px] overflow-y-auto border rounded-2xl px-3 py-3 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
              {cartItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="md:mb-12 h-auto mb-6 flex-col gap-6 flex w-full "
                >
                  <div className="flex items-center gap-2  ">
                    {/* image section */}
                    <div className="h-[80%] w-[35%] md:w-[48%] lg:w-[35%] overflow-hidden">
                      <img
                        className="object-cover w-full"
                        src={item.image}
                        alt="productImage"
                      />
                    </div>
                    {/* product summary */}
                    <div className=" w-full flex flex-col ">
                      <div className="flex justify-between  items-start">
                        <div className="flex flex-col gap-1">
                          <h3 className="lg:text-xl text-base font-semibold  text-black">
                            {item.title.slice(0, 32)}..
                          </h3>
                          <p className="text-black sm:text-sm text-xs">
                            Size: <span className="text-gray-600">Large</span>{" "}
                          </p>
                          <p className="text-black sm:text-sm text-xs">
                            Color: <span className="text-gray-600">White</span>{" "}
                          </p>
                        </div>
                        <button
                          onClick={() => {
                            dispatch(removeItem( item.id ));
                            toast.success("Product Removed From Cart");
                          }}
                        >
                          <FaTrashCan className="text-red-500 w-5 h-5" />
                        </button>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="sm:text-2xl text-base text-black font-bold">
                          ${item.price}
                        </p>
                        <div className="flex w-[45%] md:w-[50%] rounded-3xl items-center justify-between px-4 h-12 bg-[#F0F0F0]">
                          <button
                            onClick={() => {
                              if (item.quantity > 1) {
                                const product = {
                                  id: item.id,
                                  quantity: -1,
                                };
                                dispatch(addToCart(product));
                              }
                            }}
                          >
                            <FaMinus />
                          </button>
                          <p>{item.quantity}</p>
                          <button
                            onClick={() => {
                              const product = {
                                id: item.id,
                                quantity: 1,
                              };
                              dispatch(addToCart(product));
                            }}
                          >
                            <FaPlus />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {index + 1 < cartItems.length && (
                    <div className="border"></div>
                  )}
                </motion.div>
              ))}
            </div>
            {/* Order Summary */}
            <div className="md:w-2/5 h-fit border rounded-2xl p-6 bg-white shadow-sm md:sticky md:top-24">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Order Summary
              </h3>

              {/* Summary Rows */}
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal</span>
                  <span className="font-medium">
                    ${Number(subTotal.toFixed(2))}
                  </span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Discount (-20%)</span>
                  <span className="text-red-500 font-medium">
                    -${Number(discount.toFixed(2))}
                  </span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Delivery Fee</span>
                  <span className="font-medium">$25</span>
                </div>
              </div>

              <hr className="my-4" />

              <div className="flex justify-between text-gray-900 text-lg font-semibold mb-4">
                <span>Total</span>
                <span>${Number(amountToPay.toFixed(2))}</span>
              </div>

              {/* Promo Code Input */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center bg-gray-100 rounded-full px-3 py-2 flex-1">
                  <svg
                    className="w-4 h-4 text-gray-400 mr-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Add promo code"
                    className="bg-transparent outline-none text-sm w-full"
                  />
                </div>
                <button className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-gray-800 hover:scale-105">
                  Apply
                </button>
              </div>

              {/* Checkout Button */}
              <button className="w-full bg-black text-white mb-4 py-3 rounded-full font-medium flex items-center justify-center gap-2 transition-all duration-300 hover:bg-gray-800 hover:scale-[1.02]">
                Go to Checkout
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
