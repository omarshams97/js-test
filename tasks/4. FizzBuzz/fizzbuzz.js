var values = [];
values.push(0);
export function getFizzBuzzUntil(n) {
  for (var i=1; i <= n; i++)
{   // if multiple of 15 replace index with FizzBuzz
    if (i % 15 === 0)
        values[i] = "FizzBuzz";
  // if multiple of 3 replace index with Fizz
    else if (i % 3 === 0)
       values[i] = "Fizz";
  //// if multiple of 5 replace index with Buzz
    else if (i % 5 === 0)
        values[i] = "Buzz";
  //else input regular number into array 
    else
        values[i] = i;
}
return values;
}
