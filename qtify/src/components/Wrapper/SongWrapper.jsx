// import React, { useState, useEffect } from "react";
// import { fetchAllSongs } from "../../api/api";
// import { fetchGenres } from "../../api/api";
// import Section from "../Section/Section";
// import styles from "./Song.module.css";
// import SongBtn from "../Button/SongsBtn";

// const SongWrapper = ({ sendDataToHome }) => {
//   const [genres, setGenres] = useState([]);
//   const [allSongs, setAllSongs] = useState([]);
//   const [rock, setRock] = useState([]);
//   const [blues, setBlues] = useState([]);
//   const [pop, setPop] = useState([]);
//   const [jazz, setJazz] = useState([]);
//   const [selectedGenre, setSelectedGenre] = useState([]);

//   const getGenres = async () => {
//     const data = await fetchGenres();
//     setGenres(data);
//   };

//   const getAllsong = async () => {
//     const data = await fetchAllSongs();
//     setAllSongs(data);
//     setSelectedGenre(allSongs);
//     setBlues(data.filter((e) => e.genre.key === "blues")); //make dynamic
//     setPop(data.filter((e) => e.genre.key === "pop"));
//     setRock(data.filter((e) => e.genre.key === "rock"));
//     setJazz(data.filter((e) => e.genre.key === "jazz"));
//   };

//   useEffect(() => {
//     getGenres();
//     getAllsong();

//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   sendDataToHome(allSongs);

//   const handleSelectSong = (data) => {
//     setSelectedGenre(data);
//   };

//   return (
//     <div>
//       <div className={styles.songsWrapper}>
//         <h4 className={styles.heading}>Songs</h4>
//         <div className={styles.btnGroup}>
//           {/* make dynamic */}
//           <SongBtn title="All" data={allSongs} setSongs={handleSelectSong} />
//           <SongBtn title="Rock" data={rock} setSongs={handleSelectSong} />
//           <SongBtn title="Pop" data={pop} setSongs={handleSelectSong} />
//           <SongBtn title="Jazz" data={jazz} setSongs={handleSelectSong} />
//           <SongBtn title="Blues" data={blues} setSongs={handleSelectSong} />
//         </div>
//         <Section data={selectedGenre} type="songs" showTime={false} />
//       </div>
//       <div className={styles.line}></div>
//     </div>
//   );
// };

// export default SongWrapper;

import React, { useState, useEffect } from "react";
import { fetchAllSongs, fetchGenres } from "../../api/api";
import Section from "../Section/Section";
import styles from "./Song.module.css";
import SongBtn from "../Button/SongsBtn";

const SongWrapper = ({ sendDataToHome }) => {
  const [data, setData] = useState({
    genres: [],
    allSongs: [],
    selectedGenre: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const [genres, allSongs] = await Promise.all([
        fetchGenres(),
        fetchAllSongs(),
      ]);

      setData({
        ...data,
        genres,
        allSongs,
        selectedGenre: allSongs, // Initializing with all songs
      });

      sendDataToHome(allSongs);
    };

    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sendDataToHome]);

  const handleSelectSong = (selectedGenre) => {
    setData({ ...data, selectedGenre });
  };

  const renderGenreButtons = () => {
    return data.genres.map((genre, idx) => (
      <SongBtn
        key={genre.key}
        title={genre.label}
        data={data.allSongs.filter((e) => e.genre.key === genre.key)}
        setSongs={handleSelectSong}
      />
    ));
  };

  return (
    <div>
      <div className={styles.songsWrapper}>
        <h4 className={styles.heading}>Songs</h4>
        <div className={styles.btnGroup}>
          <SongBtn
            title="All"
            data={data.allSongs}
            setSongs={handleSelectSong}
          />
          {renderGenreButtons()}
        </div>
        <Section data={data.selectedGenre} type="songs" showTime={false} />
      </div>
      <div className={styles.line}></div>
    </div>
  );
};

export default SongWrapper;
