import React from "react";
import styles from "./resume.module.css";
import Img from "../images/profile.jpg";

function Resume() {
  return (
    <div className={styles.pageWrap}>
      <img src={Img} alt='profile' className={styles.pic} />
      <div>
        <h1>Mr. Minh Bui</h1>
        <p>
          Mobile: <span>04-9039-7335</span>
          <br />
          Email:{" "}
          <a className={styles.email} href='mailto:tranduyminh.bui@gmail.com'>
            tranduyminh.bui@gmail.com
          </a>
        </p>
      </div>

      <div className={styles.objective}>
        <p>
          I am an outgoing and energetic professional, seeking a chance to
          showcase my professional skills as a Front-end Developer. I take pride
          in my ability of self-learning and doing research, thus my skill set
          is improving constantly. With an eye for aesthetics and a hard head
          for problem solving, I believe I will be a great asset for your
          company.
        </p>
      </div>
      <div className={styles.clear}></div>
      <dl>
        <dd className={styles.clear}></dd>
        <dt className={styles.edu}>Education</dt>
        <dd>
          <h2>University Of Technology - Sydney</h2>
          <p>
            <strong>Master:</strong> Professional Accounting
            {/* <br />
            <strong>Minor:</strong> Finance */}
          </p>
        </dd>
        <dd>
          <h2>University Sophia Antipolis - Nice</h2>
          <p>
            <strong>Bachelor:</strong> Science of Information - Communication
          </p>
        </dd>
        <dd>
          <h2>ARENA Academy - Ho Chi Minh city</h2>
          <p>
            <strong>Advanced Diploma:</strong> Multimedia Technology - Website
            Development
          </p>
        </dd>

        <dd className={styles.clear}></dd>

        <dt className={styles.skill}>Skills</dt>
        <dd>
          <h2>Front-end & Web Application</h2>
          <ul>
            <li>M.E.R.N stack: MongoDB - ExpressJS - ReactJS - NodeJS</li>
            <li>HTML 5, CSS 3, SASS, Javascript, Bootstrap, JQuery</li>
            <li>Git, Firebase, AuthO, Netlify, Heroku, Material-UI</li>
          </ul>
        </dd>
        <dd>
          <h2>Design skills</h2>
          <ul>
            <li>
              Adobe Suite: Photoshop, Lightroom, Premiere Pro, Illustrator
            </li>
            <li>Video & Photography skills</li>
          </ul>
        </dd>

        <dd className={styles.clear}></dd>

        <dt className={styles.exp}>Experience</dt>
        <dd>
          <h2>
            Freelance <span>Leader/Overlord - Baton Rogue, LA - 1926-2010</span>
          </h2>
          <ul>
            <li>
              Inspired and won highest peasant death competition among servants
            </li>
            <li>Helped coordinate managers to grow cult following</li>
            <li>Provided untimely deaths to all who opposed</li>
          </ul>

          <h2>
            The Watering Hole{" "}
            <span>Bartender/Server - Milwaukee, WI - 2009</span>
          </h2>
          <ul>
            <li>Worked on grass-roots promotional campaigns</li>
            <li>Reduced theft and property damage percentages</li>
          </ul>
        </dd>

        <dd className={styles.clear}></dd>

        <dt className={styles.hobbies}>Hobbies</dt>
        <dd>
          Travelling, Oldie Musics, Photography, Coding, New Technologies{" "}
        </dd>

        <dd className={styles.clear}></dd>

        {/* <dt>References</dt>
        <dd>Available on request</dd> */}

        {/* <dd className={styles.clear}></dd> */}
      </dl>

      <div className={styles.clear}></div>
    </div>
  );
}

export default Resume;
