import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/About";
import ContactPage from "./pages/ContactUs";
import NotFoundPage from "./pages/NotFound";
import ProductDetails from "./Components/ProductDetails";
import ServicesPage from "./pages/ServicePage";
import Headers from "./Components/Header";
import Footer from "./Components/Footer";
import Cart from "./Components/Cart";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ReturnPolicy from "./pages/ReturnPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";

export const CartContext = createContext();

export default function App() {
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState("All");

  return (
    <CartContext.Provider value={{ cart, setCart, category, setCategory }}>
      <Router>
        <Headers />
        <main className="main-content">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/product/:id" element={<ProductDetails />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/ReturnPolicy" element={<ReturnPolicy />} />
            <Route
              path="/TermsAndConditions"
              element={<TermsAndConditions />}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </CartContext.Provider>
  );
}
