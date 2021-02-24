//User information
import {
    PROD,
    _PROD,
    STAGE,
    _STAGE 
} from "../constants"
//export const apiUsers = "http://localhost:8180/admin/Users/getCurrentUser"
//export const apiUsers = "https://stage.ecotrak.com/admin/Users/getCurrentUser"
export const apiUsers = "/admin/Users/getCurrentUser"

//CTA Data
export const apiCTA = STAGE

//Emercency proposals
export const apiEmergencyWO = STAGE

//Opened proposals
export const apiOpenPO = STAGE

//Pending proposals
export const apiPendingPO = STAGE

//Details proposals
export const apiDetailsPO = _STAGE

//Assigned To Me proposals
export const apiAssignedToMePO = STAGE

//Unassigned proposals
export const apiAwaitingURL = STAGE

//History proposals
export const apiHistoryWO = _STAGE

//History proposals
export const apiNotesWO = _STAGE

//Attachments proposals
export const apiAttachmentsPO = _STAGE

//Search
export const apiSearch = STAGE

//Warranty
export const apiWarranty = _STAGE
