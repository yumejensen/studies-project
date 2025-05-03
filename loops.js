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
 * 2: HOW TO LOOP WITH A SPECIFIC INCREMENT OR FORWARDS & BACKWARDS, ETC.
 * A loop does not need to iterate through every single item in an array, object, string, etc. rather,
 * it can simply search and find one specific element or increment by 2,3,4, etc.
 */
let sampleArray2 = [1, 2, 3, 4, 5, 6];

// In this loop, the counter starts at the 1 index and the update expression goes up by 2. 
for (let i = 1; i < sampleArray2.length; i += 2){ // update increments by 2
    console.log(sampleArray2[i]);
}
// 2, 4, 6

// In this loop, the loop iterates through all of the numbers but checks if the number is even before logging it.
for (let i = 0; i < sampleArray2.length; i++){ // update increments by 1
    if (sampleArray2[i] % 2 === 0){ // conditional
        console.log(sampleArray2[i]);
    }
}
// 2, 4, 6

//In this loop, the counter starts at the last index and the update decrements to loop through the array backwards.
for (let i = sampleArray2.length; i >= 0; i--){ // update decrements by 1
    console.log(sampleArray2[i]);
}
// 6, 5, 4, 3, 2, 1

//In this loop, I have an if else statement depending on if number 6 is in the array or not.
for (let i = 0; i < sampleArray2.length; i++){
    if (sampleArray2[i] === 6){
        console.log('This array contains number 6');
    } else {
        console.log('This array does not contain number 6');
    }
}
// "This array contains number 6"


/** --------------------------------------------------------------------------------------------------------------------------
 * 3: LOOPING OVER ARRAYS
 */

/** --------------------------------------------------------------------------------------------------------------------------
 * 4: LOOPING OVER OBJECTS
 */