const _ = {
    clamp(number, lower, upper){
        const lowerClampedValue = Math.max(number, lower);
        const clampedValue = Math.min(lowerClampedValue, upper);
        return clampedValue;
    },
    inRange(number, start, end){
        if(end == undefined){
            return end = start, start = 0
        } else if(start > end) {
            return temp = end, start = temp, end = start
        } return number
     },
};
    




// Do not write or modify code below this line.
module.exports = _;