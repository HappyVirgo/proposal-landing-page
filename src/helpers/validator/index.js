export const validator = (value) => {
    let result
    if(value===null) {
        result = ""
    }else if(value===undefined){
        result = ""
    } else {
        result = value
    }
    return result
}