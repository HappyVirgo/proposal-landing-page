/**
* Description: Layouts for status column
* Author: Carlos Blanco
* Date: 10/5/2020
* Ticket: ET-344 
* */

//Layouts
import {
    regularColumn,
    //Status
    statusPending,
    statusAccepted,
    statusUnassigned,
    statusEnroute,
    statusPendingSPAcceptance,
    statusNotFixed,
    statusRejected,
    statusComplete,
    statusArrived,
    statusPendingParts,
    statusProposalSubmitted,   
    statusProposalApproved, 
    statusReturnVisitRequired,
    statusSubmittingProposal,
    statusCancelled,
    statusReassign,
    statusProposalRejected,
    //Priority
    priorityL1Emergency,
    priorityL2SameDay,
    priorityL3_24Hours,
    priorityL4_48Hours,
    priorityL5_OneWeek,
    priorityL6_30Days,
    priorityL7_30Days,
    priorityPM,
    priorityRFP
} from '../index'
import { statusPendingClientAp } from '../renderstatuslayout'

export const renderSingleItem = ({getDataKey, checkItem, item}) => {
    let data
    let itemData = item?item[getDataKey]:""
    switch (itemData) {
        //Status
        case "Pending":
            data = statusPending({

                getDataKey,
                checkItem,
                item,
            })
            break;
        case "Pending SP Acceptance":
            data = statusPendingSPAcceptance({

                getDataKey,
                checkItem,
                item,
            })
            break;
        case "Accepted":
            data = statusAccepted({

                getDataKey,
                checkItem,
                item,
            })
            break;
        case "UnAssigned":
            data = statusUnassigned({

                getDataKey,
                checkItem,
                item,
            })
            break;
        case "Not Fixed":
            data = statusNotFixed({

                getDataKey,
                checkItem,
                item,
            })
            break;
        case "Rejected":
            data = statusRejected({

                getDataKey,
                checkItem,
                item,
            })
            break;
        case "Complete":
            data = statusComplete({

                getDataKey,
                checkItem,
                item,
            })
            break;
        case "EnRoute":
            data = statusEnroute({

                getDataKey,
                checkItem,
                item,
            })
            break;
        case "Arrived":
            data = statusArrived({

                getDataKey,
                checkItem,
                item,
            })
            break;
        case "Pending Parts":
            data = statusPendingParts({

                getDataKey,
                checkItem,
                item,
            })
            break;
            case "Pending Client Approval":
                data = statusPendingClientAp({
    
                    getDataKey,
                    checkItem,
                    item,
                })
                break;            
        case "Proposal Submitted":
            data = statusProposalSubmitted({

                getDataKey,
                checkItem,
                item,
            })
            break;
        case "Proposal Approved":
            data = statusProposalApproved({

                getDataKey,
                checkItem,
                item,
            })
            break;
        case "Return Visit Required":
            data = statusReturnVisitRequired({

                getDataKey,
                checkItem,
                item,
            })
            break;
        case "Submitting Proposal":
            data = statusSubmittingProposal({

                getDataKey,
                checkItem,
                item,
            })
            break;
        case "Cancelled":
            data = statusCancelled({

                getDataKey,
                checkItem,
                item,
            })
            break;
        case "ReAssign":
            data = statusReassign({

                getDataKey,
                checkItem,
                item,
            })
            break;
        case "Proposal Rejected":
            data = statusProposalRejected({

                getDataKey,
                checkItem,
                item,
            })
            break;
            //Priority
        case "L1 - Emergency":
            data = priorityL1Emergency({

                getDataKey,
                checkItem,
                item,
            })
            break;
        case "L2 - Same Day":
            data = priorityL2SameDay({

                getDataKey,
                checkItem,
                item,
            })
            break;
        case "L3 - 24 Hours":
            data = priorityL3_24Hours({

                getDataKey,
                checkItem,
                item,
            })
            break;
        case "L4 - 48 Hours":
            data = priorityL4_48Hours({

                getDataKey,
                checkItem,
                item,
            })
            break;
        case "L5 - One Week":
            data = priorityL5_OneWeek({

                getDataKey,
                checkItem,
                item,
            })
            break;
        case "L6 - 30 Days":
            data = priorityL6_30Days({

                getDataKey,
                checkItem,
                item,
            })
            break;
        case "L7 - 30 Days":
            data = priorityL7_30Days({

                getDataKey,
                checkItem,
                item,
            })
            break;            
        case "PM":
            data = priorityPM({

                getDataKey,
                checkItem,
                item,
            })
            break;
        case "RFP - Proposal":
            data = priorityRFP({

                getDataKey,
                checkItem,
                item,
            })
            break;
        default:
            data = regularColumn({

                getDataKey,
                checkItem,
                item,
            })
            break;
    }
    
    return data
}