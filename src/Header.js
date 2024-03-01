import React from "react";

export default function Header() {
  return (
    <div className="isimo-sezulu">
      <form className="search-form" id="search-form">
        <input
          type="search"
          className="search-form-input"
          placeholder="Enter a city"
        />
        <input type="submit" value="search" className="search-button" />
      </form>
    </div>
  );
}