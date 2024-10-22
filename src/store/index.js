/**
 * Description: Develop Cognito oauth scripts
 * Author: Carlos Blanco
 * Created: 8/20/2020
 * Ticket: ET-267
 */

//Basic imports
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';

//Middlewares
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';

//Reducers
import {
    oauthTokenReducer,
    advancedSearchDataReducer,
    emergencyWorkOrdersReducer,
    userAccountDataReducer,
    ctaSectionDataReducer,
    openProposalsDataReducer,
    pendingProposalsReducer,
    proposalDetailsReducer,
    assignedWorkOrdersReducer,
    unassignedWorkOrdersReducer,
    historyWorkOrdersReducer,
    notesWorkOrderReducer,
    attachmentsWorkOrdersReducer,
    warrantyModalReducer
} from '../reducers';

//Combine reducers
const reducers = combineReducers({
    oauthTokenReducer,
    advancedSearchDataReducer,
    emergencyWorkOrdersReducer,
    userAccountDataReducer,
    ctaSectionDataReducer,
    openProposalsDataReducer,
    pendingProposalsReducer,
    proposalDetailsReducer,
    assignedWorkOrdersReducer,
    unassignedWorkOrdersReducer,
    historyWorkOrdersReducer,
    notesWorkOrderReducer,
    attachmentsWorkOrdersReducer,
    warrantyModalReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(thunk,promiseMiddleware)));
export default store;