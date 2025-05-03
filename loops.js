/**
 * LOOPS:
 * --------------------------------------------------------------------------------------------------------------------------
 * 0: INTRO
 * Loops are an easy way to repeat actions a certain number of times. For example, instead of needing to write 5 lines of 
 * code to perform an action 5 times, we can write one loop that repeats itself 5 times. 
 * Although the core purpose is the same, each kind of loop has a different strength or purpose. For example,
 * a for loop can iterate over an array or a string, and a for-in loop can iterate over an object.
 * 
 * --------------------------------------------------------------------------------------------------------------------------
 * 1: WHILE, FOR, AND FOR-IN LOOPS
 * 
 * A while loop has the following syntax:
 *  while (condition) {
 *    statement
 *  }
 * The loop will continue as long as the condition is true and stop executing when the condition becomes false.
 */
    let i = 0; // initialize the start value
    while (i <= 3){ // condition
        console.log(`i is equal to ${i}`);
        i++; // update
    }
    /* 
    "i is equal to 0"
    "i is equal to 1"
    "i is equal to 2"
    "i is equal to 3"
    */

/**
 * A for loop has the following syntax:
 *  for (initialization; condition; update) {
 *     statement
 *  }
 * The loop will initialize a counter, have a condition, and an update expression. Once the condition becomes false, 
 * the loop will end.
 */
    let sampleArray = ['hello', 'this', 'is', 'an', 'array'];

    for (let i = 0; i < sampleArray.length; i++){
        console.log(sampleArray[i])
    }
    /* 
    "hello"
    "this"
    "is"
    "an"
    "array"
    */

/**
 * A for-in loop has the following syntax:
 *  for (variable in object){
 *     statement 
 *  }
 * For in loops are designed to iterate through objects, which do not have numbered indexes like
 * strings and arrays do.
 */
    const sampleObject = {
        name: "Yume",
        age: 25,
        occupation: ["Server", "Student", "Tutor"],
        hobbies: ['Art', 'Capoeira']
    };

    for (let key in sampleObject){
        console.log(key);               
    }
    /* 
    "name"
    "age"
    "occupation"
    "hobbies"
    */

/** --------------------------------------------------------------------------------------------------------------------------
 * 2: HOW TO LOOP WITH A SPECIFIC INCREMENT OR FORWARDS & BACKWARDS
 */

/** --------------------------------------------------------------------------------------------------------------------------
 * 3: LOOPING OVER ARRAYS
 */

/** --------------------------------------------------------------------------------------------------------------------------
 * 4: LOOPING OVER OBJECTS
 */