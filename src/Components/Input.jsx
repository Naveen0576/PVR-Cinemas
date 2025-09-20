import { useState } from "react";
import "../Components/Input.css";
import searchIcon from "../assets/InputSection/Search-Icon.svg";

function Input({ onSearch }) {
  const [inputValue, setInputVaue] = useState("");

  const handleChange = (e) => {
    setInputVaue(e.target.value);
  };

  const handleSearchClick = () => {
    if (inputValue.trim()) {
      onSearch(inputValue);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearchClick();
    }
  };

  return (
    <div className="searchBar">
      <input
        type="text"
        placeholder="Search Movie.."
        className="inputField"
        value={inputValue}
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
