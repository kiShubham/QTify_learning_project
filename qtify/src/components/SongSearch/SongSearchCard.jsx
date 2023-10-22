import React from "react";
import styles from "./SongSearchCard.module.css";

const SongSearch = ({ songsData }) => {
  return (
    <>
      {songsData.length ? (
        <div className={styles.searchResult}>
          <div className={styles.positionParent}>
            <div className={styles.resultWrapper}>
              <>
                {songsData.map((item, idx) => {
                  return (
                    <div className={styles.resultChild} key={idx}>
                      <div className={styles.child1}>
                        <img
                          src={item.image}
                          alt="album"
                          className={styles.img}
                        />
                        <div>{item.title}</div>
                      </div>
                      <div>{item.likes} Likes</div>
                    </div>
                  );
                })}
              </>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SongSearch;
