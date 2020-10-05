import React from 'react';
import { Button, makeStyles, Typography } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import homeImage from '../resources/home-page.png';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 1100,
    margin: 'auto auto',
    minHeight: '89vh'
  },
  img: {
  },

}))

const Home = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <div className={classes.root}>
      <div>
        <Typography variant='h2'>Welcome, Find Your Dream Shoes Here</Typography>
        <Button
          variant='contained'
          color='primary'
          endIcon={<ArrowForwardIcon />}
          onClick={() => navigate('products')}>Buy Now</Button>
      </div>
      <div>
        <img src={homeImage} alt='Shoe on home page' className={classes.img} />
      </div>
    </div>
  )
}

export default Home;
