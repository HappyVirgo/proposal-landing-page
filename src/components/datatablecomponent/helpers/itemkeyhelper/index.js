//Setting index as key to avoid weird behaviours on array mapping
export const itemKey = (index, data) => {
    //console.log(data.items[index].proposalId)
    return data.items[index]?data.items[index].proposalId:" ";
}
