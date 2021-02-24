/**
* Description: Check for multi-item column 
* Author: Carlos Blanco
* Date: 9/8/2020
* Ticket: ET-249 
* */
//Basic imports
import React from "react";
//Date format
import Moment from 'react-moment';
//Currency Format
import CurrencyFormat from 'react-currency-format';

//Set render structure for multi-item column
export const renderMultiItem = ({getExtraKey, checkItem, item, getServiceProvider_index, getProposalAmount, getProposalLocation, getStoreNumber, getCreatedDatetime}) => {    
    let assetWorkOrder = item?item['proposalId']:null
    let __getServiceProvider = item?item[getServiceProvider_index]:null
    let __getProposalAmount = item?item[getProposalAmount]:null
    let __getProposalLocation = item?item[getProposalLocation]:null
    let __getStoreNumber = item?item[getStoreNumber]:null
    let __getCreatedDatetime = item?item[getCreatedDatetime]:null
    let __AssetName = item?item['asset']:null


    return (
        <div id={assetWorkOrder} className={'dtableCols'}>
            {/* <strong>{getExtraKey!==false?(checkItem!==null?checkItem:assetWorkOrder):null}</strong><br/> */}
            {/*<span><small>Location: <b>{__getProposalLocation!==null?__getProposalLocation:" "}</b></small></span><br/>
            <span><small>Store Number: <b>{__getStoreNumber!==null?__getStoreNumber:" "}</b></small></span><br/>*/}
            <span><b>{__AssetName!==null?__AssetName['name']:" "}</b></span><br/>
            <span><small>Service Provider: <b>{__getServiceProvider!==null?__getServiceProvider:" "}</b></small></span><br/>
            <span><small>Amount: <b><CurrencyFormat value={__getProposalAmount!==null?__getProposalAmount:" "} displayType={'text'} thousandSeparator={true} prefix={'$'} /></b></small></span><br/>            
            <span><small>Proposal Date: <b>{__getCreatedDatetime!==null?<Moment format="MMMM D, YYYY hh:mm a">{__getCreatedDatetime}</Moment>:" "}</b></small></span><br/>            
            <span><small>Proposal ID: <b>{assetWorkOrder}</b></small></span><br/>
        </div>
    );
}