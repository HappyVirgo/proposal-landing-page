/**
 * Description: Unassigned WO
 * Author: Carlos Blanco
 * Created: 9/9/2020
 * Ticket: ET-331
 */
//Basic imports
import * as types from '../../constants';
import { apiAwaitingURL } from '../../api';

export const receiveAwaitingInvoices = (data) => {
    return {type: types.RECEIVE_UNASSIGNED_DATA, data: data};
}

export const fetchAwaitingInvoices = async (token, userId) => {
    const awaitingURL = "/landing/awaiting-invoice"
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
        return fetch(apiAwaitingURL+accessUserId+awaitingURL, init)
            .then(response => response.json())
            .then(json => dispatch(receiveAwaitingInvoices(json)));
    }
}
