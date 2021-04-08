const _ ={
  // Mine implementation
  /*clamp(number,lowerBound, upperBound) {
    if(number < lowerBound){
      return lowerBound;
    }else if(number > upperBound){
      return upperBound;
    }else{
      return number;
    }
  }*/

  clamp(number, lowerBound, upperBound){
    let lowerClampedValue = Math.max(number, lowerBound);
    let clampedValue = Math.min(upperBound, lowerClampedValue);
    return clampedValue;
  },

  inRange(number, startRange, endRange){
    if (startRange > endRange){
      let aux = endRange;
      endRange = startRange;
      startRange = aux;
    }

    if(endRange === undefined){
      endRange = startRange;
      startRange = 0;
    }
    
    if(number < startRange){
      return false;
    }else if(number >= endRange){
      return false;
    }else if(number >= startRange && number < endRange){
      return true;
    }
  },

  words(string){
      return string.split(' ');
  },
  
  pad(string, length){

    const stringLength = string.length;
    
    if(length < stringLength){
      return string;
    }
    const padding = (length - stringLength)
    const remainder = padding % 2;
    let leftPadding = 0;
    let rightPadding = 0;
    if (remainder === 0){
      leftPadding = (padding/2);
      rightPadding = leftPadding;
    }else{
      leftPadding = ((padding - 1)/2);
      rightPadding = leftPadding + 1;
    }
    /*console.log(string)
    console.log(padding);
    console.log(remainder);
    console.log(leftPadding);
    console.log(rightPadding);*/
    const resultArray = [];

    for (let i=0; i < leftPadding; i++){
      resultArray.push(' ');
    } 

    resultArray.push(string);

    for (let j=0; j < rightPadding ; j++){
      resultArray.push(' ');
    } 

    return resultArray.join('');
  },
  
  has(object, key){

    if (object.hasOwnProperty(key)){
      if (object[key] != null){
        return true;
      }else
        return false;
      }else{
        return false;
      }
    },

  invert(object){
   /* let invertedObject = {};
    for(let key in object){
      let originalValue = object[key];
      invertedObject = {originalValue: key};
    }
    return invertedObject;
  }*/

  let invertedObject = {};
  for (let key in object){
    let invertedValue = object[key];
    invertedObject = {invertedValue : key}
   
  }

  return invertedObject;

  },

  findKey(object, predicate){
    for(let key in object){
      let value = object[key];
      predicateReturnValue = predicate(value);
      if(predicateReturnValue){
        return key;
      };
    };
    return undefined
  },

  drop(array,numberToDrop){
    if (numberToDrop === undefined){
      numberToDrop = 1;
    }
    let droppedArray = array.slice(numberToDrop)
    return droppedArray;
  },

  dropWhile(array, predicate){
    let index = array.findIndex(predicate);
    let droppedArray = this.drop(array, index);
    return droppedArray;

  }
}
/*
let obj = { 
    'key1': 'value1',
    'key2': 'value2'
};

const startsWithV = string => string.startsWith('v');

console.log(_.invert(obj));
*/
let array = [1,2,0,4];

const indexIsSmallerThanElement = (element, index) => index < element;

console.log(_.dropWhile(array, indexIsSmallerThanElement()));

// Do not write or modify code below this line.
module.exports = _;