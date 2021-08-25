export function getFibonacciUntil(num) {
//if num at 1 return 0,1 in an array 
  if (num===1) 
  {
    return [0, 1];
  } 
  else 
  {
    //else make array equal to previous fib value  
    var s =  getFibonacciUntil(num - 1);
    //push approprate values into array and finally return array 
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
}

 //console.log( getFibonacciUntil(8));
