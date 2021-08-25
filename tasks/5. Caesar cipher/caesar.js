var MAX = 26;
export function encryptCaesar(inputString, key) {
 // Reduce x because rotation of
    // length 26 is unnecessary
    key = key % MAX;
  //going through input string and decrementing letters by key
  for(var i = 0; i < inputString.length; i++)
    {
       var pos = (inputString[i].charCodeAt(0) - 'a'.charCodeAt(0) - key);
             
            if (pos < 0)
            {
                pos += MAX;
            }
             
            inputString[i] = String.fromCharCode(pos + 'a'.charCodeAt(0));
    }
  return inputString.join('');
}
