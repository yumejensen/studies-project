/**
 * STRING MANIPULATION:
 * --------------------------------------------------------------------------------------------------------------------------
 * 0: INTRO
 * There are many ways to manipulate strings in JavaScript using operators and methods. 
 * Because strings are a primitive datatype, all string manipulation methods will return a new string/ new data 
 * and will not alter the original string.
 * 
 * --------------------------------------------------------------------------------------------------------------------------
 * 1: WITH OPERATORS
 * The concatenate operator + and the concatenate assignment operator += are used to add strings together.
 */
    //concatenate
    let string1 = "Hello";
    let string2 = " World";
    console.log(string1 + string2); // prints "Hello World"
    // concatenate assignment
    let string3 = "Hi my name is ";
    string3 += "Yume"; // adds to string3 and reassigns 
    console.log(string3); // prints "Hi my name is Yume"

/** --------------------------------------------------------------------------------------------------------------------------
 * 2: WITH STRING METHODS
 * There are many built in methods to modify strings such as toUpperCase(), toLowerCase(), concat(), split(),
 * replace(), and replaceAll(). 
 */

    // toUpperCase() - turns letters into uppercase
    let string4 = "alligator";
    console.log(string4.toUpperCase()); // prints 'ALLIGATOR'
    // concat() - adds two strings
    let string5 = "see you later ";
    console.log(string5.concat(string4)); // prints "see you later alligator"
    // split() - splits a string into an array
    console.log(string4.split("")); // prints ["a","l","l","i","g","a","t","o","r"]
    // replaceAll() = replaces something in a string
    console.log(string4.replaceAll('a', 4)); // prints "4llig4tor"