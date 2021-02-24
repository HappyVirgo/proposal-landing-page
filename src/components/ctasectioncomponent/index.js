/**
 * Description: Create CTA components
 * Author: Carlos Blanco
 * Created: 9/1/2020
 * Ticket: ET-242
 */

//Basic Imports
import React from 'react';
//import PropTypes from 'prop-types';

//Material UI
import Grid from '@material-ui/core/Grid';

//Layouts
import {
    FeaturedCTALayout,
    CTASectionLayout
} from './layouts'

//Components
import { 
    AdvancedSearchComponent,
    FilteringComponent
} from '../index'

const CTASectionComponent = ({ctadata, tmpdata, targetdata}) => {
    //Process to retrieve user data 
    let assignedToMeProposals
    let pendingApprovalProposals
    let awaitingInvoice
    let openProposals
    /*
    let emergencyWorkOrders
    let pendingWorkOrders
    let unassignedWorkOrders
    */
    /** Wait until data is already fetched
     ** Then assign values to variables
     * */
    if(ctadata!==undefined) {
        assignedToMeProposals = ctadata.data.response.assignToMe
        pendingApprovalProposals = ctadata.data.response.pendingApproval
        awaitingInvoice = ctadata.data.response.awaitingInvoice
        openProposals = ctadata.data.response.openProposals
    }

    return (
            <Grid container className="cta-component">
                <Grid item xs={12} md={5} lg={6} className="search-section">
                    <h1>Proposals</h1>
                    <AdvancedSearchComponent />
                    {<FilteringComponent
                        tmpdata={tmpdata}
                        targetdata={targetdata}
                    />}
                </Grid>
                <Grid item xs={12} md={7} lg={6} className="cta-section">
                    <FeaturedCTALayout 
                        openProposals={openProposals}
                        // emergencyWorkOrders={emergencyWorkOrders}
                        // openProposals={openProposals}
                    />
                    <CTASectionLayout
                        assignedToMeProposals={assignedToMeProposals}
                        pendingApprovalProposals={pendingApprovalProposals} 
                        awaitingInvoice={awaitingInvoice} 
                    />
                </Grid>
            </Grid>
    );
};

export default React.memo(CTASectionComponent);
