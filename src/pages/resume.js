import React from 'react';
import { Spring } from 'react-spring/renderprops';
import styles from './resume.module.css';
import Img from '../images/profile.jpg';

function Resume() {
  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ duration: 500 }}
    >
      {() => (
        <div className={styles.pageWrap}>
          <img src={Img} alt='profile' className={styles.pic} />
          <div>
            <h1>. Minh Bui .</h1>
            <p>
              Mobile: <span>0490-397-335</span>
              <br />
              Email:{' '}
              <a
                className={styles.email}
                href='mailto:tranduyminh.bui@gmail.com'
              >
                tranduyminh.bui@gmail.com
              </a>
              <br />
              Portfolio:{' '}
              <a
                className={styles.email}
                href='https://minhbui-porfolio-dev.netlify.app/'
              >
                https://minhbui-porfolio-dev.netlify.app/
              </a>
            </p>
          </div>

          <div className={styles.objective}>
            <p>
              I am an outgoing and energetic professional, seeking a chance to
              showcase my professional skills as a Front-end Developer. I take
              pride in my ability of self-learning and doing research, thus my
              skill set is improving constantly. With an eye for aesthetics and
              a hard head for problem solving, I believe I will be a great asset
              for your company.
            </p>
          </div>
          <div className={styles.clear}></div>
          <dl>
            <dd className={styles.clear}></dd>
            <dt className={styles.edu}>Education</dt>
            <dd>
              <h2>Le Wagon Coding Bootcamp - Melbourne</h2>
              <p>
                <strong>- Fullstack Web Developer intensive course</strong>
              </p>
            </dd>
            <dd>
              <h2>University Of Technology - Sydney</h2>
              <p>
                <strong>- Master:</strong> Professional Accounting
                {/* <br />
            <strong>Minor:</strong> Finance */}
              </p>
            </dd>
            <dd>
              <h2>University Sophia Antipolis - Nice</h2>
              <p>
                <strong>- Bachelor:</strong> Science of Information -
                Communication
              </p>
            </dd>
            <dd>
              <h2>ARENA Academy - Ho Chi Minh city</h2>
              <p>
                <strong>- Advanced Diploma:</strong> Multimedia Technology -
                Website Development
              </p>
            </dd>

            <dd className={styles.clear}></dd>

            <dt className={styles.skill}>Skills</dt>
            <dd>
              <h2>Front-end & Web Application</h2>
              <ul>
                <li>M.E.R.N stack: MongoDB - ExpressJS - ReactJS - NodeJS</li>
                <li>
                  HTML 5, CSS 3, SASS, Javascript, Redux, Ruby, Ruby on Rails,
                  PostgreSQL, mySQL, Bootstrap, JQuery
                </li>
                <li>
                  Git, Testing, Zest, Enzyme, Mocha, Firebase, MongoDB, AuthO,
                  Netlify, Heroku, Material-UI, Semantic-UI
                </li>
              </ul>
            </dd>
            <dd>
              <h2>Graphic Design and UI skills</h2>
              <ul>
                <li>
                  Adobe Suite: Photoshop, Lightroom, Premiere Pro, Illustrator
                </li>
                <li>
                  UI Design and prototyping tools such as Figma and Adobe XD
                </li>
                <li>Videography & Photography skills</li>
              </ul>
            </dd>

            <dd className={styles.clear}></dd>

            <dt className={styles.exp}>Experience</dt>
            <dd>
              <h2>
                Freelance Developer{' '}
                <span>Minh Bui Studio - Sydney/Adelaide - 2018-present</span>
              </h2>
              <ul>
                <li>
                  Successfully delivered 4 websites in professional and timely
                  manner
                </li>
                <li>
                  3 finished web applications using M.E.R.N stack and counting
                </li>
                <li>
                  Led development of a Ruby on Rails application for filtering
                  Breaking News using Language Processing tech and ThreeJS
                </li>
                <li>Delivered an AirBnB-style site for online marketplace</li>
                <li>Developed promotional contents for businesses</li>
              </ul>

              <h2>
                TEDx University of South Australia{' '}
                <span>Team visual marketing - Adelaide - 2019</span>
              </h2>
              <ul>
                <li>Worked on promotional campaigns</li>
                <li>
                  Produced visual contents of the event for speakers and guests
                </li>
              </ul>
            </dd>

            <dd className={styles.clear}></dd>

            <dt className={styles.hobbies}>Hobbies</dt>
            <dd>
              <ul>
                <li>Travelling, Musics: Jazz, Ballad & Swing, Piano</li>
                <li>Street Photography, Coding, New Technologies</li>
              </ul>{' '}
            </dd>

            <dd className={styles.clear}></dd>

            {/* <dt>References</dt>
        <dd>Available on request</dd> */}

            {/* <dd className={styles.clear}></dd> */}
          </dl>

          <div className={styles.clear}></div>
        </div>
      )}
    </Spring>
  );
}

export default Resume;
