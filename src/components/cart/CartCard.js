import React from 'react';
import { Tooltip, Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(() => ({
  productImage: {
    height: '100px',
    width: '140px'
  },
  productName: {
    textTransform: 'capitalize'
  }
}
))

const CartCard = ({ product, removeItem }) => {
  const classes = useStyles();
  return (
    <Grid container spacing={3} justify='center'>
      <Grid item xs={12} sm={3}><img src={product.images[0]} alt={product.name}
        className={classes.productImage} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant='h4' className={classes.productName}>{product.name}</Typography>
        <Typography gutterBottom>Price ${product.price}</Typography>
      </Grid>
      <Grid item xs={12} sm={3}><Tooltip title='Romove from Cart' placement='right-end'>
        <IconButton aria-label='Remove from Cart' onClick={() => removeItem(product)}>
          <DeleteIcon />
        </IconButton>
      </Tooltip></Grid>
    </Grid>
  )
}

export default CartCard;
