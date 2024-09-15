import { useContext } from "react";
import { CartContext } from "../App";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  //Get cart from CartContext
  const { cart, setCart } = useContext(CartContext);

  //Navigate
  const navigate = useNavigate();
  //Delete item
  const deleteItem = (id) => {
    const newCart = cart.filter((product) => product.id !== id);
    setCart(newCart);
  };
  //trim length
  const trimLength = (str) => {
    if (str.length > 15) {
      return str.slice(0, 15) + "...";
    }
    return str;
  };
  //increase and decrease quantity
  const increaseQuantity = (id) => {
    const newCart = cart.map((product) => {
      if (product.id === id) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    setCart(newCart);
  };
  //decrease quantity
  const decreaseQuantity = (id) => {
    const newCart = cart.map((product) => {
      if (product.id === id) {
        if (product.quantity === 1) return { ...product, quantity: 1 };
        return { ...product, quantity: product.quantity - 1 };
      }
      return product;
    });
    setCart(newCart);
  };

  return (
    <div className="cart flex flex-col gap-4 p-4 w-full">
      <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-600 mb-6">
        <span className="text-red-500">Cart</span> 🛒 Items
      </h1>

      {/* Cart items */}
      {cart.length === 0 ? (
        <div className="flex flex-col gap-4 justify-center items-center w-full h-full">
          <p className="text-center text-xl sm:text-2xl md:text-4xl font-bold">
            No items in cart 🛒
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-4 overflow-y-scroll max-h-[70vh]">
          {cart.map((product) => (
            <div
              key={product.id}
              className="flex flex-col md:flex-row gap-4 bg-white shadow-lg rounded-lg justify-around items-center p-0 md:p-4"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-48 rounded-md object-cover cursor-pointer"
                onClick={() => navigate(`/product/${product.id}`)}
              />
              <div className="flex flex-col gap-2 items-center md:items-start p-2">
                <p className="font-semibold text-center md:text-left">
                  {trimLength(product.title)}
                </p>
                <p className="font-semibold text-gray-500">
                  Price: ${product.price?.toFixed(2)}
                </p>
                <p>Quantity: {product.quantity}</p>
              </div>

              {/* increase decrease Qnty */}
              <div className="flex gap-2 justify-center items-center">
                <button
                  className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-300"
                  onClick={() => increaseQuantity(product.id)}
                >
                  +
                </button>
                <button
                  className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-300"
                  onClick={() => decreaseQuantity(product.id)}
                >
                  -
                </button>
              </div>

              {/* Remove from cart button */}
              <button
                onClick={() => deleteItem(product.id)}
                className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-300"
              >
                Remove from cart
              </button>
            </div>
          ))}

          {/* Total Price Section */}
          <div className="flex flex-col gap-2 ml-auto mr-6 md:mr-20 mb-6 p-4 w-full sm:w-auto">
            <p className="text-lg sm:text-xl font-bold text-gray-600 p-2">
              Total Price: $
              {cart
                .reduce(
                  (total, product) => total + product.price * product.quantity,
                  0
                )
                .toFixed(2)}
            </p>
            <p className="text-lg font-bold">Total Price with 10% discount:</p>
            {/* Discounted price */}
            <p className="text-lg sm:text-xl font-bold p-2">
              <span className="text-sm text-gray-600">Pay:</span> &nbsp;
              {(
                cart.reduce(
                  (total, product) => total + product.price * product.quantity,
                  0
                ) * 0.9
              ).toFixed(2)}
              $
            </p>
            {/* Payment button */}
            <button className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-300">
              Pay
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
