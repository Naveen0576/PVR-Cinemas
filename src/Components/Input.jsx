import { useState } from "react";
import "../Components/Input.css";
import searchIcon from "../assets/InputSection/Search-Icon.svg";

function Input({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchClick = () => {
    if (query.trim()) {
      onSearch(query);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearchClick(); // call search on Enter
    }
  };

  return (
    <div className="searchBar">
      <input
        type="text"
        placeholder="Search Movie.."
        className="inputField"
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button className="search-button" onClick={handleSearchClick}>
        <img src={searchIcon} alt="search-icon" className="search-icon" />
        Search
      </button>
    </div>
  );
}

export default Input;
