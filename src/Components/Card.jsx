import { useContext } from "react";
import { CartContext } from "../App";
import { useNavigate } from "react-router-dom";

const Card = ({ product }) => {
  // get cart
  const { cart, setCart } = useContext(CartContext);

  // add to cart
  const addToCart = () => {
    setCart([...cart, { ...product, quantity: 1 }]);
  };

  const navigate = useNavigate();

  //Destructure product
  const { title, price, description, category, image, rating } = product;

  return (
    <div className="card flex flex-col gap-2 justify-center items-center p-5 bg-white border-2 border-gray-200 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl  duration-300 ease-in-out">
      <img
        className="card-image w-54 h-64 object-cover rounded-lg mb-4 hover:scale-125 transition-transform duration-300 ease-in-out mix-blend-multiply"
        src={image}
        alt={title}
        onClick={() => navigate(`/product/${product.id}`)}
      />

      <h1 className="card-title text-xl font-bold text-blue-600 mb-2 transition-colors hover:text-blue-800 line-clamp-1">
        {title}
      </h1>

      <div className="card-details flex justify-between items-center  w-full p-2 ">
        <p className="text-sm text-gray-500 mb-2 uppercase">{category}</p>
        <div className="flex items-center space-x-2">
          <p className="text-gray-500 font-semibold mb-1">Rating</p>
          <p className="text-sm font-semibold  text-yellow-500">
            {rating.rate}
          </p>
          <span className="text-sm text-gray-500">
            ({rating.count} reviews)
          </span>
        </div>
      </div>
      <p className="text-gray-700 font-semibold mb-1">
        <span className="font-bold text-gray-500">Price: </span>${price}
      </p>

      <p className="card-description text-sm text-gray-600 mb-3 line-clamp-2">
        {description}
      </p>
      {/* Conditional Rendering for Add to cart button */}
      {cart.some((item) => item.id === product.id) ? (
        <button
          className="card-button bg-slate-200 text-black py-2 px-4 rounded-lg hover:bg-red-600 transition-colors duration-300 ease-in-out w-full"
          onClick={() => setCart(cart.filter((item) => item.id !== product.id))}
        >
          Remove from cart
        </button>
      ) : (
        <button
          className="card-button bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors duration-300 ease-in-out w-full"
          onClick={addToCart}
        >
          Add to cart
        </button>
      )}
    </div>
  );
};

export default Card;
