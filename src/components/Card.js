import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = makeStyles({
  card: {
    maxWidth: 400,
    minWidth: 350,
    height: 330,
    backgroundColor: "#FFFFFF",
    color: "#393939",
    border: "1px solid #393939"
  },
  media: {
    height: 200
    // margin: 5
  },
  content: {
    paddingTop: "5px",
    paddingBottom: "0px"
  }
});

const CardPorfo = props => {
  const classes = styles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.title}
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant='h6' color='inherit' component='h2'>
            {props.title}
          </Typography>
          <Typography variant='caption' color='inherit' component='p'>
            {props.body}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='secondary'>
          Go to Site
        </Button>
        <Button size='small' color='primary'>
          View Source Code
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardPorfo;
