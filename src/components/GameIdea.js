import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';


const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: "#333",
    padding: 30,
    paddingTop: 15,
    paddingBottom: 15,
  },
  dataLine: {
    display: 'flex',
    flexDirection: 'row',
  },
  tag: {
    paddingLeft: 10,
    paddingRight: 10,
    marginRight: 5,
  },
  tagText: {
    fontSize: '1.6em',
    color: 'white'
  }
}));

export default function GameIdea(props) {
  const classes = useStyles();

  const { data } = props;

  const renderTag = (tags, color) => {
    return tags.map(text => {
      return (
        <Paper className={classes.tag} style={{ backgroundColor: color }}>
          <Typography variant="body1" className={classes.tagText} style={{ color: 'white' }}>
            {text}
          </Typography>
        </Paper>
      );
    })
  }

  return (
    <Card className={classes.card}>
      <CardHeader
        title={(
          <Typography variant="h4" style={{ color: 'white' }}>
            What about a
          </Typography>
        )}
      />
      <CardContent>
        <div className={classes.dataLine}>
          {renderTag(data.themes, "#087b08")}
          {renderTag(data.mechanics, "#3b28da")}
          {renderTag(data.genres, "#e66d52")}
        </div>
      </CardContent>
      <CardActions>
        <IconButton aria-label="share" color="primary">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
