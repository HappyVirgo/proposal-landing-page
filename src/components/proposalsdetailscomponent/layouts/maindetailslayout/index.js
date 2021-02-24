//Basic imports
import React from 'react';

//Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Typography} from "@material-ui/core";

//Modal
import {ModalComponent} from '../../..'

const useStyles = makeStyles((theme) => ({
    typography: {
        lineHeight: "15px"
    },
    warrantyBox: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap'
    }
}));

export const MainDetails = ({
    proposalId,
    proposalTitle,
    assetName,
    assetType,
    address,
    warrantyLabel,
    assetModel,
    assetSerial,
    manufacturer,
    location
    }) => {
    const classes = useStyles()
    let warrantyBadge
    let warrantyText
    let warrantyData
    let warranty
    if(warrantyLabel<0) {
        warrantyBadge = "warranty_available"
        warrantyText = "Available"
    } else {
        warrantyBadge = "warranty_not_available"
        warrantyText = "Not Available"
    }
    
    warrantyData = warranty?warranty.data:[]
    return (
        <Grid item xs={6} md={7} lg={5} className="main_details">
            <Typography variant="h1" className={classes.Typography}>
                {assetName!==undefined?(assetName!==null?assetName:proposalId):proposalId} <br/><small>{assetType}</small>
            </Typography>
            <Typography>Location: {location}</Typography>
            <Typography>Manufacturer: {manufacturer}</Typography>
            <Typography>Model #: {assetModel}</Typography>
            <Typography>Serial #: {assetSerial}</Typography>
            {/*<Typography>Asset Type: {assetType}</Typography>*/}
            <div className={classes.warrantyBox}>
                <Typography className={warrantyBadge}>Warranty: </Typography>
                <ModalComponent  title={warrantyText} data={warrantyData} type={'warranty'} />
            </div>       
        </Grid>
    )
}