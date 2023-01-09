import { Search } from "./svg";

export function SearchEngine() {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search Product"
        className="search__input"
      />
      <Search
        width="15px"
        height="15px"
        color="#1B2631"
        class="search_svg"
        key="search_svg"
      />
    </div>
  );
}
