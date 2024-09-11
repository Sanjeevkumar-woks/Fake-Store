const CategoryBar = () => {
  return (
    <div className="category-bar bg-gray-100  m-2 shadow-md">
      <ul className="flex justify-center gap-4 md:gap-8 text-lg font-semibold">
        <li className="hover:text-blue-600 transition-colors duration-300 ease-in-out cursor-pointer">
          Men's
        </li>
        <li className="hover:text-blue-600 transition-colors duration-300 ease-in-out cursor-pointer">
          Women's
        </li>
        <li className="hover:text-blue-600 transition-colors duration-300 ease-in-out cursor-pointer">
          Kids
        </li>
        <li className="hover:text-blue-600 transition-colors duration-300 ease-in-out cursor-pointer">
          All
        </li>
      </ul>
    </div>
  );
};

export default CategoryBar;
