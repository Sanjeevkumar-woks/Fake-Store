import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer flex flex-col justify-center items-center  bg-black shadow-md">
      <div className="flex justify-around items-center gap-3 text-white w-full p-4">
        <div className="flex flex-col gap-2 max-w-md">
          <p className="text-3xl font-bold text-blue-600">
            <span className="text-red-600">Fake</span>-Store
          </p>
          <article className="text-sm text-gray-500 sm:text-xsm">
            At Fake-Store, we offer the best deals on top-quality products
            across a variety of categories. Shop with confidence and enjoy
            seamless online shopping, backed by our exceptional customer
            service.
          </article>
        </div>

        {/* Nav-links */}
        <div className="flex ">
          <ul className="flex flex-col gap-6 list-none">
            <li className="hover:text-red-600 hover:underline  transition-colors duration-300 ease-in-out cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-red-600 hover:underline  transition-colors duration-300 ease-in-out cursor-pointer">
              <Link to="/category">Category</Link>
            </li>
            <li className="hover:text-red-600 hover:underline  transition-colors duration-300 ease-in-out cursor-pointer">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:text-red-600 hover:underline  transition-colors duration-300 ease-in-out cursor-pointer">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Nav-links terms and conditions */}
        <div className="flex ">
          <ul className="flex flex-col gap-6 list-none">
            <li className="hover:text-red-600 hover:underline  transition-colors duration-300 ease-in-out cursor-pointer">
              <Link to="/TermsAndConditions">Terms & Conditions</Link>
            </li>
            <li className="hover:text-red-600 hover:underline  transition-colors duration-300 ease-in-out cursor-pointer">
              <Link to="/privacy-policy">Privacy-policy</Link>
            </li>
            <li className="hover:text-red-600 hover:underline  transition-colors duration-300 ease-in-out cursor-pointer">
              <Link to="/ReturnPolicy">Return-Policy</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-details  flex justify-center items-center bg-gray-600 w-full ">
        <p className="text-white">© 2023 Fake-Store. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
