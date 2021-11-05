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
        if(length <= string.length){
            return string
        };
        const startPaddingLength = Math.floor((length - string.length) / 2);
        const endPaddingLength = length - string.length - startPaddingLength;
        const paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);

            return paddedString;
    },
    has(object, key){
        if(object[key] === undefined){
            return false
        };

        for(const key in object){
            if(object.hasOwnProperty(key)){
                return true;
            } 
        };
    },
    invert(object){
        let invObject = new Object;
        for(let key in object){
            const originalValue = object[key];
            invObject[originalValue] = key;
        } return invObject;
    },
    findKey(object, predicate){
        for(let key in object){
            let value = object[key];
            let prediacateReturnValue = predicate(value);
            if(prediacateReturnValue){
                return key;
            } else undefined
        }
    }, 
    drop(array, num){
        if(num === undefined){
            num = 1;
        };
        let droppedArray = array.slice(num);
        return droppedArray;
    },
    dropWhile(array, predicate){
        const cb = (element, index) => {
            return !predicate(element, index, array);
        };
        let droppedNumber = array.findIndex(cb);
        let droppedArray = this.drop(array, droppedNumber);
        return droppedArray;
    },
    chunk(array, size){
        if(size === undefined){
            size = 1;
        };
        let arrayChunks = [];
        for(let i = 0; i < array.length; i += size){
            let arrayChunk = array.slice(i, i+size);
            arrayChunks.push(arrayChunk);
        } return arrayChunks
    }
};
    
// Do not write or modify code below this line.
module.exports = _;