import { useContext } from "react";
import { CartContext } from "../App";

const CategoryBar = () => {
  const { category, setCategory } = useContext(CartContext);

  //handle category
  const handleCategory = (category) => {
    setCategory(category);
  };
  return (
    <div className="category-bar bg-gray-100  m-2 p-2 shadow-md">
      <ul className="flex justify-center gap-4 md:gap-8 text-lg font-semibold">
        <li
          className="hover:text-blue-600 transition-colors duration-300 ease-in-out cursor-pointer"
          onClick={() => handleCategory("men's clothing")}
        >
          Men's
        </li>
        <li
          className="hover:text-blue-600 transition-colors duration-300 ease-in-out cursor-pointer"
          onClick={() => handleCategory("women's clothing")}
        >
          Women's
        </li>
        <li
          className="hover:text-blue-600 transition-colors duration-300 ease-in-out cursor-pointer"
          onClick={() => handleCategory("electronics")}
        >
          electronics
        </li>
        <li
          className="hover:text-blue-600 transition-colors duration-300 ease-in-out cursor-pointer"
          onClick={() => handleCategory("jewelery")}
        >
          jewelery
        </li>
        <li
          className="hover:text-blue-600 transition-colors duration-300 ease-in-out cursor-pointer"
          onClick={() => handleCategory("All")}
        >
          All
        </li>
      </ul>
    </div>
  );
};

export default CategoryBar;
