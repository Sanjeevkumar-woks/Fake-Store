import { createContext, useContext, useEffect, useState } from "react";
import ProductsList from "./ProductsList";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import CategoryBar from "./Components/CategoryBar";
import Loader from "./Components/Loader";

export const CartContext = createContext();

export default function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
        setLoading(false);
      });
  }, []);

  // filter products based on category
  useEffect(() => {
    if (category === "All") {
      setFilteredProducts(products);
      return;
    }
    setFilteredProducts(
      products.filter((product) => product.category === category)
    );
  }, [category]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <CartContext.Provider value={{ cart, setCart, category, setCategory }}>
          <div className="relative">
            <Header />
            <div className="z-10">
              <CategoryBar />
              <ProductsList products={filteredProducts} />
              <Footer />
            </div>
          </div>
        </CartContext.Provider>
      )}
    </>
  );
}
