import React, { useEffect, useState } from "react";
import styles from "./WhyChooseTekkrEggs.module.css";

// import frsh from "../../../Assets/frshegg.png";
import safty from "../../../Assets/safty.png";
import laid from "../../../Assets/laid.png";
import twofethers from "../../../Assets/twofethers.png";
import eggtra from "../../../Assets/eggstra.png";
import Aos from "aos";
import "aos/dist/aos.css";
import whiteegg from '../../../Assets/whiteegg.png';
import grpegg from '../../../Assets/groupegg.png';

export default function WhyChooseTekkrEggs() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className={styles.WhyChooseTekkrEggsmindiv}>
      <div className={styles.WhyChooseTekkrEggsmindiv1}>
        <div
          data-aos="fade-right"
          data-aos-easing="linear"
          className={styles.whychimgmain}
        >
          <div className={styles.whychimgmainimg}>
            <img src={whiteegg} alt="frsh" />
          </div>
          <div className={styles.whychimgmainimg2text}>
            <h2>ONE DAY FRESH EGGS</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1500"
          data-aos-delay="500"
          className={styles.whychimgmain2}
        >
          <div className={styles.whychimgmainimg2text2}>
            <h2>PASSES 11 SAFTY CHECKS</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className={styles.whychimgmainimg2}>
            <img src={safty} alt="frsh" />
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1500"
          data-aos-delay="500"
          className={styles.whychimgmain}
        >
          <div className={styles.whychimgmainimg2}>
            <img src={grpegg} alt="frsh" className={styles.grpegg} />
          </div>
          <div className={styles.whychimgmainimg2text}>
            <h2>LAID BY HENS ON HERBAL FEED</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
        <div className={styles.WhyChooseTekkrEggsmindiv2}></div>
      </div><div data-aos="fade-up">
      <div className={styles.whycemaindiv12}>
        <div className={styles.whycemaindiv}>
          
          <div className={styles.whycemaindiv2}>
            <div className={styles.whycemaindivhp}>
              <div className={styles.whycemaindivh}>
                <h2>WHY CHOOSE TEKKR EGGS</h2>
              </div>
              <div className={styles.whycemaindivp}>
                <p>
                  “At Tekkr eggs, we work with nature to create richer, more
                  flavorful eggs. There is an extra dose of health in each of
                  our eggs....... The proof is inside the shell”
                </p>
              </div>
            </div>
            <div className={styles.whycemaindivimgs}>
              <div className={styles.whycemaindivimgs1}>
                <img src={twofethers} alt="twofethers" />
              </div>
              <div className={styles.whycemaindivimgs2}>
                <img src={eggtra} alt="eggtra" />
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
