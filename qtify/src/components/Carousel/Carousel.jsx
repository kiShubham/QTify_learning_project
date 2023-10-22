import React, { useEffect } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import styles from "./Carousel.module.css";
import { Navigation } from "swiper/modules";
import CarouselLeftNav from "./CarouselLeftNav";
import CarouselRightNav from "./CarouselRightNav";
import "swiper/css";

const Controls = ({ data }) => {
  const swiper = useSwiper(); // swiper will be an obj , useSwiper is a hook ;

  useEffect(() => {
    swiper.slideTo(0, null); //1st param:from which slide we want to start ; 2nd param :speed : null (default ) can give in ms like 10,1000 or 500 whatever
  }, [data]);

  return <></>;
};

const Carousel = ({ data, renderComponent }) => {
  return (
    <div className={styles.wrapper}>
      <Swiper
        style={{ padding: "0px 20px" }}
        initialSlide={0}
        modules={[Navigation]}
        slidesPerView={"auto"} // how many slide to show at once
        spaceBetween={40} // gap b/w slides
        allowTouchMove // used in touch screens
      >
        <Controls data={data} />
        <CarouselLeftNav />
        <CarouselRightNav />

        {data.map((item, idx) => (
          <SwiperSlide key={idx}>{renderComponent(item)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
