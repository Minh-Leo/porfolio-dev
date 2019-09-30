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

const styles = theme => ({
  ...theme.spreadIt
});

class home extends Component {
  state = {
    web: true
  };
  handleClick = () => {
    this.setState({web: !this.state.web});
  };

  render() {
    const {classes} = this.props;

    return (
      <div className={classes.home}>
        <div>
          <Button
            size='small'
            color='secondary'
            disabled={this.state.web}
            onClick={this.handleClick}
          >
            Website projects
          </Button>
          <Button
            size='small'
            color='secondary'
            disabled={!this.state.web}
            onClick={this.handleClick}
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
                  body='resembled eagerness nor. Same park bore on be. Warmth his law design say are person person. '
                />
              </Grid>
              <Grid item md={8}>
                <CardPorfoLong
                  image={web5}
                  title='Travelusts'
                  body='Whole every miles as tiled at seven or. Wished he entire esteem mr oh by. Possible bed you pleasure civility boy elegance ham. He prevent request by if in pleased. Picture too and concern has was comfort.  '
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item md>
                <CardPorfo
                  image={web1}
                  title='Pont des Arts'
                  body='resembled eagerness nor. Same park bore on be. Warmth his law design say are person.'
                />
              </Grid>
              <Grid item md>
                <CardPorfo
                  image={web2}
                  title='Nexter Agency'
                  body='resembled eagerness nor. Same park bore on be. Warmth his law design say are person.'
                />
              </Grid>
              <Grid item md>
                <CardPorfo
                  image={web3}
                  title='Outdoor Tours Agency'
                  body='resembled eagerness nor. Same park bore on be. Warmth his law design say are person.'
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
                  title='Travelusts'
                  body='Whole every miles as tiled at seven or. Wished he entire esteem mr oh by. Possible bed you pleasure civility boy elegance ham. He prevent request by if in pleased. Picture too and concern has was comfort.  '
                />
              </Grid>
              <Grid item xs>
                <CardPorfo
                  image={react1}
                  title='Comfy Home Furniture'
                  body='resembled eagerness nor. Same park bore on be. Warmth his law design say are person person person person person . '
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs>
                <CardPorfo
                  image={react2}
                  title='Pont des Arts'
                  body='resembled eagerness nor. Same park bore on be. Warmth his law design say are person.'
                />
              </Grid>
              <Grid item xs>
                <CardPorfo
                  image={react3}
                  title='Nexter Agency'
                  body='resembled eagerness nor. Same park bore on be. Warmth his law design say are person.'
                />
              </Grid>
              <Grid item xs>
                <CardPorfo
                  image={react5}
                  title='Outdoor Tours Agency'
                  body='resembled eagerness nor. Same park bore on be. Warmth his law design say are person.'
                />
              </Grid>
            </Grid>
          </>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(home);
