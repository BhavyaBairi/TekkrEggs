import React from "react";
import styles from "./Footer.module.css";
import footerbck from "../../Assets/footer.png";
import { NavLink } from "reactstrap";

export default function Footer() {
  return (
    <div className={styles.footermaindiv} id="contactus">
      <div className={styles.footermaindivimg}>
        <img src={footerbck} alt="footer" />
      </div>
      <div className={styles.footermaindivcontent}>
        <div className={styles.footermaindivcontent2}>
          <div className={styles.footermaindivcontent2img}>
            <h2>TekkrEggs</h2>
          </div>
          <div className={styles.footermaindivcontent2imgp12}>
            <div className={styles.footermaindivcontent2imgp}>
              <NavLink href={"/"}>
              <p>Home</p>
              </NavLink>
              <p>Contact us</p>
            </div>
            <div className={styles.footermaindivcontent2imgp2}>
              <p>
                <a href = "tel:72828882828">72828882828</a>
                </p>
              <p>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=tekkr@tekkreggs.com" target="_blank">tekkr@tekkreggs.com</a>
                </p>
            </div>
          </div>
        </div>
        {/* <div className={styles.left}>
          <p>
          Lorem ipsum dolor sit amet consectetur. Sed porttitor viverra non et.Lorem ipsum Lorem ipsum dolor sit amet consectetur. Sed porttitor viverra non et.Lorem ipsum
          </p>
        </div>
        <div className={styles.right}>
          <p>
          Lorem ipsum dolor sit amet consectetur. Sed porttitor viverra non et.Lorem ipsum Lorem ipsum dolor sit amet consectetur. Sed porttitor viverra non et.Lorem ipsum   
          </p>
        </div> */}
      </div>
    </div>
  );
}
