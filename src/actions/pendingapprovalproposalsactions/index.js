/**
 * Description: Create CTA Components
 * Author: Carlos Blanco
 * Created: 9/4/2020
 * Ticket: ET-242
 */
//Basic imports
import * as types from '../../constants';
import { apiPendingPO } from '../../api';


export const receivePendingPOData = (data) => {
    return {type: types.RECEIVE_PENDING_PO_DATA, data: data};
}

export const fetchPendingPOData = async (token, userId) => {
    const pendingURL = "/landing/pending"
    const accessFetchToken = (tk) => {
        return tk.data
    }
    const accessFetchUserId = (id) => {
        return id
    }    
    let accessToken = await accessFetchToken(token)
    let accessUserId = await accessFetchUserId(userId)
    let init = { 
        headers: {
            Authorization: 'Bearer ' + accessToken,
            'Content-Type': 'application/json',
        } 
    }  
    return dispatch => {
        return fetch(apiPendingPO+accessUserId+pendingURL, init)
            .then(response => response.json())
            .then(json => dispatch(receivePendingPOData(json)));
    }
}
