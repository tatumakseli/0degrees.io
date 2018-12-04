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
    width: '15vw',
    height: '15vw',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
};

function ImageAvatars(props) {
  const { classes } = props;
  return (
    <Grid container justify="space-evenly">
    <div className="avatar-container">
      <Avatar alt="Tatu" src={kuva} className={classes.bigAvatar} />
      Sakari Pesonen
      <p className="avatar-quote">Makes anything with nothing</p>
      
    </div>
    <div className="avatar-container">
      <Avatar alt="Tatu" src={kuva} className={classes.bigAvatar} />
      Severi Haverila
      <p className="avatar-quote">Unbeatable at Singa</p>
    </div>
    <div className="avatar-container">
      <Avatar alt="Tatu" src={kuva} className={classes.bigAvatar} />
      Aku Pöllänen
      <p className="avatar-quote">Drinks only Crisp</p>
    </div>
    <div className="avatar-container">
      <Avatar alt="Tatu" src={kuva} className={classes.bigAvatar} />
      Tatu Mäenpää
      <p className="avatar-quote">Fluent in C and law</p>
      
    </div>
    </Grid>
  );
}

ImageAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatars);