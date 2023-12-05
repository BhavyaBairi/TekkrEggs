import React, { useEffect, useState } from "react";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";
import LandingPage from "../LandingPage/LandingPage";
import MakesSpl from "../MakesSpl/MakesSpl";
import Stories from "../Stories/Stories";
import Testimonial from "../Testimonial/Testimonial";
import TypesOfEggs from "../TypesOfEggs/TypesOfEggs";
import WhyChooseTekkrEggs from "../WhyChooseTekkrEggs/WhyChooseTekkrEggs";
import styles from "./Homepage.module.css";
import fethr from "../../../Assets/bigf.png";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Homepage() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <Navbar />
      <div className={styles.landwhy}>
        <div>
          <LandingPage />
        </div>
        <div data-aos="fade-right" className={styles.landwhy21}>
          <img src={fethr} alt="fethr" />
        </div>
        <div className={styles.landwhy2}>
          <WhyChooseTekkrEggs />
        </div>
      </div>
      <Stories />
      <MakesSpl />
      <TypesOfEggs />
      <Testimonial />
      <Footer />
    </div>
  );
}
