import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite, selectFavorites } from "../redux/favourites/slice";
import { useState } from "react";

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = useSelector((state) =>
    state.products.items.find((p) => p.id === Number(id))
  );
  const favorites = useSelector(selectFavorites);
  const dispatch = useDispatch();

  const [toast, setToast] = useState("");

  if (!product) return <p>Product not found.</p>;

  const isFavorited = favorites.some((f) => f.id === product.id);

  const handleAddFavorite = () => {
    dispatch(addFavorite(product));
    setToast("Added to Favorites!");
    setTimeout(() => setToast(""), 2000);
  };

  return (
    <div className="detail">
      <img
        className="product-page-image"
        src={product.image}
        alt={product.title}
      />
      <div>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h3>${product.price}</h3>
        <button onClick={handleAddFavorite} disabled={isFavorited}>
          {isFavorited ? "Added" : "Add to Favorites"}
        </button>

        {toast && <div className="toast">{toast}</div>}
      </div>
    </div>
  );
}
