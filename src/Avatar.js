import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import kuva from './tatu.jpg';

const styles = {
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 200,
    height: 200,
  },
};

function ImageAvatars(props) {
  const { classes } = props;
  return (
    <Grid container justify="space-evenly">
    <div>
      <Avatar alt="Tatu" src={kuva} className={classes.bigAvatar} />
      Fluent in C and law
    </div>
      <Avatar alt="Tatu" src={kuva} className={classes.bigAvatar} />
      <Avatar alt="Tatu" src={kuva} className={classes.bigAvatar} />
      <Avatar alt="Tatu" src={kuva} className={classes.bigAvatar} />
    </Grid>
  );
}

ImageAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatars);