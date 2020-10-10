import React, { useContext } from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import CartCard from './CartCard';
import { GlobalContext } from '../../context/GlobalContext';
import Summary from './Summary';

const useStyles = makeStyles(() => ({
  root: {
    margin: '0 auto',
    maxWidth: 1200
  },
  heading: {
    margin: '0 auto',
    marginTop: 40,
    maxWidth: 200,
    textAlign: 'center'
  },
  empty: {
    margin: '0 auto',
    maxWidth: 300,
    marginTop: 100,
    textAlign: 'center'
  }
}
))

const ShopingCart = () => {
  const classes = useStyles();
  const { state } = useContext(GlobalContext);
  const productsCount = state.length;

  const total = state.reduce((total, item) => (total + item.price), 0);

  return (
    <div>
      <Typography variant='h3' className={classes.heading}>Cart</Typography>
      {(productsCount) ? (
        <div className={classes.root}>
          <Grid container>
            <Grid item xs={12} sm={8}>
              {state.map((product, index) => (
                <CartCard product={product} index={index} key={index} />
              ))}
            </Grid>
            <Grid item xs={12} sm={3}>
              <Summary productsCount={productsCount} total={total} />
            </Grid>
          </Grid>
        </div>) : <Typography variant='h6' className={classes.empty}>Your Cart is Empty</Typography>
      }
    </div>
  )
}

export default ShopingCart;
