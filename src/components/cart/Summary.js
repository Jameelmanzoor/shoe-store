import React from 'react';
import { Button, makeStyles, Paper, Typography } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import swal from 'sweetalert';


const useStyles = makeStyles((theme) => ({
	paper: {
		padding: theme.spacing(2),
		letterSpacing: '1px',
		height: 200,
		borderRadius: 10,
	},
	btn: {
		marginTop: 30
	},
	paddingStyle: {
		marginBottom: 10
	}
}))

const Summary = ({ productsCount, total, payment }) => {
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
				onClick={() => {
					swal("Checkout Succesfullay!", `, You have Purchased ${productsCount} Items!`, "success");
					payment();
				}}
			>Check Out</Button>
		</Paper >
	)
}

export default Summary
