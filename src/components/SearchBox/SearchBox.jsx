import React from "react";
import styles from "./SearchBox.module.css";

const SearchBox = ({ filter, onFilterChange }) => (
  <input
    className={styles.input}
    type="text"
    placeholder="Search by name"
    value={filter}
    onChange={onFilterChange}
  />
);

export default SearchBox;
