/**
 * Description: Create Data Table Component
 * Author: Carlos Blanco
 * Created: 9/2/2020
 * Ticket: ET-249
 */

//Basic imports
import React, { useState, useEffect } from "react";

//Material UI imports
import { makeStyles } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

//Layouts
import { 
    ReactWindowTable
} from './layouts'

/**
* label: Name displayed on view
* dataKey: Name of the array/object index to select
* extraKey: Second array/object index in is needed (Multi-dimensional array/object)
* numeric: If is a number, float to right
* witdh: Column width
*/
const columns = [
  {
    label: "Image",
    dataKey: "asset",
    extraKey: 'assetImages',
    imgPath: "fileName",    
    numeric: false,
    multi_item: false,
    image: true,
    width: "10%"
  }, 
  {
    label: "Asset Information",
    dataKey: "assetName",
    extraKey: false,
    numeric: false,
    multi_item: true,
    serviceprovider: "spName",
    proposalid: "proposalId",
    proposal_amount: "amount",
    proposal_location: "locationName",
    store_number: "storeNumber",
    created_datetime:"dateCreated"
  },   
  {
    label: "Category",
    dataKey: "category",
    extraKey: false,
    numeric: false,
  },   
  {
    label: "Status",
    dataKey: "status",
    extraKey: false,
    numeric: false,
  }

];

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    position: "relative",
    bixSizing: "unset"
  },
  container: {
    flexGrow: 1,
    minHeight: '80vh'
    // height: '100%',
    // paddingBottom: "10px"
  },
  [`@media (max-width: 1024px)`]: {
    container: {
      height: 600
    }
  },
  paper: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    boxShadow: "none",
    borderRadius: "0px"    
  },
}));


const DataTableComponent = ({tmpdata, loading, firstLoading}) => {
  
  const classes = useStyles();
  //Set state with data
  const [data, setData] = useState([]);
    //Getting the data
  useEffect(() => {
    //Updates data from state
    if(tmpdata!==undefined){
      setData(tmpdata.data!==undefined?tmpdata.data.response:[]) 
    }
  }, [tmpdata]);
  let dataFetched = data!==null?data:[]
  return (
    <div className={`${classes.root} data-table-component`}>
      {!firstLoading && loading && <div className="loading-container">
        <CircularProgress />
      </div>}
      <Grid className={classes.container}>
        <Paper className={classes.paper}>
          <ReactWindowTable data={dataFetched} columns={columns} firstLoading={firstLoading}/>
        </Paper>
      </Grid>
    </div>
  );
};

export default React.memo(DataTableComponent);