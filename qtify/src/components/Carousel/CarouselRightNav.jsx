import React, { useEffect, useState } from "react";
import { ReactComponent as RightArrow } from "../../assets/rightNav.svg";
import { useSwiper } from "swiper/react";
import styles from "./Carousel.module.css";

const CarouselRightNav = () => {
  const swiper = useSwiper();

  const [isEnd, setIsEnd] = useState(swiper.isEnd);

  useEffect(() => {
    swiper.on("slideChange", function () {
      setIsEnd(swiper.isEnd);
    });
  }, []);

  return (
    <div className={styles.rightNavigation}>
      {!isEnd && <RightArrow onClick={() => swiper.slideNext()} />}
    </div>
  );
};

export default CarouselRightNav;
