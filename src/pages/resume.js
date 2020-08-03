import React from 'react';
import { Spring } from 'react-spring/renderprops';
import styles from './resume.module.css';
// import Img from '../images/profile.jpg';

function Resume() {
  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ duration: 500 }}
    >
      {() => (
        <div className={styles.pageWrap}>
          <iframe title='resume' width='100%' height='800'></iframe>
        </div>
      )}
    </Spring>
  );
}

export default Resume;
