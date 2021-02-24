//Basic imports
import React, { useContext } from "react";
import clsx from "clsx";

//Material UI
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

//Context
import { GlobalContext } from "../../../../context/globalcontext";

//Layouts
import { 
    renderMultiItem,
    renderSingleItem,
    renderImage
} from '../index'

//Constants
// const ROW_SIZE = 140;
//Building rows

export const Row = ({ index, style, data: { columns, items, classes, span } }) => {
    const item = items[index];
    let proposalitemID = item?(item.proposalId!==undefined?item.proposalId:null):null
    let change = useContext(GlobalContext)
    const currentDtlsId = change.currentDtlsId
    change = change.dynamicDetails
    const Body = (
        <>
        {span}
        <TableRow component="div" id={proposalitemID} onClick={change} className={`${classes.row} datatable-row ${proposalitemID.toString() === currentDtlsId.toString()?'selected':''}`} style={style}>
        {columns.map((column, colIndex) => {
            //Check for null items 
            let checkItem
            //Capturing data 
            let getExtraKey = column.extraKey
            let getDataKey = column.dataKey
            let getMultiItem = column.multi_item
            let getImage = column.image
            let getImgPath = column.imgPath
            let getServiceProvider_index = column.serviceprovider
            let getProposalId = column.proposalid
            let getProposalAmount= column.proposal_amount
            let getProposalLocation= column.proposal_location
            let getStoreNumber= column.store_number
            let getCreatedDatetime= column.created_datetime       
            
            //Check if object value are null and avoid broken loops 
            let firstCheck = item?item[getDataKey]:null
            let fullCheck = firstCheck?item[getDataKey][getExtraKey]:null
            checkItem = !item?checkItem=null:fullCheck
            return (
            <TableCell
                key={proposalitemID+"-"+colIndex}
                component="div"
                variant="body"
                align={column.numeric || false ? "right" : "left"}
                className={clsx(
                classes.cell,
                // !column.width && classes.expandingCell
                classes.expandingCell
                )}
                // style={{
                // flexBasis: column.width || false,
                // // height: ROW_SIZE
                // }}
            >
                {
                    (getMultiItem===true)?
                        renderMultiItem({getExtraKey, getDataKey, checkItem, item, getServiceProvider_index, getProposalId, getProposalAmount, getProposalLocation, getStoreNumber, getCreatedDatetime}):
                    ((getImage===true)?
                        renderImage({getImgPath, getExtraKey, getDataKey, checkItem, item, getProposalId}):
                        renderSingleItem({getExtraKey, getDataKey, checkItem, item, getProposalId})
                    )
                }
            </TableCell>
            );
        })}
        </TableRow>
        </>        
    )    
    const BodyEmpty = (
        <div></div>
    )
    return (
        <>
        {item?Body:BodyEmpty}
        </>
    );
};