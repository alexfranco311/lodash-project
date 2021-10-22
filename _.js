const _ = {
     clamp(number, lower, upper){
        const lowerClampedValue = Math.max(number, lower);
        const clampedValue = Math.min(lowerClampedValue, upper);
        return clampedValue;
     },
    inRange(number, start, end){
        if(number === end){
            return false
        } else if(end === undefined){
            end = start;
            start = 0;
            return true
        } else if(start > end) {
            temp = end; 
            start = temp;
            end = start;
            return true
        } else if(number < start || number > end){
            return false
        } else if(number >= start || number < end){
            return true
        }
     },
    words(string){
        return string.split(' '); 
     },
    pad(string, length){
        if(string.length > length){
            return string
        }
    } 

};
    
// Do not write or modify code below this line.
module.exports = _;