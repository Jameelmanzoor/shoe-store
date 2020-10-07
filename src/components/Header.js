import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { IconButton, makeStyles, Tooltip } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import GitHubIcon from '@material-ui/icons/GitHub';
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
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  iconColor: {
    color: 'white'
  },
  boxCol: {
    '&:hover': {
      boxShadow: '#ffffff'
    }

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
              <Link to='/' className={`${classes.link} ${classes.boxCol}`}>Home</Link>
            </Typography>
            <Typography variant='h6'>
              <Link to='products' className={`${classes.link} ${classes.boxCol}`}>
                Products</Link>
            </Typography>
            <a target='_blank' href='https://github.com/Jameelmanzoor' rel='noopener'>
              <Tooltip title='GitHub code repository'>
                <IconButton aria-label='github code repository' className={classes.iconColor}>
                  <GitHubIcon />
                </IconButton>
              </Tooltip>
            </a>
            <Link to='cart' className={classes.link}>
              <Tooltip title='Shoping cart'>
                <IconButton aria-label='add to shopping cart' className={classes.iconColor}>
                  <ShoppingCartIcon />
                </IconButton>
              </Tooltip>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header;
