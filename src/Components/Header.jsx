import { useContext, useState } from "react";
import CartContainer from "./CartContainer";
import { CartContext } from "../App";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);

  const { cart } = useContext(CartContext);

  return (
    <header className="header flex justify-between items-center p-5 bg-white shadow-md relative">
      {/* LOGO */}
      <p className="text-3xl font-bold text-blue-600">
        <span className="text-red-600">Fake</span>-Store
      </p>

      {/* Nav-links */}
      <nav className="hidden md:flex gap-6 text-lg sm:hidden">
        <ul className="flex gap-6 list-none">
          <li className="hover:text-red-600 hover:underline transition-colors duration-300 ease-in-out cursor-pointer">
            Home
          </li>
          <li className="hover:text-red-600 hover:underline transition-colors duration-300 ease-in-out cursor-pointer">
            Category
          </li>
          <li className="hover:text-red-600 hover:underline transition-colors duration-300 ease-in-out cursor-pointer">
            About
          </li>
          <li className="hover:text-red-600 hover:underline transition-colors duration-300 ease-in-out cursor-pointer">
            Contact
          </li>
          <li className="hover:text-red-600 hover:underline transition-colors duration-300 ease-in-out cursor-pointer">
            Services
          </li>
        </ul>
      </nav>
      {/* buttons */}
      <div className="flex gap-4">
        <button
          className="bg-orange-800 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300 ease-in-out"
          onClick={() => setOpen((prev) => !prev)}
        >
          Cart ({cart.length})
        </button>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300 ease-in-out">
          Log-in
        </button>
      </div>

      {/* mobile menu */}
      <div className="z-50">
        {open && <CartContainer isOpen={open} onClose={() => setOpen(false)} />}
      </div>

      <div className="md:hidden">
        <button
          className="text-blue-600 text-2xl"
          onClick={() => setMenu(!menu)}
        >
          &#9776;
        </button>
      </div>

      {menu && (
        <>
          <div
            className="fixed inset-0 bg-black opacity-50 z-40"
            onClick={() => setMenu(false)}
          ></div>

          <ul className="fixed top-0 right-0 h-content w-56 bg-white shadow-lg z-50">
            <li className="p-4 hover:text-red-600 hover:underline transition-colors duration-300 ease-in-out cursor-pointer">
              Home
            </li>
            <li className="p-4 hover:text-red-600 hover:underline transition-colors duration-300 ease-in-out cursor-pointer">
              Category
            </li>
            <li className="p-4 hover:text-red-600 hover:underline transition-colors duration-300 ease-in-out cursor-pointer">
              About
            </li>
            <li className="p-4 hover:text-red-600 hover:underline transition-colors duration-300 ease-in-out cursor-pointer">
              Contact
            </li>
            <li className="p-4 hover:text-red-600 hover:underline transition-colors duration-300 ease-in-out cursor-pointer">
              Services
            </li>
          </ul>
        </>
      )}
    </header>
  );
};

export default Header;
