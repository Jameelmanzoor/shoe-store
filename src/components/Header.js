import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Badge, IconButton, makeStyles, Tooltip } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import GitHubIcon from '@material-ui/icons/GitHub';
import logo from '../resources/logo-white.svg';
import { GlobalContext } from '../context/GlobalContext';

const useStyles = makeStyles((theme) => ({

  root: {
    flexGrow: 1,
  },
  logo: {
    height: 70,
    [theme.breakpoints.down('sm')]: {
      height: 50
    },

  },
  link: {
    color: '#ffffff',
    textDecoration: 'none',

  },
  linkContainer: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexGrow: 0,
      marginLeft: 10
    },
  },
  iconColor: {
    color: 'white'
  },
  boxCol: {
    marginRight: 10,
    '&:hover': {
      boxShadow: '#ffffff'
    }

  }

}))

const Header = () => {
  const { state } = useContext(GlobalContext);
  const itemsCount = state.length;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position='relative'>
        <Toolbar>
          <img src={logo} alt="logo" className={classes.logo} />
          <div className={classes.linkContainer}>
            <Typography variant='h6'>
              <Link to='/' className={`${classes.link} ${classes.boxCol}`}>Home</Link>
            </Typography>
            <Typography variant='h6'>
              <Link to='products' className={`${classes.link}`}>
                Products</Link>
            </Typography>
            <a target='_blank' href='https://github.com/Jameelmanzoor' rel="noopener noreferrer">
              <Tooltip title='GitHub code repository'>
                <IconButton aria-label='github code repository' className={classes.iconColor}>
                  <GitHubIcon />
                </IconButton>
              </Tooltip>
            </a>
            <Link to='cart' className={classes.link}>
              <Tooltip title='Shoping cart'>
                <IconButton aria-label='add to shopping cart' className={classes.iconColor}>
                  <Badge badgeContent={itemsCount} color='secondary'>
                    <ShoppingCartIcon />
                  </Badge>
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
