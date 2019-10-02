import React from "react";

import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import AppsIcon from "@material-ui/icons/Apps";

const styles = theme => ({
  ...theme.spreadIt
});

function Home(props) {
  const {classes} = props;

  return (
    <div className={classes.containerPage}>
      <Grid container spacing={2}>
        <Grid item md>
          <Paper className={classes.paper}>
            'm a Australia based front‑end developer & photographer focused on
            crafting clean & user‑friendly experiences. Below you can see some
            projects I've been working on lately. I divide each project into
            four follow-up areas: comprehensive research, wireframing, design &
            development. This process allows me to create great product with
            client goals in mind.
            <FacebookIcon color='primary' fontSize='large' />
            <InstagramIcon color='primary' fontSize='large' />
            <EmailIcon color='primary' fontSize='large' />
            <PhoneAndroidIcon color='primary' fontSize='large' />
            <AppsIcon color='primary' fontSize='large' />
          </Paper>{" "}
        </Grid>
        <Grid item md={8}>
          <Paper className={classes.paper}>
            ABOUT ME I'm web designer & front-end developer with 7 years of
            professional experience. I'm interested in all kinds of visual
            communication, but my major focus is on designing web, mobile &
            tablet interfaces. I also have skills in other fields like branding,
            icon design or web development.
          </Paper>{" "}
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(Home);
