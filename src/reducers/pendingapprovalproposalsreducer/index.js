/**
 * Description: Create CTA components
 * Author: Carlos Blanco
 * Created: 9/4/2020
 * Ticket: ET-242
 */

//Basic imports
import { handleActions } from 'redux-actions'
import * as types from '../../constants';
import initialState from '../initialstate';

let newState = {};
const pendingProposalsReducer = handleActions({
    [types.RECEIVE_PENDING_PO_DATA]: (state, action) => {
        newState.data = action.data;
        return newState;    
    }  
}, initialState);

export default pendingProposalsReducer;