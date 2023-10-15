import React, { useEffect, useState } from "react";
import { ReactComponent as LeftArrow } from "../../assets/LeftNav.svg";
import { useSwiper } from "swiper/react";
import styles from "./Carousel.module.css";

const CarouselLeftNav = ({ data }) => {
  const swiper = useSwiper();

  const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

  useEffect(() => {
    swiper.on("slideChange", function () {
      setIsBeginning(swiper.isBeginning);
    });
  }, [isBeginning, swiper, swiper.isBeginning]); //*remeber the dependency array

  return (
    <div className={styles.leftNavigation}>
      {!isBeginning && <LeftArrow onClick={() => swiper.slidePrev()} />}
    </div>
  );
};

export default CarouselLeftNav;
