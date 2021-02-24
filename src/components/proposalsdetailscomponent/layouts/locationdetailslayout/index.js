//Basic imports
import React from 'react';

//Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    text: {
        fontSize: "14px",
    },
    locationDetails: {
        width: "100%",
        textAlign: "left",
        marginTop: "25px",
        marginBottom: "25px"
    }
}));

export const LocationDetails = ({
    locationDetailsStore,
    address,
    phoneNumber
    }) => {
    const classes = useStyles()
    return (
        <Grid container className={classes.locationDetails}>
            <Grid item xs={6} className="removable">
            </Grid>        
            <Grid item xs={2} className="full_width">
                <Typography className={classes.text} variant={'body1'}><strong>Location Details </strong></Typography>
            </Grid>
            <Grid item xs={4} className="full_width">
                <Typography className={classes.text} variant={'body1'}>
                    <strong>Store Number:</strong> {locationDetailsStore}<br/>
                    <strong>Address:</strong> {address}<br/>
                    <strong>Phone Number:</strong> {phoneNumber}
                </Typography>
            </Grid>               
        </Grid>
    )
}

