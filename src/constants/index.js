/**
 * Description: Develop Cognito oauth scripts
 * Author: Carlos Blanco
 * Created: 8/20/2020
 * Ticket: ET-267
 */

//Login
export const USER_HAS_AUTHENTICATED = 'USER_HAS_AUTHENTICATED';
export const LOGIN_USER_ACTION = 'LOGIN_USER_ACTION';
export const UPDATE_IS_AUTHENTICATING = 'UPDATE_IS_AUTHENTICATING';

//User Information
export const RECEIVE_USER_DATA = 'RECEIVE_USER_DATA';

//CTAs 
export const RECEIVE_CTA_DATA = 'RECEIVE_CTA_DATA';

//Emergency WorkOrders
export const RECEIVE_EMERGENCY_WO_DATA = 'RECEIVE_EMERGENCY_WO_DATA';

//Pending WorkOrders
export const RECEIVE_PENDING_PO_DATA = 'RECEIVE_PENDING_PO_DATA';

//Open WorkOrders
export const RECEIVE_OPEN_PO_DATA = 'RECEIVE_OPEN_PO_DATA';

//Details WorkOrders
export const RECEIVE_DETAILS_PO_DATA = 'RECEIVE_DETAILS_PO_DATA';

//Update Status of WorkOrder
export const UPDATE_WO_STATUS = 'UPDATE_WO_STATUS';

//Service Providers
export const RECEIVE_SERVICE_PROVIDERS = 'RECEIVE_SERVICE_PROVIDERS';

//Assigned To Me WorkOrders
export const RECEIVE_ASSIGNED_TO_ME_PO_DATA = 'RECEIVE_ASSIGNED_TO_ME_PO_DATA';

//Assigned To Me WorkOrders
export const RECEIVE_UNASSIGNED_DATA = 'RECEIVE_UNASSIGNED_DATA';

//History WorkOrders
export const RECEIVE_HISTORY_DATA = 'RECEIVE_HISTORY_DATA';

//Notes WorkOrders
export const RECEIVE_NOTES_DATA = 'RECEIVE_NOTES_DATA';

//Add Note
export const ADD_NOTE = 'ADD_NOTE';

//Attachments WorkOrders
export const RECEIVE_ATTACHMENTS_PO_DATA = 'RECEIVE_ATTACHMENTS_PO_DATA';

//Oauth token
export const RECEIVE_TOKEN = 'RECEIVE_TOKEN';

//Search
export const RECEIVE_SEARCH_DATA = 'RECEIVE_SEARCH_DATA';

//Warranty
export const RECEIVE_WARRANTY_WO_DATA = 'RECEIVE_WARRANTY_WO_DATA';

//Enviroment Variables
export const PROD = "https://api.ecotrak.com/v1/proposals/user/"
export const _PROD = "https://api.ecotrak.com/v1/proposals/"

export const STAGE = "https://api.ecotrak.com/stagev1/proposals/user/"
export const _STAGE = "https://api.ecotrak.com/stagev1/proposals/"