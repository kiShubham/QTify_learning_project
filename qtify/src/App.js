import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import { fetchTopAlbums } from "./api/api";
import Section from "./components/Section/Section";

function App() {
  const [topAlbumsData, setTopAlbumsData] = useState([]);

  const generateTopAlbumsData = async () => {
    const data = await fetchTopAlbums();
    setTopAlbumsData(data);
  };

  useEffect(() => {
    generateTopAlbumsData();
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <div>
        <Section title="Top Albums" data={topAlbumsData} type="albums" />
      </div>
    </div>
  );
}

export default App;
