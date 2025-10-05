import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/products/slice";
import { setSearch, setCategory, setSort } from "../redux/filters/slice";
// import SearchBar from "../components/SearchBar";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";

export default function ProductPage() {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.products);
  const { search, category, sort } = useSelector((state) => state.filters);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  const filteredProducts = items
    .filter((p) => p.title.toLowerCase().includes(search.toLowerCase()))
    .filter((p) => (category === "all" ? true : p.category === category))
    .sort((a, b) => {
      if (sort === "asc") return a.price - b.price;
      if (sort === "desc") return b.price - a.price;
      return 0;
    });

  return (
    <div>
      <h1 className="heading">Products</h1>
      {/* <SearchBar onSearch={(val) => dispatch(setSearch(val))} /> */}

      <div className="filters">
        <SearchBar onSearch={(val) => dispatch(setSearch(val))} />

        <div className="filter-options">
          <select
            value={category}
            onChange={(e) => dispatch(setCategory(e.target.value))}
          >
            <option value="all">All Categories</option>
            <option value="men's clothing">Men</option>
            <option value="women's clothing">Women</option>
            <option value="jewelery">Jewelery</option>
            <option value="electronics">Electronics</option>
          </select>

          <select
            value={sort}
            onChange={(e) => dispatch(setSort(e.target.value))}
          >
            <option value="none">Sort by Price</option>
            <option value="asc">Low → High</option>
            <option value="desc">High → Low</option>
          </select>
        </div>
      </div>

      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error fetching products.</p>}

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
