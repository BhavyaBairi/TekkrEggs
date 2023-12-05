import React, { useEffect, useState } from "react";
import styles from "./MakesSpl.module.css";
import henn from "../../../Assets/henn.gif";
import wheat from "../../../Assets/wheat.png";
import farm from "../../../Assets/farm.png";
import chemical from "../../../Assets/chemical.png";
import air from "../../../Assets/air.png";
import vegetable from "../../../Assets/vegetable.png";
import leaf from "../../../Assets/leaf.png";
import water from "../../../Assets/water.png";
import pills from "../../../Assets/pills.png";
import Aos from "aos";
import "aos/dist/aos.css";

export default function MakesSpl() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className={styles.makesplmaindiv}>
      <div className={styles.makesplmaindiv1}>
        <h2>WHAT MAKES US SPECIAL ?</h2>
      </div>
      <div className={styles.makesplmaindiv2}>
        <div data-aos="zoom-out" className={styles.makesplhen}>
          <img src={henn} alt="henn" />
        </div>
        <div className={styles.makesplhencantent}>
          <div data-aos="fade-up" className={styles.makesplhencantentrow}>
            <div className={styles.makesplhencantentrow1}>
              <div className={styles.imgs}>
              <div>
              <img src={wheat} alt="wheat" />
              </div>
              <div>
              <p>Nutrition Rich Food</p>
              </div>
              </div>
            </div>
            <div className={styles.makesplhencantentrow1}>
              <div className={styles.imgs}>
                <div>
                  <img src={farm} alt="farm" />
                </div>
                <div>
                  <p>Mordern Farm</p>
                </div>
              </div>
            </div>
            <div className={styles.makesplhencantentrow1}>
              <div className = {styles.imgs}>
                <div>
                  <img src={chemical} alt="chemical" />
                </div>
                <div>
                  <p>No Chemical or heavy metal</p>
                </div>
              </div>
            </div>
            <div className={styles.makesplhencantentrow1}>
              <div className={styles.imgs}>
                <div>
                  <img src={air} alt="air" />
                </div>
                <div>
                  <p>No Bad Odour</p>
                </div>
              </div>
            </div>
          </div>
          {/* <div data-aos="fade-right" className={styles.makesplhen2}>
            <img src={henn} alt="henn" />
          </div> */}
          <div data-aos="fade-down" className={styles.makesplhencantentrow}>
            <div className={styles.makesplhencantentrow1}>
              <div className={styles.imgs}>
                <div>
                  <img src={vegetable} alt="vegetable" />
                </div>
                <div>
                  <p>Vegetarian feed</p>
                </div>
              </div>
            </div>
            <div className={styles.makesplhencantentrow1}>
              <div className={styles.imgs}>
                <div>
                  <img src={leaf} alt="leaf" />
                </div>
                <div>
                  <p>Ozonized Water</p>
                </div>
              </div>
            </div>
            <div className={styles.makesplhencantentrow1}>
              <div className={styles.imgs}>
                <div>
                  <img src={water} alt="water" />
                </div>
                <div>
                 <p>No Antibiotics</p> 
                </div>
              </div>
            </div>
            <div className={styles.makesplhencantentrow1}>
              <div className={styles.imgs}>
                <div>
                   <img src={pills} alt="pills" />  
                </div>
                <div>
                  <p>Hens grown in pollution free environment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
