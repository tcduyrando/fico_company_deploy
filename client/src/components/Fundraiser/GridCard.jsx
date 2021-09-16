import React from "react";
import {Link} from 'react-router-dom';
import {ProgressBar} from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    height: 370,
  },
  media: {
    height: 140,
  },
});

const left = {
  textAlign: 'left',
}
const right = {
  textAlign: 'right',
}

export default function GridCard(props) {
  const classes = useStyles();

  
  return (
    
    <div className="grid-container">
      {props.fundraiser.map((p) => (
        <Link to={/fundraisers/ + p._id} key={p._id}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia>
          <img src={'' + p.image} alt="Fimage" style={{width: '356px', height: '220px', float: 'left', padding: '10px'}}/>
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h4" component="h2" style={left}>
              <b>{p.title}</b>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" style={left}>
              <b>{p.information}</b>
            </Typography>
            <br></br>
            <ProgressBar striped variant="info" now={p.percent} />
            <Typography variant="body2" color="textSecondary" component="p" style={right}>
            {p.donate} raiser of {p.donaterequire}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions style={{float: 'right'}}>
          <Button size="small" color="primary" style={{textTransform: 'none', color: '#18A0FB'}}>
            See more &gt;&gt;
          </Button>
        </CardActions>
      </Card>
      </Link>
      ))}
    </div>
  )
}

