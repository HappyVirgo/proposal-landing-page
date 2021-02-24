/**
 * Description: Create CTA components
 * Author: Carlos Blanco
 * Created: 8/31/2020
 * Ticket: ET-242
 */

//Basic imports
import { handleActions } from 'redux-actions'
import * as types from '../../constants/';
import initialState from '../initialstate';

const openProposalsDataReducer = handleActions({
    [types.RECEIVE_OPEN_PO_DATA]: (state, action) => {
        return {
            ...state,
            data: action.data
        };    
    }    
}, initialState);

export default openProposalsDataReducer;