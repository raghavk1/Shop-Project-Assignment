import { useSelector, useDispatch } from "react-redux";
import { removeFavorite, selectFavorites } from "../redux/favourites/slice";

export default function FavoritesPage() {
  const favorites = useSelector(selectFavorites);
  const dispatch = useDispatch();

  if (favorites.length === 0)
    return <p className="favourite-msg">No favorites added yet.</p>;

  return (
    <div>
      <h1 className="favourite-msg">Favorites</h1>
      <div className="product-grid">
        {favorites.map((product) => (
          <div key={product.id} className="product-card">
            <img
              className="product-page-image"
              src={product.image}
              alt={product.title}
            />
            <h3>{product.title.substring(0, 40)}...</h3>
            <p>${product.price}</p>
            <button onClick={() => dispatch(removeFavorite(product.id))}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
