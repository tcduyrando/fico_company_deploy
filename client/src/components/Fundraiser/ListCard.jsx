import React from "react";
import { Link } from "react-router-dom";
import {ProgressBar} from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Col, Row } from 'react-bootstrap';

const useStyles = makeStyles({
  root: {
    maxHeight: 165,
  },
  media: {
    height: 165,
  },
});

const left = {
  textAlign: 'left',
}

export default function ListCard(props) {
  const classes = useStyles();

  return (
    <div className="grid-list">
      {props.projects.map(p => (
        <Link to={/fundraisers/ + p._id} key={p._id}>
      <Card className={classes.root}>
        <Row key={p.id}>
          <Col xs={3}>
            <CardActionArea>
              <CardMedia>
                <img src={'' + p.image} alt="Fimage" style={{width: '283px', height: '152px'}}/>
              </CardMedia>
            </CardActionArea>
          </Col>
          <Col xs={9}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2" style={left}>
                  <b>{p.title}</b>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" style={left}>
              <b>{p.donate} raiser of {p.donaterequire}</b>
              <ProgressBar striped variant="info" now={p.percent} />
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" style={left}>
                {p.information}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{float: 'right'}}>
              <Button size="small" color="primary" style={{textTransform: 'none', color: '#18A0FB'}}>
                See more &gt;&gt;
              </Button>
            </CardActions>
          </Col>
        </Row>
      </Card>
      </Link>))}
    </div>
  )
}

