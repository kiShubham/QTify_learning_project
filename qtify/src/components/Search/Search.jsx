import React from "react";
import styles from "./Search.module.css";
import { ReactComponent as SearchIcon } from "../../assets/Search icon.svg";

const Search = ({ placeholder }) => {
  return (
    <form className={styles.wrapper}>
      <input className={styles.search} placeholder={placeholder} />
      <button className={styles.searchBtn}>
        <SearchIcon />
      </button>
    </form>
  );
};

export default Search;

// we have make this search icon a react component this way this is more easy to manage in future ;
