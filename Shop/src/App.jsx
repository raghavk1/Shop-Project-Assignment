import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductPage from "./pages/productPage";
import ProductDetailPage from "./pages/ProductDetailsPage";
import FavoritesPage from "./pages/FavouritesPage";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <Router>
      <ToastContainer position="top-right" autoClose={2000} />
      <nav className="navbar">
        <span>SHOP PROJECT</span>
        <Link to="/">Products</Link>
        <Link to="/favorites">Favorites</Link>
      </nav>
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </Router>
  );
}
