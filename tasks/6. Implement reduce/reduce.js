const values = [0,1,2,3,4,5];
export function Reduce(array, reducer, initialValue) {
 for(var i = 0; i< array.length; i++){
    var x = reducer(initialValue,array[i]);
    initialValue = x;
 }
 return initialValue
}

export function reducer(acc, curr) { 
  return acc += curr;
}

console.log(Reduce(values,reducer,0));
