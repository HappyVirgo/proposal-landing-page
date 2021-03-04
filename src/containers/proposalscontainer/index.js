//Basic imports
import React, { Component } from 'react';
import { connect } from "react-redux";

//Components
import { 
    CTASectionComponent, 
    DataTableComponent, 
    ProposalDetailsComponent,
    Alert, 
} from '../../components'

//Material UI
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

//Actions
import { 
    oauthFetchToken,
    fetchUsersInformation,
    fetchCTAsData, 
    fetchSearchData,
    fetchEmergencyWOData, 
    fetchOpenPOData, 
    fetchPendingPOData, 
    fetchDetailsPOData,
    fetchAssignedToMePOData,
    //fetchAwaitingInvoices,
    //fetchHistoryWOData,
    fetchNotesWOData,
    fetchAttachmentsPOData,
    //fetchWarrantyWOData,
    createNoteWOData,
    //updateWOStatus,
    //fetchServiceProviders,
} from '../../actions';

//Context
import { GlobalContext } from '../../context/globalcontext'


//Declaring global variables
//Token
let token
//User ID
let userId
let userData
//CTA component
let ctadata
//Datatable component
let tmpdata
let tmpDataAmount
//Details component
let detailsdata
//Tab component
//let historydata
let notesdata
let attachmentsdata
let dtlsID
let trgtID
//Search
let searchTerm
let searchBy
//Warranty
let warrantydata
//Filter
let filterByLocationName
let filterByStatus
let filterByCategory

let newNote
let newNoteAvailable
let noteDescription

let workOrderUpdateResponse
let updatedStatus
let reassignToVal
//let serviceProviders

class ProposalsBuilder extends Component {
    constructor() {
        super()
        this.state = {
            targetId: "assignedPO",
            detailsId: "",
            loading: false,
            loadingDetails: false,
            loadingAll: false,
            searchTerm: "", 
            searchBy: 1,
            filterByLocationName: 1,
            filterByStatus: 1,
            filterByCategory: 1,
            newNote: '',
            newNoteAvailable: false,
            noteDescription: '',
            workOrderUpdateResponse: '',
            updatedStatus: '',
            reassignToVal: 1,
            reassignToAvailable: false,
            itsActive: false
        };
    }    
    handleChangeStateSearchTerm = (value) => {
        searchTerm = value     
    }
    handleSearchTerm = (event) => {
        let value = event.target.value
        this.setState({
            searchTerm: value,
        }, this.handleChangeStateSearchTerm(value));
    } 
    handleChangeStateSearchBy = (value) => {
        searchBy = value  
    }    
    handleSearchBy = (event) => {
        let value = event.target.value
        this.setState({
            searchBy: value
        }, this.handleChangeStateSearchBy(value));
    }
    handleChangeStateFilterByLocationName = (value) => {
        filterByLocationName = value       
        console.log(filterByLocationName)
    }    
    handleFilterByLocationName = (event) => {
        let value = event.target.value
        this.setState({
            filterByLocationName: value,
        }, this.handleChangeStateFilterByLocationName(value))
    } 
    handleChangeStateFilterByStatus = (value) => {
        filterByStatus = value 
        console.log(filterByStatus)
    }    
    handleFilterByStatus = (event) => {
        let value = event.target.value
        this.setState({
            filterByStatus: value,
        }, this.handleChangeStateFilterByStatus(value))        
    } 
    handleChangeStateFilterByCategory = (value) => {
        filterByCategory = value       
        console.log(filterByCategory)
    }    
    handleFilterByCategory = (event) => {
        let value = event.target.value
        this.setState({
            filterByCategory: value,
        }, this.handleChangeStateFilterByCategory(value))        
    }

    handleChangeStateFilterClearAll = () => {
        filterByCategory = 1;
        filterByStatus = 1;
        filterByLocationName = 1; 
    }

    handleFilterClearAll = (event) => {
        this.setState({
            filterByLocationName: 1,
            filterByStatus: 1,
            filterByCategory: 1,
        }, this.handleChangeStateFilterClearAll()) 
    }

    handleChangeNoteInput = (value) => {
        noteDescription = value;
        console.log("description", noteDescription)
    }
    handleNoteInput = (event) => {
        let value = event.target.value
        this.setState({
            noteDescription: value
        }, this.handleChangeNoteInput(value))
    }

    handleAddNote = (isAvailable) => {
        newNoteAvailable = isAvailable
        console.log(newNoteAvailable)
    }
    createNoteWOData = (event) => {
        this.setState({
            newNoteAvailable: !newNoteAvailable,
            loadingDetails: true
        }, this.handleAddNote(!newNoteAvailable))
    }

    handleChangeReassignToSelect = (value) => {
        reassignToVal = value
        //console.log('reassignToVal', reassignToVal)
    }
    handleReassignToSelect = (event) => {
        console.log("id", event.target)
        let value = event.target.value
        this.setState({
            reassignToVal: value
        }, this.handleChangeReassignToSelect(value))
    }

    handleUpdateStatus = (target) => {
        if(target === "CANCEL"){
            updatedStatus = "CANCELLED"
        } else {
            updatedStatus = target
        }
        console.log("updatedStatus", updatedStatus)
    }
    updateWOStatus = (event) => {
        let target = event.target.parentElement.getAttribute("status")
        if(target !== 'Reassign' && !!target) {
            target = target.toUpperCase().replace(' ', '_')
            this.setState({
                updatedStatus: target,
                // loadingDetails: true,
            }, this.handleUpdateStatus(target))
        } else {
            target = target.toUpperCase().replace(' ', '_')
            this.setState({
                updatedStatus: target,
                reassignToAvailable: !this.state.reassignToAvailable,
                // loadingDetails: true,
            }, this.handleUpdateStatus(target))
        }
    }
    handleDynamicDetails = (target) => {
        dtlsID = target 
    }           
    dynamicDetails = (event) => {
        event.preventDefault();
        let target = event.target.id
        if(target.length>0){
            if(target !== this.state.detailsId) {
                this.setState({
                    detailsId: target,
                    loadingDetails: true
                }, this.handleDynamicDetails(target))
            }
        }else{
            target = event.target.closest('.datatable-row')
            target = target.id
            if(!!target && target !== this.state.detailsId) {
                this.setState({
                    detailsId: target,
                    loadingDetails: true
                },  this.handleDynamicDetails(target))
            }
        }
    }
    handleDynamicData = (target) => {
        trgtID = target
    }      
    dynamicData = (event) => {
        event.preventDefault();
        let target = event.target.id
        if(target.length>0){
            this.setState({
                targetId: target,
                // loading: true
            }, this.handleDynamicData(target))
        }else{
            target = event.target.closest('div')
            target = target.id
            this.setState({
                targetId: target,
                // loading: true
            }, this.handleDynamicData(target))
        }
        
    }
    sortWOByCreatedDate = (data) => {
        data.sort((a, b) => b.proposalId-a.proposalId);
        data.sort((a, b) => b.dateCreated-a.dateCreated);
    }
    
    async componentDidMount() {
        token = await this.props.oauthFetchToken()
        //userData = await this.props.fetchUsersInformation()
        //userId = userData.userdata.user.user_id    
        //Next line it's to develop in local     
        userId = "2146"
        this.setState({ 
            firstLoading: true
        })
        ctadata = await this.props.fetchCTAsData()
        tmpdata = await this.props.fetchAssignedToMePOData() 
        if(tmpdata.data.response!==undefined) {
            this.sortWOByCreatedDate(tmpdata.data.response);
            tmpDataAmount = tmpdata.data.response.length
            dtlsID = !!tmpdata.data.response?(!!tmpdata.data.response[0]?tmpdata.data.response[0]['proposalId']:''):''
            this.setState({
                detailsId: dtlsID,
            })
        }
        if(!!dtlsID) {
            detailsdata = await this.props.fetchDetailsPOData()
            notesdata = await this.props.fetchNotesWOData()
            //serviceProviders = await this.props.fetchServiceProviders();
            // this.sortOrderNotesByDate()
            //warrantydata = await this.props.fetchWarrantyWOData()
            attachmentsdata = await this.props.fetchAttachmentsPOData()
            //historydata = await this.props.fetchHistoryWOData()
        }    
        this.setState({ firstLoading: false })
        trgtID = trgtID===undefined?this.state.targetId:trgtID
    }

    /**
     * handleId() => loads data changes
     * handleAsyncId() => call async functions since cannot be pass through setState as callback
     * handleChangePrevState() => trigger setState 
     * 
     * Author: Carlos Blanco
     * Date: 11/13/2020
     * Ticket: ET-735
     * */
    handleId = async(id) => {
        dtlsID = id
        detailsdata = await this.props.fetchDetailsPOData(dtlsID, token)
        notesdata = await this.props.fetchNotesWOData(dtlsID, token)
        // this.sortOrderNotesByDate()
        attachmentsdata = await this.props.fetchAttachmentsPOData()
        //historydata = await this.props.fetchHistoryWOData(dtlsID, token)
        warrantydata = await this.props.fetchWarrantyWOData(dtlsID, token)                  
    }

    handleAsyncId = (id) => {
        dtlsID = id
        this.handleId(dtlsID)
    }
    //Change details data
    handleChangePrevState = (id) => {
        dtlsID = id     
        this.setState({
            detailsId: dtlsID,
            loading: true
        }, this.handleAsyncId(id))        
    }
    //move active item to the top of grid
    // array_move = (arr, old_index, new_index) => {
    //     if (new_index >= arr.length) {
    //         let k = new_index - arr.length + 1;
    //         while (k--) {
    //             arr.push(undefined);
    //         }
    //     }
    //     arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    //     return arr;
    // };
    // isCurrent = (element) => element.workOrderId.toString() === this.state.detailsId.toString();

    async componentDidUpdate(prevProps, prevState) {
        const currentState = this.state.targetId
        //const props = this.props
        const searchTermIn = this.state.searchTerm
        const searchByIn = this.state.searchBy  
        const filterByInByLocationName = this.state.filterByLocationName
        const filterByInByStatus = this.state.filterByStatus
        const filterByInByCategory = this.state.filterByCategory
        if(
            prevState.targetId !== this.state.targetId ||
            prevState.detailsId !== this.state.detailsId ||
            prevState.searchTerm !== this.state.searchTerm ||
            prevState.searchBy !== this.state.searchBy ||
            prevState.filterByLocationName !== this.state.filterByLocationName ||
            prevState.filterByStatus !== this.state.filterByStatus ||
            prevState.filterByCategory !== this.state.filterByCategory ||
            prevState.newNoteAvailable !== this.state.newNoteAvailable ||
            prevState.updatedStatus !== this.state.updatedStatus ||
            prevState.reassignToAvailable !== this.state.reassignToAvailable
        ) {
            token = await this.props.oauthFetchToken()
            this.setState({loading: true})
            //Clean input if lenght is 0
            if(searchTermIn.length===0) {
                this.setState({
                    searchTerm: "",
                })
            }  
            const searchData = (searchTerm, searchBy, data) => {
                let searchedResult
                switch(searchBy) {
                    case 2:
                        searchedResult = data.filter((term) => {
                            return term['asset']?term['asset']['name'].toString().toLowerCase().includes(searchTerm.toLowerCase()):false
                        })
                        break;
                    case 3:
                        searchedResult = data.filter((term) => {
                            return term['spName']?term['spName'].toString().toLowerCase().includes(searchTerm.toLowerCase()):false
                        })
                        break;
                    case 4:
                        searchedResult = data.filter((term) => {
                            return term['storeNumber']?term['storeNumber'].toString().toLowerCase().includes(searchTerm.toLowerCase()):false
                        })
                        break;
                    default:
                        searchedResult = dataSearch.filter(term => term['proposalId'].toString().includes(searchTerm))
                        break;
                }
                return searchedResult
            }
            const filterData = ({dataSearch, filterByInByLocationName=[], filterByInByStatus=[], filterByInByCategory=[]}) => {
                if(filterByInByLocationName.length>0) {
                    dataSearch = dataSearch.filter(term => {
                        let notNull = term['status']!==null?term['status']:""
                        console.log("notNull", notNull)
                        return notNull.toLowerCase().includes(filterByInByLocationName.toLowerCase())
                    })
                }
                if(filterByInByStatus.length>0) {
                    console.log(dataSearch)                    
                    dataSearch = dataSearch.filter(term => {
                        let notNull = term['asset']!==null?(term['asset']['assetType']?term['asset']['assetType']['description']:""):""
                        return notNull.toLowerCase().includes(filterByInByStatus.toLowerCase())
                    })
                }
                if(filterByInByCategory.length>0) {
                    dataSearch = dataSearch.filter(term => {
                        let notNull = term['category']!==null?term['category']:""
                        return notNull.toLowerCase().includes(filterByInByCategory.toLowerCase())
                    })                         
                }
                return dataSearch;
            }

            
            let tmp
            let dataSearch
            let dataSearchTemp
            //Set/Search/Filter data for DataTable Component
            if(prevState.detailsId === this.state.detailsId) {
                switch (currentState) {
                    /**
                     * All "term" arrays elements should be modified in order
                     * to work with the new APIs
                     */
                    //Each case should be the CTA id                  
                    case "assignedPO":
                        tmp = await this.props.fetchAssignedToMePOData()
                        dataSearch = tmp.data?tmp.data.response:[] 
                        if(searchTermIn.length>3) {
                            if(searchByIn<5) {
                                dataSearch = searchData(searchTerm, searchBy, dataSearch)
                            } else {
                                let tmpl = await this.props.fetchSearchData();
                                dataSearchTemp = tmpl.data?tmpl.data.response:[]                         
                                dataSearch = dataSearchTemp
                            }          
                        }
                        dataSearch = filterData({
                            dataSearch,
                            filterByInByLocationName,
                            filterByInByStatus,
                            filterByInByCategory
                        });
                        tmpdata = {
                            data: {
                                response: dataSearch
                            }
                        }
                    
                    break;
                    case "pendingPO":
                        tmp = await this.props.fetchPendingPOData()
                        dataSearch = tmp.data?tmp.data.response:[] 
                        if(searchTermIn.length>3) {
                            if(searchByIn<5) {
                                dataSearch = searchData(searchTerm, searchBy, dataSearch)
                            } else {
                                let tmpl = await this.props.fetchSearchData();
                                dataSearchTemp = tmpl.data?tmpl.data.response:[]                         
                                dataSearch = dataSearchTemp
                            }          
                        }
                        dataSearch = filterData({
                            dataSearch,
                            filterByInByLocationName,
                            filterByInByStatus,
                            filterByInByCategory
                        });
                        tmpdata = {
                            data: {
                                response: dataSearch
                            }
                        }
                    
                    break;                                                      
                    case "awaitingInvoice":
                        tmp = await this.props.fetchAwaitingInvoices()
                        dataSearch = tmp.data?tmp.data.response:[] 
                        if(searchTermIn.length>3) {
                            if(searchByIn<5) {
                                dataSearch = searchData(searchTerm, searchBy, dataSearch)
                            } else {
                                let tmpl = await this.props.fetchSearchData();
                                dataSearchTemp = tmpl.data?tmpl.data.response:[]                         
                                dataSearch = dataSearchTemp
                            }          
                        }
                        dataSearch = filterData({
                            dataSearch,
                            filterByInByLocationName,
                            filterByInByStatus,
                            filterByInByCategory
                        });
                        tmpdata = {
                            data: {
                                response: dataSearch
                            }
                        }
                        
                    break;                    
                    case "openPO":
                        tmp = await this.props.fetchOpenPOData()
                        dataSearch = tmp.data?tmp.data.response:[] 
                        if(searchTermIn.length>3) {
                            if(searchByIn<5) {
                                dataSearch = searchData(searchTerm, searchBy, dataSearch)
                            } else {
                                let tmpl = await this.props.fetchSearchData();
                                dataSearchTemp = tmpl.data?tmpl.data.response:[]                         
                                dataSearch = dataSearchTemp
                            }          
                        }
                        dataSearch = filterData({
                            dataSearch,
                            filterByInByLocationName,
                            filterByInByStatus,
                            filterByInByCategory
                        });
                        tmpdata = {
                            data: {
                                response: dataSearch
                            }
                        }
                        
                    break;                    
                    default:
                        console.log("DEFAULT")
                        tmpdata = await this.props.fetchAssignedToMePOData()
                        break;
                }
            }
        
            const handleId = async(dtlsID) => {
                if(this.state.firstLoading === false && !!dtlsID) {
                    detailsdata = await this.props.fetchDetailsPOData(dtlsID, token)
                    notesdata = await this.props.fetchNotesWOData(dtlsID, token)
                    //serviceProviders = await this.props.fetchServiceProviders(dtlsID, token);
                    // this.sortOrderNotesByDate()
                    attachmentsdata = await this.props.fetchAttachmentsPOData(dtlsID, token)
                    //historydata = await this.props.fetchHistoryWOData(dtlsID, token)
                    //warrantydata = await this.props.fetchWarrantyWOData(dtlsID, token)
                }
                this.setState({loadingDetails: false})
            }
            //Change details data
            const handleChangePrevState = (dtlsID) => {
                const id = dtlsID
                handleId(id)
            }

            // let currentIndex =  tmpdata.data.response.findIndex(this.isCurrent);
            // if(currentIndex === -1) currentIndex = 0
            // this.array_move(tmpdata.data.response, currentIndex, 0)
            this.sortWOByCreatedDate(tmpdata.data.response) 

            const prevSteDtls = prevState.detailsId
            const currentSteDtls = this.state.detailsId
            const tmpDtls = tmpdata.data!==undefined?
                                (tmpdata.data.response!==null?
                                    (tmpdata.data.response[0]!==undefined?
                                        tmpdata.data.response[0]['proposalId']:
                                        dtlsID):dtlsID):
                                        dtlsID
            tmpDataAmount = tmpdata.data.response!==undefined?tmpdata.data.response.length:0;
            //Choose if details preview it's based on the first response element or the selected by the user when clicks the row
            if( prevSteDtls.toString() !== currentSteDtls.toString() ) {
                this.setState({
                    detailsId: dtlsID,
                    loadingDetails: true
                }, handleChangePrevState(dtlsID)) 
            } else {
                dtlsID = tmpDtls
                this.setState({
                    detailsId: dtlsID,
                }, handleChangePrevState(dtlsID))    
            }
            
            const prevNoteStatus = prevState.newNoteAvailable
            const currentNoteStatus = this.state.newNoteAvailable
            if( prevNoteStatus !== currentNoteStatus) {
                newNote = await this.props.createNoteWOData(noteDescription, dtlsID, token, userId)
                this.setState({
                    newNote: newNote.data,
                    loadingDetails: true
                }, handleChangePrevState(dtlsID))
            }

            const prevUpdatedStatus = prevState.updatedStatus
            const currentUpdatedStatus = this.state.updatedStatus
            if( prevUpdatedStatus !== currentUpdatedStatus) {
                console.log("USERID", userId)
                workOrderUpdateResponse = await this.props.updateWOStatus(dtlsID, token, updatedStatus, reassignToVal, userId)
                if(workOrderUpdateResponse) {
                    this.setState({
                        workOrderUpdateResponse: workOrderUpdateResponse,
                        loadingDetails: true
                    }, handleChangePrevState(dtlsID))
                } else {
                    alert("Server Error Occured");
                    this.setState({
                        updatedStatus: ''
                    });
                }
            }
            //Normalize state to avoid missing data or state changes
            this.setState({
                detailsId: dtlsID,
                targetId: this.state.targetId,
                loading: false
            }, handleChangePrevState(dtlsID))  
        }
    }
    render() {
        
        const globalState = {
            dynamicDetails: this.dynamicDetails,
            dynamicData: this.dynamicData,
            handleSearchTerm: this.handleSearchTerm,
            handleSearchBy: this.handleSearchBy,
            handleFilterByLocationName: this.handleFilterByLocationName,
            handleFilterByStatus: this.handleFilterByStatus,
            handleFilterByCategory: this.handleFilterByCategory,
            handleFilterClearAll: this.handleFilterClearAll,
            createNoteWOData: this.createNoteWOData,
            updateWOStatus: this.updateWOStatus,
            handleNoteInput: this.handleNoteInput,
            handleReassignToSelect: this.handleReassignToSelect,
            reassignToVal: this.state.reassignToVal,
            currentDtlsId: this.state.detailsId,
            noteDescription: this.state.noteDescription,
            filterByStateLocationName: this.state.filterByLocationName,
            filterByStateStatus: this.state.filterByStatus,
            filterByStateCategory: this.state.filterByCategory,                        
            searchByState: this.state.searchBy,
            searchTermState: this.state.searchTerm,
        }
        return (
            <GlobalContext.Provider value={globalState}>
                <div className="work-orders-container">
                    <Alert severity="warning" variant="filled">
                        <Link href="/admin/Proposals" target="_blank" rel="noopener" color="inherit">
                            <i>Missing Something? Go to the Old Version</i>
                        </Link>
                    </Alert>
                    <Grid className="cta-section-component">
                        <CTASectionComponent 
                            ctadata={ctadata}
                            tmpdata={tmpdata}
                            targetdata={trgtID} 
                        />
                    </Grid>            
                    <Grid container className="content-section">
                        <Grid item xs={12} md={7} lg={7}>
                            <DataTableComponent
                                tmpdata={tmpdata}
                                loading={this.state.loading}
                                firstLoading={this.state.firstLoading}
                            />
                        </Grid>        
                        <Grid item xs={12} md={5} lg={5}>
                            <ProposalDetailsComponent
                                tmpDataAmount={tmpDataAmount}
                                loadingDetails={this.state.loadingDetails}
                                detailsdata={detailsdata}
                                //history={historydata} 
                                attachments={attachmentsdata} 
                                notes={notesdata}
                                //serviceProviders={serviceProviders}
                                firstLoading={this.state.firstLoading}
                                warranty={warrantydata}
                            />
                        </Grid>  
                    </Grid>  
                </div>   
            </GlobalContext.Provider>                   
        );
    }
}

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    oauthFetchToken: () => dispatch(oauthFetchToken()),
    fetchCTAsData: () => dispatch(fetchCTAsData(token, userId)),   
    fetchSearchData: () => dispatch(fetchSearchData(searchTerm, searchBy, token, userId)),   
    //fetchWarrantyWOData: () => dispatch(fetchWarrantyWOData(dtlsID, token)),   
    fetchPendingPOData: () => dispatch(fetchPendingPOData(token, userId)),
    fetchEmergencyWOData: () => dispatch(fetchEmergencyWOData(token, userId)),
    fetchOpenPOData: () => dispatch(fetchOpenPOData(token, userId)),
    fetchUsersInformation: () => dispatch(fetchUsersInformation(token)),
    fetchDetailsPOData: () => dispatch(fetchDetailsPOData(dtlsID, token)),
    //updateWOStatus: () => dispatch(updateWOStatus(dtlsID, token, updatedStatus, reassignToVal, userId)),
    //fetchServiceProviders: () => dispatch(fetchServiceProviders(dtlsID, token, userId)),
    fetchAssignedToMePOData: () => dispatch(fetchAssignedToMePOData(token, userId)),
    //fetchAwaitingInvoices: () => dispatch(fetchAwaitingInvoices(token, userId)),
    //fetchHistoryWOData: () => dispatch(fetchHistoryWOData(dtlsID, token)),
    fetchNotesWOData: () => dispatch(fetchNotesWOData(dtlsID, token)),
    createNoteWOData: () => dispatch(createNoteWOData(noteDescription, dtlsID, token, userId)),
    fetchAttachmentsPOData: ()=> dispatch(fetchAttachmentsPOData(dtlsID, token)),
})


const ProposalsContainer = connect(mapStateToProps, mapDispatchToProps)(ProposalsBuilder)

export default ProposalsContainer;