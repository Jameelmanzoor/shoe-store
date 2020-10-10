import React from 'react';
import { Button, makeStyles, Paper, Typography } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';


const useStyles = makeStyles((theme) => ({
	paper: {
		padding: theme.spacing(2),
		letterSpacing: '1px',
		height: 200,
		borderRadius: 10
	},
	btn: {
		marginTop: 30
	},
	paddingStyle: {
		marginBottom: 10
	}
}))

const Summary = ({ productsCount, total }) => {
	const classes = useStyles();
	return (
		<Paper elevation={3} className={classes.paper}>
			<Typography color='textSecondary'>
				Total Items
			</Typography>
			<Typography variant='h6'
				className={classes.paddingStyle}>
				{productsCount}
			</Typography>
			<Typography color='textSecondary'>
				Total Amount
			</Typography>
			<Typography variant='h6'
				className={classes.paddingStyle}>
				${total}
			</Typography>
			<hr />
			<Button variant='contained'
				color='primary'
				endIcon={<ArrowForwardIcon />}
				className={classes.btn}
			>Check Out</Button>
		</Paper >
	)
}

export default Summary
