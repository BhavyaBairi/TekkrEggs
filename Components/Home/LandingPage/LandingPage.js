import React, { useEffect, useState } from "react";
import eggs from "../../../Assets/eggs.png";
import eggtre from "../../../Assets/eggtre.png";
import eggcrack from "../../../Assets/cluck.png";

import sun from "../../../Assets/sun.png";
import vector from "../../../Assets/Vector.png";
import feather from "../../../Assets/feather.png";

import videoo from "../../../Assets/videoo.mp4";

import Slider from "react-slick";
import styles from "./LandingPage.module.css";

import Aos from "aos";
import "aos/dist/aos.css";

export default function LandingPage() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={styles.landiv}>
      {/* // <Slider {...settings} className={styles.landiv2}> */}
      <div className={styles.eggsdivmain}>
        <div data-aos="fade-right" className={styles.cluckmaindiv}>
          <div className={styles.cluckmaindivp}>
            <h2>CLUCK</h2>
            <h2>CLUCK</h2>
          </div>
          <div data-aos="zoom-in" className={styles.cluckmaindivimg}>
            <img src={eggcrack} alt="eggcrack" />
          </div>
          <div className={styles.cluckmaindivpp}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
        <div className={styles.eggseggstremaindiv1}>
          <div className={styles.eggseggstremaindiv}>
            <div className={styles.eggsdiv}>
              {/* <img src={eggs} alt="eggs" /> */}
              <video loop autoplay="" muted className={styles.eggsdivvc}>
                <source src={videoo} type="video/mp4" />
              </video>
            </div>
            <div className={styles.eggstrediv}>
              <img src={eggtre} alt="eggs" />
              <span className={styles.shadow2}></span>
            </div>
          </div>
        </div>
        <div data-aos="fade-right" className={styles.sunvecmaindiv}>
          <div data-aos="zoom-in-up" className={styles.sunvecmaindivimg}>
            <img src={sun} alt="sun" />
          </div>
          <div className={styles.sunvecmaindivp}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className={styles.sunvecmaindivvec}>
            <img src={vector} alt="vector" />
          </div>
          <div className={styles.sunvecmaindivfeather}>
            <img src={feather} alt="vector" />
            <span className={styles.shadow}></span>
          </div>
        </div>
      </div>
      {/* <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
    </Slider> */}
    </div>
  );
}
