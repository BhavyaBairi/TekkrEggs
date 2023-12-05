import React, { useEffect, useState } from "react";
import styles from "./Stories.module.css";
import storyegg from "../../../Assets/storyegg.png";
import stories from "../../../Assets/stories.png";
import chkpe from "../../../Assets/chkpe.png";
import wavee from "../../../Assets/wavee.png";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Stories() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className={styles.storiesmaindiv}>
      <div className={styles.storiesmaindivimgh2}>
        <div className={styles.storiesmaindivimg}>
          <img src={storyegg} alt="storyegg" />
        </div>
        <div className={styles.storiesmaindivimgh22}>
          <h2>OUR EGG STORIES ARE NARRATED</h2>
          <h2> WITH LOVE!</h2>
        </div>
      </div>
      <div className={styles.storywavecontentdiv}>
        <div className={styles.storywavecontentdiv2}>
          <div data-aos="fade-right" className={styles.story12}>
            <img src={stories} alt="stories" />
          </div>
          <div data-aos="zoom-in" className={styles.story22}>
            <img src={chkpe} alt="chkpe" />
          </div>
        </div>
        <div className={styles.storywavecontentdivimg}>
          <img src={wavee} alt="wavee" />
        </div>
      </div>
    </div>
  );
}
