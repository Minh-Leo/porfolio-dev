import React, { useState } from "react";
import { Spring } from "react-spring/renderprops";

import CardPorfo from "../components/Card";
import CardPorfoLong from "../components/CardLong";
import web1 from "../images/porfoweb1-thumb.png";
import web2 from "../images/porfoweb2-thumb.png";
import web3 from "../images/porfoweb3-thumb.png";
import web4 from "../images/porfoweb4-thumb.png";
import web5 from "../images/porfoweb5-thumb.png";
import react1 from "../images/porforeact1-thumb.png";
import react2 from "../images/porforeact2-thumb.png";
import react3 from "../images/porforeact3-thumb.png";
import react4 from "../images/porforeact4-thumb.png";
import react5 from "../images/porforeact5-thumb.png";

import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  ...theme.spreadIt
});

function Projects(props) {
  const { classes } = props;
  const [web, setWeb] = useState(true);
  const handleClick = () => {
    setWeb(!web);
  };

  return (
    <div className={classes.containerPage}>
      <div>
        <Button
          size="small"
          color="primary"
          disabled={web}
          onClick={handleClick}
          className={classes.button}
        >
          Website projects
        </Button>
        <Button
          size="small"
          color="primary"
          disabled={!web}
          onClick={handleClick}
          className={classes.button}
        >
          ReactJS projects
        </Button>
      </div>

      {web ? (
        <>
          <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{ duration: 500 }}
          >
            {props => (
              <div style={props}>
                <Grid container spacing={2}>
                  <Grid item md>
                    <CardPorfo
                      image={web3}
                      title="Outdoor Tours Agency"
                      body="Website layout for outdoor tours and travel service. Maked with HTML - CSS - SASS - Javascript"
                      url="https://minh-leo.github.io/Webs/outdoor-tours"
                      git="https://github.com/Minh-Leo/Webs/tree/master/outdoor-tours"
                      sec="300"
                    />
                  </Grid>
                  {window.screen.width >= 1104 ? (
                    <Grid item md={8}>
                      <CardPorfoLong
                        image={web5}
                        title="Travelusts"
                        body="Personnal travel blog that focus on showcasing images and travel-related articles with a photo gallery in masonry-grid style. Maked with HTML - CSS - SASS - Javascript."
                        url="http://thetravelusts.me/"
                        git="https://github.com/Minh-Leo/Travelusts"
                      />
                    </Grid>
                  ) : (
                    <Grid item md>
                      <CardPorfoLong
                        image={web5}
                        title="Travelusts"
                        body="Personnal travel blog that focus on showcasing images and travel-related articles with a photo gallery in masonry-grid style. Maked with HTML - CSS - SASS - Javascript."
                        url="https://minh-leo.github.io/Travelusts/"
                        git="https://github.com/Minh-Leo/Travelusts"
                      />
                    </Grid>
                  )}
                  {/* <Grid item md={8}>
                    <CardPorfoLong
                      image={web5}
                      title='Travelusts'
                      body='Personnal travel blog that focus on showcasing images and travel-related articles with a photo gallery in masonry-grid style. Maked with HTML - CSS - SASS - Javascript.'
                      url='https://minh-leo.github.io/Travelusts/'
                      git='https://github.com/Minh-Leo/Travelusts'
                    />
                  </Grid> */}
                </Grid>
                <Grid container spacing={2}>
                  <Grid item md>
                    <CardPorfo
                      image={web1}
                      title="Pont des Arts"
                      body="Website for a wedding photography business. Maked with HTML - CSS - SASS - Javascript."
                      url="https://minh-leo.github.io/Webs/PontArts"
                      git="https://github.com/Minh-Leo/Webs/tree/master/PontArts"
                      sec="600"
                    />
                  </Grid>
                  <Grid item md>
                    <CardPorfo
                      image={web2}
                      title="Nexter Agency"
                      body="Website layout for real estate agency. Maked with HTML - CSS - SASS."
                      url="https://minh-leo.github.io/Webs/estate-agent"
                      git="https://github.com/Minh-Leo/Webs/tree/master/estate-agent"
                      sec="900"
                    />
                  </Grid>
                  <Grid item md>
                    <CardPorfo
                      image={web4}
                      title="Comfy Home Furniture"
                      body="An e-commerce sample site with shopping cart functionality, Maked with pure Javascript - HTML - CSS"
                      url="https://minh-leo.github.io/Webs/comfyHome"
                      git="https://github.com/Minh-Leo/Webs/tree/master/comfyHome"
                      sec="1200"
                    />
                  </Grid>
                </Grid>
              </div>
            )}
          </Spring>
        </>
      ) : (
        <>
          <Grid container spacing={2}>
            {window.screen.width >= 1104 ? (
              <Grid item md={8}>
                <CardPorfoLong
                  image={react4}
                  title="Social Ape"
                  body="An attempt of cloning Twitter, with features including signup for new users by email - login for existed users - post/delete/comment/like/unlike messages - receive notifications on recent activities "
                  url="https://social-ape-0007.netlify.com/"
                  git="https://github.com/Minh-Leo/social-ape"
                />
              </Grid>
            ) : (
              <Grid item md>
                <CardPorfoLong
                  image={react4}
                  title="Social Ape"
                  body="An attempt of cloning Twitter, with features including signup for new users by email - login for existed users - post/delete/comment/like/unlike messages - receive notifications on recent activities "
                  url="https://social-ape-0007.netlify.com/"
                  git="https://github.com/Minh-Leo/social-ape"
                />
              </Grid>
            )}
            <Grid item md>
              <CardPorfo
                image={react1}
                title="React Movie Database"
                body="Web app using MovieDatabase API to search for movies and display relevant informations "
                url="https://react-movie-search-0001.netlify.com/"
                git="https://github.com/Minh-Leo/movie-app"
                sec="300"
              />
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item md>
              <CardPorfo
                image={react2}
                title="Hotel Rooms Booking app"
                body="Web app for displaying - sorting - filtering room in a hotel based on various criteria"
                url="https://react-beach-resort-0003.netlify.com/"
                git="https://github.com/Minh-Leo/react-beachResort"
                sec="600"
              />
            </Grid>
            <Grid item md>
              <CardPorfo
                image={react3}
                title="Mobile Phone e-Commerce"
                body="Web app with shopping cart feature, is linked with paypal sandbox to simulate real transactions"
                url="https://react-phone-ecommerce-0004.netlify.com/"
                git="https://github.com/Minh-Leo/react-phone-store"
                sec="900"
              />
            </Grid>
            <Grid item md>
              <CardPorfo
                image={react5}
                title="Github User Data Finder"
                body="Web app for searching and displaying information on github users and their repositories"
                url="https://githubfinder-0002.netlify.com/"
                git="https://github.com/Minh-Leo/github-search"
                sec="1200"
              />
            </Grid>
          </Grid>
        </>
      )}
    </div>
  );
}

export default withStyles(styles)(Projects);
