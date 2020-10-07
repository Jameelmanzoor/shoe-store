import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useClasses = makeStyles(() => ({
  root: {
    margin: '0 auto',
    marginTop: 50,
    maxWidth: '98vw'
  },
  cardRoot: {
    maxWidth: 360,
    '&:hover': {
      border: '1px solid blue',
    },
  },
  link: {
    textDecoration: 'none'
  }
}));

const ProductsListing = ({ data }) => {

  const classes = useClasses();
  return (
    <div className={classes.root}>
      <Grid container spacing={2} className={classes.gridItem}>
        {data.map((shoe) => {
          const productId = shoe.id.toString();

          return (
            <Grid item xs={12} sm={3} key={productId}>
              <Link to={productId} className={classes.link}>
                <Card className={classes.cardRoot}>
                  <CardActionArea>

                    <CardMedia
                      component="img"
                      height="180"
                      image={shoe.images[0]}
                      alt={shoe.name}
                    />

                    <CardContent>
                      <Typography gutterBottom variant='h6'>{shoe.name.toUpperCase()}</Typography>
                      <Typography>${shoe.price}</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </Grid>
          )
        })}
      </Grid>
    </div >)
}

export default ProductsListing;
