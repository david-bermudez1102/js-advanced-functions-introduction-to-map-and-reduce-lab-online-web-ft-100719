// Your code here
const mapToNegativize = sourceArray => {
  const newArray = []
  for(let i=0; i<sourceArray.length; i++) {
    newArray[i] = sourceArray[i] * -1;
  }
  return newArray;
}

const mapToNoChange = sourceArray => {
  return sourceArray;
};

const mapToDouble = sourceArray => {
   const newArray = [];
   for (let i = 0; i < sourceArray.length; i++) {
     newArray[i] = sourceArray[i] * 2;
   }
   return newArray;
};

const mapToSquare = sourceArray => {
  const newArray = [];
  for (let i = 0; i < sourceArray.length; i++) {
    newArray[i] = sourceArray[i] ** 2;
  }
  return newArray;
};

const reduceToTotal = (sourceArray,startingPoint=0) => {
  let total = startingPoint;
  for (const n of sourceArray) {
    total += n;
  }
  return total;
}

const reduceToAllTrue = sourceArray => {
  for (const n of sourceArray) {
    if(!n){
      return false;
    }
  }
  return true;
};

const reduceToAnyTrue = sourceArray => {
  for (const n of sourceArray) {
    if (n) {
      return true;
    }
  }
  return false;
};