import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import tatukuva from './tatu.jpg';
import sakkekuva from './sakke.jpg';
import sepakuva from './sepa.jpg';
import akukuva from './aku.jpg';



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
      <Avatar alt="Tatu" src={sepakuva} className={classes.bigAvatar} />
      <p className="avatar-text">Severi Haverila</p>
      {/* <p className="avatar-quote">Unbeatable at Singa</p> */}
    </div>
    <div className="avatar-container">
      <Avatar alt="Tatu" src={akukuva} className={classes.bigAvatar} />
      <p className="avatar-text">Aku Pöllänen</p>
      {/* <p className="avatar-quote">Drinks only Crisp</p> */}
    </div>
    <div className="avatar-container">
      <Avatar alt="Tatu" src={tatukuva} className={classes.bigAvatar} />
      <p className="avatar-text">Tatu Mäenpää</p>
      {/* <p className="avatar-quote">Fluent in C and law</p> */}
      
    </div>
    <div className="avatar-container">
      <Avatar alt="Sakke" src={sakkekuva} className={classes.bigAvatar} />
      <p className="avatar-text">Sakari Pesonen</p>
      {/* <p className="avatar-quote">Makes anything with nothing</p> */}
      
    </div>
    </Grid>
  );
}

ImageAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatars);