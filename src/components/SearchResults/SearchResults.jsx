import React from "react";
import styles from "./SearchResults.module.css";

const SearchResults = ({ searchResults }) => {
  console.log(searchResults);
  return (
    searchResults.length > 0 && (
      <div className={styles.searchResultsContainer}>
        <h3>Search Results:</h3>
        <ul className={styles.resultList}>
          {searchResults.map((file) => (
            <img
              key={file.id}
              height="300px"
              width="270px"
              src={file.url}
              alt="searched files"
            />
          ))}
        </ul>
      </div>
    )
  );
};

export default SearchResults;
