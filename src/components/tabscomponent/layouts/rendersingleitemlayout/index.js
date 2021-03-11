/**
* Description: Check for notes column
* Author: Carlos Blanco
* Date: 10/14/2020
* Ticket: ET-352 
* */

//Basic imports
import React from "react";

//Modal
import {ModalComponent} from '../../../../components'

//Material UI imports
import TableCell from "@material-ui/core/TableCell";
import CloudDownloadIcon from '@material-ui/icons/CloudDownload'
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import fileExtension from 'file-extension';
import {validateUrlExtension} from '../../../modalcomponent/helpers'

///Set render structure for single-item column
export const RenderSingleItem = ({ typeOfTab, getDetailsButton, getNameField, getExtraKeyLast, getExtraKey, getDataKey, checkItem, checkNameField, item, getProposalId}) => {
    let firstName
    let lastName
    let data
    const imageFolder = "photos/"
    const documentFolder = "documents/"
    const extension = fileExtension(item.file)
    const imageURL = "https://ecotrak-documents-production.s3.us-east-2.amazonaws.com/img/uploads/"
    const url = validateUrlExtension(extension, item.file, imageURL, imageFolder, documentFolder)
    if(getNameField===true){
        firstName = getExtraKey!==false?checkItem:item[getDataKey]
        lastName = getExtraKeyLast!==false?checkNameField:item[getDataKey]
        data = firstName+ " " +lastName
    } else if(getDetailsButton===true) {
        data =  <>
                    <ModalComponent data={item} type={typeOfTab} />
                    <Tooltip title="Download">
                        <IconButton className="padding5" aria-label="Download" onClick={() => window.open(url)} >
                            <CloudDownloadIcon color="secondary" />
                        </IconButton>
                    </Tooltip>
                </>
    } else {
        data = getExtraKey!==false?checkItem:item[getDataKey]
    }
    return (
        <TableCell id={getProposalId} component="div" style={{display:`${getDetailsButton?'flex':''}`}}>
                {data}
        </TableCell>
    );
}