import React from 'react';
import { Tooltip, Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(() => ({
  productImage: {
    height: '100px',
    width: '140px'
  }
}
))

const CartCard = ({ product, index }) => {
  const classes = useStyles();
  return (
    <Grid container spacing={3} key={index} justify='center'>
      <Grid item xs={12} sm={3}><img src={product.images[0]} alt={product.name}
        className={classes.productImage} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant='h4'>{product.name}</Typography>
        <Typography variant='h6'>${product.price}</Typography>
      </Grid>
      <Grid item xs={12} sm={3}><Tooltip title='Romove from Cart' placement='right-end'>
        <IconButton aria-label='Remove from Cart'><DeleteIcon /></IconButton>
      </Tooltip></Grid>
    </Grid>
  )
}

export default CartCard;
