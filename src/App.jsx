import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/About";
import ContactPage from "./pages/ContactUs";
import NotFoundPage from "./pages/NotFound";
import ProductDetails from "./Components/ProductDetails";
import ServicesPage from "./pages/ServicePage";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const CartContext = createContext();

export default function App() {
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState("All");

  return (
    <CartContext.Provider value={{ cart, setCart, category, setCategory }}>
      <Router>
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:productId" element={<ProductDetails />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </CartContext.Provider>
  );
}
