export const formatId = (value) => {
    
    const str = value.toString()

    if (str.length == 1) {
        return "00" + str
    }

    if (str.length == 2) {
        return "0" + str 
    }
    
    if(str.length == 3){
        return str
    }

}