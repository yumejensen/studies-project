/**
 * FUNCTIONS:
 * --------------------------------------------------------------------------------------------------------------------------
 * 0: INTRO
 * Functions can be thought of as logic data that executes a block of code according to a list of instructions.
 * Functions generally take in an input, perform an action, and produce an output. However, functions can 
 * be called without an input and do not always produce an output. 
 * 
 * --------------------------------------------------------------------------------------------------------------------------
 * 1: THE TWO PHASES FOR USING FUNCTIONS
 * The two phases for using functions are 1. creating the function and 2. using the function. 
 * Phase 1 and 2 are called:
 * 1. function declaration or function definition
 * 2. function invocation, function execution, calling a function, or applying a function
 */
    // 1. function declaration
    function add10(number) {
        return number + 10; // return the input number + 10
    };
    // 2. function call
    add10(5); // input is 5, returns 15

/** --------------------------------------------------------------------------------------------------------------------------
 * 2: FUNCTION PARAMETERS VS FUNCTION ARGUMENTS
 * Functions can take in any number of inputs, which are called parameters. They are listed in between parenthesis.
 * In an arrow function that has 1 parameter and only needs one line of code, the parameter can be written without parenthesis.
 * When a function is called, the inputs are called arguments. Parameters can be thought of as placeholders while
 * arguments are actual inputs that are being passed into the function.
 */
    function add(num1, num2) { // num1 and num2 are parameters
        return num1 + num2;
    };
    add(2, 5); // 2 and 5 are arguments, returns 7

/** --------------------------------------------------------------------------------------------------------------------------
 * 3: SYNTAX FOR A NAMED FUNCTION
 * Named functions have the function keyword followed by a name for the function, parameters, 
 * and a code block with instructions. 
 * Arrow functions do not require the function keyword but still have a function name, 
 * parameters, and a code block. 
 */
    // function name is multiply
    function multiply(num1, num2) { // num1 and num2 are parameters
        return num1 * num2;
    };
    multiply(7, 5); // 7 and 5 are arguments, returns 35 

    // arrow function - function name is squared 
    // num is the parameter and parenthesis are optional
    squared = num => { return num * num }; 
    squared(2); // 2 is an argument, returns 4

/** --------------------------------------------------------------------------------------------------------------------------
 * 4: ASSIGNING A FUNCTION TO A VARIABLE
 * Function expressions are an anonymous function assigned to a variable.
 * Regular function definitions are hoisted to the top of their scope, which allows for a programmer to 
 * call a function before defining it. Function expressions, on the other hand, are not hoisted. You can only call 
 * a function expression after defining it first.
 */
    // multiply function rewritten as a function expression
    const multiplyNums = (num1, num2) => {return num1 * num2};
    // function call
    multiplyNums(8, 2); // returns 16

/** --------------------------------------------------------------------------------------------------------------------------
 * 5: SPECIFYING INPUTS AND OUTPUTS
 * Function inputs are the parameters (defined inside parenthesis) and function outputs are what the 
 * function returns (defined inside the code block). 
 * In order to return something, the code block must have the return keyword. If using console.log() as the action
 * inside a function, it technically does not *return* anything it just prints something to the console.
 * Functions can be created without inputs, however, and also do not require an output. When a function does not hit a 
 * return statement, it implicitly returns "undefined"
 */

// This function simply prints "Hello" to the console when called and does not require an additional input.
    function printHello(){
        console.log("Hello");
    }
    printHello(); // function call prints "Hello"
// This function does the same thing as printHello except it *returns* a string instead. So I use console.log()
// to see what is returning.
    function returnHello(){
        return "Hello";
    }
    console.log(returnHello()); // prints "Hello"

// This function searches inside an array and only returns if the input matches. If there is no match, there will
// be no output. 
    const listOfNames = ['Sam', 'Cady', 'Austin', 'Carter', 'Mercedes'];

    function findName(inputName){
        for (let i = 0; i < listOfNames.length; i++)
        if (inputName === listOfNames[i]){
            return listOfNames[i];
        }
    }
    // 'Fiona' is not in listOfNames, so the function never hits the return
    console.log(findName('Fiona')); // undefined

/** --------------------------------------------------------------------------------------------------------------------------
 * 6: FUNCTION SCOPE
 * Scope refers to where and what variables and constants are available. The types of scopes are global and local.
 * Local scopes can also be called function scope or block scope.  
 * Functions create their own local scope in the function body. The function scope is able to access variables/ constants
 * in the global scope, but the global scope cannot access variables in the function scope. 
 */
const greeting = 'Good morning';

function printGreeting(inputName){
    const question = "how are you?"
    // function scope can access global scope greeting
    return `${greeting} ${inputName}, ${question}`;
}
printGreeting("Sam"); // returns "Good morning Sam, how are you?"

console.log(question); // ReferenceError: question is not defined 
// question is a function scoped variable that is not available to the global scope

/** --------------------------------------------------------------------------------------------------------------------------
 * 7: CLOSURES
 * A function forms a closure around the environment it was defined. 
 * A closure allows a function to access to variables from its outer function and global variables
 * after the outer function has finished executing. The function essentially "remembers" its environment.
 * This allows closures to retain references to variables that would be lost from executing the 
 * outer function.
 * Closures also make their own local/ private variables that are only available in the function scope.
 */

    function outerFunc() {
        // local variable outerVar
        let outerVar = "This is the outer function";

        // returns innerFunc
        return function innerFunc() {
            //inner func can access outer function variable
            console.log(outerVar);
        }
    }
    const closure = outerFunc(); // varible closure stores the result of invoking outerFunc (which is innerFunc)
                                 // innerFunc logs outerVar - innerFunc can access outerVar after outerFunc has finished
                                 // executing because of closure. It remembers the environment it was created in.
                                 
    closure(); // prints "This is the outer function"
