/**
 * Description: Assigned to me WO
 * Author: Carlos Blanco
 * Created: 9/9/2020
 * Ticket: ET-329
 */
//Basic imports
import * as types from '../../constants';
import { apiAssignedToMePO } from '../../api';


export const receiveAssignedToMeWOData = (data) => {
    return {type: types.RECEIVE_ASSIGNED_TO_ME_PO_DATA, data: data};
}

export const fetchAssignedToMePOData = async (token, userId) => {
    const assignedtomeURL = "/landing/assigned"
    
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
        return fetch(apiAssignedToMePO+accessUserId+assignedtomeURL, init)
            .then(response => response.json())
            .then(json => dispatch(receiveAssignedToMeWOData(json)));
    }
}
