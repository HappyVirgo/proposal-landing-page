/**
 * Description: Create Attachments Component
 * Author: Carlos Blanco
 * Created: 9/9/2020
 * Ticket: ET-258
 */
//Basic imports
import * as types from '../../constants';
import { apiAttachmentsPO } from '../../api';


export const receiveAttachmentsPOData = (data) => {
    return {type: types.RECEIVE_ATTACHMENTS_PO_DATA, data: data};
}

export const fetchAttachmentsPOData = async (dtlsID, token) => {
    const attachmentsURL = "/document"
    const accessFetchToken = (tk) => {
        return tk.data
    }
    const accessDtlId = (id) => {
        return id
    }    
    let accessToken = await accessFetchToken(token)
    let idDtls = await accessDtlId(dtlsID)

    let init = { 
        headers: {
            Authorization: 'Bearer ' + accessToken,
            'Content-Type': 'application/json',
        } 
    }  
    return dispatch => {
        return fetch(apiAttachmentsPO+idDtls+attachmentsURL, init)
            .then(response => response.json())
            .then(json => dispatch(receiveAttachmentsPOData(json)));
    }
}
