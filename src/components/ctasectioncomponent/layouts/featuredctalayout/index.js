//Basic Imports
import React, {useContext} from 'react';

//Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Typography} from "@material-ui/core";

//Context
import { GlobalContext } from "../../../../context/globalcontext";

const useStyles = makeStyles((theme) => ({
    cta_emergency_text: {
        color: '#FFFFFF;',
        fontSize: '12px',
        fontWeight: 400,
        maxWidth: '100px',
    },
    cta_emergency_value: {
        color: '#FFFFFF;',
        fontSize: '32px',
        float: 'left',
        fontWeight: 400
    },
    cta_open_text: {
        color: '#FFFFFF;',
        fontSize: '12px',
        fontWeight: 400,
        maxWidth: '100px',
        marginLeft: '5px'
    },
    cta_open_value: {
        color: '#FFFFFF;',
        fontSize: '32px',
        float: 'left',
        fontWeight: 400
    },
    cta_hide: {
        display: "none !important"
    }
}));

export const FeaturedCTALayout = ({openProposals}) => {
    //Setting function from context
    let change = useContext(GlobalContext)
    change = change.dynamicData
    //Loading custom styles Material UI
    const classes = useStyles();
    const openPO = (
        <Grid item className="open-wo" id="openPO" onClick={change}>
            <Typography className={classes.cta_open_value} variant="body1">{openProposals}</Typography>
            <Typography className={classes.cta_open_text} variant="body1">Open Proposals</Typography>
        </Grid>
    )      
    return(
        <Grid item xs={4} md={4} lg={4} className="featured-cta-wo">
            {openProposals<5000?openPO:""}
            {/*<Grid item className="emergency-wo" id="emergencyWO" onClick={change}>
                <Typography className={classes.cta_emergency_value} variant="body1">{emergencyWorkOrders}</Typography>
                <Typography className={classes.cta_emergency_text} variant="body1">Emergency Work Orders</Typography>
            </Grid>*/}
        </Grid>
    )
}

