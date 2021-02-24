//Basic imports
import React from 'react';

//Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
//import Avatar from '@material-ui/core/Avatar';
//import Chip from '@material-ui/core/Chip';


//Date format
import Moment from "react-moment"

//Modal
import {PopupComponent} from "../../../../components"

const useStyles = makeStyles((theme) => ({
    text: {
        fontSize: "14px",
        lineHeight: "25px"
    },
    avatar: {
        marginLeft: '0px !important',
    },
    approvalButton: {
        borderRadius: '25px',
        backgroundColor: '#0072CE ',
        '&:hover': {
            backgroundColor: '#424041',
        },
        marginTop: '25px'
    },
    tableHead: {
        padding: '10px 5px !important',
        backgroundColor: '#CCC'
    },
    tableCell: {
        padding: '10px 5px !important',
        borderBottom: '1px solid #CCC !important'
    }
}));

export const EnhancedDetails = ({
    proposalTitle,
    proposalDate,
    submittedBy,
    workOrder,
    assetName,
    assetType,
    requestedBy,
    problemType,
    //proposalDescription,
    proposalStatus,
    serviceProviderProposalId,
    category,
    ageOfWorkOrder,
    completionTime,
    approvalHistory
    }) => {
    const classes = useStyles()
    let statusDisplay
    switch (proposalStatus) {              
        case "Pending Client Approval":
            statusDisplay = <span className="status-tag"><span className="pending-badge">Pending Client Approval</span></span>
            break;            
        default:
            statusDisplay = <span className="status-tag"><span className="complete-badge">{proposalStatus}</span></span>
                break;            
    } 
    const titleSize = 5
    const descSize = 7
    return (
        <Grid item xs={12} md={12} lg={6} style={{padding:"10px"}}>
            <Grid container>
                <Grid item xs={titleSize}>
                    <Typography variant={'body1'} className={classes.text}><strong>Status: </strong></Typography>
                </Grid>
                <Grid item xs={descSize}>
                    <Typography variant={'body1'} className={classes.text}>{statusDisplay}</Typography>
                </Grid>                
            </Grid> 
            <Grid container>
                <Grid item xs={titleSize}>
                    <Typography variant={'body1'} className={classes.text}><strong>Proposal Date: </strong></Typography>
                </Grid>
                <Grid item xs={descSize}>
                    <Typography variant={'body1'} className={classes.text}><Moment format="MMMM D, YYYY hh:mm a">{proposalDate}</Moment></Typography>
                </Grid>                
            </Grid>                    
            <Grid container>
                <Grid item xs={titleSize}>
                    <Typography variant={'body1'} className={classes.text}><strong>Submitted By: </strong></Typography>
                </Grid>
                <Grid item xs={descSize}>
                    <Typography variant={'body1'} className={classes.text} style={{wordBreak:'break-word'}}>{submittedBy}</Typography>
                </Grid>                
            </Grid> 
            <Grid container>
                <Grid item xs={titleSize}>
                    <Typography variant={'body1'} className={classes.text}><strong>Work Order: </strong></Typography>
                </Grid>
                <Grid item xs={descSize}>
                    <Typography variant={'body1'} className={classes.text}>{workOrder}</Typography>
                </Grid>                
            </Grid>  
            {/* <Grid container>
                <Grid item xs={titleSize}>
                    <Typography variant={'body1'} className={classes.text}><strong>Asset Name: </strong></Typography>
                </Grid>
                <Grid item xs={descSize}>
                    <Typography variant={'body1'} className={classes.text}>{assetName}</Typography>
                </Grid>                
            </Grid>      
            <Grid container>
                <Grid item xs={titleSize}>
                    <Typography variant={'body1'} className={classes.text}><strong>Asset Type: </strong></Typography>
                </Grid>
                <Grid item xs={descSize}>
                    <Typography variant={'body1'} className={classes.text}>{assetType}</Typography>
                </Grid>                
            </Grid>   */}
            <Grid container>
                <Grid item xs={titleSize}>
                    <Typography variant={'body1'} className={classes.text}><strong>Requested By: </strong></Typography>
                </Grid>
                <Grid item xs={descSize}>
                    <Typography variant={'body1'} className={classes.text}>{requestedBy}</Typography>
                </Grid>                
            </Grid>   
            <Grid container>
                <Grid item xs={titleSize}>
                    <Typography variant={'body1'} className={classes.text}><strong>Problem Type: </strong></Typography>
                </Grid>
                <Grid item xs={descSize}>
                    <Typography variant={'body1'} className={classes.text}>{problemType}</Typography>
                </Grid>                
            </Grid>             
            <Grid container>
                <Grid item xs={titleSize}>
                    <Typography variant={'body1'} className={classes.text}><strong>Service Provider: </strong></Typography>
                </Grid>
                <Grid item xs={descSize}>
                    <Typography variant={'body1'} className={classes.text}>{serviceProviderProposalId}</Typography>
                </Grid>                
            </Grid> 
            <Grid container>
                <Grid item xs={titleSize}>
                    <Typography variant={'body1'} className={classes.text}><strong>Category: </strong></Typography>
                </Grid>
                <Grid item xs={descSize}>
                    <Typography variant={'body1'} className={classes.text}><b>{category}</b></Typography>
                </Grid>                
            </Grid> 
            <Grid container>
                <Grid item xs={titleSize}>
                    <Typography variant={'body1'} className={classes.text}><strong>Age of Work Order: </strong></Typography>
                </Grid>
                <Grid item xs={descSize}>
                    <Typography variant={'body1'} className={classes.text}>{ageOfWorkOrder} days</Typography>
                </Grid>                
            </Grid> 
            <Grid container>
                <Grid item xs={titleSize}>
                    <Typography variant={'body1'} className={classes.text}><strong>Completion Time: </strong></Typography>
                </Grid>
                <Grid item xs={descSize}>
                    <Typography variant={'body1'} className={classes.text}>{completionTime} After Approval</Typography>
                </Grid>                
            </Grid>
            <PopupComponent 
                buttonLabel="Approval History"
                modalTitle="Approval History"
                btnClasses={classes.approvalButton}
                btn1Func={()=>{}} 
                btn1Label="Submit" 
                MuiDialogTitle={classes.MuiDialogTitle} 
                tableHead={classes.tableHead}
                tableCell={classes.tableCell}
                content={approvalHistory} 
            />
        </Grid>
    )
}

