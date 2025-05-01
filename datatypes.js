/**
 * DATATYPES:
 * --------------------------------------------------------------------------------------------------------------------------
 * 0: INTRO
 * 
 * Data is categorized into 8 different types in JavaScript. Knowing datatypes is crucial because the 
 * JavaScript interpreter will handle each data type differently. 
 * The two big categories are simple/primitive datatypes and complex datatypes.
 * Simple dataypes are atomic, immutable, and copy by value. 
 * Complex datatypes are mutable, an indefinite size, and copy by reference.
 * 
 * --------------------------------------------------------------------------------------------------------------------------
 * 1: SIMPLE/ PRIMITIVE DATA TYPES
 * 
 * // NUMBER //
 * Numbers are numeric data, stored as a decimal (floating point). Numbers can be written with or without decimals.
 * Numbers can also be written with exponential notation.
 */
    let x = 25;
    let y = 25.00;
    let z = 25e5; // 2500000

/** 
 * // BIGINT //
 * BigInt variables are used to store integer values that are too big to be represented by a normal number. 
 * Normal numbers lose accuracy after 15 digits.
 * BigInt are created by declaring with BigInt() or adding n to the end of an integer.
 */
    let g = 100000000000000000n;
    let h = BigInt(100000000000000000);

/** 
 * // STRING //
 * Strings are character data and are written with single or double quotes on the outside. Quotes can exist inside
 * a string if they are different. To avoid this problem altogether, the backslash can be used to escape certain characters.
 * The backslash is also used to escape apostraphes and backslashes.
 */
    let string1 = "He is called 'Sam' not 'Sammy'";
    let string2 = "He is called \"Sam\" not \"Sammy\""; // prints  "He is called 'Sam' not 'Sammy'"

/** 
 * // BOOLEAN // 
 * Booleans are true and false. They are used in conditional testing, such as if statements. 
 * Most of the time, booleans do not need to be declared explicitly because JavaScript converts values 
 * to booleans automatically in a boolean context by evaluating truthy and falsy.
 * All values are inherently truthy except: false, 0, -0, "", null, undefined, NaN
 */
    if ("hello") { // resolves to true
    console.log("this is truthy");
    };
    // "hello" is truthy, therefore the code prints "this is truthy"

/** 
 * // UNDEFINED //
 * Undefined means a variable has been declared but not initialized.
 */
    let newVar;
    console.log(newVar) // prints undefined

/** 
 * // NULL //
 * Null is intentionally assigned to a value to mean it is an empty value.
 */
    let newerVar = null;
    console.log(newerVar); // prints null

/** 
 * // NaN //
 * NaN stands for "not a number" and shows up when a mathematical equation can't return a valid number.
 * NaN can be assigned with = Nan or = Number.NaN 
 */
    console.log(5 * "hello"); // prints NaN

/** --------------------------------------------------------------------------------------------------------------------------
 * 2: COMPLEX DATA TYPES
 * 
 * // ARRAY //
 * Arrays are an ordered, 0-indexed list; they are accessed with bracket notation and a number index. 
 * They can hold a mix of data types, including nested arrays or objects. 
 * Arrays have a length property and related built in methods, such as the push method (adds onto the end of an array).
 */
    const family = ['Yume', 'Saeko', 'Kent', 'Isaac', 'Maruko'];
    console.log(family[0]); // prints 'Yume'
    family.push("Anzu");
    console.log(family); // prints ['Yume', 'Saeko', 'Kent', 'Isaac', 'Maruko', 'Anzu'];

/**
 * // OBJECT //
 * Objects are a collection that stores key value pairs. Unlike arrays, they do not have an order or a length.
 * They are accessed with bracket or dot notation and key names (strings). Some built in object methods include
 * Object.keys,which returns an array of all the object keys. 
 */
    const person = {
        name: "Yume",
        age: 25,
        occupation: ["Server", "Student", "Tutor"],
        hobbies: ['Art', 'Capoeira']
    };

    console.log(person['occupation']) // prints ["Server", "Student", "Tutor"]
    person.height = "5'5"; // adds height: "5'5" to person object 
    Object.keys(person); // returns ['name', 'age', 'occupation', 'hobbies', 'height'];

/**
 * // FUNCTION //
 * Functions are a key building block of JavaScript that essentially take in an input, perform an action, 
 * and produce an output. Function declarations have the function keyword, a function name, 
 * parameters enclosed in parenthesis, and a code block with a set of instructions inside.
 * A function expression is a function assigned to a variable. In an expression, the function can be anonymous (have no name).
 * When a function is called, it executes with a specified input.
 * A function can call itself inside its code block, which is a recursive function.
 */
    // function declaration - add 10 to an input number
    function add10(number) {
        return number + 10;
    };
    add10(5); // function call returns 15
    
    // function expression - square an input number
    const squared = function(number) { // anonymous function
        return number * number;
    };
    squared(2); // function call returns 4

    // recursive function - find the sum of an array of numbers
    const sum = function(array, output = 0) {
        if (array.length === 0){
            return output;
        }
        output += array[0];
        return sum (array.slice(1), output); // function calls itself
    };
    sum([1, 2, 3, 4, 5]); // function call returns 15

/** --------------------------------------------------------------------------------------------------------------------------
 * 3: INFINITY AND -INFINITY
 * Infinity is a variable in the global scope that represents positive infinity. 
 * The value is a numeric value that is greater than any other number.
 * Similarly, -Infinity is a global property that represents negative infinity, which
 * is a value lesser than any other number.
 */
    console.log(Infinity); // Infinity
    console.log(1 / Infinity); // 0
    console.log(Math.log(0)); // -Infinity

/** --------------------------------------------------------------------------------------------------------------------------
 * 4: SIMPLE VS COMPLEX DATA TYPES
 * Simple/ primitive data types, which include: number, string, boolean, NaN, null, and undefined, are atomic and immutable.
 * They do not mutate or aggregate other values, and operations on simple data types return new simple values. Primitive 
 * data is stored in the call stack and takes up a fixed amount of space. 
 * 
 * Complex data types include functions, arrays, and objects. Unlike primitive data types, 
 * they are mutable and therefore are an indefinite size.
 * Complex data is stored in the heap, which is used for dynamic memory allocation. Variables can only directly contain 
 * primitive data, so a variable assigned to an object will be a *reference* to data stored in the heap. 
 */
    // primitive datatypes - a and b assigned to a number
    let a = 1; 
    let b = 1; 
    a === b; // returns true - 1 is equal to 1

    // complex datatypes - aObj and bObj assigned to an empty object
    let aObj = {};
    let bObj = {};
    aObj === bObj; // returns false - aObj and bObj are pointing to different *references* 

/** --------------------------------------------------------------------------------------------------------------------------
 * 5: COPY BY VALUE VS COPY BY REFERENCE
 * As stated earlier, operations on primitive data gets copied and returns new simple values. 
 * This is called copy by value.
 * Operations on complex data, however, change the data directly. Instead of copying and returning new values, 
 * the operations will be performed on a *reference* that points to the object stored in the heap (with the same reference).
 * This is called copy by reference.
 */
    // copy by value
    let j = 5; // j is given the value of 5
    let k = j; // j = 5, so that means k = 5

    j = 6; // j is reassigned to 6
    console.log(k); // k = 5
    // k was assigned to a COPY of j which was equal to 5 at the time 
    // when j is reassigned to 6 it has no effect on k

    //copy by reference
    let foodArray = ['sushi', 'donuts', 'mochi', 'carrots'];
    let foodArray2 = foodArray; // foodArray2 is a variable that points to the same array as foodArray

    foodArray.push('sweet potato pancakes'); 
    console.log(foodArray2); // prints ['sushi', 'donuts', 'mochi', 'carrots', 'sweet potato pancakes']
    // both variables are a reference pointing to the same data in the heap
    // when foodArray gets modified, foodArray2 is also modified

