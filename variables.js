/**
 * VARIABLES:
 * --------------------------------------------------------------------------------------------------------------------------
 * 0: INTRO
 * 
 * Variables are names which point to data in JavaScript. They can also be thought of as "containers" that hold data. 
 * Variables can hold many data types, such as strings, numbers, objects, arrays, and functions. 
 * The variable naming convention in JavaScript is called camelCase, where the first word is lowercase 
 * and each following word has an uppercased first letter.
 * 
 * --------------------------------------------------------------------------------------------------------------------------
 * 1: DECLARATION AND ASSIGNMENT
 * 
 * Variables are declared with the keywords var, let, and const.
 * Simply declaring a variable would be a keyword followed by the chosen name.
 * Assigning a value to a variable uses the assignment operator =.
 * Initialization is when a variable is declared and assigned on the same line.
 * There is also a method of declaring variables called "destructuring syntax" which allows for values from
 * arrays or properties from objects to be unpacked into variables.
 * 
 * --------------------------------------------------------------------------------------------------------------------------
 * 2: VAR, LET, AND CONST
 * 
 * Before the ES6 update to JavaScript in 2015, var was the only variable keyword.
 * In the update, let and const keywords were added. Nowadays, most programmers prefer let and const because 
 * of their specificity in re-assignment and re-declaration. 
 * 
 * Variables declared with var can be re-assigned and re-declared. Allowing for re-declaration can cause many problems
 * Variables declared with let can be re-assigned but not re-declared. 
 * Variables declared with const cannot be re-assigned or re-declared.
 * 
 * --------------------------------------------------------------------------------------------------------------------------
 * 3: HOISTING
 * 
 * Hoisting is a process that happens in the compiling phase of a code before it is executed. The interpreter
 * moves (hoists) variables and functions to the top of their scope. 
 * There are three scopes: global scope, function scope, and block scope.
 * Variables with var can only be global or function scoped. With the ES6 update, let and const are able to be block scoped.
 * 
 * Global scope: values can be accessed by everything in a program
 * Function scope: values can only be accessed within the function
 * Block scope: values can only be accessed within a code block { }
 * 
 * Important notes:
 * Variable declarations (not definitions) are hoisted to the top of their scope.
 * Function declarations and definitions are hoisted to the top of their scope.
 * Function expressions are NOT hoisted.
 */


// 1. DECLARATION AND ASSIGNMENT //

var myName; // declaration
myName = "Yume"; // assignment
let myAge = 25; // initialization
const addTen = (num) => num + 10; // initialization

const [a, b, c] = [1, 2, 3]; // destructuring
// const a = 1, b = 2, c = 3
const {d, e, f} = obj; // destructuring
// const d = obj.d, e = obj.e, f = obj.f


// 2. VAR LET AND CONST //

var myName = "Yume";
var myName = "Suzu"; //myName is re-declared
console.log(myName); // prints "Suzu"

let myPet = "Maruko"; 
//let myPet = "Tama"; // Uncaught SyntaxError: Identifier 'myPet' has already been declared

const myHomeTown = "New Orleans";
//myHomeTown = "New York"; // Uncaught TypeError: Assignment to constant variable.
//const myHomeTown = "Tokyo"; // Uncaught SyntaxError: Identifier 'myHomeTown' has already been declared


// 3. HOISTING //

printString(); // prints "this is function scoped"
// this works because the function is hoisted above the function call

function printString() {
  let functionVar = "this is function scoped";
  console.log(functionVar)
};