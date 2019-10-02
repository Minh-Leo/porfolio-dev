import React from "react";
import styles from "./about.module.css";
import logo from "../images/logo.png";

function About() {
  return (
    <div className={styles.pageWrap}>
      <div className={styles.objective}>
        <img src={logo} alt='logo' className={styles.pic} />
        <p>
          Minh Bui - Porfolio v1.0.0. This web application is made with ReactJS,
          Material-UI, Module CSS and deployed on Netlify.
        </p>
      </div>
    </div>
  );
}

export default About;
