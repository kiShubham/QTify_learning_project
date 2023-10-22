import React, { useState } from "react";
import Button from "../Button/Button";
import styles from "./Navbar.module.css";
import Logo from "../logo/LogoCom";
import Search from "../Search/Search";

const Navbar = ({ songData, dataToParentHome }) => {
  const [searchResData, setSearchRes] = useState([]);
  const dataFromSearch = (data) => {
    setSearchRes(data);
  };
  dataToParentHome(searchResData); //can use useEffect ;or useCallback /memo;

  return (
    <nav className={styles.navbar}>
      <Logo />
      <Search
        placeholder="Search a album of your choice"
        data={songData}
        dataToNavbar={dataFromSearch}
      />
      <Button children="Give Feedback" />
    </nav>
  );
};

export default Navbar;
