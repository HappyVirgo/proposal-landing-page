let url;
export const validateUrlExtension = (value, imageFile, imageURL, imageFolder, documentFolder) => {
    switch (value) {
        //Images support / including 360-degree images                
        case "jpg":
            url = `${imageURL}${imageFolder}${imageFile}`
        break;
        case "png":
            url = `${imageURL}${imageFolder}${imageFile}`
        break;
        case "jpeg":    
            url = `${imageURL}${imageFolder}${imageFile}`
        break;                                                            
        case "gif":    
            url = `${imageURL}${imageFolder}${imageFile}`
        break; 
        case "bmp":    
            url = `${imageURL}${imageFolder}${imageFile}`
        break; 
        //Documents support
        case "pdf":
            url = `${imageURL}${documentFolder}${imageFile}`
            break;                        
        case "xslx":    
            url = `${imageURL}${documentFolder}${imageFile}`
        break; 
        case "docx":    
            url = `${imageURL}${documentFolder}${imageFile}`
        break; 
        //Audio / Video support
        case "mp4":    
            url = `${imageURL}${documentFolder}${imageFile}`
        break;      
        case "webm":    
            url = `${imageURL}${documentFolder}${imageFile}`
        break;  
        case "mp3":    
            url = `${imageURL}${documentFolder}${imageFile}`
        break;                                                                
        default:
            url = `${imageURL}${documentFolder}${imageFile}`
            break;
    }
    return url;
} 