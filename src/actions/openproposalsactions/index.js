/**
 * Description: Create CTA Components
 * Author: Kiran Nasim
 * Created: 1/6/2021
 */
//Basic imports
import * as types from '../../constants';
import { apiOpenPO } from '../../api';


export const receiveOpenPOData = (data) => {
    return {type: types.RECEIVE_OPEN_PO_DATA, data: data};
}

export const fetchOpenPOData = async (token, userId) => {
    const openURL = "/landing/open"
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
        return fetch(apiOpenPO+accessUserId+openURL, init)
            .then(response => response.json())
            .then(json => dispatch(receiveOpenPOData(json)));
    }
}
