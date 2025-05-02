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
 * a condition inside parenthesis and then a code block.
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
 * The else if statement is meant to follow an if statement. It is a new condition and a new set of instructions that
 * performs if the preceding if statement resolves to false. An if else if chain can be used to cover 
 * a wide variety of conditions.
 * 
 * In this example, the code will print different greetings depending on what time it is.
 */
    function greeting(time) {
        if (time >= 0 && time < 12){
            console.log("good morning");
        } else if (time >= 12 && time <= 16){
            console.log("good afternoon");
        } else if (time > 16 && time <= 24){
            console.log("good night");
        }
    };
    greeting(5); //prints "good morning"
    greeting(13); // prints "good afternoon"
    greeting(19); // prints "good night"

/** --------------------------------------------------------------------------------------------------------------------------
 * 3: ELSE
 * The else statement is activated after an if statement or an if else if chain. The else statement can be thought of as a 
 * default case translates to something like, "if every other condition is false, do ___"
 * The else statement does not need a specified condition and simply needs the else keyword and a code block.
 * 
 * In this example, I will re-make the greeting function with an else statement at the end. In this function I am 
 * assuming that the input will always be between 0 and 24, so I don't need to specify that last condition.
 */
    function greeting2(time) {
        if (time >= 0 && time < 12){
            console.log("good morning");
        } else if (time >= 12 && time <= 16){
            console.log("good afternoon");
        } else {
            console.log("good night");
        }
    };
    greeting2(5); //prints "good morning"
    greeting2(13); // prints "good afternoon"
    greeting2(19); // prints "good night"

/** --------------------------------------------------------------------------------------------------------------------------
 * 3: SWITCH
 * The switch statement is similar to an if else if chain; it is used to perform certain actions depending on an input.
 * The switch statement might be preferrable to an if else if chain for simplicity and readability.
 * The format is a statement at the beginning, cases (possible inputs and outputs) following, and a default condition. 
 * The default condition activates if no inputs match the cases - similar to an else statement.
 * The break statement must be written to end each switch statement; this prevents the execution from continuing to other cases.
 * 
 * In this example, our cases are numbers 1 - 7 which will correspond to a day of the week. The switch statement will 
 * assign a day of the week (string) to the variable dayOfWeek depending on which case it is.
 */
    let day = 5;
    let dayOfWeek;

    switch (day) {
        case 1:
            dayOfWeek = "Monday";
            break;
        case 2:
            dayOfWeek = "Tuesday";
            break;
        case 3:
            dayOfWeek = "Wednesday";
            break;
        case 4:
            dayOfWeek = "Thursday";
            break;
        case 5:
            dayOfWeek = "Friday";
            break;
        case 6:
            dayOfWeek = "Saturday";
            break;
        case 7:
            dayOfWeek = "Sunday";
            break;
        default:
            dayOfWeek = "Invalid input";
    };

    console.log(dayOfWeek); // prints "Friday"