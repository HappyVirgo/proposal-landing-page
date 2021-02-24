//Basic Imports
import React, {useContext} from 'react';

//Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Typography} from "@material-ui/core";

//Context
import { GlobalContext } from "../../../../context/globalcontext";

const useStyles = makeStyles((theme) => ({
    cta_description_text:{
        fontSize: '12px',
        fontWeight: 'bold'
    },
    cta_assigned_value: {
        color: '#49b900;',
        // fontSize: '64px',
        fontSize: '48px',
        fontWeight: 400,
        // margin: '10px'
    },
    cta_pending_value: {
        color: '#FF9022;',
        // fontSize: '64px',
        fontSize: '48px',
        fontWeight: 400,
        // margin: '10px'
    },
    cta_unassigned_value: {
        color: '#F20050;',
        // fontSize: '64px',
        fontSize: '48px',
        fontWeight: 400,
        // margin: '10px'
    }
}));

export const CTASectionLayout = ({
    assignedToMeProposals,
    pendingApprovalProposals,
    awaitingInvoice
    }) => {
    let change = useContext(GlobalContext)
    change = change.dynamicData
    //Loading custom styles Material UI
    const classes = useStyles();
    return(
        <Grid item xs={8} md={8} lg={8} className="common-cta-wo">
            <Grid item xs={4} md={4} lg={4} className="assign-to-me-wo" id="assignedPO" onClick={change}>
                <Typography className={classes.cta_assigned_value} variant="h2">{assignedToMeProposals}</Typography>
                <Typography className={classes.cta_description_text} variant="body1">Assigned to me</Typography>
            </Grid>
            <Grid item xs={4} md={4} lg={4} className="pending-acceptance-wo" id="pendingPO" onClick={change}>
                <Typography className={classes.cta_pending_value} variant="h2">{pendingApprovalProposals}</Typography>
                <Typography className={classes.cta_description_text} variant="body1">Pending Approval</Typography>
            </Grid>
            {/*<Grid item xs={4} md={4} lg={4} className="unassigned-wo" id="awaitingInvoice" onClick={change}>
                <Typography className={classes.cta_unassigned_value} variant="h2">{awaitingInvoice}</Typography>
                <Typography className={classes.cta_description_text} variant="body1">Awaiting Invoice</Typography>
            </Grid>*/}
        </Grid>
    )
}

