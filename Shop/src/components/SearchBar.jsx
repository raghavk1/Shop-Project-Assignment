import { useState, useEffect } from "react";
import { useDebounce } from "../hooks/useDebounce";

export default function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");
  const debouncedValue = useDebounce(input, 300);

  useEffect(() => {
    onSearch(debouncedValue);
  }, [debouncedValue, onSearch]);

  return (
    <input
      type="text"
      placeholder="Search products..."
      value={input}
      className="search-input"
      onChange={(e) => setInput(e.target.value)}
    />
  );
}
