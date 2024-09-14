import { useContext, useEffect, useState } from "react";
import { CartContext } from "../App";
import CategoryBar from "../Components/CategoryBar";
import ProductsList from "../Components/ProductsList";
import Loader from "../Components/Loader";

export default function HomePage() {
  const { category } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
      setFilteredProducts(data);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    if (category === "All") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) => product.category === category)
      );
    }
  }, [category, products]);

  return (
    <div className="home-page">
      {loading ? (
        <Loader />
      ) : (
        <>
          <CategoryBar />
          <ProductsList products={filteredProducts} />
        </>
      )}
    </div>
  );
}
