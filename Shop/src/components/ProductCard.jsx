import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title.substring(0, 40)}...</h3>
      <p>${product.price}</p>
      <Link to={`/product/${product.id}`} className="btn">
        View Details
      </Link>
    </div>
  );
}
