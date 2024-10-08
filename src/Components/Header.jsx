import { useContext, useState } from "react";
import CartContainer from "./CartContainer";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { CartContext } from "../App";

const Headers = () => {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();

  const { cart } = useContext(CartContext);

  return (
    <header className="header flex justify-between items-center p-5 bg-white shadow-md relative">
      {/* LOGO */}
      <div onClick={() => navigate("/")}>
        <p className="text-3xl font-bold text-blue-600 cursor-pointer">
          <span className="text-red-600">Fake</span>-Store
        </p>
      </div>

      {/* Nav-links */}
      <nav className="hidden md:flex gap-6 text-lg sm:hidden">
        <ul className="flex gap-6 list-none font-semibold">
          <li className="hover:text-red-600 hover:underline transition-colors duration-300 ease-in-out cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-red-600 hover:underline transition-colors duration-300 ease-in-out cursor-pointer">
            <Link to="/category">Category</Link>
          </li>
          <li className="hover:text-red-600 hover:underline transition-colors duration-300 ease-in-out cursor-pointer">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-red-600 hover:underline transition-colors duration-300 ease-in-out cursor-pointer">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="hover:text-red-600 hover:underline transition-colors duration-300 ease-in-out cursor-pointer">
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>

      <div className={`${showSearch ? "block" : "hidden"} p-2 `}>
        <input type="text" placeholder="Search" className="p-2 " />
      </div>
      {/* buttons */}
      <div className="flex gap-2">
        {/* <button
          className=" text-gray-600  rounded-lg hover:bg-orange-600 transition-colors duration-300 ease-in-out p-2"
          onClick={() => setShowSearch((prev) => !prev)}
        >
          🔍
        </button> */}
        <button
          className=" text-gray-600  rounded-lg hover:bg-orange-600 transition-colors duration-300 ease-in-out p-2"
          onClick={() => navigate("/cart")}
        >
          🛒{" "}
          <sup className="bg-orange-600 text-white p-1 rounded-xl">
            ({cart.length})
          </sup>
        </button>
        <button className=" bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300 ease-in-out">
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

      {/* mobile menu */}
      {menu && (
        <>
          <div
            className="fixed inset-0 bg-black opacity-50 z-40"
            onClick={() => setMenu(false)}
          ></div>

          <ul className="fixed top-0 right-0 h-content w-56 bg-white shadow-lg z-50">
            <li className="p-4 hover:text-red-600 hover:underline transition-colors duration-300 ease-in-out cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <li className="p-4 hover:text-red-600 hover:underline transition-colors duration-300 ease-in-out cursor-pointer">
              <Link to="/category">Category</Link>
            </li>
            <li className="p-4 hover:text-red-600 hover:underline transition-colors duration-300 ease-in-out cursor-pointer">
              <Link to="/about">About</Link>
            </li>
            <li className="p-4 hover:text-red-600 hover:underline transition-colors duration-300 ease-in-out cursor-pointer">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="p-4 hover:text-red-600 hover:underline transition-colors duration-300 ease-in-out cursor-pointer">
              <Link to="/services">Services</Link>
            </li>
          </ul>
        </>
      )}
    </header>
  );
};

export default Headers;
