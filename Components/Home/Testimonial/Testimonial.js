import React from "react";
import testy from "../../../Assets/testy.png";

import Slider from "react-slick";
import styles from "./Testimonial.module.css";

export default function Testimonial() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={styles.testymaindiv}>
      {/* // <Slider {...settings} className={styles.landiv2}> */}
      <div className={styles.testy1}>
        <div className={styles.testymaindivh2}>
          <h2>
            take a look at what our <br /> customers say!
          </h2>
        </div>
        <div className={styles.testy1imagetest}>
          <div className={styles.testy1imagetest1}>
            <div className={styles.qut}>
              <div className={styles.qut1}>
                <div className={styles.qut01}>
                  <span>&quot;</span>
                  <h4>DIWAN ALI</h4>
                </div>
                <div className={styles.qut03}>
                  <p>Sharaj</p>, <p>Dubai</p>
                </div>
              </div>
              <div className={styles.qutp}>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Elementum malesuada
                  condimentum sit ultricies tristique ornare ullamcorper
                  consequat urna. Commodo ipsum id
                </p>
              </div>
            </div>
          </div>
          <div className={styles.testy1imagetest2}>
            <img src={testy} alt="testy" />
          </div>
          <div className={styles.display}>
          <div className={styles.qut}>
            <div className={styles.qut1}>
              <div className={styles.qut01}>
                <span>&quot;</span>
                <h4>DIWAN ALI</h4>
              </div>
              <div className={styles.qut03}>
                <p>Sharaj</p>, <p>Dubai</p>
              </div>
            </div>
            <div className={styles.qutp}>
              <p>
                Lorem ipsum dolor sit amet consectetur. Elementum malesuada
                condimentum sit ultricies tristique ornare ullamcorper consequat
                urna. Commodo ipsum id
              </p>
            </div>
          </div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.text}>
        <div className={styles.testy1imagetest1}>
          <div className={styles.qut}>
            <div className={styles.qut1}>
              <div className={styles.qut01}>
                <span>&quot;</span>
                <h4>DIWAN ALI</h4>
              </div>
              <div className={styles.qut03}>
                <p>Sharaj</p>, <p>Dubai</p>
              </div>
            </div>
            <div className={styles.qutp2}>
              <p>
                Lorem ipsum dolor sit amet consectetur. Elementum malesuada
                condimentum sit ultricies tristique ornare ullamcorper consequat
                urna. Commodo ipsum id
              </p>
            </div>
          </div>
        </div></div>
        <div className={styles.displaycontent}>
        <div className={styles.testy1imagetest1}>
          <div className={styles.qut3}>
            <div className={styles.qut1}>
              <div className={styles.qut01}>
                <span>&quot;</span>
                <h4>DIWAN ALI</h4>
              </div>
              <div className={styles.qut03}>
                <p>Sharaj</p>, <p>Dubai</p>
              </div>
            </div>
            <div className={styles.qutp3}>
              <p>
                Lorem ipsum dolor sit amet consectetur. Elementum malesuada
                condimentum sit ultricies tristique ornare ullamcorper consequat
                urna. Commodo
              </p>
            </div>
          </div>
        </div>
        </div>
        </div>
      </div>
      {/* <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div> */}
      {/* </Slider> */}
    </div>
  );
}
