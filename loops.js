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
    for (let i = sampleArray2.length-1; i >= 0; i--){ // update decrements by 1
        console.log(sampleArray2[i]);
    }
    // 6, 5, 4, 3, 2, 1

    //In this loop, I have an if else statement depending on if number 6 is in the array or not.
    for (let i = 0; i < sampleArray2.length; i++){
        if (sampleArray2[i] === 6){ // conditional
            console.log('This array contains number 6');
        } else { // default
            console.log('This array does not contain number 6');
        }
    }
    // "This array contains number 6"

/** --------------------------------------------------------------------------------------------------------------------------
 * 3: LOOPING OVER ARRAYS
 * There are several loops that can effectively iterate over arrays such as:
 * for loop, for-in loop, for-of loop, while loop, do-while loop
 * 
 * The examples below will simply iterate over the catNames array and print each name to the console.
 */
    let catNames = ['Tama', 'Vikus', 'Abbie', 'Cowboy', 'Nyangi'];

// FOR LOOP //
    // forwards
    for (let i = 0; i < catNames.length; i++){
        console.log(catNames[i]);
    }
    // backwards 
    // initial value is the last element, stop condition is index 0, and the update expression decrements
    for (let i = catNames.length-1; i >= 0; i--){
        console.log(catNames[i]);
    }
// FOR IN LOOP //
    // this loop gives a key to access all elements with - in this example we use i
    // cannot change directions like a for loop 
    for (i in catNames){
        console.log(catNames[i]);
    }
// FOR OF LOOP //
    // this loop is similar to for in, except that we access the element itself not the key
    // also cannot change directions
    for (catName of catNames){
        console.log(catName);
    }
// WHILE LOOP //
    // forwards
    let j = 0;
    while (j < catNames.length) {
        console.log(catNames[j]);
        j++;
    }
    // backwards
    // initialize start at last element, loop ends at 0 index, update decrements
    let k = catNames.length - 1;
    while (k >= 0){
        console.log(catNames[k]);
        k--;
    }
// DO WHILE LOOP //
    // forwards
    let l = 0; //  initialize value
    do {
        console.log(catNames[l]); 
        l++; 
    } while (l < catNames.length);
    // backwards
    // initialize start at the last element, decrement the update expression, and make the stop condition index 0
    let m = catNames.length - 1;
    do {
        console.log(catNames[m]);
        m--;
    } while (m >= 0);

/** --------------------------------------------------------------------------------------------------------------------------
 * 4: LOOPING OVER OBJECTS
 * Objects are not an ordered list like arrays are, which means there are less options for looping.
 * The for-in loop accesses the keys in an object. Bracket notation can be used to access the values.
 * There are also the built in methods Object.keys(), Object.values(), and Object.entries() that return all the object's
 * keys, values, or key value pairs as an array. Using one of these methods first can make iterating easier.
 */
    let catNamesObj = {
        cat1: 'Tama',
        cat2: 'Vikus',
        cat3: 'Abbie',
        cat4: 'Cowboy',
        cat5: 'Nyangi'
    }

// FOR IN LOOP //
    // printing the keys in catNames
    for (let key in catNamesObj){
        console.log(key); // object's keys
    }
    // "cat1", "cat2", "cat3", "cat4", "cat5"

    // printing the values in catNames
    for (let key in catNamesObj){
        console.log(catNamesObj[key]); // object's values
    }
    // 'Tama', 'Vikus', 'Abbie', 'Cowboy', 'Nyangi'

