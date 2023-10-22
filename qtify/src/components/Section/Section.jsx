import React, { useState } from "react";
import styles from "./Section.module.css";
import { CircularProgress } from "@mui/material";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";

const Section = ({ title = "", data, type, showTime = true }) => {
  const [carouselToggle, setCarouselToggle] = useState(true);
  const [keyN, setKeyN] = useState(0);

  const handleToggle = () => {
    setCarouselToggle(!carouselToggle);
  };

  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
        {showTime ? (
          <>
            <h4 className={styles.toggleText} onClick={handleToggle}>
              {!carouselToggle ? "Collapse All" : "Show All"}
            </h4>
          </>
        ) : (
          <></>
        )}
      </div>
      {!data.length ? (
        <CircularProgress />
      ) : (
        <div className={styles.cardsWrapper}>
          {!carouselToggle ? (
            <div className={styles.wrapper}>
              {data.map((item) => (
                <Card data={item} type={type} />
              ))}
            </div>
          ) : (
            <Carousel
              data={data}
              renderComponent={(data) => <Card data={data} type={type} />}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Section;
