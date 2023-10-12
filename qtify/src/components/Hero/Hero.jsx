import React from "react";
import styles from "./Hero.module.css";
import heroImg from "../../assets/vibrating-headphone 1.png";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <div>
        <img src={heroImg} alt="Hero_image" width={212} />
      </div>
    </div>
  );
};

export default Hero;

// the ageda of making a hero section is to give an idea that what this webapp do ;
// we can either use a component for hero image
