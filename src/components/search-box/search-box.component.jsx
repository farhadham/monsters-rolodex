import React from "react";

import "./search-box.styles.css";

//if we dont need internal state nor access of lifecycle method just use this functional component
//easier to read
export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
  />
);
