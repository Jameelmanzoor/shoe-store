import React from 'react';
import { Tooltip, Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  productImage: {
    height: '100px',
    [theme.breakpoints.down('xs')]: {
      height: 50,
      width: 85
    }
  },
  productName: {
    textTransform: 'capitalize'
  }
}
))

const CartCard = ({ product, removeItem }) => {
  const classes = useStyles();
  return (
    <Grid container alignItems='center'>
      <Grid item xs={3} sm={4}><img src={product.images[0]} alt={product.name}
        className={classes.productImage} />
      </Grid>
      <Grid item xs={7} sm={5}>
        <Typography variant='h6' className={classes.productName}>{product.name}</Typography>
        <Typography gutterBottom>Price ${product.price}</Typography>
      </Grid>
      <Grid item xs={1} sm={2}><Tooltip title='Romove from Cart' placement='right-end'>
        <IconButton aria-label='Remove from Cart' onClick={() => removeItem(product)}>
          <DeleteIcon />
        </IconButton>
      </Tooltip></Grid>
    </Grid>
  )
}

export default CartCard;
