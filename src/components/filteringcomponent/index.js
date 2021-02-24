/**
 * Description: Create Filter Component
 * Author: Carlos Blanco
 * Created: 11/06/2020
 * Ticket: ET-246
 */

//Basic Imports
import React, {useContext, useState, useEffect} from 'react';
//import PropTypes from 'prop-types';

//Material UI
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, Select, MenuItem, Grid } from '@material-ui/core';
import ClearAllRoundedIcon from '@material-ui/icons/ClearAllRounded';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

//Context
import { GlobalContext } from "../../context/globalcontext";

//Helpers
import { 
    filterByLocationName,
    filterByStatus,
    filterByCategory
} from "./helpers"

const useStyles = makeStyles((theme) => ({
    filter: {
        width: "30%",
        textAlign: 'center',
        // padding: '5px',
        padding: '0px',
        border: '3px solid #78b0dd',
        borderRadius: '38px',
    },
    filterDisabled: {
        width: "30%",
        textAlign: 'center',
        // padding: '5px',
        padding: '0px',
        border: '3px solid rgba(0, 0, 0, 0.5)',
        borderRadius: '38px',
    },    
    filterBox: {
        // margin: '15px 0px',
        margin: '10px 0px',
        display: 'flex',
        justifyContent: 'space-between'
    },
    icon: {
        fill: 'white',
    },
    iconDisabled: {
        fill: 'rgba(0, 0, 0, 0.5)',
    },    
    eachFilter: {
        color: 'white',
        "&&&:before": {
            borderBottom: "none"
        },
        "&&:after": {
            borderBottom: "none"
        }
    },
    eachFilterDisabled: {
        color: 'rgba(0, 0, 0, 0.5)',
        "&&&:before": {
            borderBottom: "none"
        },
        "&&:after": {
            borderBottom: "none"
        }
    },    
}));


const FilteringComponent = ({tmpdata, targetdata}) => {
    const classes = useStyles();
    const filterFunc = useContext(GlobalContext)
    const [disabledClassLocationName, setDisabledClassLocationName] = useState([classes.filterDisabled, classes.eachFilterDisabled, classes.iconDisabled])
    const [disabledClassAsset, setDisabledClassAssetType] = useState([classes.filterDisabled, classes.eachFilterDisabled, classes.iconDisabled])
    const [disabledClassCategory, setDisabledClassCategory] = useState([classes.filterDisabled, classes.eachFilterDisabled, classes.iconDisabled])

    //Functions to handle state changes
    const funcFilterByLocationName = filterFunc.handleFilterByLocationName 
    const funcFilterByStatus = filterFunc.handleFilterByStatus
    const funcFilterByCategory = filterFunc.handleFilterByCategory
    const funcFilterClearAll = filterFunc.handleFilterClearAll
    //Default values for selects inputs
    const filterByStateLocationName = filterFunc.filterByStateLocationName
    const filterByStateStatus = filterFunc.filterByStateStatus
    const filterByStateCategory = filterFunc.filterByStateCategory

    let data = tmpdata!==undefined?(tmpdata['data']?tmpdata['data']['response']:[]):[]
    let filterDataLocationName = filterByLocationName(data)
    let filterDataStatus = filterByStatus(data)
    let filterDataCategory = filterByCategory(data)
    //let disabledSelectAssetType = filterDataAssetType.length<=1?true:false    
    //Set "disabled" filters by default
    const disabledSelectLocationName = false
    //let target = targetdata===undefined?"":targetdata
    let disabledSelectAsset = false;//target==="" || target===""?true:false
    let disabledSelectCategory = false;//target===""?true:false
    useEffect(() => {
        if(!disabledSelectLocationName) {
            setDisabledClassLocationName([classes.filter, classes.eachFilter, classes.icon])
        }else{
            setDisabledClassLocationName([classes.filterDisabled, classes.eachFilterDisabled, classes.iconDisabled])
        }        
        if(!disabledSelectAsset) {
            setDisabledClassAssetType([classes.filter, classes.eachFilter, classes.icon])
        }else{
            setDisabledClassAssetType([classes.filterDisabled, classes.eachFilterDisabled, classes.iconDisabled])
        }
        if(!disabledSelectCategory) {
            setDisabledClassCategory([classes.filter, classes.eachFilter, classes.icon])
        }else{
            setDisabledClassCategory([classes.filterDisabled, classes.eachFilterDisabled, classes.iconDisabled])
        }
    }, [
        classes.filter,
        classes.filterDisabled,
        classes.eachFilter,
        classes.eachFilterDisabled,
        classes.icon,
        classes.iconDisabled,
        disabledSelectLocationName,
        disabledSelectCategory,
        disabledSelectAsset
    ])

    //console.log(data)
    return (
        <Grid className={classes.filterBox}>
            <FormControl className={disabledClassCategory[0]}>
            <Select
                disabled={disabledSelectCategory}
                labelId="filter-3-filled-label"
                id="filter-3-filled-label"
                onChange={funcFilterByCategory} 
                value={filterByStateCategory}
                renderValue={(value) => { if(value && value !== 1) { return value} else {return 'Filter: Category'} }}
                className={disabledClassCategory[1]}
                inputProps={{
                    classes: {
                        icon: disabledClassCategory[2],
                    },
                }}
                MenuProps = {{
                    anchorOrigin: { vertical: "bottom", horizontal: "left" },
                    transformOrigin: { vertical: "top",horizontal: "left" },
                    getContentAnchorEl: null,
                    elevation: 0,
                }}
            >
                <MenuItem className={classes.menuItem} value="" disabled><b>Category:</b></MenuItem>
                <MenuItem value={1}>Reset Filter</MenuItem>                    
                {!!filterDataCategory?filterDataCategory.map((item, index) => {
                    return (
                        <MenuItem 
                            key={index}
                            value={item}
                        >{item}</MenuItem>
                    )
                }):null}
                
            </Select>
            </FormControl>        
            <FormControl className={disabledClassLocationName[0]}>
                <Select
                    disabled={disabledSelectLocationName}
                    labelId="filter-1-filled-label"
                    id="filter-1-filled-label"
                    onChange={funcFilterByLocationName} 
                    value={filterByStateLocationName}
                    className={disabledClassLocationName[1]}
                    renderValue={(value) => { if(value && value !== 1) { return value} else {return 'Filter: Status'} }}
                    inputProps={{
                        classes: {
                            icon: disabledClassLocationName[2],
                        },
                    }}
                    MenuProps = {{
                        anchorOrigin: { vertical: "bottom", horizontal: "left" },
                        transformOrigin: { vertical: "top",horizontal: "left" },
                        getContentAnchorEl: null,
                        elevation: 0,
                    }}
                >
                    <MenuItem className={classes.menuItem} value="" disabled><b>Status:</b></MenuItem>
                    <MenuItem value={1}>Reset Filter</MenuItem>                    
                    {!!filterDataLocationName?filterDataLocationName.map((item, index) => {
                        return (
                            <MenuItem 
                                key={index}
                                value={item}
                            >{item}</MenuItem>
                        )
                    }):null}
                    
                </Select>
            </FormControl> 
            <FormControl className={disabledClassAsset[0]}>
                <Select
                    disabled={disabledSelectAsset}
                    labelId="filter-2-filled-label"
                    id="filter-2-filled-label"
                    onChange={funcFilterByStatus} 
                    renderValue={(value) => { if(value && value !== 1) { return value} else {return 'Filter: Asset Type'} }}
                    value={filterByStateStatus}
                    className={disabledClassAsset[1]}
                    inputProps={{
                        classes: {
                            icon: disabledClassAsset[2],
                        },
                    }}
                    MenuProps = {{
                        anchorOrigin: { vertical: "bottom", horizontal: "left" },
                        transformOrigin: { vertical: "top",horizontal: "left" },
                        getContentAnchorEl: null,
                        elevation: 0,
                    }}
                >
                    <MenuItem className={classes.menuItem} value="" disabled><b>Asset Type:</b></MenuItem>
                    <MenuItem value={1}>Reset Filter</MenuItem>                    
                    {!!filterDataStatus?filterDataStatus.map((item, index) => {
                        return (
                            <MenuItem 
                                key={index}
                                value={item}
                            >{item}</MenuItem>
                        )
                    }):null}
                    
                </Select>
            </FormControl> 
            
            <Tooltip title="Clear Filters" aria-label="clear">
                <IconButton 
                    
                    style={{padding:0}}
                    onClick={funcFilterClearAll}
                    color="secondary"
                    >
                        <ClearAllRoundedIcon 
                            fontSize="large"
                            color="action"
                            
                        />               
                </IconButton>
            </Tooltip>
        </Grid>
    );
};

export default React.memo(FilteringComponent);
