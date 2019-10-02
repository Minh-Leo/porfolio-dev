import React, {Component} from "react";
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
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  ...theme.spreadIt
});

class Projects extends Component {
  state = {
    web: true
  };
  handleClick = () => {
    this.setState({web: !this.state.web});
  };

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.containerPage}>
        {/* <Typography
          gutterBottom
          className={classes.title}
          variant='h5'
          color='initial'
          component='h2'
        >
          Porfolio
        </Typography> */}
        <div>
          <Button
            size='small'
            color='primary'
            disabled={this.state.web}
            onClick={this.handleClick}
            className={classes.button}
          >
            Website projects
          </Button>
          <Button
            size='small'
            color='primary'
            disabled={!this.state.web}
            onClick={this.handleClick}
            className={classes.button}
          >
            ReactJS projects
          </Button>
        </div>

        {this.state.web ? (
          <>
            <Grid container spacing={2}>
              <Grid item md>
                <CardPorfo
                  image={web4}
                  title='Comfy Home Furniture'
                  body='An e-commerce sample site with shopping cart functionality, Maked with pure Javascript - HTML - CSS'
                  url='https://minh-leo.github.io/Webs/comfyHome'
                  git='https://github.com/Minh-Leo/Webs/tree/master/comfyHome'
                />
              </Grid>
              <Grid item md={8}>
                <CardPorfoLong
                  image={web5}
                  title='Travelusts'
                  body='Personnal travel blog that focus on showcasing images and travel-related articles with a photo gallery in masonry-grid style. Maked with HTML - CSS - SASS - Javascript.'
                  url='https://minh-leo.github.io/Travelusts/'
                  git='https://github.com/Minh-Leo/Travelusts'
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item md>
                <CardPorfo
                  image={web1}
                  title='Pont des Arts'
                  body='Website for a wedding photography business. Maked with HTML - CSS - SASS - Javascript.'
                  url='https://minh-leo.github.io/Webs/PontArts'
                  git='https://github.com/Minh-Leo/Webs/tree/master/PontArts'
                />
              </Grid>
              <Grid item md>
                <CardPorfo
                  image={web2}
                  title='Nexter Agency'
                  body='Website layout for real estate agency. Maked with HTML - CSS - SASS.'
                  url='https://minh-leo.github.io/Webs/estate-agent'
                  git='https://github.com/Minh-Leo/Webs/tree/master/estate-agent'
                />
              </Grid>
              <Grid item md>
                <CardPorfo
                  image={web3}
                  title='Outdoor Tours Agency'
                  body='Website layout for outdoor tours and travel service. Maked with HTML - CSS - SASS - Javascript'
                  url='https://minh-leo.github.io/Webs/outdoor-tours'
                  git='https://github.com/Minh-Leo/Webs/tree/master/outdoor-tours'
                />
              </Grid>
            </Grid>
          </>
        ) : (
          <>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <CardPorfoLong
                  image={react4}
                  title='Social Ape'
                  body='Whole every miles as tiled at seven or. Wished he entire esteem mr oh by. Possible bed you pleasure civility boy elegance ham. He prevent request by if in pleased. Picture too and concern has was comfort.  '
                  url='https://social-ape-0007.netlify.com/'
                  git='https://github.com/Minh-Leo/social-ape'
                />
              </Grid>
              <Grid item xs>
                <CardPorfo
                  image={react1}
                  title='React Movie Database'
                  body='resembled eagerness nor. Same park bore on be. Warmth his law design say are person person person . '
                  url='https://react-movie-search-0001.netlify.com/'
                  git='https://github.com/Minh-Leo/movie-app'
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs>
                <CardPorfo
                  image={react2}
                  title='Hotel Rooms Booking app'
                  body='resembled eagerness nor. Same park bore on be. Warmth his law design say are person.'
                  url='https://react-beach-resort-0003.netlify.com/'
                  git='https://github.com/Minh-Leo/react-beachResort'
                />
              </Grid>
              <Grid item xs>
                <CardPorfo
                  image={react3}
                  title='Mobile Phone e-Commerce'
                  body='resembled eagerness nor. Same park bore on be. Warmth his law design say are person.'
                  url='https://react-phone-ecommerce-0004.netlify.com/'
                  git='https://github.com/Minh-Leo/react-phone-store'
                />
              </Grid>
              <Grid item xs>
                <CardPorfo
                  image={react5}
                  title='Github User Data Finder'
                  body='resembled eagerness nor. Same park bore on be. Warmth his law design say are person.'
                  url='https://githubfinder-0002.netlify.com/'
                  git='https://github.com/Minh-Leo/github-search'
                />
              </Grid>
            </Grid>
          </>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(Projects);
