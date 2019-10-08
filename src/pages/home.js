import React from "react";
import {Link} from "react-router-dom";
import profile2 from "../images/profile2.jpg";

import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import CameraIcon from "@material-ui/icons/Camera";
import AppsIcon from "@material-ui/icons/Apps";

const styles = theme => ({
  ...theme.spreadIt
});

function Home(props) {
  const {classes} = props;

  return (
    <div className={classes.containerPage}>
      <Grid container>
        <Grid item md>
          <div className='profileContainer'>
            <img
              className={classes.image}
              src={profile2}
              alt='profile Minh Bui'
            />
            <ul>
              <li>
                <FacebookIcon color='primary' fontSize='default' />
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://www.facebook.com/Nekoroden'
                >
                  https://www.facebook.com/Nekoroden
                </a>
              </li>
              <li>
                <EmailIcon color='primary' fontSize='default' />
                <a>tranduyminh.bui@gmail.com</a>
              </li>

              <li>
                <CameraIcon color='primary' fontSize='default' />
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://tranduyminhbui.wixsite.com/porfolio'
                >
                  https://tranduyminhbui.wixsite.com/porfolio
                </a>
              </li>
              <li>
                <PhoneAndroidIcon color='primary' fontSize='default' />{" "}
                <a>0490 - 397 - 335</a>
              </li>
            </ul>
          </div>{" "}
        </Grid>
      </Grid>

      <Grid container>
        <Grid item md>
          <Paper className={`${classes.paper}`}>
            <h1>Hello, I'm Minh Bui.</h1>

            {/* <h1>Front-end Web Developer</h1> */}
            <p className={classes.descript}>
              I'm an Australia based front‑end developer & photographer focused
              on crafting clean & user‑friendly experiences. On the next page
              you can see some projects I've been working on lately, they are
              mainly built with HTML - CSS - Javascript - ReactJS with Redux and
              Context API on the Front-end, then MongooseDB, Firebase, ExpressJS
              and NodeJS on the Back-end.
              <br />
              <br /> I'm interested in all kinds of visual communication, but my
              major focus is on designing and developing web, mobile & tablet
              interfaces. I also have skills in other fields such as photography
              and videography. So let's get in touch and talk more about your
              next web project!
            </p>
            <Link to='/projects'>
              <AppsIcon
                className={classes.appIcon}
                color='primary'
                fontSize='large'
              />{" "}
            </Link>
          </Paper>{" "}
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(Home);
