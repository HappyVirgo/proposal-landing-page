/**
 * Description: Create Filter Component
 * Author: Carlos Blanco
 * Created: 11/06/2020
 * Ticket: ET-246
 */ 
export const filterByLocationName = (data) => {
    if(!data) return null;
    let uniqueList
    //Build new object from data
    const newObj = data.map((item) => {
        let itemFilter = item?item.status:""
        return itemFilter
    })
    //Convert object into array
    uniqueList = Object.values(newObj)    
    //Remove duplicate data
    let result = uniqueList.filter((item,index) => {
        return uniqueList.indexOf(item) === index
    })
    //Remove empty values
    uniqueList = result.filter(item => item);
    uniqueList.sort()
    return uniqueList
}