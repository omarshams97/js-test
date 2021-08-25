export function areParenthesesBalanced(inputString) {
  let stack = [];
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    
     for (let i = 0; i < inputString.length; i++) {

        // If character is an opening brace add it to a stack
        if (inputString[i] === '(' || inputString[i] === '{' || inputString[i] === '[' ) {
            stack.push(inputString[i]);
        }
        //  If that character is a closing brace, pop from the stack, which will also reduce the length of the stack each time a closing bracket is encountered.
        else {
            let last = stack.pop();

            //If the popped element from the stack, which is the last opening brace doesn’t match the corresponding closing brace in the map, then return false
            if (inputString[i] !== map[last]) {return false};
        }
    }
    // By the completion of the for loop after checking all the brackets of the inputString, at the end, if the stack is not empty then fail
        if (stack.length !== 0) {return false};

    return true;
}

