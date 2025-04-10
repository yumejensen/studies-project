/**
 * VARIABLES:
 * 
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
 * 
 * var myName; // declaration
 * myName = "Yume"; // assignment
 * let myAge = 25; // initialization
 * const addTen = (num) => num + 10; // initialization
 * 
 * There is also a method of declaring variables called "destructuring syntax" which allows for values from
 * arrays or properties from objects to be unpacked into variables.
 * 
 * const [a, b, c] = [1, 2, 3]; // destructuring
 * // const a = 1, b = 2, c = 3
 * const {a, b, c} = obj; // destructuring
 * // const a = obj.a, b = obj.b, c = obj.c
 * 
 * --------------------------------------------------------------------------------------------------------------------------
 * 2: VAR, LET, AND CONST
 * 
 * Before the ES6 update to JavaScript in 2015, var was the only variable keyword.
 * In the update, let and const keywords were added. Nowadays, most programmers prefer let and const.
 * 
 * Variables declared with var can be re-assigned and re-declared. Allowing for re-declaration can cause many problems.
 * 
 * var myName = "Yume";
 * myName = "Sol"; // myName is re-assigned
 * var myName = "Suzu"; //myName is re-declared
 * console.log(myName); => prints "Suzu"
 * 
 * Variables declared with let can be re-assigned but not re-declared. This means the value of let can change, but every
 * variable name is guaranteed to be unique.
 * 
 * let myAge = 24;
 * myAge = 25; // myAge is re-assigned
 * console.log(myAge); => prints 25
 * 
 * let myPet = "Maruko";
 * let myPet = "Tama"; // Uncaught SyntaxError: Identifier 'myPet' has already been declared
 * 
 * Variables declared with const cannot be re-assigned or re-declared.
 * 
 * const myHomeTown = "New Orleans";
 * myHomeTown = "New York"; // Uncaught TypeError: Assignment to constant variable.
 * const myHomeTown = "Tokyo"; // Uncaught SyntaxError: Identifier 'myHomeTown' has already been declared
 * 
 * --------------------------------------------------------------------------------------------------------------------------
 * 3: HOISTING
 * 
 * 
 */