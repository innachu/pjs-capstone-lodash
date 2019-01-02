const _ = {
//_.clamp()
   clamp(number, lower, upper) {
   let lowerClampedValue = Math.max(number, lower);
   let clampedValue = Math.min(lowerClampedValue, upper);
   return clampedValue;
 },
//_.inRange()
   inRange(number, start, end) {
    if(end === undefined) {
       end = start;
       start = 0;
     };
     if(start > end) {
       let temp = end;
       end = start;
       start = temp;
     };
     let isInRange = (start <= number && number < end);
     return isInRange;
   },
//_.words
    words(string) => {
      let words = string.split(' ');
      return words()
    },
//_.pad
    pad(string, length) {
      if(length <= string.length){
        return string
      };
      let startPaddingLength = Math.floor((length - string.length)/2);
      let endPaddingLength = length - string.length - startPaddingLength
      let paddedString = (' '.repeat(startPaddingLength) + string + ' ' + .repeat(endPaddinglength))
      return paddedString
    },
 //_.has()
    has(object, key){
      let hasValue = (object.key != undefined)
      return hasValue
    },
//_.invert()
    invert(object) {
      let invertedObject = {};
      for (let key in object) {
        let originalValue = key.value;
        invertedObject.key = originalValue;
        invertedObject.originalValue = key;
      }
      return invertedObject;
    },
//_.findKey()
    findKey(object, predicate) {
      for(let key in object) {
        let value = key.value;
        let predicateReturnValue = predicate(value);
        if (predicateReturnValue) {
          return key
        }
        return undefined
      };
    },
 //_.drop
    drop(array, n) {
      if (n === undefined) {
        n = 1;
      }
      let droppedArray = array.slice(n);
      return droppedArray
    },
//_.dropWhile
    dropWhile(array, predicate) {
     let dropNumber = array.findIndex((element, index)) => {
       return !(predicate(element, index, array));
     let droppedArray = this.drop(array.dropNumber);
       return droppedArray;
     }
   },
 //._chunk()
    chunk(array, size) {
       if(size === undefined) {
         size = 1
       }
       let arrayChunks = []
       for(let i = 0; i < array.length; i+size){
         let arrayChunk = array.slice(array[i], size)
         arrayChunks.push(arrayChunk)
       }
       return arrayChunk
     }
};





// Do not write or modify code below this line.
module.exports = _;
