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
    border: "1px solid #39393970",
    transition: "ease 12s"
  },

  media: {
    height: 200
    // margin: 5
  },
  content: {
    paddingTop: "5px",
    paddingBottom: "0px"
  },
  button: {
    fontFamily: "Dosis",
    fontWeight: "bold"
  }
});

const CardPorfo = props => {
  const classes = styles();
  const {image, title, body, url, git} = props;

  const onClick = link => {
    window.open(link);
  };

  return (
    <div className={classes.hover}>
      <Card className={classes.card}>
        <CardActionArea onClick={() => onClick(url)}>
          <CardMedia className={classes.media} image={image} title={title} />
          <CardContent className={classes.content}>
            <Typography variant='h6' color='inherit' component='h2'>
              {title}
            </Typography>
            <Typography
              gutterBottom
              variant='caption'
              color='inherit'
              component='p'
            >
              {body}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            className={classes.button}
            size='small'
            color='secondary'
            onClick={() => onClick(url)}
          >
            Go to Site
          </Button>
          <Button
            className={classes.button}
            size='small'
            color='primary'
            onClick={() => onClick(git)}
          >
            View Source Code
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default CardPorfo;
