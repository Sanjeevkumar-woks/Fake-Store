import { useContext } from "react";
import { CartContext } from "../App";
import { Link } from "react-router-dom";

const CartContainer = ({ isOpen, onClose }) => {
  const { cart, setCart } = useContext(CartContext);

  // delete function
  const deleteItem = (id) => {
    const newCart = cart.filter((product) => product.id !== id);
    setCart(newCart);
  };

  return (
    <div className="relative z-100">
      {/* Overlay Background */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={onClose}
        ></div>
      )}

      {/* Cart Container */}
      <div
        className={`fixed top-0 right-0 h-full w-96 p-5 bg-gray-800 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center pb-3 border-b border-gray-600">
          <h2 className="text-lg font-bold text-white">Your Cart</h2>
          <button onClick={onClose} className="text-2xl font-bold text-white">
            &times;
          </button>
          {cart.length > 0 && (
            <button className="absolute  bottom-0 w-full p-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-300">
              <Link to="/cart">Checkout to cart</Link>
            </button>
          )}
        </div>

        {/* Cart Items */}
        {cart.length ? (
          <div className="flex flex-col gap-4 mt-4">
            {cart.map((product) => (
              <div
                key={product.id}
                className="flex items-center gap-4 p-3 bg-white shadow-md rounded-lg"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <p className="font-semibold line-clamp-1">{product.title}</p>
                </div>

                <button
                  className="p-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-300"
                  onClick={() => deleteItem(product.id)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        ) : (
          //  Cart is empty
          <div className="mt-10 text-center text-white">
            <p>Your cart is empty</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartContainer;
