/* import React, { useState } from "react";
import styles from "./Search.module.css";
import { ReactComponent as SearchIcon } from "../../assets/Search icon.svg";

const Search = ({ placeholder, data, dataToNavbar }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchRes, setSearchRes] = useState([]);

  const handleSearch = (e) => {
    const searchTxt = e.target.value.trim().toLowerCase();

    if (!searchTxt.length) {
      setSearchRes([]);
      return setSearchTerm("");
    }
    setSearchTerm(searchTxt);

    const words = searchTxt.split(" ");
    let result = [];

    words.forEach((element) => {
      let temp = data.filter((e) => {
        let nameSearch = e.title.toLowerCase().includes(element); //boolean
        return nameSearch;
      });
      result = removeDuplicateElement(result, temp);
    });

    if (result.length) {
      setSearchRes(result);
    } else setSearchRes([]);
  };

  dataToNavbar(searchRes);

  const removeDuplicateElement = (majorArray, subArray) => {
    subArray.forEach((element) => {
      let bool = false;
      majorArray.forEach((e) => {
        if (e.id === element.id) {
          bool = true;
        }
      });
      if (bool === false) majorArray.push(element);
    });
    return majorArray;
  };

  return (
    <form className={styles.wrapper} onSubmit={(e) => e.preventDefault()}>
      <input
        className={styles.search}
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleSearch}
      />
      <button className={styles.searchBtn} disabled>
        <SearchIcon />
      </button>
    </form>
  );
};

export default Search;
// we have make this search icon a react component this way this is more easy to manage in future ;
 */
import React, { useState, useEffect } from "react";
import styles from "./Search.module.css";
import { ReactComponent as SearchIcon } from "../../assets/Search icon.svg";

const Search = ({ placeholder, data, dataToNavbar }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchRes, setSearchRes] = useState([]);

  useEffect(() => {
    const handleSearch = () => {
      const searchTxt = searchTerm.trim().toLowerCase();

      if (!searchTxt) {
        setSearchRes([]);
        dataToNavbar([]); // sending data back to Navbar
        return;
      }

      const words = searchTxt.split(" ");
      let result = [];

      words.forEach((element) => {
        let temp = data.filter((e) => e.title.toLowerCase().includes(element));
        result = removeDuplicateElements(result, temp);
      });

      if (result.length) {
        setSearchRes(result);
      } else setSearchRes([]);

      dataToNavbar(result); // sending data back to Navbar
    };

    handleSearch();
  }, [searchTerm, data, dataToNavbar]);

  const removeDuplicateElements = (majorArray, subArray) => {
    subArray.forEach((element) => {
      if (!majorArray.some((e) => e.id === element.id)) {
        majorArray.push(element);
      }
    });
    return majorArray;
  };

  return (
    <form className={styles.wrapper} onSubmit={(e) => e.preventDefault()}>
      <input
        className={styles.search}
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className={styles.searchBtn} disabled>
        <SearchIcon />
      </button>
    </form>
  );
};

export default Search;
