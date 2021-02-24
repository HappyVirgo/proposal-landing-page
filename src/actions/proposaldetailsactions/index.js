/**
 * Description: Create WO Details Component
 * Author: Carlos Blanco
 * Created: 9/8/2020
 * Ticket: ET-253
 */
//Basic imports
import * as types from '../../constants';
import { apiDetailsPO } from '../../api';



export const receiveDetailsPOData = (data) => {
    return {type: types.RECEIVE_DETAILS_PO_DATA, data: data};
}

export const fetchDetailsPOData = async (dtlsID, token) => { 
    const accessFetchToken = (tk) => {
        return tk.data
    }
    const accessDtlId = async (id) => {
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
        return fetch(apiDetailsPO+idDtls, init)
            .then(response => response.json())
            .then(json => dispatch(receiveDetailsPOData(json)));
    }
}

export const changeWOStatus = (data) => {
    return {type: types.UPDATE_WO_STATUS, data: data};
}

export const updateWOStatus = async (dtlsID, token, updatedStatus, reassignToVal, userId) => {
    const updateStatusURL = "/status"
    const accessFetchToken = (tk) => {
        return tk.data
    }
    const accessDtlId = async (id) => {
        return id
    }       
    let accessToken = await accessFetchToken(token)
    let idDtls = await accessDtlId(dtlsID)
    let data
    const accessFetchUserId = (id) => {
        return id
    }     
    let accessUserId = await accessFetchUserId(userId)    
    console.log(accessUserId)
    if(reassignToVal === undefined) {
        data = {
            status: updatedStatus,
            userId: accessUserId
        }
    } else {
        data = {
            status: updatedStatus,
            serviceProvider: reassignToVal
        }
    }
    const requestOptions = {
        method: 'PUT',
        headers: {
            Authorization: 'Bearer ' + accessToken,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    };
    return dispatch => {
        return fetch(apiDetailsPO+idDtls+updateStatusURL, requestOptions)
            .then(response => {console.log(response);response.json()})
            .then(json => dispatch(changeWOStatus(json)))
            .catch(error => console.log(error))
    }
}

export const receiveServiceProviders = (data) => {
    return {type: types.RECEIVE_SERVICE_PROVIDERS, data: data};
}

export const fetchServiceProviders = async (dtlsID, token, userId) => {
    const serviceProviderURL = '/reassign/providers'
    const accessFetchToken = (tk) => {
        return tk.data
    }
    const accessDtlId = async (id) => {
        return id
    }       
    let accessToken = await accessFetchToken(token)
    let idDtls = await accessDtlId(dtlsID)
    const accessFetchUserId = (id) => {
        return id
    }     
    let accessUserId = await accessFetchUserId(userId)      
    let init = { 
        headers: {
            Authorization: 'Bearer ' + accessToken,
            'Content-Type': 'application/json',
        } 
    }  
    return dispatch => {
        return fetch(apiDetailsPO+idDtls+serviceProviderURL+"?userId="+accessUserId, init)
            .then(response => response.json())
            .then(json => dispatch(receiveServiceProviders(json)))
            .catch(error => console.log("Fetch Service Provider Error"));
    }
}