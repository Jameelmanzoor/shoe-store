import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
import logo from '../resources/logo-white.svg';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    height: 70,

  },
  link: {
    color: '#ffffff',
    textDecoration: 'none',
    marginRight: 10
  },
  linkContainer: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'flex-end'
  }
}))

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <img src={logo} alt="logo" className={classes.logo} />
          <div className={classes.linkContainer}>
            <Typography variant='h6'>
              <Link to='/' className={classes.link}>Home</Link>
            </Typography>
            <Typography variant='h6'>
              <Link to='products' className={classes.link}>Products</Link>
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header;
