/**
 * OPERATORS:
 * --------------------------------------------------------------------------------------------------------------------------
 * 0: INTRO
 * Operators act on data (operands). They are classified by what they do and how many operands they require. 
 * They can perform actions such as arithmetic operations, compare two values, or assign data to a variable.
 * Unary operators work with one value, binary with two, and ternary with three.
 * 
 * --------------------------------------------------------------------------------------------------------------------------
 * 1: ASSIGNMENT OPERATORS
 * Assignment operators assign values to variables. All assignment operators contain the equals sign; some can 
 * assign and perform an action at the same time.
 * Assignment operators include: =, +=, -=, *=, /=, %=, ^=
 */
    let a = 5; // a = 5
    let b = 1; // b = 1
    b += a; // b = b + a 
    console.log(b) // prints 6
    a *= 2; // a = a * 2 
    console.log(a) // prints 10

/** --------------------------------------------------------------------------------------------------------------------------
 * 2: ARITHMETIC OPERATORS
 * Arithmetic operators perform mathematical operations, such as addition, subtraction, and multiplication.
 * Arithmetic operators include: +, -, *, /, %, ++, --
 * The ++ and -- operators increment one and decrement one respectively.
 */
    let d = 9;
    let e = 3;
    d / e; // returns 3
    d % e; // returns 0 - the remainder of 9/3 is 0

    let sampleArray = [0, 1, 2, 3, 4, 5];
    for (let i = 0; i < sampleArray.length; i++){ // the ++ operator adds 1 and allows the loop to go through each index
        console.log(i + 5); // adds 5 to each number in sampleArray
    }
    // logs 5, 6, 7, 8, 9, 10 to the console

/** --------------------------------------------------------------------------------------------------------------------------
 * 3: COMPARISON OPERATORS
 * Comparison operators compare two values and evaluate for true or false.
 * Comparison operators include: <, >, <=, >=, ===, !==
 * Note: === is the strictly equals operator, which evaluates whether two values are equal. It is not an assignment.
 */
    let f = 10;
    let g = 10;
    f === g; // returns true, 10 strictly equals 10
    f > g; // returns false, 10 is not greater than 10
    f <= g; // returns true, 10 is less than OR equal to 10

/** --------------------------------------------------------------------------------------------------------------------------
 * 4: LOGICAL OPERATORS
 * Logical operators check the logic between two variables/ values and return true or false.
 * They can check multiple conditions.
 * Logical operators include: &&, ||, !
 */
    let h = 11;
    let i = 7;

    h < 12 && i > 6; // the and operator checks if both conditions are true
    // returns true because both 11 is less than 12 and 7 is greater than 6
    h < 12 || i > 10; // the or operator checks if one condition is true
    // returns true because 11 is less than 12 
    !(h === 11); // the not operator checks the opposite condition
    // returns false because h is strictly equals to 11

/** --------------------------------------------------------------------------------------------------------------------------
 * 5: UNARY OPERATORS
 * Unary operators perform an operation on one operand. 
 * Unary operators include the delete, typeof, !, -, void
 */
    let string1 = "Hello";
    console.log(typeof string1); // prints "string"
    console.log(!true); // prints false, bang operator flips logic
    console.log(!!null); // prints false, double bang forces a value to a boolean
/** --------------------------------------------------------------------------------------------------------------------------
 * 6: TERNARY OPERATORS
 * Ternary operators take in three operands. It evaluates a condition and depending on whether the
 * answer is true or false, returns one of two answers.
 * It is formatted like:
 * (condition) ? trueAnswer : falseAnswer
 */
    let age = 20;
    let answer = (age >= 21) ? "allowed into the bar" : "sorry you can't come in";
    console.log(answer); // prints "sorry you can't come in"