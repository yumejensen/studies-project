/**
 * CONTROL FLOW:
 * --------------------------------------------------------------------------------------------------------------------------
 * 0: INTRO
 * Control flow is the order in which the computer will execute statements in a script. 
 * By default, code is run from the first line until the last line, but control flow methods like 
 * conditionals and loops changes the way code is executed.
 * 
 * --------------------------------------------------------------------------------------------------------------------------
 * 1: IF
 * An if statement contains a specified condition, and inside the if statement is 
 * an action that gets executed once the specified condtion is met. It is written with the keyword if followed by 
 * a condition inside parenthesis and a code block.
 * 
 * In this recursive function called sum, we add the first index of an array to a total (ouput) and then 
 * slice that element off before calling the function again. The if statement at the top is the base case, where 
 * the function ends and returns the sum once the array has been sliced until it's empty.
 */
    const sum = function(array, output = 0) {
    if (array.length === 0){ // IF the array is empty, stop the function and return the sum
        return output;
    }
    output += array[0];
    return sum (array.slice(1), output);
    };

/** --------------------------------------------------------------------------------------------------------------------------
 * 2: ELSE IF
 * 
 */

/** --------------------------------------------------------------------------------------------------------------------------
 * 3: ELSE
 * 
 */

/** --------------------------------------------------------------------------------------------------------------------------
 * 3: SWITCH
 * 
 */