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
 * Functions take in an input, perform an action, and produce an output. Function declarations have the function
 * keyword, a function name, parameters enclosed in parenthesis, and a code block with a set of instructions inside.
 */

    function add10(number) {
        return number + 10;
    };

    add10(5); // returns 15;

/** --------------------------------------------------------------------------------------------------------------------------
 * 3: INFINITY AND -INFINITY
 * 
 */


/** --------------------------------------------------------------------------------------------------------------------------
 * 4: SIMPLE VS COMPLEX DATA TYPES
 * 
 */


/** --------------------------------------------------------------------------------------------------------------------------
 * 5: COPY BY VALUE VS COPY BY REFERENCE
 * 
 */

