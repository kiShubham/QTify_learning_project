import React from "react";
import styles from "./SongBtn.module.css";

const SongBtn = ({ title, data, setSongs }) => {
  const handleSelect = () => {
    return setSongs(data);
  };
  return (
    <div className={styles.btnWrap} onClick={handleSelect}>
      <div className={styles.title}>{title}</div>
      <div className={styles.pad}></div>
    </div>
  );
};
export default SongBtn;
