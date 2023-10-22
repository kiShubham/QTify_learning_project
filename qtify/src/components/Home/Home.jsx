import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Wrapper from "../Wrapper/Wrapper";
import SongWrapper from "../Wrapper/SongWrapper";
import Footer from "../Footer/Footer";
import React, { useEffect, useState } from "react";
import SongSearch from "../SongSearch/SongSearchCard";

const Home = () => {
  const [songData, setSongData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const handleSongData = (data = []) => {
    if (data.length && !songData.length) {
      setSongData(data);
    }
  };

  const dataFromNavbar = (data) => {
    setSearchData(data);
  };

  return (
    <div>
      <Navbar songData={songData} dataToParentHome={dataFromNavbar} />
      <Hero />
      <Wrapper />
      <SongWrapper sendDataToHome={handleSongData} />
      <Footer />
      <SongSearch songsData={searchData} />
    </div>
  );
};

export default Home;
