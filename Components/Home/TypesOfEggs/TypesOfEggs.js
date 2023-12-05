import React, { useEffect } from "react";
import styles from "./TypesOfEggs.module.css";
import brawneggs from "../../../Assets/brawneggs.png";
import nutura from "../../../Assets/nutura.png";
import whiteeggs from "../../../Assets/whiteeggs.png";
import freeeggs from "../../../Assets/freeeggs.png";
import nest from "../../../Assets/nest.png";
import eggnest from "../../../Assets/groupeggs.png";
import whitegg from '../../../Assets/whitegg.png';

import Aos from "aos";
import "aos/dist/aos.css";

export default function TypesOfEggs() {
  useEffect ( () => {
    Aos.init({duration:2000})
  },[])
  const handleOnClick = () => {
    window.open(
      "https://api.whatsapp.com/send?phone=14798024855&text=%232YrLu",
      "_blank"
    );
  };
  return (
    <div  className={styles.typeeggsmaindiv} id="eggsss">
      <div data-aos = "fade-up" className={styles.typeeggsmaindivv1}>
        <div  className={styles.typeeggsmaindiv1}>
        <div  className={styles.typeeggsmaindivbox}>
            <div className={styles.typeeggsmaindivboxdiv}>
              <img src={brawneggs} alt="nutura" />
            </div>
            <div className={styles.typeeggsmaindivboxhead}>
              <p>NUTRA EGGS</p>
            </div>
            <div className={styles.typeeggsmaindivboxtent}>
              <p>
                Lorem ipsum dolor sit amet consectetur. Sed porttitor viverra
                non et.
              </p>
            </div>
          </div>

          <div className={styles.nestt} type="button" onClick={handleOnClick}>
            <img
              src={eggnest}
              className={styles.nestegg}
              style={{
                "margin-bottom": "-90px",
                position: "absolute",
                "z-index": "99",
                width: "73px",
                height: "52px",
                "margin-left": "30%",
              }}
            />
            <img src={nest} alt="nest" />
            <span className={styles.shadow}></span>
          </div>
        </div>
        <div className={styles.typeeggsmaindiv1}>
          <div className={styles.typeeggsmaindivbox}>
            <div className={styles.typeeggsmaindivboxdiv}>
              <img src={nutura} alt="nutura" />
            </div>
            <div className={styles.typeeggsmaindivboxhead}>
              <p>NUTRA EGGS</p>
            </div>
            <div className={styles.typeeggsmaindivboxtent}>
              <p>
                Lorem ipsum dolor sit amet consectetur. Sed porttitor viverra
                non et.
              </p>
            </div>
          </div>
          <div className={styles.nestt} type="button" onClick={handleOnClick}>
            <img
              src={eggnest}
              className={styles.nestegg}
              style={{
                "margin-bottom": "-90px",
                position: "absolute",
                "z-index": "99",
                width: "73px",
                height: "52px",
                "margin-left": "30%",
              }}
            />
            <img src={nest} alt="nest" />
            <span className={styles.shadow}></span>
          </div>
        </div>
        <div className={styles.typeeggsmaindiv1}>
          <div className={styles.typeeggsmaindivbox}>
            <div className={styles.typeeggsmaindivboxdiv}>
              <img src={whiteeggs} alt="whiteeggs" />
            </div>
            <div className={styles.typeeggsmaindivboxhead}>
              <p>WHITE EGGS</p>
            </div>
            <div className={styles.typeeggsmaindivboxtent}>
              <p>
                Lorem ipsum dolor sit amet consectetur. Sed porttitor viverra
                non et.
              </p>
            </div>
          </div>
          <div className={styles.nestt} type="button" onClick={handleOnClick}>
            <img
              src={whitegg}
              className={styles.nestegg}
              style={{
                "margin-bottom": "-90px",
                position: "absolute",
                "z-index": "99",
                width: "73px",
                height: "52px",
                "margin-left": "30%",
              }}
            />
            <img src={nest} alt="nest" />
            <span className={styles.shadow}></span>
          </div>
        </div>
        <div className={styles.typeeggsmaindiv1}>
          <div className={styles.typeeggsmaindivbox}>
            <div className={styles.typeeggsmaindivboxdiv}>
              <img src={freeeggs} alt="freeeggs" />
            </div>
            <div className={styles.typeeggsmaindivboxhead}>
              <p>FREE RANGE EGGS</p>
            </div>
            <div className={styles.typeeggsmaindivboxtent}>
              <p>
                Lorem ipsum dolor sit amet consectetur. Sed porttitor viverra
                non et.
              </p>
            </div>
          </div>
          <div className={styles.nestt} type="button" onClick={handleOnClick}>
            <img
              src={eggnest}
              className={styles.nestegg}
              style={{
                "margin-bottom": "-90px",
                position: "absolute",
                "z-index": "99",
                width: "73px",
                height: "52px",
                "margin-left": "30%",
              }}
            />
            <img src={nest} alt="nest" />
            <span className={styles.shadow}></span>
          </div>
        </div>
      </div>
    </div>
  );
}
