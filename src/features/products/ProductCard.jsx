import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const productId = product.id
  
  return (
    <Link to={`/product/${productId}`} className="xl:w-64 min-w-[1015px]:w-56 sm:w-56 w-44  shrink-0 h-auto rounded-2xl shadow-lg bg-white p-4">
      <div className="sm:w-44 m-auto w-full h-28 sm:h-44 overflow-hidden">
        <img
        className="w-full object-cover rounded-xl"
        src={product.image}
        alt="Product Image"
      />
      </div>

      <div className="mt-4">
        <h2 className="sm:text-lg text-sm font-semibold text-gray-800">{product.title.split(" ").slice(0, 3).join(" ")}...</h2>
        <p className="sm:text-xl text-sm font-bold text-black font-satoshi mt-2 ">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
