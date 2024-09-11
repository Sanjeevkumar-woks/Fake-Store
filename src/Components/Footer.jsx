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

        <div className="flex ">
          <ul className="flex flex-col gap-6 list-none">
            <li className="hover:text-red-600 hover:underline  transition-colors duration-300 ease-in-out cursor-pointer">
              Home
            </li>
            <li className="hover:text-red-600 hover:underline  transition-colors duration-300 ease-in-out cursor-pointer">
              Category
            </li>
            <li className="hover:text-red-600 hover:underline  transition-colors duration-300 ease-in-out cursor-pointer">
              About
            </li>
            <li className="hover:text-red-600 hover:underline  transition-colors duration-300 ease-in-out cursor-pointer">
              Contact
            </li>
          </ul>
        </div>
        <div className="flex ">
          <ul className="flex flex-col gap-6 list-none">
            <li className="hover:text-red-600 hover:underline  transition-colors duration-300 ease-in-out cursor-pointer">
              Services
            </li>
            <li className="hover:text-red-600 hover:underline  transition-colors duration-300 ease-in-out cursor-pointer">
              Policy
            </li>
            <li className="hover:text-red-600 hover:underline  transition-colors duration-300 ease-in-out cursor-pointer">
              Terms
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
