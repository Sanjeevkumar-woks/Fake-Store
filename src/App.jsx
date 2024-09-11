import { createContext, useContext, useEffect, useState } from "react";
import ProductsList from "./ProductsList";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import CategoryBar from "./Components/CategoryBar";
import Loader from "./Components/Loader";

export const CartContext = createContext();

export default function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <CartContext.Provider value={{ cart, setCart }}>
          <div className="relative">
            <Header />
            <div className="z-10">
              <CategoryBar />
              <ProductsList products={products} />
              <Footer />
            </div>
          </div>
        </CartContext.Provider>
      )}
    </>
  );
}
