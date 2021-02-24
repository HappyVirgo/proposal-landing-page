//Basic imports
import React from 'react';

//Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { 
    Typography,
    //Link
} from '@material-ui/core';

//Currency Format
import CurrencyFormat from 'react-currency-format';

const useStyles = makeStyles((theme) => ({
    text: {
        fontSize: "14px",
        lineHeight: "25px"
    },
    etaSection: {
        border: "1px solid #cccccc",
        borderRadius: "5px",
        padding: "10px"
    },  
    date: {
        fontWeight: 600,
        color: "#F20050",
    },
    total: {

    } 
}));

export const BoxedDetails = ({
    incurredCosts, 
    labor,
    material,
    freight,
    tax,
    other,
    total 
    }) => {
    //const api_url = '/admin/';
    const classes = useStyles()
    const smallSize = 12
    const mediumSize = 6
    
    return (
        <Grid item xs={smallSize} md={12} lg={6} className={classes.etaSection}>
            
        <Grid container>
                <Grid item xs={smallSize} md={mediumSize}>
                    <Typography className={classes.text}><strong>Incurred Costs: </strong></Typography>
                </Grid>
                <Grid item xs={smallSize} md={mediumSize}>
                    <Typography className={classes.text}><CurrencyFormat value={incurredCosts} displayType={'text'} thousandSeparator={true} prefix={'$'} /></Typography>
                </Grid>
            </Grid>  
            <Grid container>
                <Grid item xs={smallSize} md={mediumSize}>
                    <Typography className={classes.text}><strong>Labor: </strong></Typography>
                </Grid>
                <Grid item xs={smallSize} md={mediumSize}>
                    <Typography className={classes.text}><CurrencyFormat value={labor} displayType={'text'} thousandSeparator={true} prefix={'$'} /></Typography>
                </Grid>
            </Grid> 

            <Grid container>
                <Grid item xs={smallSize} md={mediumSize}>
                    <Typography className={classes.text}><strong>Material: </strong></Typography>
                </Grid>
                <Grid item xs={smallSize} md={mediumSize}>
                    <Typography className={classes.text}><CurrencyFormat value={material} displayType={'text'} thousandSeparator={true} prefix={'$'} /></Typography>
                </Grid>
            </Grid> 

            <Grid container>
                <Grid item xs={smallSize} md={mediumSize}>
                    <Typography className={classes.text}><strong>Freight: </strong></Typography>
                </Grid>
                <Grid item xs={smallSize} md={mediumSize}>
                    <Typography className={classes.text}><CurrencyFormat value={freight} displayType={'text'} thousandSeparator={true} prefix={'$'} /></Typography>
                </Grid>
            </Grid>

            <Grid container>
                <Grid item xs={smallSize} md={mediumSize}>
                    <Typography className={classes.text}><strong>Tax: </strong></Typography>
                </Grid>
                <Grid item xs={smallSize} md={mediumSize}>
                    <Typography className={classes.text}><CurrencyFormat value={tax} displayType={'text'} thousandSeparator={true} prefix={'$'} /></Typography>
                </Grid>
            </Grid> 

            <Grid container>
                <Grid item xs={smallSize} md={mediumSize}>
                    <Typography className={classes.text}><strong>Other: </strong></Typography>
                </Grid>
                <Grid item xs={smallSize} md={mediumSize}>
                    <Typography className={classes.text}><CurrencyFormat value={other} displayType={'text'} thousandSeparator={true} prefix={'$'} /></Typography>
                </Grid>
            </Grid> 
            
            <Grid container>
                <Grid item xs={smallSize} md={mediumSize}>
                    <Typography className={classes.text}><strong>Total: </strong></Typography>
                </Grid>
                <Grid item xs={smallSize} md={mediumSize}>
                    <Typography className={classes.text}><strong className={classes.total}><CurrencyFormat value={total} displayType={'text'} thousandSeparator={true} prefix={'$'} /></strong></Typography>
                </Grid>
            </Grid>                                    
        </Grid>
    )
}