import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core';
import data from '../data';

const useClasses = makeStyles(() => ({
  root: {
    maxWidth: 1400,
    margin: '0 auto',
    marginTop: 20,
  },

  gridItem: {
    margin: '0 auto'
  },
  cardRoot: {
    maxWidth: 345
  },
}));

const ProductsListing = () => {

  const classes = useClasses();
  return (
    <div className={classes.root}>
      <Grid container spacing={3} className={classes.gridItem}>
        {data.map((shoe, index) => (
          <Grid item xs={12} sm={3} key={index}>
            <Card className={classes.cardRoot}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={shoe.images[1]}
                  alt={shoe.name}
                />
                <CardContent>
                  <Typography gutterBottom variant='h6'>{shoe.name}</Typography>
                  <Typography>${shoe.price}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>)
}

export default ProductsListing;
