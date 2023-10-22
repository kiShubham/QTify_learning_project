import React, { useEffect, useState } from "react";
import { fetchNewAlbums, fetchTopAlbums } from "../../api/api";
import Section from "../Section/Section";
import styles from "./Wrapper.module.css";

const Wrapper = () => {
  const [topAlbumsData, setTopAlbumsData] = useState([]);
  const [newAlbumsData, setNewAlbumsData] = useState([]);

  const generateTopAlbumsData = async () => {
    const data = await fetchTopAlbums();
    setTopAlbumsData(data);
  };
  const generateNewAlbumsData = async () => {
    const data = await fetchNewAlbums();
    setNewAlbumsData(data);
  };
  useEffect(() => {
    generateNewAlbumsData();
    generateTopAlbumsData();
  }, []);

  return (
    <div>
      <div className={styles.topNewWrapper}>
        <div>
          <Section title="Top Albums" data={topAlbumsData} type="albums" />
        </div>
        <div>
          <Section title="New Albums" data={newAlbumsData} type="albums" />
        </div>
      </div>
      <div className={styles.line}></div>
    </div>
  );
};

export default Wrapper;
