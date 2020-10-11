import React from 'react';
import { Grid, Button, makeStyles, Typography, Box } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import homeImage from '../resources/home-page.png';
import { useNavigate } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1100,
    margin: 'auto auto',
    minHeight: '89vh',
    [theme.breakpoints.down('sm')]: {
      minHeight: '0vh',
    }
  },
  img: {
    [theme.breakpoints.down('sm')]: {
      width: '95vw',
      marginTop: 40,
    },
  },
  heading: {
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      marginTop: 30
    }
  },
  btn: {
    [theme.breakpoints.down('sm')]: {
      margin: '0 auto',
      display: 'flex',
      alignContent: 'center',
      marginTop: 20
    }
  }
}))

const Home = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <Grid container direction='row-reverse' alignItems='center' className={classes.root}>
      <Grid item xs={12} sm={12} md={7}>
        <img src={homeImage} alt='Shoe on home page' className={classes.img} />
      </Grid>
      <Grid item xs={12} sm={12} md={5}>

        <Typography variant='h2' className={classes.heading}>
          Welcome, Find Your Dream Shoes Here
          </Typography>
        <Box >
          <Button
            variant='contained'
            color='primary'
            endIcon={<ArrowForwardIcon />}
            onClick={() => navigate('products')}
            className={classes.btn}>
            Buy Now
            </Button>
        </Box>
      </Grid>
    </Grid>

  )
}

export default Home;
