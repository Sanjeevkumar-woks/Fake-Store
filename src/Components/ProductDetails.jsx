import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CartContext } from "../App";
import Loader from "./Loader";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const { cart, setCart } = useContext(CartContext);

  // Fetch product details
  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
      setLoading(false);
    };
    fetchProduct();
  }, [id]);

  // Add to cart function
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  //delete item from cart
  const deleteItem = (id) => {
    const newCart = cart.filter((product) => product.id !== id);
    setCart(newCart);
  };

  return (
    <div className="container mx-auto p-4">
      {loading ? (
        <Loader />
      ) : (
        <div className="mt-10 p-5 bg-gray-50 shadow-lg rounded-lg">
          {/* Product Title */}
          <h1 className="text-3xl font-bold text-center mb-6">
            {product.title}
          </h1>

          {/* Product Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Product Image */}
            <div className="flex justify-center">
              <img
                src={product.image}
                alt={product.title}
                className="w-72 h-72 md:w-96 md:h-96 object-contain rounded-lg shadow-md"
              />
            </div>

            {/* Product Information */}
            <div className="text-left space-y-4">
              <p className="text-lg text-gray-700 capitalize">
                {product.description}
              </p>
              <p className="text-2xl font-semibold text-green-600">
                ${product.price}
              </p>
              <p className="text-sm font-light text-gray-800 uppercase">
                Category: {product.category}
              </p>

              {/* Add to Cart Button */}

              {cart.some((item) => item.id === product.id) ? (
                <button
                  onClick={() => deleteItem(product.id)}
                  className="bg-red-600 text-white px-6 py-2 rounded-md shadow hover:bg-red-500 transition"
                >
                  remove from cart
                </button>
              ) : (
                <button
                  onClick={() => addToCart(product)}
                  className="bg-blue-600 text-white px-6 py-2 rounded-md shadow hover:bg-blue-500 transition"
                >
                  Add to Cart
                </button>
              )}
              <br />
              <button className=" text-black p-0 rounded-md shadow hover:bg-green-500 transition cursor-pointer">
                <Link to="/cart">View Cart 🔗</Link>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
