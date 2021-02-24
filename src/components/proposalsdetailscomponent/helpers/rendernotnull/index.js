//Basic imports
import React from 'react';

//Material UI
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

//Layouts
import {
    DetailsImageLayout,
    MainDetails,
    //MainActions,
    LinkActions,
    ProposalDescription,
    EnhancedDetails,
    BoxedDetails,
    LocationDetails
} from '../../layouts'

//Validator
import {validator} from "../../../../helpers"    
//Components
import { 
    TabsComponent,
    //ModalComponent
} from '../../..'

export const RenderNotNull = ({
    detailsdata,
    //history,
    attachments,
    notes,
    //warranty,
    //serviceProviders
    }) => {        
    //In null case
    const nullVal = null;    
    //Image Section
    let image
    //Store data to display in new array
    let assetModel
    let assetSerial
    let manufacturer
    let warrantyLabel
    let proposalId
    let proposalTitle
    let proposalDate
    let submittedBy
    let workOrder
    let assetName
    let assetType
    let assetId
    let requestedBy
    let problemType
    let proposalDescription
    let proposalStatus
    let serviceProviderProposalId
    let category
    let ageOfWorkOrder
    let completionTime
    let approvalHistory
    let description
    
    let invoiceId
    let incurredCosts 
    let labor
    let material
    let freight
    let tax
    let other
    let total

    let locationDetailsStore
    let location
    let address
    let phoneNumber    
    
    //Check PM
    let ifPM
    let isAvailable

    if(detailsdata!==undefined){
        //If is a PM
        if(detailsdata.data.response===undefined) {
            isAvailable = true
        } else {
            if(detailsdata.data.response.asset!==nullVal) {
                ifPM = false
            } else {
                ifPM = true
            }
            //Image Section
            if(detailsdata.data.response.asset!==nullVal) {
                let pre_image = detailsdata.data.response.asset.assetImages
                image = pre_image[0]!==undefined?pre_image[0]['fileName']:nullVal;
            }
            manufacturer = validator(detailsdata.data.response.asset)!==""?(validator(detailsdata.data.response.asset.manufacturer)?validator(detailsdata.data.response.asset.manufacturer.name):""):""
            warrantyLabel = validator(detailsdata.data.response.asset)!==""?validator(detailsdata.data.response.asset.warranties):""    
            assetModel = validator(detailsdata.data.response.asset)!==""?validator(detailsdata.data.response.asset.modelNumber):""  
            assetSerial = validator(detailsdata.data.response.asset)!==""?validator(detailsdata.data.response.asset.serialNumber):""  
            proposalId = validator(detailsdata.data.response.id)
            description = validator(detailsdata.data.response.description)
            assetName = validator(detailsdata.data.response.asset)!==""?validator(detailsdata.data.response.asset.name):""
            assetType = validator(detailsdata.data.response.asset)!==""?(validator(detailsdata.data.response.asset.assetType)?validator(detailsdata.data.response.asset.assetType.description):""):""
            assetId = validator(detailsdata.data.response.asset)!==""?(validator(detailsdata.data.response.asset.id)?validator(detailsdata.data.response.asset.id):""):""           
            invoiceId = validator(detailsdata.data.response.invoiceId)!==""?validator(detailsdata.data.response.invoiceId):""
            proposalTitle = validator(detailsdata.data.response.title)
            proposalDate = validator(detailsdata.data.response.dateCreated)
            submittedBy = validator(detailsdata.data.response.serviceProvider)!==""?validator(detailsdata.data.response.serviceProvider.email):""
            workOrder = validator(detailsdata.data.response.workOrder)!==""?validator(detailsdata.data.response.workOrder.id):""  
            requestedBy = validator(detailsdata.data.response.workOrder)!==""?validator(detailsdata.data.response.workOrder.requestedBy):"" 
            problemType = validator(detailsdata.data.response.problemType)!==""?validator(detailsdata.data.response.problemType.description):"" 
            proposalStatus = validator(detailsdata.data.response.status)!==""?validator(detailsdata.data.response.status.description):"" 
            serviceProviderProposalId = validator(detailsdata.data.response.serviceProvider)!==""?(validator(detailsdata.data.response.serviceProvider.userProfile)?validator(detailsdata.data.response.serviceProvider.userProfile.companyName):""):""
            category = validator(detailsdata.data.response.categoryType)!==""?validator(detailsdata.data.response.categoryType.name):"" 
            ageOfWorkOrder = validator(detailsdata.data.response.workOrder)!==""?validator(detailsdata.data.response.workOrder.age):"" 
            completionTime = validator(detailsdata.data.response.completionTime)
            approvalHistory = validator(detailsdata.data.response.approvalHistory)   
            
            incurredCosts = validator(detailsdata.data.response.incurredCost)
            labor = validator(detailsdata.data.response.labor)
            material = validator(detailsdata.data.response.material)
            freight = validator(detailsdata.data.response.freight)
            tax = validator(detailsdata.data.response.tax)
            other = validator(detailsdata.data.response.other)
            total = validator(detailsdata.data.response.total)

            locationDetailsStore = validator(detailsdata.data.response.location)!==""?validator(detailsdata.data.response.location.storeNumber):""
            location = validator(detailsdata.data.response.location)!==""?validator(detailsdata.data.response.location.name):""
            address = validator(detailsdata.data.response.location)!==""?validator(detailsdata.data.response.location.fullAddress):""
            phoneNumber = validator(detailsdata.data.response.location)!==""?validator(detailsdata.data.response.location.phone1):""

            
    }
} else {
    isAvailable = true
}
    return(
        <div>
            {isAvailable&& <div>Something went wrong!</div>}
            {!isAvailable&& <>
            <Grid container spacing={0}>
                <DetailsImageLayout
                    image={image}
                    ifPM={ifPM}
                />
                <MainDetails 
                    proposalId={proposalId}
                    proposalTitle={proposalTitle}
                    assetName={assetName}
                    assetType={assetType}
                    address={address}
                    location={location}
                    warrantyLabel={warrantyLabel}
                    assetModel={assetModel}
                    assetSerial={assetSerial}   
                    manufacturer={manufacturer}                
                    
                />
                {/*<MainActions
                    serviceProviders={serviceProviders}
                    status={status}
                    
                />*/}
            </Grid>
            <LinkActions            
                workOrderId={workOrder}
                invoiceId={invoiceId}
                proposalId={proposalId}
                assetId={assetId}
                
            />
            <Divider/>
            <Grid container spacing={0}>
                <ProposalDescription
                    id={proposalId}
                    description={description}
                    proposalTitle={proposalTitle}
                />
                <EnhancedDetails 
                    proposalTitle={proposalTitle}                
                    proposalDate={proposalDate}
                    submittedBy={submittedBy}
                    workOrder={workOrder}
                    assetName={assetName}
                    assetType={assetType}
                    requestedBy={requestedBy}
                    problemType={problemType}
                    proposalDescription={proposalDescription}
                    proposalStatus={proposalStatus}
                    serviceProviderProposalId={serviceProviderProposalId}
                    category={category}
                    ageOfWorkOrder={ageOfWorkOrder}
                    completionTime={completionTime}
                    approvalHistory={approvalHistory}                    

                />
                <BoxedDetails 
                    incurredCosts={incurredCosts} 
                    labor={labor}
                    material={material}
                    freight={freight}
                    tax={tax}
                    other={other}
                    total={total}
                />
                <LocationDetails
                    locationDetailsStore={locationDetailsStore}
                    address={address}
                    phoneNumber={phoneNumber}
                />
            </Grid>
            <Divider/>  
            <TabsComponent
                //history={history}
                attachments={attachments}
                notes={notes}
            />
            </>}                      
        </div>            
    )
}
        